# Online-Test-Application

# Start Application

- Run API: node quiz-API.js
- Run App: npm start

# Dependencies

- Install npm packages: $ npm install
- Install CORS: $ npm install cors
- Install Express: $ npm install express
- Install Body Parser: $ npm install body-parser

# Application Flow
•	Registration Form 
    o	Registration form takes two inputs ‘name’ and ‘email’.
    o	On submit, checks for form validations and if valid the redirects to the ‘Quiz’ page
•	Quiz Page
    o	Quiz pulls data from ‘quiz-API.js’ file
    o	It display only one question at a time and once answer is selected, ‘Next’ button will display next question in the row.
    o	After all questions are answered, test result will display along with the ‘Retake quiz’ button.
    o	‘Retake Quiz’ button will start the quiz again.
•	Quiz API: 
    o	API contains 10 questions .
    o	API Runs on Port: 5000
