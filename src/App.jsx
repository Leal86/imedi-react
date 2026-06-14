import { Routes, Route } from 'react-router-dom'

import MainLayout from './components/MainLayout/MainLayout'

import Dashboard from './pages/Dashboard/Dashboard'
import Especialidades from './pages/Especialidades/Especialidades'
import Agendamentos from './pages/Agendamentos/Agendamentos'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
      </Routes>
    </MainLayout>
  )
}

export default App