import { Link } from "react-router-dom";
import "./HomePage.css";

import logo from "../assets/Virtuadex.png";
import homeBg from "../assets/home-bg.png";
import vfLogo from "../assets/vf-logo.png";
import tekkenLogo from "../assets/tekken-logo.png";
import doaLogo from "../assets/doa-logo.png";
import soulcaliburLogo from "../assets/soulcalibur-logo.png";

const games = [
  {
    id: "vf5",
    title: "Virtua Fighter 5",
    logo: vfLogo,
    subtitle: "Precise spacing, punishment, throws, and classic 3D fundamentals.",
    status: "Available",
    path: "/games/vf5",
  },
  {
    id: "tekken",
    title: "Tekken",
    logo: tekkenLogo,
    subtitle: "Movement, launchers, wall pressure, and explosive offense.",
    status: "Coming Soon",
    path: "/games/tekken",
  },
  {
    id: "doa",
    title: "Dead or Alive",
    logo: doaLogo,
    subtitle: "Fast strikes, holds, throws, and momentum-based 3D combat.",
    status: "Coming Soon",
    path: "/games/doa",
  },
  {
    id: "soulcalibur",
    title: "SoulCalibur",
    logo: soulcaliburLogo,
    subtitle: "Weapon-based 3D combat, spacing, ring control, and stance play.",
    status: "Coming Soon",
    path: "/games/soulcalibur",
  },
];

const features = [
  {
    title: "Move Lists",
    text: "Browse attacks, inputs, hit levels, damage, startup frames, and detailed notes.",
  },
  {
    title: "Frame Data",
    text: "Compare block advantage, hit advantage, counter-hit values, and punish options.",
  },
  {
    title: "Combos",
    text: "Study combo routes, starters, difficulty, damage, and character-specific notes.",
  },
];

export default function HomePage() {
  return (
    <main
      className="home-page"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <nav className="home-nav">
        <Link to="/" className="home-brand">
          <img src={logo} alt="VirtuaDex logo" />
          <span>VirtuaDex</span>
        </Link>

        <div className="home-nav-links">
          <Link to="/games/vf5">VF5</Link>
          <Link to="/games/tekken">Tekken</Link>
          <Link to="/games/doa">DOA</Link>
          <Link to="/games/soulcalibur">SoulCalibur</Link>
        </div>
      </nav>

      <section className="home-hero">
        <img src={logo} alt="VirtuaDex logo" className="home-logo" />

        <h1 className="home-title">
          Virtua<span>Dex</span>
        </h1>

        <p className="home-description">
          Explore characters, move lists, combos, frame data, input notation,
          and game-specific guides across multiple 3D fighting games.
        </p>
      </section>

      <section className="home-feature-row">
        {features.map((feature) => (
          <article className="home-feature-card" key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <section className="game-section">
        <div className="section-heading">
          <p>Choose a game</p>
          <h2>Game Libraries</h2>
        </div>

        <div className="game-grid">
          {games.map((game) => {
            const isAvailable = game.status === "Available";

            const cardContent = (
              <>
                <div className="game-card-top">
                  <span
                    className={`game-status ${
                      isAvailable ? "available" : "soon"
                    }`}
                  >
                    {game.status}
                  </span>
                </div>

                <div className="game-card-body">
                  <div className="game-logo-wrap">
                    <img
                      src={game.logo}
                      alt={`${game.title} logo`}
                      className="game-logo"
                    />
                  </div>

                  <h2>{game.title}</h2>
                  <p>{game.subtitle}</p>
                </div>
              </>
            );

            if (isAvailable) {
              return (
                <Link to={game.path} className="game-card" key={game.id}>
                  {cardContent}
                </Link>
              );
            }

            return (
              <article className="game-card disabled" key={game.id}>
                {cardContent}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}