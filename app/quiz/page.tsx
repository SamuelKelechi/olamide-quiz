"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "../data/questions";

const QUIZ_TIME = 10 * 60;

export default function QuizPage() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});

  const [quizCompleted, setQuizCompleted] = useState(false);

  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME);

  const question = questions[currentQuestion];

  const selectedAnswer = selectedAnswers[currentQuestion] || "";

  /*
    Countdown timer
  */
  useEffect(() => {
    if (quizCompleted) return;

    if (timeLeft <= 0) {
      setQuizCompleted(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => {
        if (previousTime <= 1) {
          clearInterval(timer);
          return 0;
        }

        return previousTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizCompleted, timeLeft]);

  const handleAnswer = (answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion((prev) => prev - 1);
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setTimeLeft(QUIZ_TIME);
    setQuizCompleted(false);
  };

  const score = questions.reduce((total, item, index) => {
    if (selectedAnswers[index] === item.answer) {
      return total + 1;
    }

    return total;
  }, 0);

  const percentage = Math.round(
    (score / questions.length) * 100
  );

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  /*
    Format seconds as MM:SS
  */
  const minutes = Math.floor(timeLeft / 60);

  const seconds = timeLeft % 60;

  const formattedTime = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  /*
    Timer warning states
  */
  const isTimeWarning = timeLeft <= 60;

  const isTimeCritical = timeLeft <= 30;

  const getPerformanceMessage = () => {
    if (percentage === 100) {
      return "Excellent work, Olamide! You got every question correct. 🌟";
    }

    if (percentage >= 80) {
      return "Fantastic work, Olamide! You have a very good understanding of the lesson. 🎉";
    }

    if (percentage >= 60) {
      return "Good job, Olamide! You are making great progress. Keep practising. 💪";
    }

    if (percentage >= 40) {
      return "Nice effort, Olamide! Let's review the lesson and try again. 📚";
    }

    return "Keep going, Olamide! Every attempt helps you learn and improve. 🌱";
  };

  /*
    RESULT SCREEN
  */
  if (quizCompleted) {
    return (
      <main className="result-page">
        <div className="result-container">

          {/* Result Summary */}
          <section className="result-card">

            <div className="result-icon">
              🎉
            </div>

            <p className="result-label">
              QUIZ COMPLETED
            </p>

            <h1>
              Well done, Olamide!
            </h1>

            <p className="result-message">
              {getPerformanceMessage()}
            </p>

            {/* Score */}
            <div className="score-circle">
              <div>
                <strong>{score}</strong>

                <span>
                  /{questions.length}
                </span>
              </div>

              <small>
                {percentage}%
              </small>
            </div>

            {/* Statistics */}
            <div className="result-stats">

              <div className="result-stat">
                <strong>{score}</strong>

                <span>
                  Correct
                </span>
              </div>

              <div className="result-stat">
                <strong>
                  {questions.length - score}
                </strong>

                <span>
                  To Review
                </span>
              </div>

              <div className="result-stat">
                <strong>
                  {percentage}%
                </strong>

                <span>
                  Score
                </span>
              </div>

            </div>

            {/* Buttons */}
            <div className="result-actions">

              <button
                type="button"
                className="retake-button"
                onClick={handleRetake}
              >
                Retake Quiz

                <span>
                  ↻
                </span>
              </button>

              <button
                type="button"
                className="home-button"
                onClick={() => router.push("/")}
              >
                Back to Home
              </button>

            </div>

          </section>


          {/* Review Section */}
          <section className="review-section">

            <div className="review-heading">

              <div>

                <p className="review-label">
                  LEARNING REVIEW
                </p>

                <h2>
                  Review Your Answers
                </h2>

              </div>

              <span className="review-count">
                {score}/{questions.length} correct
              </span>

            </div>


            <p className="review-intro">
              Olamide, take a few minutes to review your
              answers. This will help you remember what you
              have learned and understand the questions you
              missed.
            </p>


            {/* Review Questions */}
            <div className="review-list">

              {questions.map((item, index) => {

                const userAnswer =
                  selectedAnswers[index];

                const isCorrect =
                  userAnswer === item.answer;

                return (
                  <article
                    key={item.id}
                    className={`review-item ${
                      isCorrect
                        ? "review-correct"
                        : "review-incorrect"
                    }`}
                  >

                    <div className="review-item-header">

                      <span className="review-question-number">
                        Question {index + 1}
                      </span>

                      <span
                        className={`review-status ${
                          isCorrect
                            ? "status-correct"
                            : "status-incorrect"
                        }`}
                      >
                        {isCorrect
                          ? "✓ Correct"
                          : "✕ Incorrect"}
                      </span>

                    </div>


                    <h3>
                      {item.question}
                    </h3>


                    <div className="answer-review">

                      <div
                        className={
                          isCorrect
                            ? "review-answer correct-answer"
                            : "review-answer wrong-answer"
                        }
                      >

                        <span className="review-answer-label">
                          Your answer
                        </span>

                        <strong>
                          {userAnswer ||
                            "No answer selected"}
                        </strong>

                      </div>


                      {!isCorrect && (
                        <div className="review-answer correct-answer">

                          <span className="review-answer-label">
                            Correct answer
                          </span>

                          <strong>
                            {item.answer}
                          </strong>

                        </div>
                      )}

                    </div>


                    <div className="review-explanation">

                      <span>
                        💡
                      </span>

                      <p>
                        <strong>
                          Why?
                        </strong>{" "}
                        {getExplanation(item.id)}
                      </p>

                    </div>

                  </article>
                );
              })}

            </div>


            {/* Review Bottom Actions */}
            <div className="review-bottom">

              <p>
                Ready to improve your score?
              </p>

              <button
                type="button"
                className="review-retake-button"
                onClick={handleRetake}
              >
                Try the Quiz Again

                <span>
                  ↻
                </span>
              </button>

            </div>

          </section>


          <p className="result-footer">
            Olamide's Computer Learning Journey •
            Keep learning. Keep growing. Keep going. 💙
          </p>

        </div>
      </main>
    );
  }


  /*
    QUIZ SCREEN
  */
  return (
    <main className="quiz-page">

      <div className="quiz-container">

        {/* Header */}
        <header className="quiz-header">

          <div>

            <p className="quiz-label">
              OLAMIDE'S WEEKLY QUIZ
            </p>

            <h1>
              Beginner Computer Studies
            </h1>

          </div>


          {/* Timer + Question Counter */}
          <div className="quiz-header-right">

            <div
              className={`quiz-timer ${
                isTimeWarning
                  ? "timer-warning"
                  : ""
              } ${
                isTimeCritical
                  ? "timer-critical"
                  : ""
              }`}
            >

              <span className="timer-icon">
                ⏱
              </span>

              <div>

                <small>
                  Time Left
                </small>

                <strong>
                  {formattedTime}
                </strong>

              </div>

            </div>


            <div className="question-counter">

              <strong>
                {currentQuestion + 1}
              </strong>

              <span>
                {" "}
                / {questions.length}
              </span>

            </div>

          </div>

        </header>


        {/* Progress */}
        <div className="progress-area">

          <div className="progress-info">

            <span>
              Quiz Progress
            </span>

            <span>
              {Math.round(progress)}%
            </span>

          </div>


          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>


        {/* Question */}
        <section className="question-card">

          <div className="question-top">

            <span className="question-badge">
              Question {currentQuestion + 1}
            </span>

            <span className="question-topic">
              Computer Basics
            </span>

          </div>


          <h2>
            {question.question}
          </h2>


          <p className="question-hint">
            Choose the answer you think is correct.
          </p>


          {/* Answers */}
          <div className="answer-options">

            {question.options.map(
              (option, index) => {

                const letter =
                  String.fromCharCode(
                    65 + index
                  );

                const isSelected =
                  selectedAnswer === option;

                return (
                  <button
                    key={option}
                    type="button"
                    className={`answer-option ${
                      isSelected
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleAnswer(option)
                    }
                  >

                    <span className="option-letter">
                      {letter}
                    </span>

                    <span className="option-text">
                      {option}
                    </span>

                    <span className="option-check">
                      {isSelected
                        ? "✓"
                        : ""}
                    </span>

                  </button>
                );
              }
            )}

          </div>

        </section>


        {/* Navigation */}
        <div className="quiz-footer">

          <p className="answer-message">

            {selectedAnswer
              ? "Great choice, Olamide! You can continue when you're ready."
              : "Take your time and think carefully."}

          </p>


          <div className="quiz-navigation">

            <button
              type="button"
              className="previous-button"
              onClick={handlePrevious}
              disabled={
                currentQuestion === 0
              }
            >

              <span>
                ←
              </span>

              Previous

            </button>


            <button
              type="button"
              className="next-button"
              onClick={handleNext}
              disabled={!selectedAnswer}
            >

              {currentQuestion ===
              questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}

              <span>
                →
              </span>

            </button>

          </div>

        </div>


        <p className="quiz-footer-note">
          Olamide's Computer Learning Journey •
          Weekly Quiz
        </p>

      </div>

    </main>
  );
}


/*
  Simple explanations for Module 1 questions.
*/

function getExplanation(id: number): string {
  const explanations: Record<number, string> = {
    1: "A computer is an electronic device that receives information, processes it, stores it, and produces results.",

    2: "The monitor displays information, pictures, and other things happening on the computer.",

    3: "The keyboard is mainly used for typing information and entering commands.",

    4: "A mouse allows you to point, select, open, move, and interact with items on the screen.",

    5: "Speakers and headphones are output devices that produce sound from the computer.",

    6: "A printer produces a physical paper copy of a document or other computer work.",

    7: "A USB drive is portable storage that can be used to store and move files from one computer to another.",

    8: "A keyboard is an input device because you use it to enter information into the computer.",

    9: "A monitor is an output device because it displays information produced by the computer.",

    10: "Before starting a computer, make sure it is properly connected to a power source.",

    11: "After pressing the power button, you should wait for the computer to start and load.",

    12: "The proper way to turn off a computer is to use Start/Power and select Shut down.",

    13: "A single-click normally selects an item or places the cursor where you want it.",

    14: "A double-click is commonly used to open a file, folder, or program.",

    15: "A right-click normally opens a shortcut or context menu with additional options.",

    16: "Drag and drop means holding the mouse button while moving an item and releasing it in the desired location.",

    17: "The Spacebar creates spaces between words when typing.",

    18: "Backspace removes characters to the left of the cursor.",

    19: "The desktop is the main screen you normally see after signing in to the computer.",

    20: "Folders help organize files so that your computer work can be stored neatly and found easily.",
  };

  return (
    explanations[id] ||
    "Review the lesson notes to refresh your understanding of this question."
  );
}