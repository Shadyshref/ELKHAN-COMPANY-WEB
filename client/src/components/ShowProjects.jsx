import { Link } from 'react-router-dom'

const ShowProjects = ({ id, tittle, img,description }) => {
  return (
    <div className='w-[320px] sm:flex sm:flex-col text-white mt-5 items-center flex flex-col'>
      <h2 className='mt-5 text-center font-semibold text-xl text-[#E88605]'>{tittle}</h2>

      <Link to={`/project/${id}`}>
        <img
          src={img[0]}
          alt={tittle}
          className='mt-4 w-full h-[250px] object-cover border rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300 '
        />
      </Link>
      {/* <p>{description}</p> */}
    </div>
  )
}
export default ShowProjects
