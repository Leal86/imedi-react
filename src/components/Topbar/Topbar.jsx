import './Topbar.css'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IoSearchOutline } from 'react-icons/io5'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'

import { especialidades } from '../../data/especialidadesData'

function Topbar() {
  const navigate = useNavigate()

  const [termoBusca, setTermoBusca] = useState('')
  const [mensagemErro, setMensagemErro] = useState('')

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
      <form className="topbar__search" onSubmit={handleSearchSubmit}>
        <IoSearchOutline className="topbar__search-icon" />

        <input
          className="topbar__input"
          type="text"
          placeholder="Pesquisar especialidade..."
          value={termoBusca}
          onChange={handleSearchChange}
        />

        {mensagemErro && (
          <span className="topbar__search-error">
            {mensagemErro}
          </span>
        )}
      </form>

      <div className="topbar__user">
        <IoNotificationsOutline className="topbar__notification" />

        <FaUserCircle className="topbar__profile-icon" />

        <div>
          <strong>Atendente iMedi</strong>
          <p>Recepção</p>
        </div>
      </div>
    </header>
  )
}

export default Topbar