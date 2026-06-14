import { Routes, Route } from 'react-router-dom'

import MainLayout from './components/MainLayout/MainLayout'

import Dashboard from './pages/Dashboard/Dashboard'
import Especialidades from './pages/Especialidades/Especialidades'
import EspecialidadeDetalhes from './pages/EspecialidadeDetalhes/EspecialidadeDetalhes'
import Agendamentos from './pages/Agendamentos/Agendamentos'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/especialidades/:id" element={<EspecialidadeDetalhes />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}

export default App