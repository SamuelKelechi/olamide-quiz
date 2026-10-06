"use client";

import "./globals.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="home-page">
      <div className="quiz-card">
        <div className="quiz-logo">
          O
        </div>

        <p className="eyebrow">OLAMIDE'S WEEKLY QUIZ</p>
        <h1>
          Hi, Olamide!
          <span>Ready to learn?</span>
        </h1>

        <p className="intro">
          Let's see how much you remember from your Beginner Computer
          Studies this week. Take your time, think carefully, and do your best!
        </p>

        <div className="quiz-info">
          <div>
            <strong>20</strong>
            <span>Questions</span>
          </div>

          <div>
            <strong>10</strong>
            <span>Minutes</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Challenge</span>
          </div>
        </div>

        <button
          className="start-button"
          onClick={() => router.push("/quiz")}
        >
          Start Quiz
          <span>→</span>
        </button>

        <p className="footer-text">
          New questions every week
        </p>
      </div>
    </main>
  );
}