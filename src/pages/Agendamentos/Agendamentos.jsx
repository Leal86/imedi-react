import './Agendamentos.css'

import { useLocation } from 'react-router-dom'

function Agendamentos() {
  const location = useLocation()

  const especialidadeSelecionada = location.state?.especialidade

  return (
    <section className="agendamentos">
      <div className="agendamentos__header">
        <h1>Agendamentos</h1>

        <p>
          Gerencie consultas e horários dos pacientes.
        </p>
      </div>

      <div className="agendamentos__card">
        <h2>Nova Consulta</h2>

        {especialidadeSelecionada ? (
          <div className="agendamentos__selected">
            <p>Especialidade selecionada</p>

            <strong>
              {especialidadeSelecionada.nome}
            </strong>

            <span>
              Valor da consulta: € {especialidadeSelecionada.valor}
            </span>
          </div>
        ) : (
          <div className="agendamentos__empty">
            <p>
              Nenhuma especialidade foi selecionada.
            </p>

            <span>
              Volte para a página de especialidades e escolha uma opção.
            </span>
          </div>
        )}
      </div>
    </section>
  )
}

export default Agendamentos