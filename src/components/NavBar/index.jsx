import './styles.css';
import { Logo } from '../../components/Logo/index';
import { CartWidget } from '../../components/CartWidget/index';

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container-fluid">
                    <div className="logoHome">
                        <a className="navbar-brand logo" href=" ">
                            <Logo/>
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href=" " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href=" ">Indumentaria</a></li>
                                        <li><a className="dropdown-item" href=" ">Calzados</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href=" ">Ver todo</a></li>
                                    </ul>
                            </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href=" ">Natación</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href=" ">Ciclismo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href=" ">Running</a>
                                </li> 
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="¿Qué estás buscando?" aria-label="Search"/>
                            <button className="btn btn-dark" type="submit">Buscar</button>
                        </form>
                        <a className="navbar-brand logo" href=" ">
                            <CartWidget/>
                        </a>     
                    </div>

                </div>
            </nav>
        </div>
    )
}

