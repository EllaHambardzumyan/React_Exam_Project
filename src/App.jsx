import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import ProjectPage from './pages/ProjectPage/ProjectPage'

function App() {

  return (
    <div className="App">
      <Sidenav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/project/:projectId/:projectName' element={<ProjectPage/>} />
      </Routes>
    </div>
  )
}

export default App
