function PersonalizationForm({
  name,
  setName,
  level,
  setLevel,
  goal,
  setGoal,
  onSubmit,
}) {
  return (
    <form className="personalization-form" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="level">Your experience level</label>
        <select
          id="level"
          value={level}
          onChange={(event) => setLevel(event.target.value)}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="goal">What would you like to learn?</label>
        <select
          id="goal"
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
        >
          <option value="HTML and CSS">HTML and CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="Responsive design">Responsive design</option>
          <option value="Building projects">Building projects</option>
        </select>
      </div>

      <button className="primary-button full-button" type="submit">
        Personalize My Experience
      </button>
    </form>
  );
}

export default PersonalizationForm;