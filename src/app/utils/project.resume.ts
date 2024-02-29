export interface Project {
  name: string,
  role: string,
  contribute: string[],
  duration: string,
  image: string[],
  description: string,
  technologies: string[],
  links?: {
    frontend?: string,
    backend?: string,
    demo?: string,
    documentation?: string,
  },
  status: string,
  teamMembers?: string[],
  client?: string,
  budget?: string,
  challenges?: string[],
  achievements?: string[],
}

export const MyProject : Project[] = [
  {
    name: 'Atlas Mobilizer',
    role: 'Developer',
    contribute: [
      'Designed and implemented intuitive user interface (UI) layouts and components to enhance user experience.',
      'Developed robust APIs to seamlessly interact with MongoDB, ensuring efficient data retrieval and manipulation.',
      'Engineered sophisticated backend logic to handle complex application requirements and ensure smooth operation.',
      'Conducted comprehensive testing across the application to identify and resolve any issues, ensuring high quality and reliability.',
      'Utilized advanced debugging techniques to pinpoint and address software bugs promptly, maintaining optimal performance.',
      'Established design patterns and guidelines to maintain consistency and coherence throughout the application.'
    ],
    duration: 'September 2023 - January 2024',
    image: [],
    description: 'Atlas Mobilizer is an Android project designed to facilitate CRUD (Create, Read, Update, Delete) operations of MongoDB Atlas through an Android UI.',
    technologies: ['Kotlin Android', 'Node.js', 'Firebase Auth', 'MongoDB', 'Express'],
    links: {
      frontend: 'https://github.com/Dan-Koyuki/Mobile-Native_Atlas-Mobilizer.git',
      backend: "https://github.com/Dan-Koyuki/Web-Nodejs_Mongo-API.git",
      demo: 'https://play.google.com/store/apps/details?id=com.assignment.mondrodb'
    },
    status: 'Complete - Prototype',
    teamMembers: ['M. Iqbal Fauzi as Tester']
  },
  // {
  //   name: 'Frosty Chronicles',
  //   role: 'Developer',
  //   contribute: [
  //     'Designed and implemented intuitive user interface (UI) layouts and components to enhance user experience.',
  //     'Developed robust APIs to seamlessly interact with MongoDB, ensuring efficient data retrieval and manipulation.',
  //     'Engineered sophisticated backend logic to handle complex application requirements and ensure smooth operation.',
  //     'Conducted comprehensive testing across the application to identify and resolve any issues, ensuring high quality and reliability.',
  //     'Established design patterns and guidelines to maintain consistency and coherence throughout the application.',
  //     'Designed and optimized database architecture to efficiently store and manage application data, ensuring scalability and performance.'
  //   ],
  //   duration: 'September 2023 - December 2023',
  //   image: [],
  //   description: 'Frosty Chronicles is a Pokemon Battle Simulator. Allowing User to create Team with various Pokemon and test them out in battle.',
  //   technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
  //   links: {
  //     frontend: 'https://github.com/Dan-Koyuki/Frontend-Reactjs_FrostyChronicles.git',
  //     backend: 'https://github.com/Dan-Koyuki/Backend-Nodejs_FrostyChronicles.git',
  //     demo: 'https://frontend-frosty.vercel.app/'
  //   },
  //   status: 'Discontinued - Prototype',
  //   challenges: [
  //     'React State that doesnt work well with live update, resulting on inconsistenty while battle running.'
  //   ]
  // },
  // {
  //   name: 'OOO-Triple Treat',
  //   role: 'Developer',
  //   contribute: [
  //     'Designed and implemented intuitive user interface (UI) layouts and components to enhance user experience.',
  //     'Developed robust APIs to seamlessly interact with MongoDB, ensuring efficient data retrieval and manipulation.',
  //     'Engineered sophisticated backend logic to handle complex application requirements and ensure smooth operation.',
  //     'Conducted comprehensive testing across the application to identify and resolve any issues, ensuring high quality and reliability.',
  //     'Established design patterns and guidelines to maintain consistency and coherence throughout the application.',
  //     'Designed and optimized database architecture to efficiently store and manage application data, ensuring scalability and performance.'
  //   ],
  //   duration: 'September 2023 - December 2023',
  //   image: [],
  //   description: 'OOO-Triple Treat is a personal e-commerce web application.',
  //   technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
  //   links: {
  //     frontend: 'https://github.com/Dan-Koyuki/Frontend-Reactjs_OOO.git',
  //     backend: 'https://github.com/Dan-Koyuki/Backend-Nodejs_OOO.git',
  //     demo: 'https://frontend-ooo.vercel.app/'
  //   },
  //   status: 'Discontinued - Full',
  //   challenges: [
  //     "Inexperience on Integrating Stripe Payment Webhook in test mode. Resulting the Data not stored to database."
  //   ]
  // },
  {
    name: 'PokeData',
    role: 'Developer',
    contribute: [
      'Modeled data structures for efficient storage and retrieval.',
      'Implemented data retrieval functions to seamlessly access and manipulate',
      'Conducted comprehensive testing across the application to identify and resolve any issues, ensuring high quality and reliability.',
    ],
    duration: 'January 2024 - Present',
    image: [],
    description: 'Personal npm Library of Pokemon Data. Including Pokedex, Items, Moves, Ability, and Natures.',
    technologies: ['Javascript'],
    links: {
      backend: 'https://github.com/Dan-Koyuki/Lib-Nodejs_PokeData.git',
    },
    status: 'In Progress',
    challenges: [
      'Providing and Processing Data at large scale.'
    ]
  },
  // {
  //   name: 'Profiler v2',
  //   role: 'Developer',
  //   contribute: [
  //     'Designed and implemented intuitive user interface (UI) layouts and components to enhance user experience.',
  //     'Conducted comprehensive testing across the application to identify and resolve any issues, ensuring high quality and reliability.',
  //     'Designed and optimized database architecture to efficiently store and manage application data, ensuring scalability and performance.'
  //   ],
  //   duration: 'January 2024 - Present',
  //   image: [],
  //   description: 'Personal Web Profile and also including Resume (CV).',
  //   technologies: ['Next.js', 'TypeScript', 'TailwindCss'],
  //   links: {
  //     frontend: 'https://github.com/Dan-Koyuki/Web-Next_Profile.git',
  //     demo: 'https://play.google.com/store/apps/details?id=com.assignment.mondrodb'
  //   },
  //   status: 'In Progress',
  // },
  // {
  //   name: 'Profiler',
  //   role: 'Developer',
  //   contribute: [
  //     'Designed and implemented intuitive user interface (UI) layouts and components to enhance user experience.',
  //     'Conducted comprehensive testing across the application to identify and resolve any issues, ensuring high quality and reliability.',
  //     'Designed and optimized database architecture to efficiently store and manage application data, ensuring scalability and performance.'
  //   ],
  //   duration: 'January 2024 - January 2024',
  //   image: [],
  //   description: 'Personal Web Profile and also including Resume (CV).',
  //   technologies: ['React.js'],
  //   links: {
  //     frontend: 'https://github.com/Dan-Koyuki/Web-Reactjs_Profiler.git',
  //     demo: 'https://web-reactjs-profiler.vercel.app/home'
  //   },
  //   status: 'Discontinued - Prototype',
  // }
]