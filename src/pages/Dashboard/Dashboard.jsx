import './Dashboard.css'
import Card from '../../components/Card/Card'

function Dashboard() {
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
          <strong>8</strong>
          <p>consultas agendadas</p>
        </Card>

        <Card>
          <h3>Pendentes</h3>
          <strong>3</strong>
          <p>aguardando confirmação</p>
        </Card>

        <Card>
          <h3>Especialidades</h3>
          <strong>6</strong>
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
            <tr>
              <td>09:00</td>
              <td>Maria Silva</td>
              <td>Cardiologia</td>
              <td>
                <span className="dashboard__status dashboard__status--confirmed">
                  Confirmado
                </span>
              </td>
            </tr>

            <tr>
              <td>10:30</td>
              <td>João Pereira</td>
              <td>Dermatologia</td>
              <td>
                <span className="dashboard__status dashboard__status--pending">
                  Pendente
                </span>
              </td>
            </tr>

            <tr>
              <td>14:00</td>
              <td>Ana Costa</td>
              <td>Pediatria</td>
              <td>
                <span className="dashboard__status dashboard__status--confirmed">
                  Confirmado
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </section>
  )
}

export default Dashboard