import vfLogo from "../assets/vf-logo.png";
import vf2Logo from "../assets/vf2.png";
import vf3Logo from "../assets/vf3.png";
import vf3TeamBattleLogo from "../assets/vf3tb.png";
import vf4Logo from "../assets/vf4.png";
import vf4EvolutionLogo from "../assets/vf4evo.png";
import vf5Logo from "../assets/vf5-logo.png";
import vf5RevoLogo from "../assets/vf5revo.png";
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


const originalRosterAppearances: GameAppearance[] = [
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
    title: "Virtua Fighter 3 Team Battle",
    year: "1997",
    logo: vf3TeamBattleLogo,
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
  {
    title: "Virtua Fighter 5 R.E.V.O.",
    year: "2025",
    logo: vf5RevoLogo,
  },
];

const vf2DebutAppearances: GameAppearance[] = [
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
    title: "Virtua Fighter 3 Team Battle",
    year: "1997",
    logo: vf3TeamBattleLogo,
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
  {
    title: "Virtua Fighter 5 R.E.V.O.",
    year: "2025",
    logo: vf5RevoLogo,
  },
];

const vf4DebutAppearances: GameAppearance[] = [
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
  {
    title: "Virtua Fighter 5 R.E.V.O.",
    year: "2025",
    logo: vf5RevoLogo,
  },
];

const vf4EvolutionDebutAppearances: GameAppearance[] = [
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
  {
    title: "Virtua Fighter 5 R.E.V.O.",
    year: "2025",
    logo: vf5RevoLogo,
  },
];

const vf5DebutAppearances: GameAppearance[] = [
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
  {
    title: "Virtua Fighter 5 R.E.V.O.",
    year: "2025",
    logo: vf5RevoLogo,
  },
];

const takaAppearances: GameAppearance[] = [
  {
    title: "Virtua Fighter 3",
    year: "1996",
    logo: vf3Logo,
  },
  {
    title: "Virtua Fighter 3 Team Battle",
    year: "1997",
    logo: vf3TeamBattleLogo,
  },
  {
    title: "Virtua Fighter 5 R / Final Showdown",
    year: "2008",
    logo: vf5Logo,
  },
  {
    title: "Virtua Fighter 5 Ultimate Showdown",
    year: "2021",
    logo: vf5UltimateLogo,
  },
  {
    title: "Virtua Fighter 5 R.E.V.O.",
    year: "2025",
    logo: vf5RevoLogo,
  },
];

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
        title: "Virtua Fighter 3 Team Battle",
        year: "1997",
        logo: vf3TeamBattleLogo,
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
      {
        title: "Virtua Fighter 5 R.E.V.O.",
        year: "2025",
        logo: vf5RevoLogo,
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
        title: "Virtua Fighter 3 Team Battle",
        year: "1997",
        logo: vf3TeamBattleLogo,
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
      {
        title: "Virtua Fighter 5 R.E.V.O.",
        year: "2025",
        logo: vf5RevoLogo,
      },
    ],
  },

  3: {
    description:
          "Jean Kujo is a powerful karate fighter who specializes in charge attacks, strong pressure, and high-damage wall offense. His ability to delay and charge certain moves makes his timing difficult to predict, but mastering him requires precision and strong matchup knowledge.",

        difficulty: 4,
        role: "Power / Charge-Based",
        nationality: "France",
        birthdate: "Unknown",
        heightWeight: "Unknown",
        bloodType: "Unknown",
        debut: "Virtua Fighter 5 R",

        appearances: [
          {
            title: "Virtua Fighter 5",
            year: "VF5 R / Final Showdown",
            logo: vf5Logo,
          },
          {
            title: "Virtua Fighter 5 Ultimate Showdown",
            year: "2021",
            logo: vf5UltimateLogo,
          },
          {
            title: "Virtua Fighter 5 R.E.V.O.",
            year: "2025",
            logo: vf5RevoLogo,
          },
        ],
      },

  4: {
    description:
      "Eileen is an agile Kouken fighter who relies on fast movement, evasive attacks, cancels, and unpredictable pressure.",
    difficulty: 3,
    role: "Agile / Mix-Up",
    nationality: "China",
    debut: "Virtua Fighter 5",
    appearances: [...vf5DebutAppearances],
  },

  5: {
    description:
      "Jacky Bryant is a fast Jeet Kune Do fighter with strong pressure, quick strikes, and accessible fundamentals.",
    difficulty: 2,
    role: "Rushdown / All-Rounder",
    nationality: "United States",
    debut: "Virtua Fighter",
    appearances: [...originalRosterAppearances],
  },

  6: {
    description:
      "Pai Chan is a quick and versatile martial artist who uses fast strings, stance transitions, and defensive options.",
    difficulty: 2,
    role: "Speed / Versatile",
    nationality: "China",
    debut: "Virtua Fighter",
    appearances: [...originalRosterAppearances],
  },

  7: {
    description:
      "Lau Chan is an aggressive Koenken fighter who overwhelms opponents with fast punches and damaging pressure.",
    difficulty: 2,
    role: "Offense / Pressure",
    nationality: "China",
    debut: "Virtua Fighter",
    appearances: [...originalRosterAppearances],
  },

  8: {
    description:
      "Wolf Hawkfield is a powerful professional wrestler who specializes in command throws, heavy strikes, and high damage.",
    difficulty: 3,
    role: "Grappler / Power",
    nationality: "Canada",
    debut: "Virtua Fighter",
    appearances: [...originalRosterAppearances],
  },

  9: {
    description:
      "Jeffry McWild is a powerful Pankration fighter who uses heavy strikes, throws, and strong punishment.",
    difficulty: 2,
    role: "Power / Grappler",
    nationality: "Australia",
    debut: "Virtua Fighter",
    appearances: [...originalRosterAppearances],
  },

  10: {
    description:
      "Kage Maru is a technical ninja who uses mobility, throws, evasive movement, and complex combo routes.",
    difficulty: 3,
    role: "Technical / Mobility",
    nationality: "Japan",
    debut: "Virtua Fighter",
    appearances: [...originalRosterAppearances],
  },

  11: {
    description:
      "Sarah Bryant is a fast martial artist who combines kick-based pressure, Flamingo stance, and damaging combos.",
    difficulty: 3,
    role: "Rushdown / Stance",
    nationality: "United States",
    debut: "Virtua Fighter",
    appearances: [...originalRosterAppearances],
  },

  12: {
    description:
      "Shun Di is a complex drunken-style fighter whose available techniques and damage increase as he gains drinks.",
    difficulty: 5,
    role: "Technical / Resource-Based",
    nationality: "China",
    debut: "Virtua Fighter 2",
    appearances: [...vf2DebutAppearances],
  },

  13: {
    description:
      "Lion Rafale is a mobile Tourouken fighter who uses unusual movement, evasive attacks, and tricky mix-ups.",
    difficulty: 3,
    role: "Evasive / Mix-Up",
    nationality: "France",
    debut: "Virtua Fighter 2",
    appearances: [...vf2DebutAppearances],
  },

  14: {
    description:
      "Lei Fei is a technical Shaolin fighter who transitions between several stances to create complex offensive sequences.",
    difficulty: 4,
    role: "Stance / Technical",
    nationality: "China",
    debut: "Virtua Fighter 4",
    appearances: [...vf4DebutAppearances],
  },

  15: {
    description:
      "Vanessa Lewis is a versatile Vale Tudo fighter who switches between offensive and defensive fighting styles.",
    difficulty: 5,
    role: "Stance / Versatile",
    nationality: "United States",
    debut: "Virtua Fighter 4",
    appearances: [...vf4DebutAppearances],
  },

  16: {
    description:
      "Brad Burns is a kickboxer who uses swaying movement, evasive techniques, and aggressive close-range pressure.",
    difficulty: 2,
    role: "Rushdown / Evasive",
    nationality: "Italy",
    debut: "Virtua Fighter 4 Evolution",
    appearances: [...vf4EvolutionDebutAppearances],
  },

  17: {
    description:
      "Goh Hinogami is a Judo fighter who combines strong throws, defensive reads, and powerful close-range attacks.",
    difficulty: 3,
    role: "Grappler / Counter-Offense",
    nationality: "Japan",
    debut: "Virtua Fighter 4 Evolution",
    appearances: [...vf4EvolutionDebutAppearances],
  },

  18: {
    description:
      "El Blaze is a highly mobile Lucha Libre fighter who uses fast movement, acrobatic attacks, and running mix-ups.",
    difficulty: 3,
    role: "Mobility / Rushdown",
    nationality: "Mexico",
    debut: "Virtua Fighter 5",
    appearances: [...vf5DebutAppearances],
  },

  19: {
    description:
      "Taka-Arashi is a heavyweight sumo wrestler with powerful strikes, command throws, and unique weight properties.",
    difficulty: 2,
    role: "Heavyweight / Grappler",
    nationality: "Japan",
    debut: "Virtua Fighter 3",
    appearances: [...takaAppearances],
  },

  20: {
    description:
      "Dural is a mysterious metallic fighter who uses techniques copied from across the Virtua Fighter roster.",
    difficulty: 3,
    role: "Boss / Hybrid",
    debut: "Virtua Fighter",
    appearances: [...originalRosterAppearances],
  },

};