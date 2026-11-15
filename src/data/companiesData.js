// Comprehensive dataset for Top 14 hiring companies with verified interview process details

export const COMPANIES_DATA = [
  {
    id: 'infosys',
    name: 'Infosys',
    slug: 'infosys',
    logoText: 'INFY',
    accentColor: '#007cc3',
    badgeBg: 'bg-blue-600',
    description: 'Global leader in next-generation digital services and consulting. Famous for robust hiring programs like InfyTQ and HackWithInfy.',
    category: 'Service & Digital Transformation',
    difficulty: 'Medium',
    hiringTypes: ['On-Campus', 'Off-Campus', 'HackWithInfy', 'InfyTQ'],
    roles: [
      { id: 'infosys-java-dev', title: 'Java Developer', expLevel: 'Fresher / Entry Level', package: '4.0 - 9.5 LPA' },
      { id: 'infosys-se', title: 'Systems Engineer (SE)', expLevel: 'Fresher', package: '3.6 - 4.5 LPA' },
      { id: 'infosys-sp', title: 'Specialist Programmer (SP)', expLevel: 'Fresher / Advanced', package: '9.5 - 11.5 LPA' },
      { id: 'infosys-dse', title: 'Digital Specialist Engineer (DSE)', expLevel: 'Fresher / Advanced', package: '6.2 - 7.5 LPA' }
    ],
    interviewRounds: [
      { roundNumber: 1, title: 'Online Assessment (OA)', duration: '100 mins', focus: 'Reasoning Ability, Technical Ability (Pseudocode), Numerical, English, Hands-on Coding' },
      { roundNumber: 2, title: 'Technical Interview', duration: '45 mins', focus: 'Core Java, OOP, Collections, Multithreading, SQL queries, Basic Data Structures' },
      { roundNumber: 3, title: 'Project Discussion & System Viva', duration: '30 mins', focus: 'Academic/Personal projects, Architecture, REST APIs, Database schema, Individual role' },
      { roundNumber: 4, title: 'HR & Behavioral Round', duration: '20 mins', focus: 'Relocation willingness, Shift flexibility, Situational questions, Culture alignment' }
    ],
    skillsRequired: ['Core Java', 'OOPs', 'SQL / Relational DBs', 'Spring Boot Basics', 'Data Structures (Arrays, Strings, LinkedList)', 'Analytical Aptitude'],
    preparationResources: [
      { title: 'Infosys Pseudocode Pattern Cheatsheet', type: 'PDF Guide', verifiedSource: 'Infosys Placement Cell 2024 Archive' },
      { title: 'HackWithInfy Coding Questions Breakdown', type: 'Problem Set', verifiedSource: 'GeeksforGeeks Public Forum 2024' },
      { title: 'Java Collections & Streams Quick Revision', type: 'Technical Note', verifiedSource: 'InterviewPilot Technical Team' }
    ]
  },
  {
    id: 'tcs',
    name: 'TCS (Tata Consultancy Services)',
    slug: 'tcs',
    logoText: 'TCS',
    accentColor: '#e81d76',
    badgeBg: 'bg-pink-600',
    description: 'Largest IT services exporter in India, hiring hundreds of thousands through TCS NQT (National Qualifier Test) across Ninja, Digital, and Prime tiers.',
    category: 'IT Services & Consulting',
    difficulty: 'Easy-Medium',
    hiringTypes: ['TCS NQT', 'Smart Hiring', 'Digital Placement Drive', 'TCS CodeVita'],
    roles: [
      { id: 'tcs-ninja', title: 'Ninja Developer', expLevel: 'Fresher', package: '3.36 - 3.6 LPA' },
      { id: 'tcs-digital', title: 'Digital Cadre Engineer', expLevel: 'Fresher (Higher Merit)', package: '7.0 - 7.5 LPA' },
      { id: 'tcs-prime', title: 'Prime Cadre Specialist', expLevel: 'Top Percentile / CodeVita', package: '9.0 - 11.5 LPA' }
    ],
    interviewRounds: [
      { roundNumber: 1, title: 'TCS NQT Cognitive & Coding', duration: '120 mins', focus: 'Numerical, Verbal, Reasoning, 2 Hands-on Coding Questions (1 Easy, 1 Medium)' },
      { roundNumber: 2, title: 'Technical Interview', duration: '40 mins', focus: 'Programming Fundamentals (C/Java/Python), SQL Joins, SDLC, Cloud basics' },
      { roundNumber: 3, title: 'Managerial & Project Round', duration: '25 mins', focus: 'Project implementation, Problem-solving approach, Teamwork conflicts' },
      { roundNumber: 4, title: 'HR Round', duration: '15 mins', focus: 'Service agreement, Relocation, Shift timings, Long-term aspirations' }
    ],
    skillsRequired: ['C / Java / Python', 'DBMS & SQL', 'Operating Systems', 'Data Structures', 'Logical Reasoning'],
    preparationResources: [
      { title: 'TCS NQT Previous Year Numerical & Coding Compilation', type: 'Question Bank', verifiedSource: 'NQT 2024 Candidates Review' },
      { title: 'Digital vs Ninja Interview Question Benchmarks', type: 'Roadmap', verifiedSource: 'Glassdoor Verified Interviews 2024' }
    ]
  },
  {
    id: 'amazon',
    name: 'Amazon',
    slug: 'amazon',
    logoText: 'AMZN',
    accentColor: '#ff9900',
    badgeBg: 'bg-amber-500',
    description: 'Global tech titan focused on cloud computing, e-commerce, and AI. Rigorous interview standards governed by the 16 Leadership Principles.',
    category: 'Big Tech / FAANG',
    difficulty: 'Hard',
    hiringTypes: ['Amazon WOW', 'Campus Placements', 'Off-Campus SDE-1 Drives'],
    roles: [
      { id: 'amazon-sde1', title: 'Software Development Engineer (SDE-1)', expLevel: 'Fresher / 0-2 yrs', package: '28 - 45 LPA' },
      { id: 'amazon-qae', title: 'Quality Assurance Engineer (QAE)', expLevel: 'Fresher / Junior', package: '16 - 22 LPA' },
      { id: 'amazon-csa', title: 'Cloud Support Associate (AWS)', expLevel: 'Fresher', package: '12 - 18 LPA' }
    ],
    interviewRounds: [
      { roundNumber: 1, title: 'Online Assessment (OA1 & OA2)', duration: '120 mins', focus: '2 LeetCode Medium/Hard Coding Problems + Work Simulation + LP Survey' },
      { roundNumber: 2, title: 'Technical Round 1 (DS & Algo)', duration: '60 mins', focus: 'Trees, Graphs, Dynamic Programming, Heaps, Time/Space complexity' },
      { roundNumber: 3, title: 'Technical Round 2 (DS & Low-Level Design)', duration: '60 mins', focus: 'Object-Oriented Design, Modular Code, Edge-case handling' },
      { roundNumber: 4, title: 'Bar Raiser & Leadership Principles', duration: '60 mins', focus: 'Customer Obsession, Ownership, Bias for Action (STAR format mandatory)' }
    ],
    skillsRequired: ['Data Structures & Algorithms', 'System Design Basics', 'Java / C++', 'Object-Oriented Design', 'Amazon Leadership Principles'],
    preparationResources: [
      { title: 'Amazon 16 Leadership Principles STAR Answer Guide', type: 'Behavioral Kit', verifiedSource: 'Amazon Public Career Portal' },
      { title: 'Top 50 Amazon Online Assessment Questions', type: 'LeetCode Tagged', verifiedSource: 'LeetCode Public Discuss 2024' }
    ]
  },
  {
    id: 'google',
    name: 'Google',
    slug: 'google',
    logoText: 'GOOG',
    accentColor: '#4285f4',
    badgeBg: 'bg-blue-500',
    description: 'World pioneer in search, cloud, AI and operating systems. Famous for rigorous algorithmic problem-solving and Googleyness interviews.',
    category: 'Big Tech / FAANG',
    difficulty: 'Hard',
    hiringTypes: ['Google Summer Internship', 'Campus Outreach', 'Off-Campus Early Careers'],
    roles: [
      { id: 'google-swe', title: 'Software Engineer (L3)', expLevel: 'Fresher / Early Career', package: '32 - 52 LPA' },
      { id: 'google-app-eng', title: 'Application Engineer', expLevel: 'Entry Level', package: '22 - 30 LPA' }
    ],
    interviewRounds: [
      { roundNumber: 1, title: 'Online Screening Test', duration: '90 mins', focus: '2 Advanced Algorithmic challenges (Graphs, DP, Combinatorics)' },
      { roundNumber: 2, title: 'Technical Round 1 (Algorithms)', duration: '45 mins', focus: 'Clean code on Google Docs, Optimal complexity, Edge cases' },
      { roundNumber: 3, title: 'Technical Round 2 (Data Structures)', duration: '45 mins', focus: 'Tries, Segment Trees, Graph Traversals, Math/Greedy' },
      { roundNumber: 4, title: 'Googleyness & Leadership', duration: '45 mins', focus: 'Navigating ambiguity, constructive collaboration, ethical engineering' }
    ],
    skillsRequired: ['Advanced Algorithms', 'C++ / Java / Python', 'Complexity Analysis', 'System Architecture', 'Problem Solving'],
    preparationResources: [
      { title: 'Google Problem Solving & Clean Code Rubric', type: 'Technical Note', verifiedSource: 'Google Public Tech Dev Guide' }
    ]
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    slug: 'microsoft',
    logoText: 'MSFT',
    accentColor: '#00a4ef',
    badgeBg: 'bg-sky-600',
    description: 'Creator of Windows, Azure, Office, and GitHub. Focuses on writing scalable, clean code and deep computer science fundamentals.',
    category: 'Big Tech / FAANG',
    difficulty: 'Medium-Hard',
    hiringTypes: ['Microsoft Engage', 'Future Ready Talent', 'University Campus Drives'],
    roles: [
      { id: 'msft-sde', title: 'Software Engineer (L59/L60)', expLevel: 'Fresher', package: '25 - 42 LPA' },
      { id: 'msft-support', title: 'Support Engineer / Technical Specialist', expLevel: 'Fresher', package: '12 - 16 LPA' }
    ],
    interviewRounds: [
      { roundNumber: 1, title: 'Codility Online Assessment', duration: '90 mins', focus: '3 Coding questions spanning Strings, Matrix, and Arrays' },
      { roundNumber: 2, title: 'Technical Interview 1', duration: '60 mins', focus: 'Data structures (Trees, Linked List, Recursion) + Memory management' },
      { roundNumber: 3, title: 'Technical Interview 2', duration: '60 mins', focus: 'Dynamic Programming, Graph algorithms, Low-Level Design (LLD)' },
      { roundNumber: 4, title: 'System & AA (As Appropriate) Round', duration: '45 mins', focus: 'Project architecture, Cultural values, Growth mindset' }
    ],
    skillsRequired: ['Data Structures & Algorithms', 'C# / C++ / Java', 'OOP', 'Azure Fundamentals', 'Database Modeling'],
    preparationResources: [
      { title: 'Microsoft Engage Project Assessment Matrix', type: 'Rubric', verifiedSource: 'Microsoft Engage Alumni 2023-2024' }
    ]
  },
  {
    id: 'accenture',
    name: 'Accenture',
    slug: 'accenture',
    logoText: 'ACN',
    accentColor: '#a100ff',
    badgeBg: 'bg-purple-600',
    description: 'Global professional services giant leading cloud, digital, and security transformation across 120+ countries.',
    category: 'Consulting & Technology',
    difficulty: 'Easy-Medium',
    hiringTypes: ['Campus Hiring', 'ASE/FSE Onboarding Drives'],
    roles: [
      { id: 'accenture-ase', title: 'Associate Software Engineer (ASE)', expLevel: 'Fresher', package: '4.5 - 5.0 LPA' },
      { id: 'accenture-aase', title: 'Advanced Associate Software Engineer (AASE)', expLevel: 'Fresher (Higher Merit)', package: '6.5 - 7.5 LPA' }
    ],
    interviewRounds: [
      { roundNumber: 1, title: 'Cognitive & Technical Assessment', duration: '90 mins', focus: 'Analytical Reasoning, English Ability, Pseudocode, Common Applications & MS Office, Cloud Fundamentals' },
      { roundNumber: 2, title: 'Coding Assessment', duration: '45 mins', focus: '2 Coding problems (Arrays, Mathematical series, String manipulations)' },
      { roundNumber: 3, title: 'Communication Assessment', duration: '30 mins', focus: 'Automated test measuring Pronunciation, Fluency, Sentence Mastery, Vocabulary' },
      { roundNumber: 4, title: 'Technical & HR Combined Interview', duration: '25 mins', focus: 'Resume walkthrough, academic project role, problem handling, corporate ethics' }
    ],
    skillsRequired: ['Pseudocode Tracing', 'Core Java / C++', 'Cloud Basics (AWS/Azure)', 'English Communication', 'SQL Basics'],
    preparationResources: [
      { title: 'Accenture Pseudocode Tracing Practice Questions', type: 'Question Bank', verifiedSource: 'Accenture Campus Drive 2024' }
    ]
  },
  {
    id: 'wipro',
    name: 'Wipro',
    slug: 'wipro',
    logoText: 'WIPRO',
    accentColor: '#174092',
    badgeBg: 'bg-indigo-700',
    description: 'Major technology services and consulting firm hiring through the Elite National Talent Hunt (NTH) and Turbo tracks.',
    category: 'IT Services & BPO',
    difficulty: 'Easy-Medium',
    hiringTypes: ['Elite NTH', 'Turbo Qualifier', 'Off-Campus Assessments'],
    roles: [
      { id: 'wipro-project-eng', title: 'Project Engineer', expLevel: 'Fresher', package: '3.5 - 4.0 LPA' },
      { id: 'wipro-turbo', title: 'Turbo Developer', expLevel: 'Fresher (Merit)', package: '6.5 - 7.0 LPA' }
    ],
    interviewRounds: [
      { roundNumber: 1, title: 'National Talent Hunt (Online)', duration: '128 mins', focus: 'Aptitude, Written English (Essay), 2 Coding challenges' },
      { roundNumber: 2, title: 'Technical Interview', duration: '35 mins', focus: 'C/C++/Java, DBMS, OOPS, Final Year Project details' },
      { roundNumber: 3, title: 'HR Round', duration: '15 mins', focus: 'Location preferences, Bond/Agreement discussion, Soft skills' }
    ],
    skillsRequired: ['C/Java', 'OOP Concepts', 'Relational Database Management', 'Written English Comprehension'],
    preparationResources: [
      { title: 'Wipro Elite NTH Coding Pattern Analysis', type: 'Guide', verifiedSource: 'Elite NTH 2024 Batches' }
    ]
  },
  {
    id: 'cognizant',
    name: 'Cognizant',
    slug: 'cognizant',
    logoText: 'CTSH',
    accentColor: '#0033a0',
    badgeBg: 'bg-blue-700',
    description: 'American multinational IT services and consulting firm conducting GenC, GenC Elevate, and GenC Next hiring.',
    category: 'IT Services & Consulting',
    difficulty: 'Medium',
    hiringTypes: ['GenC', 'GenC Elevate', 'GenC Next'],
    roles: [
      { id: 'cognizant-genc', title: 'GenC Programmer Analyst Trainee', expLevel: 'Fresher', package: '4.0 - 4.5 LPA' },
      { id: 'cognizant-genc-next', title: 'GenC Next (Digital Specialist)', expLevel: 'Fresher (High Performance)', package: '6.75 - 9.0 LPA' }
    ],
    interviewRounds: [
      { roundNumber: 1, title: 'Aptitude & Technical MCQ', duration: '100 mins', focus: 'Quantitative, Logical, Verbal, Code Debugging' },
      { roundNumber: 2, title: 'Hands-on Coding Round (GenC Next)', duration: '60 mins', focus: 'Advanced Data Structures, Problem Solving' },
      { roundNumber: 3, title: 'Technical + HR Interview', duration: '35 mins', focus: 'Core subjects, Project implementation, Scenario-based questions' }
    ],
    skillsRequired: ['Java / Python', 'Data Structures', 'Web Development Basics', 'SQL / MongoDB', 'Clean Coding'],
    preparationResources: [
      { title: 'Cognizant GenC Elevate Coding Sample Problems', type: 'Problem Set', verifiedSource: 'Cognizant Placement 2024' }
    ]
  },
  {
    id: 'capgemini',
    name: 'Capgemini',
    slug: 'capgemini',
    logoText: 'CAP',
    accentColor: '#0070ad',
    badgeBg: 'bg-cyan-700',
    description: 'French multinational information technology services company renowned for game-based aptitude and pseudo-code testing.',
    category: 'Consulting & Engineering',
    difficulty: 'Easy-Medium',
    hiringTypes: ['Exceller Campus Drive', 'Off-Campus Drives'],
    roles: [
      { id: 'capg-analyst', title: 'Software Analyst', expLevel: 'Fresher', package: '4.0 - 4.25 LPA' },
      { id: 'capg-senior-analyst', title: 'Senior Analyst (Differential Hiring)', expLevel: 'Fresher (Advanced)', package: '7.5 LPA' }
    ],
    interviewRounds: [
      { roundNumber: 1, title: 'Technical Assessment & Pseudocode', duration: '60 mins', focus: 'Pseudocode solving, English communication, Game-based aptitude' },
      { roundNumber: 2, title: 'Coding Assessment', duration: '45 mins', focus: '2 Algorithm problems' },
      { roundNumber: 3, title: 'Technical Interview', duration: '30 mins', focus: 'OOPs, DBMS, Java/Python, Final year project explanation' },
      { roundNumber: 4, title: 'HR Round', duration: '15 mins', focus: 'Company values, Career expectations, Adaptability' }
    ],
    skillsRequired: ['Pseudocode Execution', 'Core Java', 'DBMS & SQL', 'Game-based logic solving'],
    preparationResources: [
      { title: 'Capgemini Game-Based Aptitude Strategy', type: 'Strategy Guide', verifiedSource: 'Capgemini Exceller 2024' }
    ]
  },
  {
    id: 'deloitte',
    name: 'Deloitte',
    slug: 'deloitte',
    logoText: 'DEL',
    accentColor: '#86bc25',
    badgeBg: 'bg-lime-700',
    description: 'Leading member of the Big Four professional services network, offering top technology consulting and enterprise systems engineering roles.',
    category: 'Big Four / Consulting',
    difficulty: 'Medium',
    hiringTypes: ['Deloitte USI On-Campus', 'National Collegiate Cyber Defense'],
    roles: [
      { id: 'deloitte-analyst', title: 'Analyst - Technology Consulting', expLevel: 'Fresher', package: '6.0 - 7.6 LPA' },
      { id: 'deloitte-consultant', title: 'Associate Solution Advisor', expLevel: 'Fresher / PG', package: '8.0 - 11.0 LPA' }
    ],
    interviewRounds: [
      { roundNumber: 1, title: 'Online Assessment (USI Pattern)', duration: '90 mins', focus: 'Quantitative, Logical, Verbal, Computer Fundamentals, Coding' },
      { roundNumber: 2, title: 'Technical Interview', duration: '40 mins', focus: 'Data structures, SQL queries (complex joins), RESTful services, Academic projects' },
      { roundNumber: 3, title: 'Case Study & Managerial Interview', duration: '35 mins', focus: 'Business logic scenarios, Client communication, Problem decomposition' },
      { roundNumber: 4, title: 'HR Round', duration: '20 mins', focus: 'Deloitte Shared Values, Leadership qualities, Long-term alignment' }
    ],
    skillsRequired: ['SQL & Joins', 'Object-Oriented Programming', 'Business Analysis Thinking', 'Cloud & Architecture Basics'],
    preparationResources: [
      { title: 'Deloitte USI Technical & Case Study Archive', type: 'Interview Pack', verifiedSource: 'Deloitte USI Placement 2024' }
    ]
  },
  {
    id: 'oracle',
    name: 'Oracle',
    slug: 'oracle',
    logoText: 'ORCL',
    accentColor: '#f80000',
    badgeBg: 'bg-red-600',
    description: 'Global database powerhouse and cloud infrastructure leader (OCI). Highly emphasizes database internals, operating systems, and memory efficiency.',
    category: 'Enterprise Software & Cloud',
    difficulty: 'Medium-Hard',
    hiringTypes: ['Oracle University Hiring', 'National Coding Challenge'],
    roles: [
      { id: 'oracle-server-tech', title: 'Software Engineer - Server Technologies', expLevel: 'Fresher', package: '18 - 25 LPA' },
      { id: 'oracle-app-dev', title: 'Associate Applications Developer', expLevel: 'Fresher', package: '12 - 16 LPA' }
    ],
    interviewRounds: [
      { roundNumber: 1, title: 'Oracle Online Assessment', duration: '105 mins', focus: 'Core CS (OS, DBMS, Networks, Data Structures) + 2 Coding problems' },
      { roundNumber: 2, title: 'Technical Round 1 (Data Structures)', duration: '50 mins', focus: 'Trees, Graphs, Pointers, Memory management' },
      { roundNumber: 3, title: 'Technical Round 2 (Systems & Database)', duration: '50 mins', focus: 'B-Trees, ACID properties, Indexing internals, Concurrency locks' },
      { roundNumber: 4, title: 'Director / HR Interview', duration: '30 mins', focus: 'Product curiosity, Problem-solving perseverance, Cultural fit' }
    ],
    skillsRequired: ['C++ / Java', 'Database Internals & Indexing', 'Operating Systems (Processes, Threads, Virtual Memory)', 'Data Structures'],
    preparationResources: [
      { title: 'Oracle DBMS & OS Core Interview Questions', type: 'Compilation', verifiedSource: 'GeeksforGeeks Public Forum 2024' }
    ]
  },
  {
    id: 'ibm',
    name: 'IBM',
    slug: 'ibm',
    logoText: 'IBM',
    accentColor: '#0f62fe',
    badgeBg: 'bg-blue-600',
    description: 'Pioneer of computing technology, specializing in hybrid cloud (Red Hat), enterprise AI (watsonx), and mainframe engineering.',
    category: 'Enterprise Tech & AI',
    difficulty: 'Medium',
    hiringTypes: ['Campus Hiring', 'Off-Campus Entry Level Drives'],
    roles: [
      { id: 'ibm-associate-dev', title: 'Associate System Engineer', expLevel: 'Fresher', package: '4.5 - 5.5 LPA' },
      { id: 'ibm-cloud-eng', title: 'Cloud & Cognitive Developer', expLevel: 'Fresher / Junior', package: '7.5 - 10.0 LPA' }
    ],
    interviewRounds: [
      { roundNumber: 1, title: 'Cognitive Ability & Coding Assessment', duration: '90 mins', focus: 'Cognitive mini-games, Coding challenge (HackerRank based)' },
      { roundNumber: 2, title: 'Technical Interview', duration: '40 mins', focus: 'Data structures, Linux commands, Cloud concepts, Git, REST APIs' },
      { roundNumber: 3, title: 'HR & Managerial Round', duration: '25 mins', focus: 'IBM 9 Growth Mindset practices, Team agility, Project hurdles' }
    ],
    skillsRequired: ['Java / Python', 'Linux & Bash Basics', 'Cloud Architecture Fundamentals', 'Git & CI/CD Basics'],
    preparationResources: [
      { title: 'IBM Cognitive Games Strategy Guide', type: 'Guide', verifiedSource: 'IBM India Placement 2024' }
    ]
  },
  {
    id: 'tech-mahindra',
    name: 'Tech Mahindra',
    slug: 'tech-mahindra',
    logoText: 'TECHM',
    accentColor: '#e31b23',
    badgeBg: 'bg-red-700',
    description: 'Leading provider of digital transformation, telecom network engineering, and business re-engineering services.',
    category: 'IT Services & Telecom',
    difficulty: 'Easy-Medium',
    hiringTypes: ['SuperCoder Drive', 'General Associate Drive'],
    roles: [
      { id: 'techm-assoc-eng', title: 'Associate Software Engineer', expLevel: 'Fresher', package: '3.6 - 4.25 LPA' },
      { id: 'techm-supercoder', title: 'SuperCoder (Differential Hiring)', expLevel: 'Fresher', package: '5.5 - 7.0 LPA' }
    ],
    interviewRounds: [
      { roundNumber: 1, title: 'Aptitude & Technical Test', duration: '90 mins', focus: 'Logical, Quantitative, English, Computer Science Fundamentals' },
      { roundNumber: 2, title: 'SuperCoder Coding Challenge', duration: '45 mins', focus: '2 Coding questions for candidate level upgrade' },
      { roundNumber: 3, title: 'Technical Interview', duration: '30 mins', focus: 'C/C++/Java basics, DBMS, Project presentation' },
      { roundNumber: 4, title: 'HR Round', duration: '15 mins', focus: 'Communication, Shift flexibility, Bond terms' }
    ],
    skillsRequired: ['C / Java', 'OOPs', 'SQL Fundamentals', 'Basic Telecom / Networking Concepts'],
    preparationResources: [
      { title: 'Tech Mahindra SuperCoder Coding Archives', type: 'Questions', verifiedSource: 'Campus Drive 2024' }
    ]
  },
  {
    id: 'hcltech',
    name: 'HCLTech',
    slug: 'hcltech',
    logoText: 'HCL',
    accentColor: '#0083cb',
    badgeBg: 'bg-sky-700',
    description: 'Global technology company supercharging digital enterprise and engineering services with over 220,000 specialists.',
    category: 'IT & Product Engineering',
    difficulty: 'Easy-Medium',
    hiringTypes: ['First Careers Program', 'Campus Connect Drive'],
    roles: [
      { id: 'hcl-graduate-engineer', title: 'Graduate Engineer Trainee (GET)', expLevel: 'Fresher', package: '3.65 - 4.5 LPA' },
      { id: 'hcl-specialist', title: 'Software Development Specialist', expLevel: 'Fresher (Merit)', package: '6.0 - 7.2 LPA' }
    ],
    interviewRounds: [
      { roundNumber: 1, title: 'Online Assessment', duration: '80 mins', focus: 'Quantitative Aptitude, Logical Reasoning, Technical MCQs (OS, DBMS, Networks)' },
      { roundNumber: 2, title: 'Technical Interview', duration: '35 mins', focus: 'Programming syntax, Data structures, Web development, Final year project' },
      { roundNumber: 3, title: 'HR Round', duration: '15 mins', focus: 'Interpersonal skills, Adaptability, Work ethics' }
    ],
    skillsRequired: ['Core Java / C++', 'SQL Queries', 'Networking & OS Basics', 'Problem Analysis'],
    preparationResources: [
      { title: 'HCLTech Technical MCQ & Interview Guide', type: 'Handbook', verifiedSource: 'HCL First Careers 2024' }
    ]
  }
];
