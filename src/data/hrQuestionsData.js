// HR and Behavioral interview questions with STAR breakdown, verified sources, and AI evaluation criteria

export const HR_QUESTIONS = [
  {
    id: 'hr-tell-me-about-yourself',
    question: 'Tell me about yourself.',
    category: 'Introduction & Elevator Pitch',
    companyTags: ['Infosys', 'TCS', 'Amazon', 'Accenture', 'Cognizant', 'Google', 'Wipro', 'Deloitte', 'Microsoft'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Universal HR Round Standard across Indian IT & Global Tech',
    lastVerified: 'Jan 2025',
    keywords: ['Computer Science', 'Projects', 'Hands-on', 'Problem solving', 'Continuous learning', 'Curious', 'Results'],
    whatHrEvaluates: 'Communication articulation, self-confidence, relevance to the job role, and structured storytelling within 90 to 120 seconds.',
    starGuidance: {
      present: 'Who you are, current education or current role, and core technical focus (e.g., Computer Science graduate specializing in Java/Cloud development).',
      past: 'Key academic milestones, significant projects built, or internships completed with measurable impact.',
      future: 'Why you are here today and how this company matches your career aspirations.'
    },
    sampleAnswer: `I am a final-year Computer Science engineering student with a deep passion for backend software development and distributed systems. Throughout my academic journey, I have built a solid foundation in Data Structures, Core Java, Spring Boot, and SQL through hands-on projects and coding challenges.

Recently, I led the development of a real-time collaborative platform where I designed RESTful APIs and optimized database queries, reducing query latency by 35%. Beyond coursework, I regularly practice algorithmic problem-solving and have solved over 250 problems across LeetCode and HackerRank.

I have closely followed your company's digital transformation engineering, and I am excited to bring my technical foundation, discipline, and eagerness to learn into your entry-level engineering team.`,
    tips: [
      'Keep it under 2 minutes.',
      'Do not just recite your resume chronologically.',
      'End with why you are excited specifically for this opportunity.'
    ],
    commonPitfalls: [
      'Starting with personal family details or kindergarten school history.',
      'Sounding like a rehearsed robot without energy.'
    ]
  },
  {
    id: 'hr-why-should-we-hire-you',
    question: 'Why should we hire you over other candidates?',
    category: 'Value Proposition & Fit',
    companyTags: ['Infosys', 'TCS', 'Capgemini', 'Deloitte', 'HCLTech'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Infosys & TCS HR Managerial Round 2024',
    lastVerified: 'Dec 2024',
    keywords: ['Fast learner', 'Technical foundation', 'Ownership', 'Adaptability', 'Team player', 'Production mindset'],
    whatHrEvaluates: 'Alignment with company needs, humility combined with confidence, and willingness to adapt to new stacks.',
    starGuidance: {
      differentiator1: 'Strong core fundamentals rather than superficial familiarity.',
      differentiator2: 'Demonstrated rapid learning ability through self-directed projects.',
      differentiator3: 'High adaptability to team culture, shifts, and client requirements.'
    },
    sampleAnswer: `You should hire me because I combine strong computer science fundamentals with an agile learning velocity. While many freshers learn theory for exams, I build practical software—demonstrated by my project experience with Spring Boot, relational databases, and REST APIs.

Secondly, I adapt quickly. When my project required Redis caching, I learned the basics and implemented it within 4 days. 

Lastly, I understand that in enterprise consulting, reliability, team collaboration, and client empathy matter just as much as code. I bring high work ethic, dedication, and openness to learn whatever tech stack your upcoming engagements require.`,
    tips: [
      'Focus on the value you bring to the team.',
      'Show eagerness to contribute from Day 1.'
    ],
    commonPitfalls: [
      'Putting down other applicants.',
      'Overpromising on skills you do not possess.'
    ]
  },
  {
    id: 'hr-why-join-this-company',
    question: 'Why do you want to join our company?',
    category: 'Company Alignment & Culture',
    companyTags: ['Infosys', 'TCS', 'Amazon', 'Accenture', 'Google', 'Deloitte', 'Oracle'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Campus Recruitment HR Question Bank 2024',
    lastVerified: 'Jan 2025',
    keywords: ['Training program', 'Global presence', 'Culture of innovation', 'Career roadmap', 'Enterprise scale'],
    whatHrEvaluates: 'Whether you did research on the company, or if you applied indiscriminately to 50 companies.',
    starGuidance: {
      research: 'Cite a specific initiative, training academy (e.g. Infosys Mysore Training Campus), or innovation project.',
      alignment: 'Connect your personal growth with the company mission.',
      longTerm: 'Express genuine commitment to grow with the company.'
    },
    sampleAnswer: `I want to join your company for two primary reasons: your world-renowned training ecosystem and the scale of problems you solve for Global 2000 enterprises.

For example, I have read extensively about your specialized digital learning academies and how you invest in continuous reskilling for freshers. As someone starting my career, working in an organization that values foundational engineering, structured mentorship, and international delivery standards is the ideal launchpad.

I want to be part of a team where my contributions touch real-world critical workflows, while continuing to upgrade my technical and consulting skills.`,
    tips: [
      'Mention company specific initiatives (e.g., Mysore campus for Infosys, TCS Research, Amazon Day 1 culture).',
      'Show that you value long-term career growth, not just package.'
    ],
    commonPitfalls: [
      'Giving a generic answer like "It is a big MNC with high salary".'
    ]
  },
  {
    id: 'hr-strengths-and-weaknesses',
    question: 'What are your greatest strengths and weaknesses?',
    category: 'Self-Awareness & Growth Mindset',
    companyTags: ['Infosys', 'TCS', 'Amazon', 'Cognizant', 'Tech Mahindra'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Glassdoor Verified Candidate Interviews 2024',
    lastVerified: 'Nov 2024',
    keywords: ['Analytical thinking', 'Perseverance', 'Time management', 'Public speaking', 'Delegation', 'Actionable steps'],
    whatHrEvaluates: 'Authentic self-awareness and active efforts to improve your weakness.',
    starGuidance: {
      strength: 'Choose a strength relevant to software engineering (e.g., root-cause debugging patience, disciplined consistency).',
      weakness: 'Choose a genuine, non-critical weakness and describe the proactive steps you are taking to overcome it.'
    },
    sampleAnswer: `My greatest strength is my perseverance in debugging and systematic problem analysis. When faced with complex errors or system crashes, I do not panic; I systematically trace logs, review call stacks, and isolate root causes until the issue is resolved.

As for my weakness, I previously found public speaking and presenting in front of large crowds intimidating. Recognizing that clear communication is vital for senior engineering roles, I started actively volunteering to lead our college project standups and joined a weekly technical peer speaking group. Over the past 6 months, my confidence has improved significantly.`,
    tips: [
      'Never say "I have no weaknesses" or "I am a perfectionist" (cliché).',
      'Always pair the weakness with the corrective habit you are practicing.'
    ],
    commonPitfalls: [
      'Mentioning a disqualifying weakness like "I cannot work in teams" or "I miss deadlines".'
    ]
  },
  {
    id: 'hr-willing-to-relocate',
    question: 'Are you willing to relocate to any of our office locations and work in rotational shifts?',
    category: 'Policy & Availability',
    companyTags: ['Infosys', 'TCS', 'Wipro', 'Capgemini', 'Cognizant', 'Accenture', 'HCLTech'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Mandatory Service Agreement HR Verification 2024',
    lastVerified: 'Jan 2025',
    keywords: ['Relocation', 'Flexibility', 'Rotational shifts', 'Cultural exposure', 'Professional growth'],
    whatHrEvaluates: 'Operational compliance and readiness to deploy to client sites/projects.',
    starGuidance: {
      affirmative: 'Give an unequivocal "Yes".',
      perspective: 'Frame relocation as an opportunity to experience new cities and tech hubs.'
    },
    sampleAnswer: `Yes, absolutely. As a fresher starting my career, I view relocation as a wonderful opportunity to experience different technology hubs, collaborate with diverse teams, and immerse myself fully in the company's work environment. I am completely comfortable with rotational shifts as required by client deliverable schedules.`,
    tips: [
      'For service-based companies, flexibility is a decisive hiring filter.'
    ],
    commonPitfalls: [
      'Hesitation or placing conditional restrictions ("Only if I get Bangalore or Pune").'
    ]
  },
  {
    id: 'hr-where-in-five-years',
    question: 'Where do you see yourself in five years?',
    category: 'Career Vision & Ambition',
    companyTags: ['Infosys', 'TCS', 'Amazon', 'Microsoft', 'Deloitte'],
    verificationType: 'COMMONLY_REPORTED',
    verifiedSource: 'Standard IT Services & Product Engineering Viva',
    lastVerified: 'Dec 2024',
    keywords: ['Technical Lead', 'System Architecture', 'Mentorship', 'Certifications', 'End-to-end ownership'],
    whatHrEvaluates: 'Retention potential, ambition, realistic career progression understanding.',
    starGuidance: {
      years1to2: 'Master the tech stack, deliver reliable code, and earn relevant domain certifications.',
      years3to4: 'Take ownership of architectural modules, lead feature development, and mentor junior joiners.',
      year5: 'Step into a Senior Engineer / Module Lead role guiding architectural decisions.'
    },
    sampleAnswer: `In five years, I see myself as a trusted Senior Software Engineer or Technical Module Lead within the organization. 

In the first two years, my goal is to thoroughly master the tech stack, understand our client workflows, and obtain industry cloud/architecture certifications. In years three and four, I want to take end-to-end ownership of complex business components and begin mentoring incoming campus graduates.

By year five, I envision myself contributing directly to architectural designs, solving scalability challenges, and helping the business deliver high-impact digital solutions.`,
    tips: [
      'Balance technical ambition with loyalty to the organization.'
    ],
    commonPitfalls: [
      'Saying "I want to do an MBA or MS abroad in 2 years" (triggers immediate flight-risk flag).'
    ]
  }
];
