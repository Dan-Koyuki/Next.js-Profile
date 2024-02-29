interface Archive {
  name: string,
  agency: string,
  score?: string,
  dateReceived?: string,
  description?: string,
  type?: string,
  level?: string,
  link?: string,
  recognition?: string,
}

export const MyArchivement : Archive[] = [
  {
    name: 'TOEFA (Test of English for Academics)',
    agency: 'Sunan Gunung Djati State Islamic University Language Center',
    score: '504',
    level: 'High Intermediate',
    dateReceived: '22 June 2022',
    type: 'Academics',
    recognition: 'Certificate'
  },
  {
    name: 'English Speaking Program',
    agency: 'Sunan Gunung Djati State Islamic University Language Center',
    score: '99',
    level: 'Elementary',
    dateReceived: '05 Mei 2023',
    type: 'Academics',
    recognition: 'Certificate'
  },
  {
    name: 'Arabic Speaking Program',
    agency: 'Sunan Gunung Djati State Islamic University Language Center',
    score: '74',
    level: 'Elementary',
    dateReceived: '05 Mei 2023',
    type: 'Academics',
    recognition: 'Certificate'
  },
  {
    name: 'Database Design Course & Final Exam Completion',
    agency: 'Oracle Academy',
    dateReceived: '16 September 2023',
    type: 'Academics',
    recognition: 'Certificate'
  },
  {
    name: 'Database Programming with SQL Course & Final Exam Completion',
    agency: 'Oracle Academy',
    dateReceived: '24 September 2023',
    type: 'Academics',
    recognition: 'Certificate'
  },
  {
    name: 'NDG Linux Essential Course Completion',
    agency: 'Cisco Academy',
    dateReceived: '26 July 2023',
    type: 'Academics',
    recognition: 'Certificate'
  },
  {
    name: 'Introduction to Networks Course Completion',
    agency: 'Cisco Academy',
    dateReceived: '06 January 2024',
    type: 'Academics',
    recognition: 'Certificate'
  },
  {
    name: 'CyberSecurity Essentials Course Completion',
    agency: 'Cisco Academy',
    dateReceived: '15 January 2024',
    type: 'Academics',
    recognition: 'Certificate'
  }
]