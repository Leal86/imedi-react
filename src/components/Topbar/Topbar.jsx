import './Topbar.css'

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar__search">
        <span className="topbar__search-icon">🔎</span>
        <input
          className="topbar__input"
          type="text"
          placeholder="Pesquisar especialidade ou paciente..."
        />
      </div>

      <div className="topbar__user">
        <span className="topbar__notification">🔔</span>

        <div className="topbar__avatar">
          AM
        </div>

        <div>
          <strong>Atendente iMedi</strong>
          <p>Recepção</p>
        </div>
      </div>
    </header>
  )
}

export default Topbar