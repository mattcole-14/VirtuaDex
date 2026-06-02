import "./InputIcons.css";

import pIcon from "../assets/input-icons/p.png";
import kIcon from "../assets/input-icons/k.png";
import gIcon from "../assets/input-icons/g.png";
import plusIcon from "../assets/input-icons/plus.png";

import upIcon from "../assets/input-icons/up.png";
import downIcon from "../assets/input-icons/down.png";
import leftIcon from "../assets/input-icons/left.png";
import rightIcon from "../assets/input-icons/right.png";

import upHoldIcon from "../assets/input-icons/up-hold.png";
import downHoldIcon from "../assets/input-icons/down-hold.png";
import leftHoldIcon from "../assets/input-icons/left-hold.png";
import rightHoldIcon from "../assets/input-icons/right-hold.png";

import downRightIcon from "../assets/input-icons/down-right.png";
import downRightHoldIcon from "../assets/input-icons/down-right-hold.png";
import downLeftIcon from "../assets/input-icons/down-left.png";
import downLeftHoldIcon from "../assets/input-icons/down-left-hold.png";

import upRightIcon from "../assets/input-icons/up-right.png";
import upRightHoldIcon from "../assets/input-icons/up-right-hold.png";
import upLeftIcon from "../assets/input-icons/up-left.png";
import upLeftHoldIcon from "../assets/input-icons/up-left-hold.png";

const inputIconMap: Record<string, string> = {
  "[P]": pIcon,
  "[K]": kIcon,
  "[G]": gIcon,
  "[+]": plusIcon,

  "[8]": upIcon,
  "[2]": downIcon,
  "[4]": leftIcon,
  "[6]": rightIcon,

  "[8_]": upHoldIcon,
  "[2_]": downHoldIcon,
  "[4_]": leftHoldIcon,
  "[6_]": rightHoldIcon,

  "[3]": downRightIcon,
  "[3_]": downRightHoldIcon,
  "[1]": downLeftIcon,
  "[1_]": downLeftHoldIcon,

  "[9]": upRightIcon,
  "[9_]": upRightHoldIcon,
  "[7]": upLeftIcon,
  "[7_]": upLeftHoldIcon,
};

type InputIconsProps = {
  input: string;
};

function InputIcons({ input }: InputIconsProps) {
  const parts = input.split(/(\[[^\]]+\])/g).filter(Boolean);

  return (
    <span className="input-icons">
      {parts.map((part, index) => {
        const icon = inputIconMap[part];

        if (icon) {
          return (
            <img
              key={`${part}-${index}`}
              src={icon}
              alt={part}
              title={part}
              className="input-icon"
            />
          );
        }

        return (
          <span key={`${part}-${index}`} className="input-text">
            {part}
          </span>
        );
      })}
    </span>
  );
}

export default InputIcons;