import './Navbar.css'

const Navbar = () => {
  return (
    <section className="innerWidth paddings n-wrapper">
      <div className='flexStart img-container'>
        <img src="./logo.png" alt="brand logo" />
        <h3>Fonhar SAS</h3>
      </div>
      <nav className='n-list'>
        <ul className='flexCenter'>
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar
