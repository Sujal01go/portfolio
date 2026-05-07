import "./styles/TechStack.css";

const skillCategories = [
  {
    category: "Mobile Development",
    skills: [
      { name: "Flutter", image: "/images/flutter.png" },
      { name: "Dart", image: "/images/dart.png" },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", image: "/images/python.png" },
      { name: "C++", image: "/images/c++.png" },
    ],
  },
  {
    category: "Game & Creative",
    skills: [
      { name: "Unity", image: "/images/unity.png" },
      { name: "Blender", image: "/images/Blender.png" },
    ],
  },
  {
    category: "Video & Design",
    skills: [
      { name: "Premier Pro", image: "/images/premierpro.png" },
      { name: "MySQL", image: "/images/mysql.webp" },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="techstack-section" id="skills">
      <div className="techstack-container">
        <h2>My Tech Stack</h2>
        <div className="techstack-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.category}>
              <h3>{category.category}</h3>
              <div className="skill-items">
                {category.skills.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <img src={skill.image} alt={skill.name} />
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
