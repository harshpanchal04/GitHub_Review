# Automated Performance Review System for Engineers Using AI

## Overview

This project aims to build an automated performance review system for engineers using AI. By integrating with the GitHub API, the system collects, analyzes, and scores engineers' contributions based on quality, difficulty, impact, and consistency. The goal is to provide objective and actionable performance assessments.

## Features

1. **Data Collection and Preprocessing**
   - Retrieve commits, pull requests, issues, and code changes using the GitHub API.
   - Store data in MongoDB with Mongoose schemas.
   - Clean and preprocess data to remove noise.

2. **Quality Assessment**
   - Use ESLint and SonarQube for code quality analysis.
   - Employ machine learning models for deeper code evaluation.

3. **Difficulty Assessment**
   - Estimate contribution difficulty using ML models.
   - Consider code complexity, dependencies, and required domain knowledge.

4. **Impact and Consistency Assessment**
   - Analyze the impact on the project and business value.
   - Evaluate commit frequency, work quality, and adherence to guidelines.

5. **Scoring**
   - Develop a formula to combine quality, difficulty, impact, and consistency scores.

6. **API Development**
   - Create RESTful APIs with Node.js and Express.js for data retrieval and scoring.

7. **User Interface**
   - Build a React.js interface for accessing performance scores and detailed reports.
   - Include visualizations to highlight strengths and improvement areas.

## Technologies

### Backend
- **Language**: JavaScript/Node.js
- **Framework**: Express.js/Nest.js
- **Database**: MongoDB
- **Code Quality**: ESLint, SonarQube
- **Integration**: GitHub API (Octokit)
- **Containerization**: Docker
- **Orchestration**: Kubernetes

### Frontend
- **Framework**: React.js
- **State Management**: Redux/React Context API

### Deployment
- **CI/CD**: GitHub Actions

## Setup Instructions

### Prerequisites
- Node.js
- MongoDB
- Docker (optional, for containerization)
- GitHub account for API access
