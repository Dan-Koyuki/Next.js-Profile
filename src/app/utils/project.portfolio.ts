import { Project } from "./project.resume";

export interface PortfolioModel extends Project {
  folder: string;
  folderhover: string;
}

export const MyPortfolio: PortfolioModel[] = [
  {
    name: "Atlas Mobilizer",
    role: "Developer",
    contribute: [
      "Designed and implemented intuitive user interface (UI) layouts and components to enhance user experience.",
      "Developed robust APIs to seamlessly interact with MongoDB, ensuring efficient data retrieval and manipulation.",
      "Engineered sophisticated backend logic to handle complex application requirements and ensure smooth operation.",
      "Conducted comprehensive testing across the application to identify and resolve any issues, ensuring high quality and reliability.",
      "Utilized advanced debugging techniques to pinpoint and address software bugs promptly, maintaining optimal performance.",
      "Established design patterns and guidelines to maintain consistency and coherence throughout the application.",
    ],
    duration: "September 2023 - January 2024",
    image: [
      "https://res.cloudinary.com/dankoyuki/image/upload/v1707696779/Atlas%20Mobilizer/bjonypthuprmkdg3xhrz.webp",
      "https://res.cloudinary.com/dankoyuki/image/upload/v1707696269/Atlas%20Mobilizer/qmaplqogryosy9bsh2dp.webp",
    ],
    description:
      "Atlas Mobilizer is an Android project designed to facilitate CRUD (Create, Read, Update, Delete) operations of MongoDB Atlas through an Android UI.",
    technologies: [
      "Kotlin Android",
      "Node.js",
      "Firebase Auth",
      "MongoDB",
      "Express",
    ],
    links: {
      frontend:
        "https://github.com/Dan-Koyuki/Mobile-Native_Atlas-Mobilizer.git",
      backend: "https://github.com/Dan-Koyuki/Web-Nodejs_Mongo-API.git",
      demo: "https://play.google.com/store/apps/details?id=com.assignment.mondrodb",
      documentation: "https://dan-koyuki.github.io/Dicoding-Sub1/",
    },
    status: "Complete - Prototype",
    teamMembers: ["M. Iqbal Fauzi as Tester"],
    folder:
      "https://res.cloudinary.com/dankoyuki/image/upload/v1709124995/folderIcons/ioyaagbcjeemd1cx7yf4.png",
    folderhover:
      "https://res.cloudinary.com/dankoyuki/image/upload/v1709181652/folderIcons/hlefmxownz7dhp5gq6vo.png",
  },
  {
    name: "Pokemon Data",
    role: "Developer",
    contribute: [
      "Conducted comprehensive testing across the application to identify and resolve any issues, ensuring high quality and reliability.",
      "Utilized advanced debugging techniques to pinpoint and address software bugs promptly, maintaining optimal performance.",
      "Established design patterns and guidelines to maintain consistency and coherence throughout the application.",
    ],
    duration: "February 2024 - present",
    image: [
      "https://res.cloudinary.com/dankoyuki/image/upload/v1709379334/PKData/gwkhpy2w9jmwlujfwtiy.png",
      "https://res.cloudinary.com/dankoyuki/image/upload/v1709379333/PKData/cn3t63jy74lwfzks37s4.png",
    ],
    description:
      "A comprehensive library for accessing Pokémon data including species, items, moves, and more.",
    technologies: ["TypeScript", "Node.js"],
    links: {
      demo: "https://www.npmjs.com/package/pkdata-dan",
      documentation: "https://github.com/Dan-Koyuki/Lib-Node.js-PokeII",
    },
    status: "On Going",
    folder:
      "https://res.cloudinary.com/dankoyuki/image/upload/v1709124995/folderIcons/ioyaagbcjeemd1cx7yf4.png",
    folderhover:
      "https://res.cloudinary.com/dankoyuki/image/upload/v1709181652/folderIcons/hlefmxownz7dhp5gq6vo.png",
  },
];