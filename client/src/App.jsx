import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ProjectDetails from './pages/ProjectDetails'
import Projects from './components/Projects'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={ <Projects/>
        } />
        <Route path="/project/:id" element={<ProjectDetails />} />

      </Routes>
      
    </div>
  )
}

export default App
