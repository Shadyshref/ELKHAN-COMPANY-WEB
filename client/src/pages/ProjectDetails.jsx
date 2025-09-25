import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useProjectsStore from '../store/useProjectsStore'
import Footer from '../components/Footer'

const ProjectDetails = () => {
  const { id } = useParams()
  const projects = useProjectsStore((state) => state.projects)
  const project = projects.find((p) => p.id === parseInt(id))

  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return <div className="text-white text-center mt-20">Project not found</div>
  }

  return (
    <div className="text-white min-h-screen p-10">
      {/* Title */}
      <h1 className="text-4xl font-bold sm:mt-[120px] mt-[100px] text-center text-[#E88605]">
        {project.tittle}
      </h1>

      {/* Description */}
      <p className="text-lg max-w-3xl text-white mx-auto mb-10 mt-10 text-center leading-7">
        {project.description}
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">
        {project.img.map((src, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={src}
              alt={`project-${index}`}
              onClick={() => {
                setStartIndex(index)
                setIsGalleryOpen(true)
              }}
              className="w-full max-w-[200px] h-[250px] mt-20 object-cover shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Gallery Overlay */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">
          {/* Exit Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="text-white text-6xl cursor-pointer bg-black px-4 py-2 rounded hover:bg-gray-500 transition"
            >
                x
            </button>
          </div>

          {/* Image Scroll Area */}
          <div className="flex-1 overflow-x-auto px-10">
            <div
              className="flex gap-4 h-full items-center"
              style={{ scrollBehavior: 'smooth' }}
            >
              {project.img.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`fullscreen-${index}`}
                  className="h-[80vh] object-contain rounded-lg"
                  style={{ minWidth: '100%' }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    <Footer/>
    </div>
  )
}

export default ProjectDetails
