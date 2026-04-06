import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Projects List</h2>

      {projects.length === 0 ? (
        <p>Loading...</p>
      ) : (
        projects.map(project => (
          <div key={project.id} style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px",
            borderRadius: "8px",
            background: "#fff"
          }}>
            <h3>{project.title}</h3>
            <p><b>Student:</b> {project.student}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Projects;