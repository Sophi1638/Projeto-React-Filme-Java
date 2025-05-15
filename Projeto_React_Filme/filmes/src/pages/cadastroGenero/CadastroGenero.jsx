import { useEffect, useState } from "react";
import api from "../../Services/services"
import Swal from 'sweetalert2'

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";


const CadastroGenero = () => {


    const [genero, setGenero] = useState("");
    const [listaGenero, setListaGenero] = useState([]);
    // const [deletarGenero, setDeletarGenero] = useState ();

    // DELETAR INICIO
    function deletar(titulo, mensagem) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    // aqui tem bagulho
                    title: titulo,
                    text: mensagem,
                    icon: "warning"
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    // aqui tem bagulho tambem
                    title: titulo,
                    text: mensagem,
                    icon: "success"
                });
            }
        });

    }


    function alerta(icone, mensagem) {

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }


    async function cadastrarGenero(evt) {
        evt.preventDefault();

        //verificar se o input esta vindo vazio
        if (genero.trim != "") {
            //try => tentar(o esperado)
            //catch => lanca a excecao
            try {
                //cadastrar um genero: post
                await api.post("/genero", { nome: genero });
                alerta("success", "Cadastro feito com sucesso!")
                setGenero()
            } catch (error) {
                alerta("error", "Erro! Entre em contato com o suporte do servisso")
                console.log(error);
            }
        } else {
            alerta("error", "Erro! Preencha o campo")
        }
    }

    async function listarGenero() {
        try {
            const resposta = await api.get("genero");
            // console.log(resposta.data)
            setListaGenero(resposta.data)
        } catch (error) {
            console.log(error)
        }
    }

    // funcao de excluir o genero;)//
    async function deletarGenero(Generoid) {
        try {
            await api.delete(`genero/${Generoid.idGenero}`)
        } catch (error) { 
            deletar("Tem certeza que deseja deletar","Essa ação não podera ser desfeita","Voce canselou sua ação","O genero não foi deletado")
            console.log(error)
        }



    }


    //teste: validar genero

    //useEffect <funcao> <dependencia>
    // useEffect(() => {
    //     console.log(genero);
    // }, [genero]);

    // fim do teste

    useEffect(() => {
        listarGenero();
    }, [])



    return (
        <>
            <Header />
            <main>
                <Cadastro tituloCadastro="cadastro de Genero"
                    visibilidade="none"
                    placeholder="Genero"
                    //Atribuindo a funcao:
                    funcCadastro={cadastrarGenero}
                    //Atribuindo o valor ao input:
                    valorInput={genero}
                    //Atribuindo a funcao que atualiza meu genero:
                    setValorInput={setGenero}
                />
                <Lista
                    tituloLista="Lista de Genero"
                    visibilidade="none"

                    // atribuir para lista, o ney estado atual:

                    lista={listaGenero}

                    funcExcluirGenero={deletarGenero}

                />

            </main>
            <Footer />
        </>
    )
}


export default CadastroGenero;