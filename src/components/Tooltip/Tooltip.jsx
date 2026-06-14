import './Tooltip.css'

function Tooltip({ texto }) {
  return (
    <span className="tooltip">
      ?

      <span className="tooltip__text">
        {texto}
      </span>
    </span>
  )
}

export default Tooltip