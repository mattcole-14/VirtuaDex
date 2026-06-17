import { useEffect, useState } from "react";
import { Link, useMatch, useParams } from "react-router-dom";
import "./CharacterPage.css";
import akiraImg from "../assets/image/vf/akira.png";
import aoiImg from "../assets/image/vf/aoi.png";
import blazeImg from "../assets/image/vf/blaze.png";
import bradImg from "../assets/image/vf/brad.png";
import duralImg from "../assets/image/vf/dural.png";
import eileenImg from "../assets/image/vf/eileen.png";
import gohImg from "../assets/image/vf/goh.png";
import jackyImg from "../assets/image/vf/jacky.png";
import jeanImg from "../assets/image/vf/jean.png";
import jeffryImg from "../assets/image/vf/jeffry.png";
import kageImg from "../assets/image/vf/kage.png";
import leiImg from "../assets/image/vf/lei.png";
import lionImg from "../assets/image/vf/lion.png";
import paiImg from "../assets/image/vf/pai.png";
import sarahImg from "../assets/image/vf/sarah.png";
import shunImg from "../assets/image/vf/shun.png";
import takaImg from "../assets/image/vf/taka.png";
import vanessaImg from "../assets/image/vf/vanessa.png";
import wolfImg from "../assets/image/vf/wolf.png";
import lauImg from "../assets/image/vf/lau.png";
import InputIcons from "../components/InputIcons";
import vf5Bg from "../assets/vfchbg.png";
import doaBg from "../assets/doachbg.png";


const gameBackgrounds: Record<string, string> = {
  vf5: vf5Bg,
  doa: doaBg,
};

const vf5CharacterImages: Record<number, string> = {
  1: akiraImg,
  2: aoiImg,
  3: jeanImg,
  4: eileenImg,
  5: jackyImg,
  6: paiImg,
  7: lauImg,
  8: wolfImg,
  9: jeffryImg,
  10: kageImg,
  11: sarahImg,
  12: shunImg,
  13: lionImg,
  14: leiImg,
  15: vanessaImg,
  16: bradImg,
  17: gohImg,
  18: blazeImg,
  19: takaImg,
  20: duralImg,
};

const vf5CharacterClasses: Record<number, string> = {
  2: "aoi-zoom",
  4: "character-eileen",
  5: "character-jacky",
  7: "character-lau",
  10: "character-kage",
  11: "character-sarah",
  14: "character-lei",
  15: "character-vanessa",
  16: "character-brad",
  17: "character-goh",
  18: "character-blaze",
  20: "character-dural",
};


type Character = {
  id: number;
  name: string;
  fighting_style: string;
  difficulty: string;
};

type Move = {
  id: number;
  character_id: number;
  category: string | null;
  input: string | null;
  name: string;
  hit_level: string | null;
  damage: number | string | null;
  startup_frames: number | null;
  active_frames: number | null;
  on_block: number | string | null;
  on_hit: number | string | null;
  on_counter_hit: number | string | null;
  dodge_direction: string | null;
  notes: string;
};

function CharacterPage() {
  const { characterId } = useParams();
  const match = useMatch("/games/:gameId/characters/:characterId");
  const gameId = match?.params.gameId ?? "vf5";
  const isVf5 = gameId === "vf5";
  const pageBg = gameBackgrounds[gameId] ?? vf5Bg;

  const [character, setCharacter] = useState<Character | null>(null);
  const [moves, setMoves] = useState<Move[]>([]);
  const [moveSearch, setMoveSearch] = useState("");
  const [hitLevelFilter, setHitLevelFilter] = useState("");
  const [activeTab, setActiveTab] = useState("");
  const [moveTabs, setMoveTabs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!characterId) {
      return;
    }

    setError(null);
    setCharacter(null);
    setMoves([]);

    fetch(`http://127.0.0.1:8000/games/${gameId}/characters/${characterId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          return;
        }

        setCharacter(data);
      })
      .catch((fetchError) => {
        console.error("Error fetching character:", fetchError);
        setError("Unable to load character.");
      });

    const movesUrl = `http://127.0.0.1:8000/games/${gameId}/characters/${characterId}/moves`;

    fetch(movesUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setMoves([]);
          return;
        }

        setMoves(data);
      })
      .catch((fetchError) => {
        console.error("Error fetching moves:", fetchError);
        setError("Unable to load moves.");
      });
  }, [characterId, isVf5]);

  useEffect(() => {
    if (!isVf5 || moves.length === 0) {
      return;
    }

    const categories = moves.reduce<string[]>((unique, move) => {
      const category = move.category?.trim() || "Other";
      if (!unique.includes(category)) {
        unique.push(category);
      }
      return unique;
    }, []);

    setMoveTabs(categories);
    if (!categories.includes(activeTab)) {
      setActiveTab(categories[0] ?? "");
    }
  }, [isVf5, moves, activeTab]);

  const filteredMoves = moves.filter((move) => {
    const search = moveSearch.trim().toLowerCase();

    const matchesSearch =
      search === "" ||
      move.name.toLowerCase().includes(search) ||
      String(move.hit_level).toLowerCase().includes(search) ||
      String(move.notes).toLowerCase().includes(search);

    const matchesHitLevel =
      hitLevelFilter === "" ||
      String(move.hit_level)
        .toLowerCase()
        .includes(hitLevelFilter.toLowerCase());

    const matchesCategory =
      !isVf5 ||
      !activeTab ||
      (move.category?.trim() || "Other") === activeTab;

    return matchesSearch && matchesHitLevel && matchesCategory;
  });

  const activeTabLabel = isVf5
    ? activeTab || "Moves"
    : "Moves";

  if (error) {
    return (
      <main
  className="character-page"
  style={{ backgroundImage: `url(${pageBg})` }}
>
        <div className="character-page-inner">
          <Link to={`/games/${gameId}`} className="character-back-link">
            ← Back to {gameId.toUpperCase()} roster
          </Link>
          <div className="error-message">{error}</div>
        </div>
      </main>
    );
  }

  if (!character) {
          return (
        <main
          className="character-page"
          style={{ backgroundImage: `url(${pageBg})` }}
        >
          <div className="character-page-inner">Loading character...</div>
        </main>
      );
  }

  return (
    <main
  className="character-page"
  style={{ backgroundImage: `url(${pageBg})` }}
>
    <div className="character-page-inner">
        <Link to={`/games/${gameId}`} className="character-back-link">
          ← Back to {gameId.toUpperCase()} roster
        </Link>

        <section className="character-hero-layout">
          <div className="character-render-card">
            <div className="character-render-stage">
              {isVf5 && vf5CharacterImages[character.id] ? (
                <img
                  src={vf5CharacterImages[character.id]}
                  alt={character.name}
                  className={`character-render-img ${vf5CharacterClasses[character.id] ?? ""}`}
                />
              ) : null}
            </div>

            <p className="character-render-label">{character.name}</p>
          </div>
        <article className="character-info-card">
          <p className="character-kicker">Character Profile</p>

          <h1>{character.name}</h1>

          <div className="character-meta">
            <span className="character-pill">
              Style: {character.fighting_style}
            </span>

            <span className="character-pill">
              Difficulty: {character.difficulty}
            </span>
          </div>

          <p className="character-description">
            {isVf5 ? (
              <>Browse move data and frame details for {character.name}. More game-specific description content will display as the VF5 roster expands.</>
            ) : (
              <>Browse move data and frame details for {character.name}. More game-specific description content will display when DOA character data is available.</>
            )}
          </p>
        </article>
      </section>

      <section className="move-section">
        {isVf5 && moveTabs.length > 0 ? (
          <div className="move-tabs">
            {moveTabs.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`move-tab ${activeTab === category ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
        ) : null}

        <h2 className="move-heading">{activeTabLabel}</h2>

        <p className="move-subtitle">
          Browse {character.name}&apos;s {activeTabLabel.toLowerCase()} moves.
        </p>

        <div className="move-controls">
          <input
            type="text"
            placeholder="Search moves..."
            value={moveSearch}
            onChange={(event) => setMoveSearch(event.target.value)}
          />

          <select
            value={hitLevelFilter}
            onChange={(event) => setHitLevelFilter(event.target.value)}
          >
            <option value="">All hit levels</option>
            <option value="High">High</option>
            <option value="Middle">Middle</option>
            <option value="Low">Low</option>
            <option value="Special Low">Special Low</option>
            <option value="Throw">Throw</option>
          </select>
        </div>

        <div className="move-table-wrap">
          <table className="move-table">
            <thead>
              <tr>
                <th>Move</th>
                <th>Input</th>
                <th>Level</th>
                <th>Damage</th>
                <th>Startup</th>
                <th>Block</th>
                <th>Hit</th>
                <th>Counter Hit</th>
              </tr>
            </thead>

            <tbody>
              {filteredMoves.length === 0 ? (
                <tr>
                  <td colSpan={8} className="empty-row">
                    No moves found for this tab yet.
                  </td>
                </tr>
              ) : (
                filteredMoves.map((move) => (
                  <tr key={move.id}>
                    <td>{move.name}</td>
                    <td>
                      <InputIcons input={move.input ?? ""} />
                    </td>
                    <td>{move.hit_level ?? "-"}</td>
                    <td>{move.damage ?? "-"}</td>
                    <td>{move.startup_frames ?? "-"}</td>
                    <td>{move.on_block ?? "-"}</td>
                    <td>{move.on_hit ?? "-"}</td>
                    <td>{move.on_counter_hit ?? "-"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </main>
);
}

export default CharacterPage;