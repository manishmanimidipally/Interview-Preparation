import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { BookmarkProvider } from './context/BookmarkContext';
import { ProgressProvider } from './context/ProgressContext';

import { MainLayout } from './layouts/MainLayout';
import { AuthLayout } from './layouts/AuthLayout';

import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { ProfileSetupPage } from './pages/ProfileSetupPage';
import { DashboardPage } from './pages/DashboardPage';
import { CompanyExplorerPage } from './pages/CompanyExplorerPage';
import { CompanyPrepPage } from './pages/CompanyPrepPage';
import { CodingPracticePage } from './pages/CodingPracticePage';
import { TechnicalPrepPage } from './pages/TechnicalPrepPage';
import { ProjectPrepPage } from './pages/ProjectPrepPage';
import { MockInterviewPage } from './pages/MockInterviewPage';
import { HrPrepPage } from './pages/HrPrepPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BookmarkProvider>
          <ProgressProvider>
            <BrowserRouter>
              <Routes>
                {/* Auth Routes */}
                <Route element={<AuthLayout />}>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                </Route>

                {/* Main App Routes */}
                <Route element={<MainLayout />}>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/profile-setup" element={<ProfileSetupPage />} />
                  <Route path="/companies" element={<CompanyExplorerPage />} />
                  <Route path="/companies/:companySlug" element={<CompanyPrepPage />} />
                  <Route path="/coding" element={<CodingPracticePage />} />
                  <Route path="/coding/:questionId" element={<CodingPracticePage />} />
                  <Route path="/technical" element={<TechnicalPrepPage />} />
                  <Route path="/projects" element={<ProjectPrepPage />} />
                  <Route path="/mock-interview" element={<MockInterviewPage />} />
                  <Route path="/hr" element={<HrPrepPage />} />
                  <Route path="/analytics" element={<AnalyticsPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </ProgressProvider>
        </BookmarkProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
