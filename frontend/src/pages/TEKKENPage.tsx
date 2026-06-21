import "./TEKKENPage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gameBg from "../assets/game-bg.png";
import tekkenLogo from "../assets/tekken-logo.png";
import alisaImg from "../assets/image/tekken/alisa.png";
import annaImg from "../assets/image/tekken/anna.png";
import asukaImg from "../assets/image/tekken/asuka.png";
import azucenaImg from "../assets/image/tekken/azucena.png";
import fengImg from "../assets/image/tekken/feng.png";
import heihachiImg from "../assets/image/tekken/heihachi.png";
import hwoImg from "../assets/image/tekken/hwo.png";
import jinImg from "../assets/image/tekken/jin.png";
import junImg from "../assets/image/tekken/jun.png";
import kazuyaImg from "../assets/image/tekken/kazuya.png";
import kumaImg from "../assets/image/tekken/kuma.png";
import larsImg from "../assets/image/tekken/lars.png";
import lawImg from "../assets/image/tekken/law.png";
import leeImg from "../assets/image/tekken/lee.png";
import leoImg from "../assets/image/tekken/leo.png";
import leroyImg from "../assets/image/tekken/leroy.png";
import lidiaImg from "../assets/image/tekken/lidia.png";
import liliImg from "../assets/image/tekken/lili.png";
import miaryImg from "../assets/image/tekken/miary.png";
import ninaImg from "../assets/image/tekken/nina.png";
import victorImg from "../assets/image/tekken/victor.png";
import zafinaImg from "../assets/image/tekken/zafina.png";
import reinaImg from "../assets/image/tekken/reina.png";

type Character = {
  id: number;
  name: string;
  fighting_style: string;
  difficulty: string;
};

const characterImages: Record<number, string> = {
  1: alisaImg,
  2: annaImg,
  3: asukaImg,
  4: azucenaImg,
  5: fengImg,
  6: heihachiImg,
  7: hwoImg,
  8: jinImg,
  9: junImg,
  10: kazuyaImg,
  11: kumaImg,
  12: larsImg,
  13: lawImg,
  14: leeImg,
  15: leoImg,
  16: leroyImg,
  17: lidiaImg,
  18: liliImg,
  19: miaryImg,
  20: ninaImg,
  22: victorImg,
  23: zafinaImg,
  21: reinaImg,
};

function TEKKENPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/games/tekken/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((fetchError) => {
        console.error("Tekken character fetch failed:", fetchError);
        setError("Could not load characters. Make sure the backend is running.");
      });
  }, []);

  return (
    <main className="tekken-page" style={{ backgroundImage: `url(${gameBg})` }}>
      <Link to="/" className="back-link">
        ← Back to games
      </Link>

      <section className="tekken-hero">
        <img src={tekkenLogo} alt="Tekken logo" className="game-logo" />

        <p>Browse Tekken characters, move lists, combos, and frame data.</p>
      </section>

      <h2 className="roster-title">Character Roster</h2>

      {error && <p>{error}</p>}

      <section className="character-grid">
        {characters.map((character) => (
          <Link
            key={character.id}
            to={`/games/tekken/characters/${character.id}`}
            className="character-card"
          >
            {characterImages[character.id] && (
              <img
                src={characterImages[character.id]}
                alt={`${character.name}`}
                className="character-card-img"
              />
            )}

            <div className="character-card-info">
              <h3>{character.name}</h3>
              <p>Style: {character.fighting_style}</p>
              <p>Difficulty: {character.difficulty}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default TEKKENPage;