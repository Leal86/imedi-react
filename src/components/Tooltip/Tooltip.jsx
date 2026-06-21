import './Tooltip.css'

import { useEffect, useRef, useState } from 'react'

function Tooltip({ texto }) {
  const [aberto, setAberto] = useState(false)

  const tooltipRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target)
      ) {
        setAberto(false)
      }
    }

    document.addEventListener(
      'mousedown',
      handleClickOutside,
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside,
      )
    }
  }, [])

  function handleToggle() {
    setAberto((estadoAnterior) => !estadoAnterior)
  }

  return (
    <span
      ref={tooltipRef}
      className="tooltip"
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      aria-label="Ajuda"
      aria-expanded={aberto}
    >
      ?

      <span
        className={`tooltip__text ${
          aberto ? 'tooltip__text--visible' : ''
        }`}
      >
        {texto}
      </span>
    </span>
  )
}

export default Tooltip