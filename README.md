# 💰 Expense Tracker Web Application

This is a simple **full-stack expense management system** that allows users to:

-> Register and log in securely using JWT authentication  
-> Add daily expenses with title, amount, category, and date  
-> Edit or delete existing expenses  
-> View total and average monthly expenses  
-> Get a summary dashboard with expense analytics  

I built this project to practice **Spring Boot + React + MySQL** and strengthen my understanding of how frontend and backend integrate in a real-world application.


## 🧰 Tech Stack

| Part | Technology |
|------|-------------|
| **Frontend** | React.js, Axios, HTML5, CSS3 |
| **Backend** | Java, Spring Boot, Spring Security (JWT), Spring Data JPA |
| **Database** | MySQL |
| **Tools** | Postman, Maven, Git, VS Code, STS |


## 📂 Project Structure
project_expense_tracker/
├── expense-tracker -> Spring Boot backend
└── expense-tracker-frontend -> React frontend


## ✨ Features

-> Secure user registration and login with JWT  
-> Add, update, delete expenses  
-> View monthly summaries and total expenses  
-> Simple responsive dashboard with sidebar navigation  
-> API tested using Postman  
-> Integrated frontend and backend with Axios  

## 🧠 What I Learned

-> Designing and building REST APIs in Spring Boot  
-> Implementing JWT-based authentication and authorization  
-> MySQL database integration with JPA/Hibernate  
-> Connecting React frontend with backend APIs  
-> Using Axios for API calls and configuring CORS  
-> State management and form handling in React  
-> Organizing folder structure for full-stack applications  
-> Using Git & GitHub for version control  


## ⚙️ How to Run

### 🖥 Backend (Spring Boot)
cd expense-tracker
mvn spring-boot:run
Create MySQL DB: -> CREATE DATABASE expense_tracker;

-> Update DB username & password in application.properties.

### 🌐 Frontend (React)
cd expense-tracker-frontend -> npm install -> npm start

## 🖥️ Output Snapshots

### 🔹Login & Registration 
- [View Registration Page](project_screenshots/register.png)
- [View Login Page](project_screenshots/login.png)

### 🔹 Dashboard
- [View Dashboard](project_screenshots/dashboard.png)

### 🔹 Expense Management
- [Add Expense](project_screenshots/addExpense.png)
- [Edit Expense](project_screenshots/editExpense.png)
- [Delete Expense](project_screenshots/deleteExpense.png)

### 🔹 Monthly Summary
- [View Summary Page](project_screenshots/summary.png)


