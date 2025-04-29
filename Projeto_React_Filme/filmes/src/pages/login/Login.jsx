import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao.jsx";

const Login = () => {   
    return(
        <main className="main_login">
            {/* <p>Balerina caputina 🩰💃 ☕</p> */}
            <div className="banner"></div>
            <section className="section_login">
                <img src={Logo} alt="" />
                <form action="" className="form_login">
                    <h1>Login</h1>
                        <div className="campos_login">
                        <div className="campo_input">
                                <label htmlFor="email">Email:</label>
                                <input type="email" name= "email" placeholder="Digite o seu email"/>
                            </div>
                            <div className="campo_input">
                                <label htmlFor="senha">Senha:</label>
                                <input type="password" name= "senha" placeholder="Digite a sua senha"/>
                            </div>
                        </div>
                    <Botao nomeDoBotao="Entrar"/>
                </form>
            </section>
        </main>
    )
}

export default Login;   
