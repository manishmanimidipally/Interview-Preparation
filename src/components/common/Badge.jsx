import React from 'react';
import { getDifficultyColor } from '../../utils/formatters';

export const Badge = ({ children, variant = 'default', size = 'sm', className = '' }) => {
  let baseStyle = 'inline-flex items-center font-medium rounded-full border transition-colors';

  const sizeStyles = {
    xs: 'px-2 py-0.5 text-[10px]',
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs font-semibold'
  };

  let colorStyle = '';
  if (['easy', 'medium', 'hard', 'easy-medium', 'medium-hard'].includes(variant?.toLowerCase())) {
    colorStyle = getDifficultyColor(variant);
  } else {
    switch (variant) {
      case 'primary':
        colorStyle = 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800';
        break;
      case 'success':
        colorStyle = 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800';
        break;
      case 'warning':
        colorStyle = 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800';
        break;
      case 'danger':
        colorStyle = 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800';
        break;
      case 'neutral':
      default:
        colorStyle = 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
        break;
    }
  }

  return (
    <span className={`${baseStyle} ${sizeStyles[size] || sizeStyles.sm} ${colorStyle} ${className}`}>
      {children}
    </span>
  );
};
