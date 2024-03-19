export interface ProjectEntry {
  slug: string | null;
  name: string;
  description: string;
  avatarUrl: string | null;
  githubUrl: string;
  techStack: string[];
}

export const projects: ProjectEntry[] = [
  {
    slug: null,
    name: 'InnateMC',
    description: 'A native macOS Minecraft launcher',
    avatarUrl: null,
    githubUrl: 'https://github.com/InnateMC/InnateMC',
    techStack: ['Swift', 'SwiftUI']
  },
  {
    slug: null,
    name: 'BMTCMate',
    description: 'A mobile app for checking BMTC bus timings',
    avatarUrl: null,
    githubUrl: 'https://github.com/heftybyte/BMTCMate',
    techStack: ['Swift', 'SwiftUI']
  },
  {
    slug: null,
    name: 'Legacy Fabric',
    description: 'Running Fabric loader on older versions of Minecraft',
    avatarUrl: null,
    githubUrl: 'https://github.com/Legacy-Fabric/',
    techStack: ['Java', 'Minecraft']
  },
  {
    slug: null,
    name: 'Dimensional Doors',
    description: 'A Minecraft mod that adds pocket dimensions',
    avatarUrl: null,
    githubUrl: 'https://github.com/DimensionalDoors/DimDoors',
    techStack: ['Java', 'Minecraft', 'OpenGL']
  },
  {
    slug: null,
    name: 'Project Kula',
    description: 'A social media platform for a college',
    avatarUrl: null,
    githubUrl: 'https://github.com/ProjectKula',
    techStack: [
      'Swift',
      'Vapor',
      'PostgreSQL',
      'Svelte',
      'TypeScript',
      'Tailwind CSS'
    ]
  },
  {
    slug: null,
    name: 'Caffex',
    description: 'A web app for tracking caffeine intake',
    avatarUrl: null,
    githubUrl: 'https://github.com/heftymouse/Caffex',
    techStack: ['Svelte', 'TypeScript', 'Tailwind CSS']
  },
  {
    slug: null,
    name: 'Forestry',
    description: 'A macOS app for urban farming and tree planting',
    avatarUrl: null,
    githubUrl: 'https://github.com/BoogieMonster1O1/Forestry',
    techStack: ['Swift', 'SwiftUI']
  },
  {
    slug: null,
    name: 'Battleswift',
    description: 'A Swift server/client for playing battleship',
    avatarUrl: null,
    githubUrl: 'https://github.com/BoogieMonster1O1/Battleswift',
    techStack: ['Swift', 'SwiftNIO']
  },
  {
    slug: null,
    name: 'Invading Taters',
    description: 'A space invaders clone about potatoes',
    avatarUrl: null,
    githubUrl: 'https://github.com/BoogieMonster1O1/InvadingTaters',
    techStack: ['C++', 'OpenGL']
  },
  {
    slug: null,
    name: 'NNTK',
    description: 'A neural network toolkit',
    avatarUrl: null,
    githubUrl: 'https://github.com/BoogieMonster1O1/NNTK3',
    techStack: ['Objective-C']
  },
  {
    slug: null,
    name: 'Vimc',
    description: 'Vim-like editing in Minecraft',
    avatarUrl: null,
    githubUrl: 'https://github.com/BoogieMonster1O1/Vimc',
    techStack: ['Java', 'Minecraft', 'OpenGL']
  },
  {
    slug: null,
    name: 'Epic fail calculator',
    description: 'A calculator for calculating GPA across a range of possible grades',
    avatarUrl: null,
    githubUrl: 'https://github.com/BoogieMonster1O1/Epic-Fail-Calculator',
    techStack: ['Svelte', 'TypeScript', 'Tailwind CSS']
  },
  {
    slug: null,
    name: 'icystudy',
    description: 'A web app to help studying for Indian Constitution exam',
    avatarUrl: null,
    githubUrl: 'https://github.com/BoogieMonster1O1/icystudy',
    techStack: ['Svelte', 'TypeScript', 'Tailwind CSS']
  },
  {
    slug: null,
    name: 'Variable Fundamental Quantities',
    description: 'Use Linear Algebra to convert between different units of fundamental quantities',
    avatarUrl: null,
    githubUrl: 'https://github.com/BoogieMonster1O1/variable-fundamental-quantities',
    techStack: ['Svelte', 'TypeScript', 'Tailwind CSS']
  },
  {
    slug: null,
    name: 'I\'m feeling 21',
    description: 'A discord bot that plays blackjack',
    avatarUrl: null,
    githubUrl: 'https://github.com/BoogieMonster1O1/im-feeling-21',
    techStack: ['TypeScript']
  },
  {
    slug: null,
    name: 'HexJSON',
    description: 'A C++ library for parsing JSON',
    avatarUrl: null,
    githubUrl: 'https://github.com/BoogieMonster1O1/hexjson',
    techStack: ['C++']
  },
  {
    slug: null,
    name: 'Enchantments HUD',
    description: 'A Minecraft mod that shows enchantments on the HUD',
    avatarUrl: null,
    githubUrl: 'https://github.com/BoogieMonster1O1/Enchantments-HUD',
    techStack: ['Java', 'Minecraft', 'OpenGL']
  },
  {
    slug: null,
    name: 'Sudeep\'s Carts',
    description: 'A Minecraft mod that allows you check IRCTC train availability',
    avatarUrl: null,
    githubUrl: 'https://github.com/StudiousGarbanzo/sudeeps-carts',
    techStack: ['Java', 'Minecraft', 'OpenGL']
  },
  {
    slug: null,
    name: 'Clickup Goals',
    description: 'A Visual Studio Code extension for tracking goals in Clickup',
    avatarUrl: null,
    githubUrl: 'https://github.com/StudiousGarbanzo/sudeeps-carts',
    techStack: ['TypeScript']
  },
  {
    slug: null,
    name: 'BineSweeper',
    description: 'A Minesweeper clone in many languages',
    avatarUrl: null,
    githubUrl: 'https://github.com/BineSweeper',
    techStack: ['C', 'Dart', 'Swift', 'Rust']
  },
  {
    slug: null,
    name: 'physicsbad',
    description: 'A web app for generating physics experiment readings',
    avatarUrl: null,
    githubUrl: 'https://github.com/BoogieMonster1O1/physicsbad',
    techStack: ['Svelte', 'TypeScript', 'Tailwind CSS']
  },
  {
    slug: null,
    name: 'Eye You Ready For It',
    description: 'A discord bot that lets you guess celebrities from their eyes',
    avatarUrl: null,
    githubUrl: 'https://github.com/EyeYouReadyForIt',
    techStack: ['Java']
  },
  {
    slug: null,
    name: 'gocrafter',
    description: 'A Minecraft server management web app',
    avatarUrl: null,
    githubUrl: 'https://github.com/BoogieMonster1O1/gocrafter',
    techStack: ['Go']
  }
];
