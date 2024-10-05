import { useFetchProjects } from './fetchProject';

const Project = () => {
  const { loading, projects } = useFetchProjects();
  // console.log(projects);

  if (loading) {
    return (
      <div className='projects-center'>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <section className='projects'>
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((project) => {
          return (
            <a
              key={project.id}
              href={project.url}
              target='_blank'
              rel='noreferrer'
              className='project'
            >
              <img src={project.img} alt={project.title} className='img' />
              <h5>{project.title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
