import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_BOOKMARKS } from '../data/mockUserData';

const BookmarkContext = createContext(null);

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('interviewpilot_bookmarks');
    return saved ? JSON.parse(saved) : INITIAL_BOOKMARKS;
  });

  useEffect(() => {
    localStorage.setItem('interviewpilot_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleCompanyBookmark = (companyId) => {
    setBookmarks(prev => {
      const exists = prev.companies.includes(companyId);
      return {
        ...prev,
        companies: exists
          ? prev.companies.filter(id => id !== companyId)
          : [...prev.companies, companyId]
      };
    });
  };

  const isCompanyBookmarked = (companyId) => {
    return bookmarks.companies.includes(companyId);
  };

  const toggleQuestionBookmark = (questionId) => {
    setBookmarks(prev => {
      const exists = prev.questions.includes(questionId);
      return {
        ...prev,
        questions: exists
          ? prev.questions.filter(id => id !== questionId)
          : [...prev.questions, questionId]
      };
    });
  };

  const isQuestionBookmarked = (questionId) => {
    return bookmarks.questions.includes(questionId);
  };

  return (
    <BookmarkContext.Provider value={{
      bookmarks,
      toggleCompanyBookmark,
      isCompanyBookmarked,
      toggleQuestionBookmark,
      isQuestionBookmarked
    }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};
