import "./Header.css";
import Logo from "../../assets/img/logo.svg"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>

            <div className="layout_grid cabecalho">
                {/* au clicar no link redireciona para login */}
                <Link to="/" >
                <img src={Logo} alt="Logo do filmoteca" />
                </Link>

                <nav className="nav_header">
                    <Link></Link>
                    <Link className="link_header" to="/Filme">Filme</Link>
                    <Link className="link_header" to="/Genero">Gênero</Link>
                </nav>
            </div>
        </header>   
    )
}

export default Header;