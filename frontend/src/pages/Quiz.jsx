import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const buttonStyle = {
    padding: '10px',
    margin: '5px 0',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
};

const quizQuestions = [
    { question: 'Everyone in the U.S. must file taxes, regardless of their income', category: 'Taxes', options: ['True', 'False'], answer: 'False' },
    { question: 'All income, including money from a side gig, must be reported on your taxes.', category: 'Taxes', options: ['True', 'False'], answer: 'True' },
    { question: 'Can you file your taxes online?', category: 'Taxes', options: ['Yes', 'No'], answer: 'Yes' },
    { question: 'Your credit score can affect your ability to get a loan.', category: 'Credit', options: ['True', 'False'], answer: 'True' },
    { question: 'Is it possible to get a credit card with no credit history?', category: 'Credit', options: ['Yes', 'No'], answer: 'Yes' },
    { question: 'Closing old credit card accounts can hurt your credit score.', category: 'Credit', options: ['True', 'False'], answer: 'True' },
    { question: 'You should always reserve part of your budget for personal spending on things you enjoy or want.', options: ['True', 'False'], answer: 'True' },
    { question: 'You should review and update your budget regularly.', category: 'Budgeting', options: ['True', 'False'], answer: 'True' },
    { question: 'Is spending more than you earn a good budgeting practice?', category: 'Budgeting', options: ['Yes', 'No'], answer: 'No' },
    { question: 'It’s recommended to save at least three to six months worth of living expenses in an emergency fund.', category: 'Savings', options: ['True', 'False'], answer: 'True' },
    { question: 'Is saving unnecessary if you earn a high income?', category: 'Savings', options: ['Yes', 'No'], answer: 'No' },
    { question: 'It’s better to save money after all expenses are paid instead of setting aside savings first.', category: 'Savings', options: ['True', 'False'], answer: 'False' }
];

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(null)); // Track answers
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    const handleAnswerClick = (answer) => {
        const isCorrect = answer === quizQuestions[currentQuestionIndex].answer;
        setAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = isCorrect; // Set boolean value
            return newAnswers;
        });

        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizFinished(true);
        }
    };

    useEffect(() => {
        const sendScoreToBackend = async () => {
            try {
                // Destructure answers to create individual variables
                const [
                    question_1,
                    question_2,
                    question_3,
                    question_4,
                    question_5,
                    question_6,
                    question_7,
                    question_8,
                    question_9,
                    question_10,
                    question_11,
                    question_12,
                ] = answers;
    
                const response = await axios.post('http://localhost:8082/userResponse/createUserResponse', {
                    question_1,
                    question_2,
                    question_3,
                    question_4,
                    question_5,
                    question_6,
                    question_7,
                    question_8,
                    question_9,
                    question_10,
                    question_11,
                    question_12,
                });
                console.log('Answers sent to backend:', response.data);
            } catch (error) {
                console.error('Error sending answers to backend:', error);
            }
        };
    
        if (isQuizFinished) {
            sendScoreToBackend(); // Send answers to backend when quiz is finished
        }
    }, [isQuizFinished, answers]); // Run effect when quiz finishes

    const handleGoToRoadmap = () => {
        navigate('/roadmap'); // Navigate to the roadmap page
    };

    if (isQuizFinished) {
        return (
            <div>
                <h2>Quiz Finished! Your answers have been submitted.</h2>
                <button style={buttonStyle} onClick={handleGoToRoadmap}>
                    Go To Roadmap
                </button>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <h2>{quizQuestions[currentQuestionIndex].category} Question</h2>
            <p>{quizQuestions[currentQuestionIndex].question}</p>
            <div className="options">
                {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                    <button key={index} style={buttonStyle} onClick={() => handleAnswerClick(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
