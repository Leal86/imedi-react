import './Sidebar.css'

import { MdDashboard } from 'react-icons/md'
import { FaUserDoctor } from 'react-icons/fa6'
import { BsCalendar2Check } from 'react-icons/bs'
import { FaHeartbeat } from 'react-icons/fa'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__logo">
          <FaHeartbeat />
        </div>

        <span className="sidebar__title">
          iMedi
        </span>
      </div>

      <nav className="sidebar__nav">
        <a
          className="sidebar__link sidebar__link--active"
          href="#"
        >
          <MdDashboard />

          Dashboard
        </a>

        <a className="sidebar__link" href="#">
          <FaUserDoctor />

          Especialidades
        </a>

        <a className="sidebar__link" href="#">
          <BsCalendar2Check />

          Agendamentos
        </a>
      </nav>
    </aside>
  )
}

export default Sidebar