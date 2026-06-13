import './Dashboard.css'
import Card from '../../components/Card/Card'
import { dashboardResumo } from '../../data/dashboardData'
import { proximosAgendamentos } from '../../data/agendamentosData'

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
                    <strong>{dashboardResumo.consultasHoje}</strong>
                    <p>consultas agendadas</p>
                </Card>

                <Card>
                    <h3>Pendentes</h3>
                    <strong>{dashboardResumo.pendentes}</strong>
                    <p>aguardando confirmação</p>
                </Card>

                <Card>
                    <h3>Especialidades</h3>
                    <strong>{dashboardResumo.especialidades}</strong>
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
                        {proximosAgendamentos.map((agendamento) => (
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