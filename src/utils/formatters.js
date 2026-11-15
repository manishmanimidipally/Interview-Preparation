// Date and string formatting utilities

export const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const getDifficultyColor = (difficulty) => {
  switch (difficulty?.toLowerCase()) {
    case 'easy':
      return 'text-emerald-700 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800';
    case 'medium':
      return 'text-amber-700 bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800';
    case 'hard':
      return 'text-rose-700 bg-rose-50 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800';
    case 'easy-medium':
      return 'text-teal-700 bg-teal-50 border-teal-200 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-800';
    case 'medium-hard':
      return 'text-orange-700 bg-orange-50 border-orange-200 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-800';
    default:
      return 'text-slate-700 bg-slate-50 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
  }
};

export const getVerificationBadgeInfo = (type) => {
  switch (type) {
    case 'VERIFIED_PUBLIC':
      return {
        label: 'Verified Public Experience',
        shortLabel: 'Verified',
        bgColor: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
        dotColor: 'bg-emerald-500',
        description: 'Confirmed from verified public candidate interview experiences (GeeksforGeeks, Glassdoor, LeetCode Discuss).'
      };
    case 'COMMONLY_REPORTED':
      return {
        label: 'Commonly Reported',
        shortLabel: 'Reported',
        bgColor: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800',
        dotColor: 'bg-blue-500',
        description: 'Consistently reported across multiple alumni forums and student placement drives.'
      };
    case 'AI_GENERATED':
    default:
      return {
        label: 'AI-Generated Practice',
        shortLabel: 'AI Practice',
        bgColor: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800',
        dotColor: 'bg-purple-500',
        description: 'Synthesized by InterviewPilot AI based on company syllabus and recruitment patterns.'
      };
  }
};
