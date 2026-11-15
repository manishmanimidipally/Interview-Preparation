// Project Discussion interview questions, STAR method guidelines, and project question generator

export const STANDARD_PROJECT_QUESTIONS = [
  {
    id: 'proj-q1-explain',
    title: 'Explain your project to me like I am a technical client.',
    category: 'Architecture & Overview',
    verificationType: 'COMMONLY_REPORTED',
    verifiedSource: 'Standard Tech Interview Project Viva (Infosys, TCS, Amazon)',
    lastVerified: 'Jan 2025',
    questionPrompt: 'Explain your project from high-level problem statement to technical execution.',
    starFramework: {
      situation: 'Describe who the user is and the fundamental problem they were experiencing without your system.',
      task: 'Define what you set out to build (e.g., real-time collaboration web app, microservices payment aggregator).',
      action: 'Detail the tech stack chosen, modular architecture, core APIs, and authentication flow.',
      result: 'Conclude with metrics: latency, data throughput, user feedback, or automated test coverage.'
    },
    sampleAnswer: 'Our project is an automated recruitment screening platform built to eliminate 70% of manual resume review hours. We designed a microservices architecture using Spring Boot for business logic, PostgreSQL for ACID compliance, and React with Tailwind for the dashboard. I architected the candidate submission pipeline which decreased initial screening latency from 48 hours to under 3 minutes.',
    interviewerExpectations: [
      'Clarity of speech without stumbling on buzzwords.',
      'Ability to articulate both business objective and architectural components.',
      'Demonstrates passion and deep familiarity with every layer.'
    ]
  },
  {
    id: 'proj-q2-contribution',
    title: 'What was your individual contribution vs your team members?',
    category: 'Individual Role & Ownership',
    verificationType: 'COMMONLY_REPORTED',
    verifiedSource: 'Campus Viva Evaluation Standards',
    lastVerified: 'Jan 2025',
    questionPrompt: 'Differentiate your specific commits and responsibilities from group contributions.',
    starFramework: {
      situation: 'In a 4-person team, responsibilities had to be divided cleanly to avoid merge conflicts.',
      task: 'I had primary ownership of the backend RESTful service, JWT authentication security filter, and database indexing.',
      action: 'I developed 14 REST endpoints, configured Spring Security with stateless JWT filters, and integrated Redis for session caching.',
      result: 'All backend milestones were delivered 1 week ahead of sprint deadline with 92% unit test coverage via JUnit 5 and Mockito.'
    },
    sampleAnswer: 'While my teammate handled the UI components, I took 100% ownership of backend engineering and data modeling. Specifically, I designed the relational schema, implemented the Spring Security JWT chain, and wrote unit tests for service layers using Mockito.',
    interviewerExpectations: [
      'Honesty about what was team-built vs self-built.',
      'Proves actual coding ability rather than just presenting a downloaded GitHub template.'
    ]
  },
  {
    id: 'proj-q3-tech-choice',
    title: 'Why did you choose this technology stack over alternatives?',
    category: 'Engineering Trade-offs',
    verificationType: 'COMMONLY_REPORTED',
    verifiedSource: 'Amazon SDE & Infosys Specialist Programmer Rounds',
    lastVerified: 'Nov 2024',
    questionPrompt: 'Defend your choice of language, framework, database, and library.',
    starFramework: {
      situation: 'We needed a technology capable of handling structured relational queries with strong transactional guarantees.',
      task: 'Evaluate between MongoDB vs PostgreSQL, and Node.js vs Java Spring Boot.',
      action: 'We selected Spring Boot and PostgreSQL because our domain had rigid foreign-key relationships and required ACID transactions for payments.',
      result: 'Prevented data inconsistency and benefited from Spring Data JPA automated repository generation.'
    },
    sampleAnswer: 'We evaluated MongoDB vs PostgreSQL. Since our data had tightly coupled entities (Users, Orders, Transactions) requiring atomic integrity, an RDBMS was the correct architectural choice over NoSQL. We chose Spring Boot because of its battle-tested enterprise ecosystem and robust dependency injection.',
    interviewerExpectations: [
      'Not saying "I used it because I already knew it".',
      'Demonstrates trade-off evaluation: consistency vs flexibility, latency vs ease of prototyping.'
    ]
  },
  {
    id: 'proj-q4-challenges',
    title: 'What technical challenges did you face, and how did you debug them?',
    category: 'Problem Solving & Debugging',
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'TCS Digital & Infosys Technical Interview 2024',
    lastVerified: 'Dec 2024',
    questionPrompt: 'Describe a significant bug, bottleneck, or integration failure you resolved.',
    starFramework: {
      situation: 'During stress testing, API response time spiked to 3.2 seconds under 200 concurrent requests.',
      task: 'Identify the bottleneck in database query execution or thread starvation.',
      action: 'I inspected Hibernate SQL logs and discovered the classic N+1 query problem on our Order-to-Item mapping. I replaced it with a JOIN FETCH query and indexed the foreign key.',
      result: 'P95 latency dropped from 3200ms to 85ms.'
    },
    sampleAnswer: 'The biggest challenge was an N+1 query issue during checkout listing that degraded database response time. By analyzing slow query logs, I realized Hibernate was firing 50 individual queries for line items. Refactoring the JPQL query to use JOIN FETCH and adding a composite index on (order_id, created_at) dropped latency by 97%.',
    interviewerExpectations: [
      'Specific debugging methodologies (profilers, logs, query explain plans).',
      'Resilience when things break.'
    ]
  },
  {
    id: 'proj-q5-database-design',
    title: 'Explain your database design and normalization.',
    category: 'Database Architecture',
    verificationType: 'COMMONLY_REPORTED',
    verifiedSource: 'Oracle & Cognizant GenC Next Placement 2024',
    lastVerified: 'Oct 2024',
    questionPrompt: 'Walk through your ER diagram, primary keys, foreign keys, and normalization level.',
    starFramework: {
      situation: 'Our application handles multi-tenant organizational records.',
      task: 'Design a 3NF normalized schema preventing data redundancy while supporting performant joins.',
      action: 'Created entities for Users, Roles, Audits, and Products with explicit ON DELETE CASCADE policies and B-Tree indexes on search columns.',
      result: 'Zero orphaned records and instant retrieval on indexed foreign keys.'
    },
    sampleAnswer: 'Our database is normalized up to Third Normal Form (3NF). We have 6 primary tables with surrogate auto-incrementing BigInt IDs. Relationships are established via foreign keys with index coverage. To optimize high-traffic read queries on user search, we created composite indexes on (status, created_at).',
    interviewerExpectations: [
      'Understanding of 1NF, 2NF, 3NF.',
      'Awareness of indexing costs vs read benefits.'
    ]
  },
  {
    id: 'proj-q6-error-handling',
    title: 'How did you handle errors and edge cases in production?',
    category: 'Resilience & Reliability',
    verificationType: 'COMMONLY_REPORTED',
    verifiedSource: 'Infosys DSE Technical Round',
    lastVerified: 'Nov 2024',
    questionPrompt: 'Explain client validation, server error boundaries, and logging strategy.',
    starFramework: {
      situation: 'Uncaught exceptions would expose raw stack traces and leak database credentials.',
      task: 'Standardize API error contracts across all endpoints.',
      action: 'Implemented a central @ControllerAdvice that intercepts MethodArgumentNotValidException and custom runtime exceptions, returning standardized RFC 7807 problem details.',
      result: '100% uniform error responses with correlation IDs for easy log traceability.'
    },
    sampleAnswer: 'We implemented dual-layer validation: client-side form feedback using Zod, and backend bean validation using @Valid annotations. In the backend, a central GlobalExceptionHandler catches domain exceptions and returns structured JSON containing timestamp, error code, and user-friendly message without exposing raw stack traces.',
    interviewerExpectations: [
      'Security awareness: no stack traces exposed to end-users.',
      'Graceful degradation.'
    ]
  },
  {
    id: 'proj-q7-future-improvements',
    title: 'What improvements would you make if you had 3 more months?',
    category: 'System Evolution & Scalability',
    verificationType: 'COMMONLY_REPORTED',
    verifiedSource: 'Amazon & Microsoft Final Rounds',
    lastVerified: 'Jan 2025',
    questionPrompt: 'Reflect on system bottlenecks, observability, and scaling roadmap.',
    starFramework: {
      situation: 'Currently the system operates as a monolithic deployment on a single cloud VM.',
      task: 'Prepare architecture for 10x traffic increase and continuous deployment.',
      action: 'Implement Redis distributed caching for hot data, integrate Docker and GitHub Actions CI/CD pipeline, and add Prometheus/Grafana monitoring.',
      result: 'System would become horizontally scalable and auto-heal during traffic spikes.'
    },
    sampleAnswer: 'Given additional time, I would first introduce a Redis caching layer to handle 80% of read traffic without hitting MySQL. Second, I would containerize the services using Docker and set up an automated CI/CD pipeline with GitHub Actions. Third, I would add OpenTelemetry tracing to monitor end-to-end request latency.',
    interviewerExpectations: [
      'Engineering maturity: knowing that no system is ever "complete".',
      'Familiarity with cloud, caching, and CI/CD concepts.'
    ]
  }
];

// Dynamic generator based on user custom project inputs
export const generateCustomProjectQuestions = (project) => {
  const { title, techStack = '', database = '', architecture = '', contribution = '' } = project;
  
  return [
    {
      id: `custom-1-${Date.now()}`,
      category: 'Architecture Deep-Dive',
      title: `How does ${architecture || 'your architecture'} support the core features of "${title}"?`,
      hint: `Explain how data moves from user client to ${database || 'your database'} and back. Highlight where latency or caching is managed.`,
      suggestedKeywords: [architecture, techStack, 'Separation of concerns', 'Data flow', 'Latency'].filter(Boolean)
    },
    {
      id: `custom-2-${Date.now()}`,
      category: 'Technology Selection',
      title: `Why did you select ${techStack || 'this stack'} specifically for "${title}" over alternative tools?`,
      hint: `Address developer productivity, library support, asynchronous handling, or community stability.`,
      suggestedKeywords: ['Ecosystem', 'Type safety', 'Scalability', 'Performance', 'Community support']
    },
    {
      id: `custom-3-${Date.now()}`,
      category: 'Data Layer & Concurrency',
      title: `In ${database || 'your database'}, how would your schema handle 10,000 concurrent users performing writes simultaneously?`,
      hint: `Discuss database connection pools (HikariCP), transaction isolation levels, indexing, or read replicas.`,
      suggestedKeywords: ['Connection pool', 'Pessimistic/Optimistic locking', 'Indexes', 'Deadlocks']
    },
    {
      id: `custom-4-${Date.now()}`,
      category: 'Personal Ownership',
      title: `You mentioned your role was "${contribution || 'core development'}". What was the most technically complex algorithm or query you personally wrote?`,
      hint: `Walk through input parameters, algorithmic steps, time complexity, and edge cases you tested.`,
      suggestedKeywords: ['Complexity', 'Edge cases', 'Unit tests', 'Refactoring', 'Optimization']
    },
    {
      id: `custom-5-${Date.now()}`,
      category: 'Failure & Recovery',
      title: `If the ${database || 'database'} goes down unexpectedly while a user is midway through an operation in "${title}", what happens?`,
      hint: `Explain transaction rollbacks, health check endpoints, retry mechanisms, and circuit breakers.`,
      suggestedKeywords: ['Rollback', 'Circuit breaker', 'Health checks', 'Graceful fallback']
    }
  ];
};
