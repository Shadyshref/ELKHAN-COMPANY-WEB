import React from 'react'
import ShowProjects from './ShowProjects'
import useProjectsStore from '../store/useProjectsStore'

const Projects = () => {
const Projects=useProjectsStore((state)=>state.projects)
  return (
    <div className='text-white  text-center mt-25'>
                <h1 className='text-3xl font-semibold'>Projects</h1>
                <h2 className='text-3xl mt-5'>Show Room</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4 py-10 place-items-center">


      {Projects.map((project) => (
          <ShowProjects
          key={project.id}
          id={project.id}
          tittle={project.tittle}
          img={project.img}
          description={project.description}
          />
        ))}
        </div>
    </div>
  )
}

export default Projects
