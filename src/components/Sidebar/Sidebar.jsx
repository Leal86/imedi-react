import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__logo">+</div>
        <span className="sidebar__title">iMedi</span>
      </div>

      <nav className="sidebar__nav">
        <a className="sidebar__link sidebar__link--active" href="#">
          Dashboard
        </a>

        <a className="sidebar__link" href="#">
          Especialidades
        </a>

        <a className="sidebar__link" href="#">
          Agendamentos
        </a>
      </nav>
    </aside>
  )
}

export default Sidebar