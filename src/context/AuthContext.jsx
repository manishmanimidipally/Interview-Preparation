import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_USER } from '../data/mockUserData';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('interviewpilot_user');
    return saved ? JSON.parse(saved) : INITIAL_USER;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem('interviewpilot_token') || 'demo_jwt_token_sample';
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('interviewpilot_user') || true; // Demo mode enabled by default
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('interviewpilot_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('interviewpilot_user');
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('interviewpilot_token', token);
    } else {
      localStorage.removeItem('interviewpilot_token');
    }
  }, [token]);

  const login = (email, password) => {
    // Simulated authentication ready for Spring Boot backend integration
    const mockUser = {
      ...INITIAL_USER,
      email: email || INITIAL_USER.email,
      name: email ? email.split('@')[0].replace('.', ' ') : INITIAL_USER.name
    };
    setUser(mockUser);
    setToken('jwt_bearer_token_' + Date.now());
    setIsAuthenticated(true);
    return { success: true, user: mockUser };
  };

  const register = (userData) => {
    const newUser = {
      id: 'user_' + Date.now(),
      name: userData.name || 'New Candidate',
      email: userData.email,
      targetCompany: userData.targetCompany || 'Infosys',
      targetRole: userData.targetRole || 'Software Engineer',
      graduationYear: userData.graduationYear || 2025,
      primaryStack: userData.primaryStack || 'Java, Spring Boot, SQL',
      experienceLevel: userData.experienceLevel || 'Fresher',
      college: userData.college || 'Engineering College',
      joinedDate: new Date().toISOString()
    };
    setUser(newUser);
    setToken('jwt_bearer_token_' + Date.now());
    setIsAuthenticated(true);
    return { success: true, user: newUser };
  };

  const updateProfile = (updatedFields) => {
    setUser(prev => {
      const updated = { ...prev, ...updatedFields };
      return updated;
    });
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('interviewpilot_user');
    localStorage.removeItem('interviewpilot_token');
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, register, updateProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
