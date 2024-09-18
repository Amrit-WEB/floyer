<!DOCTYPE html>
<html lang="en">
<body>
  <div class="container">
    <h1>ML Engineer Salaries Dashboard - Floqer Assignment</h1>
    <p>Welcome to the ML Engineer Salaries Dashboard, a project completed for the Software Engineering Role assignment at Floqer. This project analyzes salary trends for Machine Learning Engineers between 2020 and 2024 using React, Ant Design, and various data visualization libraries.</p>
    <h2>Project Structure</h2>
    <p>The project consists of three main tasks:</p>
    <ul>
      <li><strong>Task 1:</strong> A sortable table displaying the total number of jobs and average salary in USD for each year (2020-2024).</li>
      <li><strong>Task 2:</strong> A line graph showing the salary trends and a secondary table showing job titles and counts for a specific year when clicked.</li>
      <li><strong>Bonus Task:</strong> A chat feature using a Large Language Model (LLM) to provide insights based on the salary data using the Groq API.</li>
    </ul>
    <h2>Live Demo</h2>
    <p>You can view the live demo of the application here:</p>
    <a href="https://floyer.netlify.app/">ML Engineer Salaries Dashboard</a>
    <h2>Installation and Running Locally</h2>
    <p>Follow the steps below to set up the project locally on your machine:</p>
    <h3>Prerequisites</h3>
    <ul>
      <li>Node.js (version 14 or later)</li>
      <li>NPM</li>
      <li><a href="https://www.kaggle.com/datasets/chopper53/machine-learning-engineer-salary-in-2024">Kaggle Dataset</a></li>
    </ul>
    <h3>Steps to Set Up</h3>
    <ol>
      <li>Clone the repository from GitHub:</li>
      <div class="code-block">
        <code>git clone https://github.com/Amrit-WEB/floyer.git</code>
      </div>
      <li>Navigate to the project directory:</li>
      <div class="code-block">
        <code>cd ml-salary-dashboard</code>
      </div>
      <li>Install the dependencies:</li>
      <div class="code-block">
        <code>npm install</code>
      </div>
      <li>Create a <code>.env</code> file in the root directory and add your Groq API credentials:</li>
      <div class="code-block">
        <code>groq_api=your_api_key</code>
      </div>
      <li>Start the development server:</li>
      <div class="code-block">
        <code>npm run dev</code>
      </div>
      <p>This will start the app in development mode and open it in your browser at <code>http://localhost:1234</code>.</p>
    </ol>
    <h2>Features</h2>
    <ul>
      <li>Sortable table with job counts and average salary data for each year (2020-2024).</li>
      <li>Interactive line graph showing salary trends over the years.</li>
      <li>Dynamic table showing job titles and counts based on year selection.</li>
      <li>LLM-based chat feature providing insights on salary data using Groq API.</li>
    </ul>
    <h2>Technologies Used</h2>
    <ul>
      <li><strong>React:</strong> Frontend framework for building the UI.</li>
      <li><strong>Ant Design:</strong> UI library for table and layout components.</li>
      <li><strong>PapaParse:</strong> CSV parsing library for handling Kaggle salary data.</li>
      <li><strong>Axios:</strong> For making API requests to the Kaggle API.</li>
      <li><strong>Groq API:</strong> For LLM integration to generate data insights.</li>
    </ul>
    <h2>Bonus Task: LLM Insights</h2>
    <p>The bonus task utilizes the <a href="https://groq.com">Groq API</a> to provide a chat-based interface that can generate insights based on the salary dataset. This feature allows users to ask questions such as "What are the average salaries for Data Scientists over the years?" and get relevant insights powered by the LLM.</p>
    <h2>License</h2>
    <p>This project is open source and available under the <a href="#">MIT License</a>.</p>
    <h2>Contact</h2>
    <p>If you have any questions or feedback, feel free to contact me at <a href="mailto:amritanshuprajapati42@gmail.com">amritanshuprajapati42.com</a>.</p>
    <p>Thank you for checking out the assignment!</p>
  </div>
</body>
</html>
