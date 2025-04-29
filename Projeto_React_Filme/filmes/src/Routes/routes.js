import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme";
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* http://localhost:3000/ => login */}
                <Route path="/" element={<Login />} exact />
                {/* http://localhost:3000/FIlme => genero de filme */}
                <Route path="/Filme" element={<CadastroFilme />} />
                {/* http://localhost:3000/Genero => genero de genero */}
                <Route path="/Genero" element={<CadastroGenero />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Rotas;