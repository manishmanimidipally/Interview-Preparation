# InterviewPilot AI — Company-Specific Interview Preparation Platform

![InterviewPilot AI Banner](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80)

**InterviewPilot AI** is a complete, modern, professional web platform designed for fresh graduates and job seekers preparing for company-specific campus placements and lateral technical hiring drives across India and global technology firms.

The platform provides company-specific recruitment tracks for top employers: **Infosys, TCS, Amazon, Microsoft, Google, Accenture, Wipro, Capgemini, Cognizant, Deloitte, Oracle, IBM, Tech Mahindra, and HCLTech**.

---

## 🌟 Key Product Features

### 1. Company Explorer & Preparation Hub
- **14 Top Hiring Companies** supported with accurate hiring programs (TCS NQT, Infosys InfyTQ / HackWithInfy, Amazon WOW / Off-Campus, Accenture Cognitive Assessment, Cognizant GenC / GenC Next).
- Clear round-by-round syllabus breakdown:
  1. **Coding Round** (Arrays, Strings, Searching & Sorting, Linked Lists, Stack & Queue, Trees, Dynamic Programming, Java challenges).
  2. **Technical Round** (Core Java, OOP, Collections internals, Exception Handling, Multithreading, Java 8 Streams, SQL Joins, DBMS ACID, Spring Boot, Hibernate N+1, REST APIs).
  3. **Project Discussion** (STAR Method analysis, system architecture, database design, trade-offs, and failure recovery).
  4. **HR Round** (Elevator pitch, cultural fit, relocation policies, strengths & weaknesses, and 5-year vision).

### 2. Multi-Language Interactive Coding Practice Runner
- Multi-language code editor supporting **Java (OpenJDK 17), Python 3.11, C++ (G++ 14), and JavaScript (Node 20)**.
- Sample and hidden test cases with realistic compilation delay, execution runtime (ms), and memory consumption (MB).
- Submission history log with status and percentile benchmarks.
- Optimal model solution with asymptotic complexity breakdowns.

### 3. Custom Project Defense & Viva Generator
- Add custom academic capstone or personal projects (Title, Description, Tech Stack, Database, Architecture, Features, and Individual Contribution).
- Automatically generates 5+ project-specific viva questions testing architecture, query performance, and failure recovery.
- Interactive response sandbox with STAR framework indicator matching.

### 4. AI-Powered Timed Mock Interview
- Company, role, and round selection wizard.
- Real-time countdown timer per question with auto-advancement.
- Speech/text response capture.
- **Diagnostic Scorecard**:
  - Technical Accuracy % (domain terminology & concept depth).
  - Answer Clarity % (structure, paragraph breaks, brevity).
  - Professional Communication % (professional vocabulary).
  - **Observable Confidence Indicator %** (derived strictly from observable linguistic response patterns, such as the absence of hesitant fillers like "maybe", "kind of", "not sure" vs definitive engineering verbs).
  - Question-by-question review with candidate response and recommended delivery.
  - Printable / Downloadable interview scorecard.

### 5. HR Round with Verbal AI Feedback
- Question bank covering common behavioral scenarios.
- High-impact model answers structured with the STAR method.
- Real-time AI response analyzer highlighting missing keywords, hesitant filler counts, and suggested rewrites.

### 6. Diagnostic Analytics & Readiness Tracking
- Visualized with **Recharts**: Weekly practice volume stacked bar charts, topic mastery radar charts, and company readiness index meters.
- **Weak Topics Diagnostic Alert** with one-click direct revision links.
- Persistent candidate state using `localStorage` (ready for REST API sync).

### 7. Strict Question Verification Standard
- Questions are labeled with transparent badges:
  - `VERIFIED_PUBLIC` — Confirmed from verified public candidate experiences (GeeksforGeeks, Glassdoor, LeetCode Discuss).
  - `COMMONLY_REPORTED` — Consistently reported in placement drives and alumni records.
  - `AI_GENERATED` — Synthesized by AI for syllabus coverage.
- Includes sources and last-verified dates.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | React.js (v18.3.1), Vite (v5.4), JavaScript (ESModules) |
| **Styling & Design System** | Tailwind CSS (v3.4), Custom Glassmorphism, Dark/Light Mode Theme |
| **Icons & Visuals** | Lucide React, Canvas Confetti |
| **Data Visualization** | Recharts (v2.12) |
| **HTTP Client** | Axios (configured with JWT bearer interceptors) |
| **Routing** | React Router DOM (v6.23) |
| **Backend Architecture (Ready)** | Java Spring Boot 3.x, Spring Security, MySQL 8.x, JWT Authentication |

---

## 📁 Project Folder Structure

```
interview-pilot-ai/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   └── common/
│   │       ├── Badge.jsx
│   │       ├── Footer.jsx
│   │       ├── MetricCard.jsx
│   │       ├── Modal.jsx
│   │       ├── Navbar.jsx
│   │       ├── NotificationDropdown.jsx
│   │       ├── Sidebar.jsx
│   │       └── VerificationTag.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── BookmarkContext.jsx
│   │   ├── ProgressContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── aptitudeQuestionsData.js
│   │   ├── codingQuestionsData.js
│   │   ├── companiesData.js
│   │   ├── hrQuestionsData.js
│   │   ├── mockInterviewQuestionsData.js
│   │   ├── mockUserData.js
│   │   ├── projectQuestionsData.js
│   │   └── technicalQuestionsData.js
│   ├── features/
│   │   ├── analytics/
│   │   │   ├── TopicRadarChart.jsx
│   │   │   ├── WeakTopicsAlert.jsx
│   │   │   └── WeeklyChart.jsx
│   │   ├── coding/
│   │   │   └── CodeEditor.jsx
│   │   ├── companies/
│   │   │   ├── CompanyCard.jsx
│   │   │   └── CompanyFilter.jsx
│   │   ├── hr/
│   │   │   └── HrQuestionCard.jsx
│   │   ├── mock-interview/
│   │   │   ├── InterviewScorecard.jsx
│   │   │   ├── InterviewSession.jsx
│   │   │   └── InterviewSetup.jsx
│   │   ├── projects/
│   │   │   ├── ProjectFormModal.jsx
│   │   │   └── ProjectQuestionCard.jsx
│   │   └── technical/
│   │       └── TechnicalCard.jsx
│   ├── layouts/
│   │   ├── AuthLayout.jsx
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── AnalyticsPage.jsx
│   │   ├── CodingPracticePage.jsx
│   │   ├── CompanyExplorerPage.jsx
│   │   ├── CompanyPrepPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── ForgotPasswordPage.jsx
│   │   ├── HrPrepPage.jsx
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── MockInterviewPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── ProfileSetupPage.jsx
│   │   ├── ProjectPrepPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── TechnicalPrepPage.jsx
│   ├── services/
│   │   ├── api.js
│   │   ├── companyService.js
│   │   ├── mockInterviewService.js
│   │   ├── projectService.js
│   │   └── questionService.js
│   └── utils/
│       ├── codeTemplates.js
│       ├── evaluationEngine.js
│       └── formatters.js
```

---

## 🚀 Installation & Local Setup

### Prerequisites
- **Node.js**: v18.0.0 or higher (v22 recommended)
- **npm**: v9.0.0 or higher

### Step 1: Clone or Navigate to Directory
```bash
cd Interview_Preparation
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port indicated in terminal).

### Step 4: Build for Production
```bash
npm run build
```
Generates optimized static bundles in the `dist/` directory with code splitting.

### Step 5: Preview Production Build
```bash
npm run preview
```

---

## 🔌 Backend Integration Guide (Java Spring Boot + MySQL)

The frontend is built with clean service abstraction layers (`src/services/api.js`). When connecting a real Spring Boot backend, perform the following steps:

### 1. Environment Variable
Create a `.env` file in the project root:
```env
VITE_API_URL=http://localhost:8080/api/v1
```

### 2. Spring Boot Architecture Overview

```
src/main/java/com/interviewpilot/
├── controller/
│   ├── AuthController.java            // POST /api/v1/auth/login, /register
│   ├── CompanyController.java         // GET  /api/v1/companies, /{id}
│   ├── QuestionController.java        // GET  /api/v1/questions/coding, /technical, /hr
│   ├── ProjectController.java         // POST /api/v1/projects, GET /api/v1/projects
│   └── MockInterviewController.java   // POST /api/v1/mock/start, /evaluate, /finalize
├── model/
│   ├── User.java
│   ├── Company.java
│   ├── Question.java
│   ├── UserProject.java
│   └── MockReport.java
├── repository/
│   ├── UserRepository.java
│   ├── CompanyRepository.java
│   └── QuestionRepository.java
├── security/
│   ├── JwtTokenProvider.java
│   ├── JwtAuthenticationFilter.java
│   └── SecurityConfig.java
└── service/
    ├── CompanyService.java
    ├── EvaluationService.java
    └── QuestionService.java
```

### 3. MySQL Database Schema (DDL)

```sql
CREATE DATABASE interview_pilot_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE interview_pilot_db;

-- 1. Users table
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    target_company VARCHAR(100) DEFAULT 'Infosys',
    target_role VARCHAR(100) DEFAULT 'Java Developer',
    graduation_year INT DEFAULT 2025,
    primary_stack VARCHAR(255) DEFAULT 'Java, Spring Boot, MySQL',
    experience_level VARCHAR(50) DEFAULT 'Fresh Graduate',
    college VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Companies table
CREATE TABLE companies (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    category VARCHAR(100),
    difficulty VARCHAR(50),
    accent_color VARCHAR(20),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Questions table
CREATE TABLE questions (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    topic VARCHAR(100) NOT NULL,
    round_type ENUM('CODING', 'TECHNICAL', 'PROJECT', 'HR', 'APTITUDE') NOT NULL,
    difficulty ENUM('Easy', 'Medium', 'Hard', 'Easy-Medium', 'Medium-Hard') NOT NULL,
    verification_type ENUM('VERIFIED_PUBLIC', 'COMMONLY_REPORTED', 'AI_GENERATED') NOT NULL,
    verified_source VARCHAR(255),
    last_verified VARCHAR(50),
    description TEXT,
    starter_code JSON,
    test_cases JSON,
    answer_guidance JSON
);

-- 4. User Projects
CREATE TABLE user_projects (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    tech_stack VARCHAR(255),
    database_tech VARCHAR(100),
    architecture VARCHAR(255),
    key_features TEXT,
    contribution TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 5. Mock Interview Reports
CREATE TABLE mock_reports (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    company VARCHAR(100) NOT NULL,
    role VARCHAR(100) NOT NULL,
    round VARCHAR(100) NOT NULL,
    overall_score INT NOT NULL,
    technical_accuracy INT NOT NULL,
    clarity INT NOT NULL,
    communication INT NOT NULL,
    confidence_score INT NOT NULL,
    verdict VARCHAR(100) NOT NULL,
    response_breakdown JSON,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### 4. Spring Security Configuration Snippet

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationFilter jwtAuthFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .cors(Customizer.withDefaults())
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**", "/api/v1/companies/**", "/api/v1/questions/**").permitAll()
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
```

---

## 📊 Summary of Implemented Features

| Feature | Status | Notes |
|---|---|---|
| **Landing Page** | ✅ Completed | Search bar, 14 popular companies, features, workflow, labeled sample testimonials |
| **Authentication Flow** | ✅ Completed | Register, Login, Forgot Password, and Profile Setup |
| **Candidate Dashboard** | ✅ Completed | Readiness Index, streak counter, metric cards, recent activity, upcoming tasks |
| **Company Explorer** | ✅ Completed | Directory of 14 companies with difficulty, roles, rounds, search & category filters |
| **Company Preparation Hub** | ✅ Completed | Round-by-round tabs (Coding, Technical, Project, HR), role selector, prep resources |
| **Coding Practice Runner** | ✅ Completed | Java, Python, C++, JS editor, test case runner, submission history, confetti |
| **Technical Round Viva** | ✅ Completed | Core Java, OOP, Collections, Concurrency, SQL, Spring Boot, REST APIs |
| **Project Interview Prep** | ✅ Completed | Add custom project modal, STAR framework, custom viva question generator |
| **AI Mock Interview** | ✅ Completed | Setup wizard, live countdown timer, 1-by-1 questions, scorecard, printable report |
| **HR Round Practice** | ✅ Completed | Sample answers, answer editor, observable confidence scoring, feedback tips |
| **Progress & Analytics** | ✅ Completed | Recharts weekly volume chart, radar domain mastery chart, weak topic alerts |
| **Dark / Light Mode** | ✅ Completed | Seamless theme toggle with localStorage persistence |
| **Bookmarks System** | ✅ Completed | Save favorite companies and questions |
| **Notification Center** | ✅ Completed | Placement drive updates, streak milestones, and interview reminders |
| **Spring Boot Ready** | ✅ Completed | Axios instance with JWT interceptors, API service architecture, MySQL schema |

---

## 📄 License & Attribution
- Built with React, Vite, Tailwind CSS, and Recharts.
- Verified interview experiences are sourced from public candidate archives (GeeksforGeeks, Glassdoor, LeetCode Discuss) and clearly labeled with verification tags and dates.
