import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Student</h4>
                <h5>NIT Jalandhar</h5>
              </div>
              <h3>2025-29</h3>
            </div>
            <p>
              Pursuing B.Tech in Mathematics and Computing at NIT Jalandhar.
              Specializing in Flutter development, AI/ML, Data Structures & Algorithms,
              and DevOps. Active in coding competitions and building real-world projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Developer</h4>
                <h5>Self-Taught & Projects</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Built multiple Flutter applications focusing on cross-platform mobile
              development. Created apps for to-do lists, social confessions, music
              streaming UIs, and e-commerce platforms. Strong expertise in Dart,
              Firebase integration, and state management patterns.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Competitive Programmer</h4>
                <h5>Active Problem Solver</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Passionate about Data Structures and Algorithms. Regularly participating
              in coding challenges and building a strong foundation in DSA. Exploring
              machine learning and AI concepts to develop well-rounded technical skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps & Cloud</h4>
                <h5>Learning & Growing</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Building skills in cloud platforms, containerization, CI/CD pipelines,
              and DevOps practices. Understanding infrastructure, deployment strategies,
              and system scalability to become a complete full-stack developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
