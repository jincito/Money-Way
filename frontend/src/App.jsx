import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Background from "./components/Background.js";
import rocketImage from "./assets/child-riding-rocket-ship-removebg.png";
import Modal from "./components/Modal.jsx";
import Quiz from "./pages/Quiz";
import CreateAccount from "./components/CreateAccount.jsx";
import RoadmapsModal from "./components/RoadmapModal.jsx";
import Navbar from './components/Navbar';
import Login from './components/Login';

const options = [
  {
    title: "Credit",
    info: "A credit score is a numerical representation of an individual's creditworthiness, typically ranging from 300 to 850. It is calculated based on factors like payment history, the amount of debt owed, length of credit history, and types of credit used. Lenders use credit scores to assess the risk of lending money or extending credit. A higher score indicates better credit management and lower risk to lenders, potentially leading to better loan terms. Maintaining a good credit score is essential for securing favorable interest rates and financial opportunities.",
  },
  {
    title: "Taxes",
    info: "Taxes are mandatory financial charges imposed by governments on individuals and businesses to fund public services and infrastructure. They are typically collected on income, property, goods, and services. The amount owed varies depending on factors like income level, location, and type of transaction. Taxes help fund essential services such as healthcare, education, and transportation. Paying taxes is a legal obligation, and failure to do so can result in penalties.",
  },
  {
    title: "Budgeting",
    info: "Budgeting is important because it helps individuals manage their money by tracking income and expenses, ensuring they live within their means. It provides a clear plan for spending, saving, and investing, which can prevent overspending and financial stress. A well-structured budget enables people to prioritize essential expenses and work toward long-term financial goals like paying off debt or saving for a major purchase. It also helps in preparing for unexpected costs by setting aside emergency funds. Overall, budgeting promotes financial stability and responsible money management.",
  },
  {
    title: "Savings",
    info: "Savings is the portion of income that is set aside for future use rather than being spent immediately. It typically involves depositing money into a savings account, investing, or keeping funds in accessible forms for emergencies or future goals. Building savings is important for financial security, as it provides a safety net for unexpected expenses and helps achieve long-term goals like buying a home or retirement. Regular saving habits can help individuals avoid debt and prepare for life's uncertainties. Effective savings management is key to financial stability and success.",
  },
];

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState(0);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRoadmapOpen, setIsRoadmapOpen] = useState("");

  const handleRoadmapClick = () => {
    setIsRoadmapOpen(true);
  };
  const handleCloseRoadmap = () => {
    setIsRoadmapOpen(false);
  }
  const handleCreateAccountClick = () => {
    setShowCreateAccount(true); // Show Create Account modal
  };

  const closeCreateAccount = () => {
    setShowCreateAccount(false); // Close Create Account modal
  };

  const handleQuizClick = () => {
    setIsQuizOpen(true); // Open quiz modal
  };

  const handleCloseQuiz = () => {
    setIsQuizOpen(false); // Close quiz modal
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen); // Toggle login modal
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Get the current scroll position
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up on unmount
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 30000);

    return () => clearInterval(interval);
  }, [currentOption]);

  const handleNext = () => {
    setCurrentOption((prevOption) => (prevOption + 1) % options.length);
  };

  const handlePrevious = () => {
    setCurrentOption((prevOption) =>
      prevOption === 0 ? options.length - 1 : prevOption - 1
    );
  };

  return (
    <div className="Container">
      <Background
        starFieldWidth={window.innerWidth}
        starFieldHeight={window.innerHeight}
        noOfStars={500}
        speed={5}
      />

      {/* Image Section */}
      <div className="image-container">
        <img
          src={rocketImage}
          alt="Child riding a rocket ship to the moon"
          className="parallax-image"
          style={{
            transform: `translate(${scrollY * 0.3}px, ${scrollY * -0.3}px)`,
          }}
        />
        <div className="parallax-text">MONEY WAY</div>
      </div>

      {/* Header Section */}
      <header>
        <h1>Master Your Money the Fun Way</h1>
        <h2>Get personalized financial advice tailored to you.</h2>
      </header>
        
        {/* Header Section */}
        <RoadmapsModal show={isRoadmapOpen} handleClose={handleCloseRoadmap} />


      {/*call to action */}
      <div className="App">
        <button className="cta-button" onClick={handleQuizClick}>
          Take the Quiz Now
        </button>
      </div>
      
      {/* Benefits Section */}
      <section className="benefits-section">
        <ul>
          <li>
            <strong>Personalized Learning:</strong> Our AI-powered assessment
            tailors your learning experience to your specific needs.
          </li>
          <li>
            <strong>Accessible for All:</strong> Our content is designed to be
            engaging and informative for all ages and levels.
          </li>
          <li>
            <strong>Real-World Applications:</strong> Learn practical financial
            skills you can use in your everyday life.
          </li>
          <li>
            <strong>Interactive and Fun:</strong> Our platform is designed to be
            enjoyable and engaging.
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h3>What People Are Saying:</h3>
        <div className="testimonial">
          <p>
            "My daughter loves learning about money on this website. It's made
            financial literacy so much more fun!" - <strong>Parent</strong>
          </p>
        </div>
        <div className="testimonial">
          <p>
            "I've learned so much about budgeting and saving from this platform.
            It's a great resource for anyone looking to improve their financial
            skills." - <strong>Teenager</strong>
          </p>
        </div>
        <div className="testimonial">
          <p>
            "As a teacher, I've been using this website to teach my students
            about personal finance. It's a valuable tool for educators." -{" "}
            <strong>Teacher</strong>
          </p>
        </div>
      </section>

      {/* Four options section */}
      <section className="options-section">
        <div className="options-buttons">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => setCurrentOption(index)}
              className={`option-button ${currentOption === index ? "active" : ""}`}
            >
              {option.title}
            </button>
          ))}
        </div>

        <div className="sliding-info">
          <button onClick={handlePrevious} className="arrow-button">←</button>

          <div className="info-content">
            <h3 className="option-title">{options[currentOption].title}</h3>
            <p className="option-info">{options[currentOption].info}</p>
          </div>

          <button onClick={handleNext} className="arrow-button">→</button>
        </div>
      </section>

      <Navbar toggleLogin={toggleLogin} handleRoadmapClick={handleRoadmapClick} />

      {isLoginOpen && (
        <Modal show={isLoginOpen} handleClose={toggleLogin}>
          <Login closeModal={toggleLogin} />
        </Modal>
      )}

      {showCreateAccount && (
        <Modal show={showCreateAccount} handleClose={closeCreateAccount}>
          <CreateAccount closeModal={closeCreateAccount} />
        </Modal>
      )}

      <Modal show={isQuizOpen} handleClose={handleCloseQuiz}>
        <Quiz />
      </Modal>

      <Routes>
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/" element={<div>Homepage content...</div>} /> {/* Placeholder for homepage */}
      </Routes>
    </div>
  );
}

export default App;