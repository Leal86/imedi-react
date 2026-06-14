import './EspecialidadeDetalhes.css'

import { useNavigate, useParams } from 'react-router-dom'

import { especialidades } from '../../data/especialidadesData'

function EspecialidadeDetalhes() {
  const { id } = useParams()

  const navigate = useNavigate()

  const especialidade = especialidades.find(
    (item) => item.id === Number(id),
  )

  if (!especialidade) {
    return (
      <section className="especialidade-detalhes">
        <div className="especialidade-detalhes__card">
          <h1>Especialidade não encontrada</h1>

          <p>
            A especialidade solicitada não existe ou foi removida.
          </p>

          <button onClick={() => navigate('/especialidades')}>
            Voltar para especialidades
          </button>
        </div>
      </section>
    )
  }

  function handleAgendarConsulta() {
    navigate('/agendamentos', {
      state: {
        especialidade: {
          id: especialidade.id,
          nome: especialidade.nome,
          valor: especialidade.valor,
        },
      },
    })
  }

  return (
    <section className="especialidade-detalhes">
      <div className="especialidade-detalhes__card">
        <span className="especialidade-detalhes__label">
          Especialidade
        </span>

        <h1>{especialidade.nome}</h1>

        <p>
          {especialidade.descricao}
        </p>

        <strong>
          Valor da consulta: € {especialidade.valor}
        </strong>

        <button onClick={handleAgendarConsulta}>
          Agendar Consulta
        </button>
      </div>
    </section>
  )
}

export default EspecialidadeDetalhes