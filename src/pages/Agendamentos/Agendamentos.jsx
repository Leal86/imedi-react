import './Agendamentos.css'

import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Agendamentos() {
  const location = useLocation()
  const navigate = useNavigate()

  const especialidadeSelecionada = location.state?.especialidade

  const [formulario, setFormulario] = useState({
    paciente: '',
    telefone: '',
    data: '',
    horario: '',
    observacoes: '',
  })

  const [mensagemSucesso, setMensagemSucesso] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    if (name === 'telefone') {
      const apenasNumeros = value.replace(/\D/g, '')
      const telefoneLimitado = apenasNumeros.slice(0, 9)

      setFormulario({
        ...formulario,
        telefone: telefoneLimitado,
      })

      return
    }

    setFormulario({
      ...formulario,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    setMensagemSucesso(
      `Agendamento de ${formulario.paciente} confirmado com sucesso.`,
    )

    setFormulario({
      paciente: '',
      telefone: '',
      data: '',
      horario: '',
      observacoes: '',
    })
  }

  function handleAgendarNovaConsulta() {
    setMensagemSucesso('')

    setFormulario({
      paciente: '',
      telefone: '',
      data: '',
      horario: '',
      observacoes: '',
    })
  }

  function handleVerEspecialidades() {
    navigate('/especialidades')
  }

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

        {mensagemSucesso && (
          <div className="agendamentos__success">
            <p>{mensagemSucesso}</p>

            <div className="agendamentos__success-actions">
              <button
                type="button"
                onClick={handleAgendarNovaConsulta}
              >
                Agendar nova consulta
              </button>

              <button
                type="button"
                onClick={handleVerEspecialidades}
              >
                Ver especialidades
              </button>
            </div>
          </div>
        )}

        <form className="agendamentos__form" onSubmit={handleSubmit}>
          <div className="agendamentos__field">
            <label htmlFor="paciente">Nome do paciente</label>

            <input
              id="paciente"
              name="paciente"
              type="text"
              placeholder="Ex: Maria Silva"
              value={formulario.paciente}
              onChange={handleChange}
              required
            />
          </div>

          <div className="agendamentos__field">
            <label htmlFor="telefone">Telefone</label>

            <input
              id="telefone"
              name="telefone"
              type="text"
              inputMode="numeric"
              placeholder="Ex: 912345678"
              value={formulario.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="agendamentos__field">
            <label htmlFor="data">Data</label>

            <input
              id="data"
              name="data"
              type="date"
              value={formulario.data}
              onChange={handleChange}
              required
            />
          </div>

          <div className="agendamentos__field">
            <label htmlFor="horario">Horário</label>

            <input
              id="horario"
              name="horario"
              type="time"
              value={formulario.horario}
              onChange={handleChange}
              required
            />
          </div>

          <div className="agendamentos__field agendamentos__field--full">
            <label htmlFor="observacoes">Observações</label>

            <textarea
              id="observacoes"
              name="observacoes"
              placeholder="Informe detalhes importantes para a consulta."
              value={formulario.observacoes}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <button className="agendamentos__button" type="submit">
            Confirmar Agendamento
          </button>
        </form>
      </div>
    </section>
  )
}

export default Agendamentos