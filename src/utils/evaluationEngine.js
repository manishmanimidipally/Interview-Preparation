// Evaluation engine for AI Mock Interviews and HR answer feedback
// Strictly uses observable response patterns (e.g. structure, length, vocabulary, filler detection, STAR elements)

export const evaluateInterviewResponse = (question, userAnswer, category = 'technical') => {
  const text = (userAnswer || '').trim();
  const wordCount = text.length > 0 ? text.split(/\s+/).length : 0;

  if (wordCount < 10) {
    return {
      technicalAccuracy: 25,
      clarity: 30,
      communication: 35,
      confidenceScore: 30,
      overallScore: 30,
      observablePatterns: {
        wordCount,
        hasStructure: false,
        fillerCount: 0,
        detectedKeywords: []
      },
      strengths: ['Attempted to respond.'],
      improvements: [
        'The answer is too brief to demonstrate technical competence.',
        'Elaborate with practical examples, architectural trade-offs, and clear technical terminology.',
        'Target at least 80–150 words per answer in an actual interview.'
      ],
      suggestedRewrite: 'Expand by mentioning core concepts, your personal hands-on experience, and specific technical keywords.'
    };
  }

  // Observable metrics
  const fillerWords = ['maybe', 'i think so', 'kind of', 'sort of', 'probably', 'not sure', 'stuff', 'things like that'];
  const lowerText = text.toLowerCase();
  
  const detectedFillers = fillerWords.filter(f => lowerText.includes(f));
  const fillerCount = detectedFillers.length;

  // Expected keyword matching from question tags / syllabus
  const keywords = question.keywords || [
    'performance', 'scalability', 'complexity', 'trade-off', 'optimization', 
    'architecture', 'database', 'spring', 'java', 'threading', 'memory', 'exception'
  ];

  const matchedKeywords = keywords.filter(kw => lowerText.includes(kw.toLowerCase()));
  const keywordRatio = Math.min(matchedKeywords.length / Math.max(keywords.length * 0.4, 2), 1);

  // Structural checks (paragraphs, bullet points, STAR keywords)
  const starWords = ['situation', 'task', 'action', 'result', 'when', 'challenge', 'implemented', 'achieved', 'improved', 'learned'];
  const matchedStar = starWords.filter(w => lowerText.includes(w));
  const hasParagraphs = text.includes('\n') || text.includes('. ');

  // Calculate scores (0 to 100)
  // Technical Accuracy: based on keywords, depth, and absence of generic ambiguity
  let technicalAccuracy = Math.round(50 + (keywordRatio * 40) - (fillerCount * 5));
  technicalAccuracy = Math.max(35, Math.min(96, technicalAccuracy));

  // Answer Clarity: sentence structure, paragraph breaks, punctuation
  let clarity = Math.round(55 + (wordCount >= 50 && wordCount <= 250 ? 30 : 15) + (hasParagraphs ? 10 : 0));
  clarity = Math.max(40, Math.min(95, clarity));

  // Communication: vocabulary richness, professional phrasing
  let communication = Math.round(60 + (matchedStar.length > 2 ? 20 : 10) - (fillerCount * 6));
  communication = Math.max(40, Math.min(95, communication));

  // Confidence Indicators (Strictly derived from observable linguistic patterns):
  // High confidence markers: definitive verbs (architected, resolved, executed, ensured)
  // Low confidence markers: hedging/fillers (maybe, i guess, kind of, sort of)
  let confidenceScore = Math.round(70 - (fillerCount * 8) + (matchedKeywords.length >= 3 ? 15 : 0) + (wordCount >= 70 ? 10 : 0));
  confidenceScore = Math.max(30, Math.min(98, confidenceScore));

  const overallScore = Math.round((technicalAccuracy * 0.35) + (clarity * 0.25) + (communication * 0.2) + (confidenceScore * 0.2));

  // Generate actionable observations
  const strengths = [];
  if (wordCount >= 60) strengths.push(`Comprehensive answer length (${wordCount} words) providing sufficient context.`);
  if (matchedKeywords.length > 0) strengths.push(`Strong domain terminology identified: "${matchedKeywords.slice(0, 4).join('", "')}".`);
  if (fillerCount === 0) strengths.push('Definitive language without hesitant hedging or filler expressions.');
  if (matchedStar.length >= 2) strengths.push('Structured narrative touching on problem context and measurable outcome.');
  if (strengths.length === 0) strengths.push('Clear attempt addressing the core question prompt.');

  const improvements = [];
  if (fillerCount > 0) {
    improvements.push(`Reduce tentative phrasing: detected ${fillerCount} hedging terms (${detectedFillers.join(', ')}). State facts affirmatively.`);
  }
  if (matchedKeywords.length < 2) {
    improvements.push('Incorporate deeper technical terms such as time/space complexity, concurrency implications, or design patterns.');
  }
  if (wordCount < 50) {
    improvements.push('Answer is somewhat brief. Elaborate on edge cases, trade-offs, or production constraints you encountered.');
  }
  if (!hasParagraphs && wordCount > 80) {
    improvements.push('Format response with clear transitions or structured points for higher verbal clarity.');
  }

  // Model answer recommendation
  const suggestedRewrite = question.sampleAnswer || 
    `In my previous project, we solved this by first analyzing the core requirement... We chose this approach because of its favorable complexity and ease of scaling. Key lesson learned was proactive monitoring and exception handling.`;

  return {
    technicalAccuracy,
    clarity,
    communication,
    confidenceScore,
    overallScore,
    observablePatterns: {
      wordCount,
      fillerCount,
      detectedFillers,
      matchedKeywords,
      matchedStarElements: matchedStar
    },
    strengths,
    improvements,
    suggestedRewrite
  };
};

export const generateInterviewReport = (sessionData) => {
  const { company, role, round, responses = [] } = sessionData;

  if (responses.length === 0) {
    return {
      overallScore: 0,
      technicalAccuracy: 0,
      clarity: 0,
      communication: 0,
      confidenceScore: 0,
      verdict: 'Incomplete',
      summary: 'No responses recorded during the interview session.'
    };
  }

  const avgTechnical = Math.round(responses.reduce((sum, r) => sum + (r.evaluation?.technicalAccuracy || 60), 0) / responses.length);
  const avgClarity = Math.round(responses.reduce((sum, r) => sum + (r.evaluation?.clarity || 60), 0) / responses.length);
  const avgComm = Math.round(responses.reduce((sum, r) => sum + (r.evaluation?.communication || 60), 0) / responses.length);
  const avgConf = Math.round(responses.reduce((sum, r) => sum + (r.evaluation?.confidenceScore || 60), 0) / responses.length);

  const overall = Math.round((avgTechnical * 0.4) + (avgClarity * 0.25) + (avgComm * 0.2) + (avgConf * 0.15));

  let verdict = 'Needs Preparation';
  if (overall >= 85) verdict = 'Interview Ready (Strong Hire)';
  else if (overall >= 70) verdict = 'Likely Candidate (Hire with Polish)';
  else if (overall >= 55) verdict = 'Borderline (Needs Focused Revision)';

  return {
    company,
    role,
    round,
    totalQuestions: responses.length,
    overallScore: overall,
    technicalAccuracy: avgTechnical,
    clarity: avgClarity,
    communication: avgComm,
    confidenceScore: avgConf,
    verdict,
    completedAt: new Date().toISOString(),
    questionBreakdown: responses.map((r, idx) => ({
      questionIndex: idx + 1,
      questionText: r.question.text,
      userAnswer: r.userAnswer,
      score: r.evaluation?.overallScore || 65,
      accuracy: r.evaluation?.technicalAccuracy || 65,
      clarity: r.evaluation?.clarity || 65,
      improvements: r.evaluation?.improvements || [],
      strengths: r.evaluation?.strengths || [],
      suggestedRewrite: r.evaluation?.suggestedRewrite
    }))
  };
};
