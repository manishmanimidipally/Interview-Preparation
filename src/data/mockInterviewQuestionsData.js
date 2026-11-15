// Curated question bank for AI Mock Interviews across companies and rounds

export const MOCK_INTERVIEW_BANK = {
  technical: [
    {
      id: 'mock-t1',
      round: 'Technical Round',
      company: 'Infosys',
      role: 'Java Developer',
      text: 'How does Spring Boot achieve Inversion of Control, and why should we prefer constructor injection over field injection?',
      keywords: ['IoC', 'Dependency Injection', 'Constructor', 'Immutability', 'Testability', 'NullPointerException', 'Spring container'],
      sampleAnswer: 'Spring Boot manages bean lifecycle through its IoC container. Constructor injection is preferred because it guarantees required dependencies cannot be null, makes beans immutable, and simplifies unit testing without requiring reflection or Spring runner.'
    },
    {
      id: 'mock-t2',
      round: 'Technical Round',
      company: 'TCS',
      role: 'Digital Cadre Engineer',
      text: 'Explain the difference between a Clustered Index and a Non-Clustered Index in relational databases with an example.',
      keywords: ['Clustered', 'Non-Clustered', 'Physical order', 'B-Tree', 'Leaf nodes', 'Pointers', 'Primary Key'],
      sampleAnswer: 'A clustered index dictates the actual physical order of table rows on disk, so only one can exist per table (usually the primary key). Non-clustered indexes create a separate lookup structure containing sorted index keys and pointers back to the physical data rows.'
    },
    {
      id: 'mock-t3',
      round: 'Technical Round',
      company: 'Amazon',
      role: 'Software Development Engineer (SDE-1)',
      text: 'How would you detect and resolve high latency caused by database queries in a high-traffic microservice?',
      keywords: ['EXPLAIN plan', 'Slow query logs', 'Indexes', 'N+1 problem', 'Connection pool', 'Caching', 'Redis', 'Read replicas'],
      sampleAnswer: 'I would check APM metrics and slow query logs, then run EXPLAIN on the bottleneck query to inspect table scans. Remediation steps include adding appropriate composite indexes, tuning HikariCP connection pool, and introducing a Redis read cache layer.'
    },
    {
      id: 'mock-t4',
      round: 'Technical Round',
      company: 'Accenture',
      role: 'Associate Software Engineer',
      text: 'What is the purpose of the Java 8 Streams API, and what is the difference between intermediate and terminal operations?',
      keywords: ['Streams', 'Functional', 'Lazy evaluation', 'Intermediate', 'Terminal', 'Filter', 'Map', 'Collect'],
      sampleAnswer: 'Streams provide a declarative way to process sequences of elements. Intermediate operations (like filter and map) are lazy and return a new Stream without executing until a terminal operation (like collect, count, or forEach) is triggered.'
    }
  ],
  hr: [
    {
      id: 'mock-h1',
      round: 'HR Round',
      company: 'Infosys',
      role: 'Java Developer',
      text: 'Tell me about a situation where you had a disagreement with a team member during a project. How did you handle it?',
      keywords: ['Situation', 'Task', 'Action', 'Result', 'Discussion', 'Data-driven', 'Active listening', 'Compromise', 'Resolution'],
      sampleAnswer: 'In our capstone project, my teammate wanted to use a NoSQL database while I advocated for PostgreSQL. Instead of arguing, I proposed we benchmark both against our schema requirements. The tests proved PostgreSQL handled our relational queries with significantly less overhead, and we agreed amicably on that direction.'
    },
    {
      id: 'mock-h2',
      round: 'HR Round',
      company: 'TCS',
      role: 'Ninja Developer',
      text: 'Why do you want to join our organization, and what makes you think you will succeed here?',
      keywords: ['Training', 'Scale', 'Learning culture', 'Work ethic', 'Adaptability', 'Growth mindset'],
      sampleAnswer: 'I admire the company reputation for world-class onboarding and diverse client projects across banking and healthcare. I will succeed because of my strong work ethic, disciplined computer science foundation, and eagerness to continuously reskill.'
    },
    {
      id: 'mock-h3',
      round: 'HR Round',
      company: 'Amazon',
      role: 'Software Development Engineer (SDE-1)',
      text: 'Give an example of a time when you showed Customer Obsession or took complete ownership of a problem.',
      keywords: ['Customer', 'Ownership', 'End-to-end', 'Proactive', 'Impact', 'Metric', 'Deliver'],
      sampleAnswer: 'When testing a project portal, I noticed users faced an unexpected 5-second delay when submitting registration. Even though this was not my assigned bug, I debugged the client-server payload and compressed the asset bundle, delivering an instant 800ms load time for all users.'
    }
  ],
  project: [
    {
      id: 'mock-p1',
      round: 'Project Discussion',
      company: 'Infosys',
      role: 'Java Developer',
      text: 'Walk me through the database schema of your primary project. How did you normalize it and prevent data inconsistency?',
      keywords: ['3NF', 'Primary Key', 'Foreign Key', 'Cascade', 'Transactions', 'ACID', 'Normalization', 'Constraints'],
      sampleAnswer: 'We designed the database normalized to 3NF across 6 core entities. Primary keys use BigInt auto-increment, and relationships use indexed foreign keys with ON DELETE RESTRICT to avoid accidental data loss. Business-critical operations run within Spring @Transactional blocks.'
    },
    {
      id: 'mock-p2',
      round: 'Project Discussion',
      company: 'Cognizant',
      role: 'GenC Next',
      text: 'What was the single most difficult bug you encountered in your project, and what debugging steps led you to the solution?',
      keywords: ['Root cause', 'Logs', 'Breakpoints', 'Race condition', 'Network', 'Fix', 'Prevention'],
      sampleAnswer: 'We encountered intermittent CORS preflight failures on authentication endpoints. By examining browser network headers and server security configuration, I discovered the security filter chain was intercepting OPTIONS preflight requests before our CORS filter could process them. Adding an explicit permitAll for OPTIONS resolved the issue.'
    }
  ]
};
