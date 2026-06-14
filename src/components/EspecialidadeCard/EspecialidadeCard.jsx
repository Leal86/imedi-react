import './EspecialidadeCard.css'

import { useNavigate } from 'react-router-dom'

import { FaHeartbeat, FaBaby, FaBone, FaBrain } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'
import { MdOutlineHealthAndSafety } from 'react-icons/md'

const icones = {
  cardiologia: <FaHeartbeat />,
  dermatologia: <MdOutlineHealthAndSafety />,
  pediatria: <FaBaby />,
  clinica: <FaUserDoctor />,
  ortopedia: <FaBone />,
  neurologia: <FaBrain />,
}

function EspecialidadeCard({ id, nome, descricao, valor, icone }) {
  const navigate = useNavigate()

  function handleSelecionarEspecialidade() {
    navigate('/agendamentos', {
      state: {
        especialidade: {
          id,
          nome,
          valor,
        },
      },
    })
  }

  return (
    <article className="especialidade-card">
      <div className="especialidade-card__icon">
        {icones[icone]}
      </div>

      <h3>{nome}</h3>

      <p>{descricao}</p>

      <span className="especialidade-card__price">
        € {valor}
      </span>

      <button
        className="especialidade-card__button"
        onClick={handleSelecionarEspecialidade}
      >
        Selecionar
      </button>
    </article>
  )
}

export default EspecialidadeCard