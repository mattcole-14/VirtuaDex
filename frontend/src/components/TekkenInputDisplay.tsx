import { tekkenInputIcons } from "../assets/game-inputs/tkinputs/tekkenInputIcons";
import {
  tokenizeTekkenInput,
  normalizeTekkenInput,
} from "../assets/game-inputs/tkinputs/parseTekkenInput";
import "./TekkenInputDisplay.css";

type TekkenInputDisplayProps = {
  input: string;
  mode?: "icons" | "text";
};

export default function TekkenInputDisplay({
  input,
  mode = "icons",
}: TekkenInputDisplayProps) {
  if (!input || input === "-") {
    return <span>-</span>;
  }

  if (mode === "text") {
    return <span className="tekken-input-text">{normalizeTekkenInput(input)}</span>;
  }

  const tokens = tokenizeTekkenInput(input);

  return (
    <span className="tekken-input-icons">
      {tokens.map((token, index) => {
        const cleanToken = token.toLowerCase();
        const icon = tekkenInputIcons[cleanToken];

        if (icon) {
          return (
            <img
              key={`${token}-${index}`}
              src={icon}
              alt={token}
              className="tekken-input-icon"
            />
          );
        }

        if (token === "+") {
          return null;
        }

        return (
          <span key={`${token}-${index}`} className="tekken-input-token">
            {token}
          </span>
        );
      })}
    </span>
  );
}