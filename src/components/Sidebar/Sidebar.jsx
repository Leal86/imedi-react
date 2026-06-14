import './Sidebar.css'

import { NavLink } from 'react-router-dom'

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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'sidebar__link sidebar__link--active'
              : 'sidebar__link'
          }
        >
          <MdDashboard />
          Dashboard
        </NavLink>

        <NavLink
          to="/especialidades"
          className={({ isActive }) =>
            isActive
              ? 'sidebar__link sidebar__link--active'
              : 'sidebar__link'
          }
        >
          <FaUserDoctor />
          Especialidades
        </NavLink>

        <NavLink
          to="/agendamentos"
          className={({ isActive }) =>
            isActive
              ? 'sidebar__link sidebar__link--active'
              : 'sidebar__link'
          }
        >
          <BsCalendar2Check />
          Agendamentos
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar