import './Topbar.css'

import { IoSearchOutline } from 'react-icons/io5'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar__search">
        <IoSearchOutline className="topbar__search-icon" />

        <input
          className="topbar__input"
          type="text"
          placeholder="Pesquisar especialidade ou paciente..."
        />
      </div>

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