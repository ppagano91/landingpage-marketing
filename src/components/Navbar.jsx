import logo from "../assets/images/logo_ip2.png"

const Navbar = () => {
  return (
    <>
    <header className="header">
        <nav className="navbar navbar-expand-md bg-primary">
            <div className="container-fluid">
                <a className="fs-4 links" href="#">
                    <img className="logo"src={logo}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mb-2 mb-lg-0 w-100 justify-content-end">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#QuienSoy">¿Quién Soy?</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Sobre Mi</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar