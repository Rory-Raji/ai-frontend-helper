import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import PromptCard from "./components/PromptCard.jsx";
import PersonalizationForm from "./components/PersonalizationForm.jsx";

const prompts = [
  {
    icon: "⌘",
    title: "Understand Code",
    description:
      "Break down frontend concepts into simple explanations.",
    prompt:
      "Explain how HTML, CSS and JavaScript work together.",
  },
  {
    icon: "✦",
    title: "Generate Ideas",
    description:
      "Discover useful website ideas for your next project.",
    prompt:
      "Suggest a beginner-friendly frontend project with three features.",
  },
  {
    icon: "</>",
    title: "Improve Your Skills",
    description:
      "Explore coding challenges and build your confidence.",
    prompt:
      "Give me a practical coding exercise for my current skill level.",
  },
];

const suggestions = {
  "HTML and CSS":
    "Build a responsive landing page using semantic HTML, Flexbox and CSS Grid.",
  JavaScript:
    "Create an interactive to-do list using functions, event listeners and DOM manipulation.",
  React:
    "Build a counter or task tracker using React components, props and useState.",
  "Responsive design":
    "Create a website that adapts to mobile, tablet and desktop screens.",
  "Building projects":
    "Build a task manager with a form, reusable cards and a filter.",
};

function App() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [goal, setGoal] = useState("HTML and CSS");
  const [personalized, setPersonalized] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [copied, setCopied] = useState(false);

  function handlePersonalize(event) {
    event.preventDefault();
    setPersonalized(true);
    setResponse("");
    setPrompt("");
  }

  function handleGenerate(selectedPrompt = prompt) {
    if (!selectedPrompt.trim()) return;

    setPrompt(selectedPrompt);
    setCopied(false);

    const levelAdvice = {
      Beginner:
        "Start with the basics and build one small feature at a time.",
      Intermediate:
        "Focus on reusable components, clean code and practical projects.",
      Advanced:
        "Explore performance, accessibility, testing and scalable architecture.",
    };

    let answer;

    if (selectedPrompt === "PERSONAL_PLAN") {
      answer =
        `Hi ${name}! Your ${level.toLowerCase()} learning plan focuses on ${goal}. ` +
        `${suggestions[goal]} ${levelAdvice[level]}`;
    } else {
      answer =
        `Here is your AI-inspired suggestion, ${name || "developer"}:\n\n` +
        `${selectedPrompt}\n\n${levelAdvice[level]}\n\n` +
        "Next step: try the idea in a small project, test it in your browser, and improve it as you learn.";
    }

    setResponse(answer);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(response);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="tools-section" id="tools">
          <div className="section-heading">
            <span className="eyebrow">EXPLORE YOUR POSSIBILITIES</span>
            <h2>Your frontend toolkit</h2>
            <p>
              Choose a starting point and turn your next coding
              challenge into a learning opportunity.
            </p>
          </div>

          <div className="prompt-grid">
            {prompts.map((item) => (
              <PromptCard
                key={item.title}
                {...item}
                onSelect={handleGenerate}
              />
            ))}
          </div>
        </section>

        <section className="personal-section" id="personalize">
          <div className="personal-intro">
            <span className="eyebrow">MADE FOR YOUR JOURNEY</span>
            <h2>Your learning journey, your way.</h2>
            <p>
              Tell us about yourself to receive recommendations
              based on your interests and experience.
            </p>

            <div className="feature-line">
              <span>✓</span> Recommendations based on your goals
            </div>
            <div className="feature-line">
              <span>✓</span> Guidance matched to your skill level
            </div>
            <div className="feature-line">
              <span>✓</span> Practical project ideas
            </div>
          </div>

          <div className="personal-panel">
            <h3>Let's get to know you</h3>
            <p className="panel-subtitle">
              Personalize your frontend learning experience.
            </p>

            <PersonalizationForm
              name={name}
              setName={setName}
              level={level}
              setLevel={setLevel}
              goal={goal}
              setGoal={setGoal}
              onSubmit={handlePersonalize}
            />

            {personalized && (
              <div className="welcome-message" aria-live="polite">
                <h3>Welcome, {name}!</h3>
                <p>
                  Your selected focus is <strong>{goal}</strong>.
                  Let's create a plan that suits you.
                </p>
                <button
                  className="primary-button full-button"
                  onClick={() => handleGenerate("PERSONAL_PLAN")}
                >
                  Generate My Recommendation
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="response-section" aria-live="polite">
          <div className="response-heading">
            <span className="response-icon">✦</span>
            <div>
              <h2>Your AI-inspired assistant</h2>
              <p>
                Choose a card above or enter your own coding question.
              </p>
            </div>
          </div>

          <form
            className="prompt-form"
            onSubmit={(event) => {
              event.preventDefault();
              handleGenerate();
            }}
          >
            <label className="sr-only" htmlFor="custom-prompt">
              Enter a frontend question
            </label>
            <input
              id="custom-prompt"
              type="text"
              placeholder="e.g. Give me a React project idea..."
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
            />
            <button className="primary-button" type="submit">
              Generate
            </button>
          </form>

          {response && (
            <div className="generated-response">
              <p className="response-label">YOUR SUGGESTION</p>
              <p className="response-text">{response}</p>
              <button
                className="text-button"
                type="button"
                onClick={handleCopy}
              >
                {copied ? "Copied!" : "Copy response"}
              </button>
            </div>
          )}

          <p className="demo-note">
            Demo mode: suggestions use built-in templates.
            Connect an AI API to enable live AI responses.
          </p>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          <span className="logo-icon">AI</span>
          Frontend Helper
        </a>
        <p>Built to make learning frontend development easier.</p>
        <p>© {new Date().getFullYear()} AI Frontend Helper</p>
      </footer>
    </>
  );
}

export default App;