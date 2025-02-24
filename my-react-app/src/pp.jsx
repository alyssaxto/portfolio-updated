
const projectsData = [
    {
      link: "hackUTDpassword.html",
      image: bpImage,
      alt: "AI Image Generator",
      title: "AI Image Generator",
      description: "Designing an accessible way for bp employees to quickly create the images they need.",
    },
    {
      link: "hackUTDwebsite.html",
      image: rippleImage,
      alt: "HackUTD Website",
      title: "HackUTD Website",
      description: "Developing and designing the website for the biggest 24-hour hackathon in Texas hosted by HackUTD.",
    },
    {
      link: "utswpassword.html",
      image: manageImage,
      alt: "I Can Manage Cancer",
      title: "I Can Manage Cancer",
      description: "An educational platform designed to assist head and neck cancer patients through treatment.",
    },
    {
      link: "Stemuli.html",
      image: stemuliImage,
      alt: "Stemuli",
      title: "Stemuli",
      description: "A desktop and mobile app for students interested in product design to explore more about the career through VR.",
    },
  ];
  
  const Projects = () => {
    return (
      <section className="projects" id="Projects">
  
        <div className="projects__wrapper">
          {projectsData.map((project, index) => (
            <a key={index} href={project.link} className="projects__card">
              <img src={project.image} alt={project.alt} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
  
      </section>
    );
  };
  
  export default Projects;
  