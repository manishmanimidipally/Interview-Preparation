// Aptitude, Quantitative, Logical Reasoning and Pseudocode Questions

export const APTITUDE_QUESTIONS = [
  {
    id: 'apt-time-and-work-1',
    category: 'Quantitative Aptitude',
    subTopic: 'Time and Work',
    question: 'A can complete a project in 12 days and B can complete the same project in 18 days. If they work together with C, they finish the entire work in 4 days. In how many days can C alone complete the project?',
    options: ['9 days', '12 days', '10.5 days', '8 days'],
    correctAnswerIndex: 0,
    difficulty: 'Easy-Medium',
    companyTags: ['TCS', 'Infosys', 'Accenture', 'Capgemini'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'TCS NQT Numerical Ability Section 2024',
    lastVerified: 'Oct 2024',
    explanation: `Total Work = LCM(12, 18, 4) = 36 units.
Efficiency of A = 36 / 12 = 3 units/day.
Efficiency of B = 36 / 18 = 2 units/day.
Combined Efficiency of (A + B + C) = 36 / 4 = 9 units/day.
Efficiency of C = 9 - (3 + 2) = 4 units/day.
Days required by C alone = 36 / 4 = 9 days.`
  },
  {
    id: 'apt-speed-distance-trains',
    category: 'Quantitative Aptitude',
    subTopic: 'Speed, Time and Distance',
    question: 'A train 180 meters long running at a uniform speed of 72 km/h crosses a platform in 20 seconds. What is the length of the platform?',
    options: ['200 meters', '220 meters', '240 meters', '180 meters'],
    correctAnswerIndex: 1,
    difficulty: 'Easy',
    companyTags: ['Infosys', 'TCS', 'Wipro', 'Tech Mahindra'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Infosys Assessment Test Quantitative Section 2024',
    lastVerified: 'Nov 2024',
    explanation: `Speed in m/s = 72 * (5 / 18) = 20 m/s.
Total Distance covered in 20 seconds = Speed * Time = 20 * 20 = 400 meters.
Total Distance = Length of Train + Length of Platform.
400 = 180 + Length of Platform.
Length of Platform = 400 - 180 = 220 meters.`
  },
  {
    id: 'apt-logical-blood-relations',
    category: 'Logical Reasoning',
    subTopic: 'Blood Relations',
    question: 'Pointing towards a photograph, a woman says: "He is the son of the only daughter of my paternal grandfather." How is the man in the photograph related to the woman?',
    options: ['Brother', 'Cousin', 'Uncle', 'Nephew'],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    companyTags: ['Accenture', 'Cognizant', 'Deloitte', 'Capgemini'],
    verificationType: 'COMMONLY_REPORTED',
    verifiedSource: 'Cognizant GenC Analytical Reasoning 2024',
    lastVerified: 'Jan 2025',
    explanation: `Paternal grandfather = Father's father.
Only daughter of paternal grandfather = Father's sister (Aunt).
Son of Aunt = Cousin.
Therefore, the man is her cousin.`
  },
  {
    id: 'apt-logical-syllogisms',
    category: 'Logical Reasoning',
    subTopic: 'Syllogism',
    question: 'Statements:\n1. All developers are problem solvers.\n2. Some problem solvers are musicians.\nConclusions:\nI. Some developers are musicians.\nII. Some problem solvers are developers.',
    options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither I nor II follows'],
    correctAnswerIndex: 1,
    difficulty: 'Easy',
    companyTags: ['TCS', 'Infosys', 'Deloitte', 'HCLTech'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'TCS NQT Reasoning Ability Section 2024',
    lastVerified: 'Dec 2024',
    explanation: `From Statement 1: "All developers are problem solvers" -> converts to "Some problem solvers are developers" (Conclusion II is valid).
Statement 2 only links some problem solvers to musicians, so no definite overlap exists between developers and musicians (Conclusion I does not necessarily follow).`
  },
  {
    id: 'apt-pseudocode-accenture',
    category: 'Technical Pseudocode',
    subTopic: 'Bitwise & Loops',
    question: 'What will be the output of the following pseudocode?\n\nInteger a, b, c\nSet a = 4, b = 6, c = 2\na = (a ^ b) + c\nif ((a + b) > (b + c))\n    b = a & c\nelse\n    b = b & c\nPrint a + b',
    options: ['4', '6', '8', '10'],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    companyTags: ['Accenture', 'Capgemini', 'Infosys'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Accenture Cognitive Assessment Pseudocode 2024',
    lastVerified: 'Jan 2025',
    explanation: `Initial values: a = 4 (0100), b = 6 (0110), c = 2 (0010).
a ^ b = 4 ^ 6 = 2 (0010).
a = 2 + 2 = 4.
Check condition: (a + b) = 4 + 6 = 10; (b + c) = 6 + 2 = 8.
Since 10 > 8 is TRUE:
b = a & c = 4 (0100) & 2 (0010) = 0.
Print a + b = 4 + 0 = 4.`
  }
];
