import './Topbar.css'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IoSearchOutline } from 'react-icons/io5'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'

function Topbar() {
  const navigate = useNavigate()

  const [termoBusca, setTermoBusca] = useState('')
  const [mensagemErro, setMensagemErro] = useState('')
  const [especialidades, setEspecialidades] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function carregarEspecialidades() {
      try {
        const response = await fetch('/data/especialidadesData.json')
        const data = await response.json()

        setEspecialidades(data)
      } catch (error) {
        console.error('Erro ao carregar especialidades:', error)
        setMensagemErro('Erro ao carregar dados da busca.')
      } finally {
        setLoading(false)
      }
    }

    carregarEspecialidades()
  }, [])

  useEffect(() => {
    if (!mensagemErro) {
      return
    }

    const timer = setTimeout(() => {
      setMensagemErro('')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [mensagemErro])

  function removerAcentos(texto) {
    return texto
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
  }

  function handleSearchChange(event) {
    setTermoBusca(event.target.value)
  }

  function handleSearchSubmit(event) {
    event.preventDefault()

    const termoNormalizado = removerAcentos(termoBusca.trim())

    if (!termoNormalizado) {
      return
    }

    if (loading) {
      setMensagemErro('Aguarde o carregamento da busca.')
      return
    }

    const especialidadeEncontrada = especialidades.find((especialidade) => {
      const nomeNormalizado = removerAcentos(especialidade.nome)

      return nomeNormalizado.includes(termoNormalizado)
    })

    if (especialidadeEncontrada) {
      navigate(`/especialidades/${especialidadeEncontrada.id}`)
      setTermoBusca('')
      setMensagemErro('')
      return
    }

    setMensagemErro('Especialidade não encontrada.')
  }

  return (
    <header className="topbar">
      <form
        className="topbar__search"
        onSubmit={handleSearchSubmit}
        aria-label="Pesquisar especialidades"
      >
        <IoSearchOutline
          className="topbar__search-icon"
          aria-hidden="true"
        />

        <input
          className="topbar__input"
          type="text"
          placeholder="Pesquisar especialidade..."
          value={termoBusca}
          onChange={handleSearchChange}
          aria-label="Campo de pesquisa de especialidades"
        />

        {mensagemErro && (
          <span
            className="topbar__search-error"
            role="alert"
          >
            {mensagemErro}
          </span>
        )}
      </form>

      <div className="topbar__user">
        <IoNotificationsOutline
          className="topbar__notification"
          aria-label="Notificações"
          role="img"
        />

        <FaUserCircle
          className="topbar__profile-icon"
          aria-label="Usuário logado"
          role="img"
        />

        <div>
          <strong>Atendente iMedi</strong>
          <p>Recepção</p>
        </div>
      </div>
    </header>
  )
}

export default Topbar