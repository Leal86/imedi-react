import './EspecialidadeDetalhes.css'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EspecialidadeDetalhes() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [especialidade, setEspecialidade] = useState(null)
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    async function carregarEspecialidade() {
      try {
        const response = await fetch(
          '/data/especialidadesData.json',
        )

        const data = await response.json()

        const encontrada = data.find(
          (item) => item.id === Number(id),
        )

        setEspecialidade(encontrada)
      } catch (error) {
        console.error('Erro ao carregar especialidade:', error)
        setErro(true)
      } finally {
        setLoading(false)
      }
    }

    carregarEspecialidade()
  }, [id])

  if (loading) {
    return (
      <section className="especialidade-detalhes">
        <div className="especialidade-detalhes__card">
          <p role="status">Carregando especialidade...</p>
        </div>
      </section>
    )
  }

  if (erro) {
    return (
      <section className="especialidade-detalhes">
        <div className="especialidade-detalhes__card">
          <h1>Erro ao carregar dados</h1>

          <p role="alert">
            Não foi possível carregar os dados da especialidade.
          </p>

          <button onClick={() => navigate('/especialidades')}>
            Voltar para especialidades
          </button>
        </div>
      </section>
    )
  }

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