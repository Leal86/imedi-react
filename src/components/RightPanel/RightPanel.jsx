import './RightPanel.css'

import { useNavigate } from 'react-router-dom'

function RightPanel({
  nome,
  cargo,
  consultasHoje,
  especialidades,
  pendentes,
}) {
  const navigate = useNavigate()

  function handleNovaConsulta() {
    navigate('/especialidades')
  }

  function handleVerAgenda() {
    navigate('/agendamentos')
  }

  return (
    <div className="right-panel">
      <section className="right-panel__card">
        <h3>Usuário</h3>

        <p className="right-panel__name">
          {nome}
        </p>

        <p className="right-panel__role">
          {cargo}
        </p>
      </section>

      <section className="right-panel__card">
        <h3>Resumo</h3>

        <p>Consultas Hoje: {consultasHoje}</p>

        <p>Especialidades: {especialidades}</p>

        <p>Pendentes: {pendentes}</p>
      </section>

      <section className="right-panel__card">
        <h3>Ações Rápidas</h3>

        <button
          className="right-panel__button"
          type="button"
          onClick={handleNovaConsulta}
        >
          Nova Consulta
        </button>

        <button
          className="right-panel__button"
          type="button"
          onClick={handleVerAgenda}
        >
          Ver Agenda
        </button>
      </section>
    </div>
  )
}

export default RightPanel