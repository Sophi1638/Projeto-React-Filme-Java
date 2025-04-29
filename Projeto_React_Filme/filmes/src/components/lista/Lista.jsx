import "./Lista.css"
import Editar from "../../assets/img/pen-to-square-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"

const Lista = (props) => {
    return(
        <section className="layout_grid listagem">
            <h1>{props.listaDeCadastro}</h1>
            <hr/>

            <div className="tabela">
                <table>
                    <thead>
                        <tr className="table_cabecalho">
                            <th>Nome</th>
                            <th style={{display:props.visibilidade}}>Gênero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="item_lista">
                            <td data-cell ="Nome">Velozes e Furiosos</td>
                            <td data-cell ="Genero" style={{display:props.visibilidade}}>Ação</td>
                            <td data-cell ="Editar"><img src={Editar} alt="Imagem de uma caneta" /></td>
                            <td data-cell ="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="item_lista">
                            <td data-cell ="Nome">Velozes e Furiosos</td>
                            <td data-cell ="Genero" style={{display:props.visibilidade}}>Ação</td>
                            <td data-cell ="Editar"><img src={Editar} alt="Imagem de uma caneta" /></td>
                            <td data-cell ="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

    )
}

export default Lista;