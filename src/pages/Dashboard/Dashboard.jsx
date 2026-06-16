import './Dashboard.css'

import { useEffect, useState } from 'react'

import Card from '../../components/Card/Card'

import { dashboardResumo } from '../../data/dashboardData'
import { proximosAgendamentos } from '../../data/agendamentosData'

function Dashboard() {
  const [resumo, setResumo] = useState(null)
  const [agendamentos, setAgendamentos] = useState([])

  useEffect(() => {
    setResumo(dashboardResumo)
    setAgendamentos(proximosAgendamentos)
  }, [])

  if (!resumo) {
    return (
      <section className="dashboard">
        <p>Carregando dados do dashboard...</p>
      </section>
    )
  }

  return (
    <section className="dashboard">
      <div className="dashboard__header">
        <h1>Dashboard</h1>

        <p>
          Visão geral dos agendamentos e atendimentos da clínica.
        </p>
      </div>

      <div className="dashboard__cards">
        <Card>
          <h3>Consultas Hoje</h3>
          <strong>{resumo.consultasHoje}</strong>
          <p>consultas agendadas</p>
        </Card>

        <Card>
          <h3>Pendentes</h3>
          <strong>{resumo.pendentes}</strong>
          <p>aguardando confirmação</p>
        </Card>

        <Card>
          <h3>Especialidades</h3>
          <strong>{resumo.especialidades}</strong>
          <p>disponíveis para marcação</p>
        </Card>
      </div>

      <Card>
        <div className="dashboard__table-header">
          <h2>Próximos Agendamentos</h2>
          <span>Hoje</span>
        </div>

        <table className="dashboard__table">
          <thead>
            <tr>
              <th>Hora</th>
              <th>Paciente</th>
              <th>Especialidade</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {agendamentos.map((agendamento) => (
              <tr key={agendamento.id}>
                <td>{agendamento.hora}</td>

                <td>{agendamento.paciente}</td>

                <td>{agendamento.especialidade}</td>

                <td>
                  <span
                    className={
                      agendamento.status === 'Confirmado'
                        ? 'dashboard__status dashboard__status--confirmed'
                        : 'dashboard__status dashboard__status--pending'
                    }
                  >
                    {agendamento.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  )
}

export default Dashboard