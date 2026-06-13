import './EspecialidadeCard.css'

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

function EspecialidadeCard({ nome, descricao, valor, icone }) {
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

      <button className="especialidade-card__button">
        Selecionar
      </button>
    </article>
  )
}

export default EspecialidadeCard