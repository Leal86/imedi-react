import './RightPanel.css'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function RightPanel({
  nome = 'Usuário',
  cargo = 'Não informado',
}) {
  const navigate = useNavigate()

  const [resumo, setResumo] = useState({
    consultasHoje: 0,
    especialidades: 0,
    pendentes: 0,
  })

  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    async function carregarResumo() {
      try {
        const response = await fetch('/data/dashboardData.json')
        const data = await response.json()

        setResumo(data)
      } catch (error) {
        console.error('Erro ao carregar resumo:', error)
        setErro(true)
      } finally {
        setLoading(false)
      }
    }

    carregarResumo()
  }, [])

  function handleNovaConsulta() {
    navigate('/especialidades')
  }

  function handleVerAgenda() {
    navigate('/agendamentos')
  }

  return (
    <aside
      className="right-panel"
      aria-label="Painel lateral de informações"
    >
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

        {loading ? (
          <p role="status">Carregando resumo...</p>
        ) : erro ? (
          <p role="alert">
            Não foi possível carregar o resumo.
          </p>
        ) : (
          <>
            <p>
              Consultas Hoje:{' '}
              <strong>{resumo.consultasHoje}</strong>
            </p>

            <p>
              Especialidades:{' '}
              <strong>{resumo.especialidades}</strong>
            </p>

            <p>
              Pendentes:{' '}
              <strong>{resumo.pendentes}</strong>
            </p>
          </>
        )}
      </section>

      <section className="right-panel__card">
        <h3>Ações Rápidas</h3>

        <button
          className="right-panel__button"
          type="button"
          aria-label="Criar nova consulta"
          onClick={handleNovaConsulta}
        >
          Nova Consulta
        </button>

        <button
          className="right-panel__button"
          type="button"
          aria-label="Visualizar agenda"
          onClick={handleVerAgenda}
        >
          Ver Agenda
        </button>
      </section>
    </aside>
  )
}

export default RightPanel