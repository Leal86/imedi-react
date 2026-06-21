import './Especialidades.css'

import { useEffect, useState } from 'react'

import EspecialidadeCard from '../../components/EspecialidadeCard/EspecialidadeCard'

function Especialidades() {
  const [listaEspecialidades, setListaEspecialidades] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    async function carregarEspecialidades() {
      try {
        const response = await fetch('/data/especialidadesData.json')

        const data = await response.json()

        setListaEspecialidades(data)
      } catch (error) {
        console.error('Erro ao carregar especialidades:', error)
        setErro(true)
      } finally {
        setLoading(false)
      }
    }

    carregarEspecialidades()
  }, [])

  if (loading) {
    return (
      <section className="especialidades">
        <p role="status">Carregando especialidades...</p>
      </section>
    )
  }

  if (erro) {
    return (
      <section className="especialidades">
        <p role="alert">
          Não foi possível carregar as especialidades.
        </p>
      </section>
    )
  }

  return (
    <section className="especialidades">
      <div className="especialidades__header">
        <h1>Especialidades</h1>

        <p>
          Selecione uma especialidade para iniciar o agendamento.
        </p>
      </div>

      <div className="especialidades__grid">
        {listaEspecialidades.map((especialidade) => (
          <EspecialidadeCard
            key={especialidade.id}
            id={especialidade.id}
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