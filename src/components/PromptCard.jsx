function PromptCard({ icon, title, description, prompt, onSelect }) {
  return (
    <article className="prompt-card">
      <div className="prompt-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button
        type="button"
        className="text-button"
        onClick={() => onSelect(prompt)}
      >
        Try this prompt →
      </button>
    </article>
  );
}

export default PromptCard;