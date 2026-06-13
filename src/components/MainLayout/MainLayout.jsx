import './MainLayout.css'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import RightPanel from '../RightPanel/RightPanel'

function MainLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout__main">
        <Topbar />

        <main className="layout__content">
          {children}
        </main>
      </div>

      <aside className="layout__right-panel">
        <RightPanel
          nome="Alexsander Leal"
          cargo="Recepção"
          consultasHoje={8}
          especialidades={6}
          pendentes={3}
        />
      </aside>
    </div>
  )
}

export default MainLayout