import './Especialidades.css'

import EspecialidadeCard from '../../components/EspecialidadeCard/EspecialidadeCard'

import { especialidades } from '../../data/especialidadesData'

function Especialidades() {
  return (
    <section className="especialidades">
      <div className="especialidades__header">
        <h1>Especialidades</h1>

        <p>
          Selecione uma especialidade para iniciar o agendamento.
        </p>
      </div>

      <div className="especialidades__grid">
        {especialidades.map((especialidade) => (
          <EspecialidadeCard
            key={especialidade.id}
            nome={especialidade.nome}
            descricao={especialidade.descricao}
            valor={especialidade.valor}
            icone={especialidade.icone}
          />
        ))}
      </div>
    </section>
  )
}

export default Especialidades