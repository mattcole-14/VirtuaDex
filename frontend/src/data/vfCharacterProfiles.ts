import vfLogo from "../assets/vf-logo.png"
import vf2Logo from "../assets/vf2.png";
import vf3Logo from "../assets/vf3.png";
import vf4Logo from "../assets/vf4.png";
import vf4EvolutionLogo from "../assets/vf4evo.png";
import vf5Logo from "../assets/vf5-logo.png";
import vf5UltimateLogo from "../assets/vf5ultimate.png";

export type GameAppearance = {
  title: string;
  year?: string;
  logo: string;
};

export type VFCharacterProfile = {
  description: string;
  difficulty: number;
  role: string;
  nationality?: string;
  birthdate?: string;
  heightWeight?: string;
  bloodType?: string;
  debut?: string;
  appearances: GameAppearance[];
};

export const vfCharacterProfiles: Record<number, VFCharacterProfile> = {
  1: {
    description:
      "Akira Yuki is a powerful and highly technical fighter who practices Bajiquan. He specializes in explosive close-range attacks, strong punishment, precise timing, and high-damage combos. His demanding execution makes him difficult to master, but extremely rewarding for experienced players.",

    difficulty: 5,
    role: "Power / Technical",
    nationality: "Japan",
    birthdate: "September 23",
    heightWeight: "180 cm / 79 kg",
    bloodType: "O",
    debut: "Virtua Fighter",

    appearances: [
      {
        title: "Virtua Fighter",
        year: "1993",
        logo: vfLogo,
      },
      {
        title: "Virtua Fighter 2",
        year: "1994",
        logo: vf2Logo,
      },
      {
        title: "Virtua Fighter 3",
        year: "1996",
        logo: vf3Logo,
      },
      {
        title: "Virtua Fighter 4",
        year: "2001",
        logo: vf4Logo,
      },
      {
        title: "Virtua Fighter 4 Evolution",
        year: "2002",
        logo: vf4EvolutionLogo,
      },
      {
        title: "Virtua Fighter 5",
        year: "2006",
        logo: vf5Logo,
      },
      {
        title: "Virtua Fighter 5 Ultimate Showdown",
        year: "2021",
        logo: vf5UltimateLogo,
      },
    ],
  },

  2: {
    description:
      "Aoi Umenokoji is a defensive and technical fighter who practices Aiki-Jujutsu. She uses fluid movement, reversals, throws, and evasive techniques to disrupt her opponent's offense and control the pace of a match.",

    difficulty: 4,
    role: "Defensive / Technical",
    nationality: "Japan",
    birthdate: "May 23",
    heightWeight: "162 cm / 49 kg",
    bloodType: "A",
    debut: "Virtua Fighter 3",

    appearances: [
      {
        title: "Virtua Fighter 3",
        year: "1996",
        logo: vf3Logo,
      },
      {
        title: "Virtua Fighter 4",
        year: "2001",
        logo: vf4Logo,
      },
      {
        title: "Virtua Fighter 4 Evolution",
        year: "2002",
        logo: vf4EvolutionLogo,
      },
      {
        title: "Virtua Fighter 5",
        year: "2006",
        logo: vf5Logo,
      },
      {
        title: "Virtua Fighter 5 Ultimate Showdown",
        year: "2021",
        logo: vf5UltimateLogo,
      },
    ],
  },
};