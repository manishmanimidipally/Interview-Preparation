// Default demo user and initial state for local development

export const INITIAL_USER = {
  id: 'user-pilot-101',
  name: 'Alex Rivera',
  email: 'alex.rivera@example.com',
  targetCompany: 'Infosys',
  targetRole: 'Java Developer',
  graduationYear: 2025,
  primaryStack: 'Java, Spring Boot, MySQL',
  experienceLevel: 'Fresh Graduate',
  college: 'Institute of Technology',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
  joinedDate: '2024-09-01'
};

export const INITIAL_PROGRESS = {
  totalQuestionsPracticed: 48,
  codingProblemsSolved: 19,
  mockInterviewsCompleted: 6,
  overallReadinessScore: 78,
  learningStreakDays: 7,
  weeklyGoalTarget: 25,
  weeklyGoalCompleted: 18,
  solvedQuestionIds: [
    'two-sum-target',
    'valid-parentheses',
    'reverse-linked-list',
    'climbing-stairs-dp'
  ],
  masteredTopics: ['Core Java', 'OOP concepts', 'Arrays', 'Strings', 'REST APIs'],
  weakTopics: ['Multithreading', 'Dynamic Programming', 'B-Tree Indexing'],
  recentActivity: [
    {
      id: 'act-1',
      type: 'coding',
      title: 'Solved "Two Sum Problem"',
      time: '2 hours ago',
      result: 'Passed (100%)',
      company: 'Infosys'
    },
    {
      id: 'act-2',
      type: 'mock',
      title: 'Completed Infosys Java Dev Technical Mock',
      time: 'Yesterday',
      result: 'Score: 84/100',
      company: 'Infosys'
    },
    {
      id: 'act-3',
      type: 'hr',
      title: 'Practiced "Tell Me About Yourself"',
      time: '2 days ago',
      result: 'AI Feedback: Strong Narrative',
      company: 'TCS'
    },
    {
      id: 'act-4',
      type: 'project',
      title: 'Added Project: "Cloud Task Platform"',
      time: '3 days ago',
      result: '5 Viva Questions Generated',
      company: 'General'
    }
  ],
  upcomingTasks: [
    {
      id: 'task-1',
      title: 'Revise Java 8 Streams & Lambdas',
      deadline: 'Tomorrow, 5:00 PM',
      priority: 'High',
      category: 'Technical'
    },
    {
      id: 'task-2',
      title: 'Attempt TCS NQT 45-min Timed Mock Test',
      deadline: 'Nov 18, 2026',
      priority: 'Medium',
      category: 'Mock Interview'
    },
    {
      id: 'task-3',
      title: 'Practice 3 Dynamic Programming problems',
      deadline: 'Nov 20, 2026',
      priority: 'High',
      category: 'Coding'
    }
  ]
};

export const INITIAL_BOOKMARKS = {
  companies: ['infosys', 'tcs', 'amazon'],
  questions: ['two-sum-target', 'tech-collections-hashmap-internal', 'hr-why-join-this-company']
};

export const INITIAL_USER_PROJECTS = [
  {
    id: 'user-proj-1',
    title: 'FinEdge — Microservices Banking Ledger',
    description: 'A fault-tolerant transaction ledger handling debit/credit transfers, idempotency keys, and account statement exports.',
    techStack: 'Java 17, Spring Boot, Spring Security, Hibernate, React',
    database: 'PostgreSQL & Redis Cache',
    architecture: 'Microservices with API Gateway and Eureka Service Discovery',
    keyFeatures: 'Stateless JWT auth, optimistic locking on account balances, PDF statement generation',
    contribution: 'Designed ledger database schema, built transfer REST endpoints with ACID transactional guarantees, and integrated Redis lock.'
  }
];
