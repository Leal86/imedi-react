import './Agendamentos.css'

import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Tooltip from '../../components/Tooltip/Tooltip'

function Agendamentos() {
  const location = useLocation()
  const navigate = useNavigate()

  const especialidadeSelecionada = location.state?.especialidade
  const formularioBloqueado = !especialidadeSelecionada

  const [formulario, setFormulario] = useState({
    paciente: '',
    telefone: '',
    data: '',
    horario: '',
    observacoes: '',
  })

  const [mensagemSucesso, setMensagemSucesso] = useState('')
  const [mensagemErro, setMensagemErro] = useState('')
  const [agendamentos, setAgendamentos] = useState([])
  const [carregouStorage, setCarregouStorage] = useState(false)

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('imedi-agendamentos')

    if (dadosSalvos) {
      setAgendamentos(JSON.parse(dadosSalvos))
    }

    setCarregouStorage(true)
  }, [])

  useEffect(() => {
    if (!carregouStorage) {
      return
    }

    localStorage.setItem(
      'imedi-agendamentos',
      JSON.stringify(agendamentos),
    )
  }, [agendamentos, carregouStorage])

  useEffect(() => {
    if (!mensagemSucesso && !mensagemErro) {
      return
    }

    const timer = setTimeout(() => {
      setMensagemSucesso('')
      setMensagemErro('')
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [mensagemSucesso, mensagemErro])

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

    if (!especialidadeSelecionada) {
      setMensagemSucesso('')
      setMensagemErro(
        'Escolha uma especialidade antes de preencher e confirmar o agendamento.',
      )
      return
    }

    const novoAgendamento = {
      id: Date.now(),
      paciente: formulario.paciente,
      telefone: formulario.telefone,
      data: formulario.data,
      horario: formulario.horario,
      observacoes: formulario.observacoes,
      especialidade: especialidadeSelecionada.nome,
    }

    setAgendamentos((estadoAtual) => [
      novoAgendamento,
      ...estadoAtual,
    ])

    setMensagemErro('')
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
    setMensagemErro('')

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
              Valor da consulta: €{' '}
              {especialidadeSelecionada.valor}
            </span>
          </div>
        ) : (
          <div className="agendamentos__empty">
            <p>
              Nenhuma especialidade foi selecionada.
            </p>

            <span>
              Escolha uma especialidade antes de preencher o formulário de agendamento.
            </span>

            <button
              className="agendamentos__button"
              type="button"
              onClick={handleVerEspecialidades}
            >
              Escolher especialidade
            </button>
          </div>
        )}

        {mensagemErro && (
          <div
            className="agendamentos__empty"
            role="alert"
          >
            <p>{mensagemErro}</p>
          </div>
        )}

        {mensagemSucesso && (
          <div
            className="agendamentos__success"
            role="alert"
          >
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

        <form
          className="agendamentos__form"
          onSubmit={handleSubmit}
          aria-disabled={formularioBloqueado}
        >
          <div className="agendamentos__field">
            <label htmlFor="paciente">
              Nome do paciente
            </label>

            <input
              id="paciente"
              name="paciente"
              type="text"
              placeholder="Ex: Maria Silva"
              value={formulario.paciente}
              onChange={handleChange}
              disabled={formularioBloqueado}
              required
            />
          </div>

          <div className="agendamentos__field agendamentos__field--with-tooltip">
            <label
              className="agendamentos__label"
              htmlFor="telefone"
            >
              Telefone

              <Tooltip texto="Informe apenas números. O campo aceita até 9 dígitos." />
            </label>

            <input
              id="telefone"
              name="telefone"
              type="text"
              inputMode="numeric"
              placeholder="Ex: 912345678"
              value={formulario.telefone}
              onChange={handleChange}
              disabled={formularioBloqueado}
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
              disabled={formularioBloqueado}
              required
            />
          </div>

          <div className="agendamentos__field agendamentos__field--with-tooltip">
            <label
              className="agendamentos__label"
              htmlFor="horario"
            >
              Horário

              <Tooltip texto="Escolha um horário disponível para atendimento na clínica." />
            </label>

            <input
              id="horario"
              name="horario"
              type="time"
              value={formulario.horario}
              onChange={handleChange}
              disabled={formularioBloqueado}
              required
            />
          </div>

          <div className="agendamentos__field agendamentos__field--full">
            <label htmlFor="observacoes">
              Observações
            </label>

            <textarea
              id="observacoes"
              name="observacoes"
              placeholder="Informe detalhes importantes para a consulta."
              value={formulario.observacoes}
              onChange={handleChange}
              disabled={formularioBloqueado}
              rows="4"
            />
          </div>

          <button
            className="agendamentos__button"
            type="submit"
            disabled={formularioBloqueado}
          >
            Confirmar Agendamento
          </button>
        </form>
      </div>

      <div className="agendamentos__card">
        <h2>Consultas Agendadas</h2>

        {agendamentos.length === 0 ? (
          <p>
            Nenhuma consulta foi agendada até o momento.
          </p>
        ) : (
          agendamentos.map((agendamento) => (
            <div
              key={agendamento.id}
              className="agendamentos__selected"
            >
              <strong>
                {agendamento.paciente}
              </strong>

              <span>
                Especialidade:{' '}
                {agendamento.especialidade}
              </span>

              <span>
                Data: {agendamento.data}
              </span>

              <span>
                Horário: {agendamento.horario}
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default Agendamentos