import './NotFound.css'

import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <section className="not-found">
      <div className="not-found__card">
        <span className="not-found__code">
          404
        </span>

        <h1>Página não encontrada</h1>

        <p>
          A página que você tentou acessar não existe ou foi removida.
        </p>

        <button onClick={() => navigate('/')}>
          Voltar para o Dashboard
        </button>
      </div>
    </section>
  )
}

export default NotFound