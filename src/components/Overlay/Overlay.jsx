import './Overlay.css'

export default function Overlay() {
    return (
      <div className="container">
        <div className="brand">
          <img src="brand.svg" />
          <p>
            BIOTECH <strong>HEALTH</strong>
          </p>
        </div>
        <div>
          <ul>
            <li>Learn</li>
            <li>Numbers</li>
            <li>Engage</li>
          </ul>
        </div>
        <button>KNOW MORE</button>
    </div>
    )
}