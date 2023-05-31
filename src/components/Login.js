import React, { useState } from "react";
import Swal from 'sweetalert2'

// CommonJS
const Login = () => {
    const [showSignUp, setShowSignUp] = useState(false);

    const handleLinkClick = (e) => {
        e.preventDefault();
        setShowSignUp(!showSignUp);
    };

    let x = document.getElementById("demo_0");
    let y = document.getElementById("demo_1");
    let z = document.getElementById("demo_2");
    let a = document.getElementById("demo_3");
    let b = document.getElementById("demo_4");

    if (x) {
        Swal({
            icon: "error",
            title: "Ooops! Email já existente",
            text: "Tente novamente com outro email",
        });
    } else if (y) {
        Swal({
            icon: "success",
            title: "Conta criada com sucesso! ✔",
            text: "Seja bem-vindo 😃",
        });
    } else if (a) {
        Swal({
            icon: "error",
            title: "Credenciais inválidas ☠",
            text: "Tente novamente",
        });
    } else if (z) {
        Swal({
            icon: "error",
            title: "Erro na criação",
            text: "Tente novamente mais tarde!",
        });
    } else if (b) {
        Swal({
            icon: "error",
            title: "Conta não encontrada!",
            text: "Caso não tenha um cadastro faça um agora mesmo!",
        });
    }

    return (
        <div>
            {showSignUp ? (
                <div className="forms row container_login show-signup">
                    <div className="form sign-up">
                        <form action="" method="post">
                            <h2 className="text-center">Cadastro</h2>
                            <div className="form-group">
                                <label htmlFor="nome">Nome:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    name="nome"
                                    placeholder="Ex: Carlos"
                                    required
                                    pattern=".{3,}"
                                />
                                <label htmlFor="sobrenome">Sobrenome:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="sobrenome"
                                    name="sobrenome"
                                    placeholder="Ex: Silva Soares"
                                    required
                                    pattern=".{3,}"
                                />
                                <label htmlFor="email">E-mail:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="name@exemplo.com"
                                    required
                                    pattern=".{7,}"
                                />
                                <label htmlFor="SENHA">Senha:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="senha"
                                    name="senha"
                                    placeholder="*********"
                                    required
                                    pattern=".{8,}"
                                />
                                <div className="my-5 d-flex justify-content-between">
                                    <button className="btn text-muted btn-outline-light link">
                                        Já tenho uma conta
                                    </button>
                                    <button className="btn btn-primary criar_user" name="cadastrar">
                                        Cadastrar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="forms row container_login">
                    <div className="form sign-in">
                        <form action="" method="post">
                            <h2 className="text-center">Login</h2>
                            <div className="form-group">
                                <label htmlFor="email">E-mail:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="myTextField"
                                    name="email"
                                    placeholder="name@exemplo.com"
                                    required
                                    pattern=".{7,}"
                                />
                                <label htmlFor="SENHA">Senha:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="senha"
                                    name="senha"
                                    placeholder="*********"
                                    required
                                    pattern=".{8,}"
                                />
                                <div className="my-5 d-flex justify-content-between">
                                    <button className="btn text-muted btn-outline-light link" onClick={handleLinkClick}>
                                        Criar uma nova conta
                                    </button>
                                    <button className="btn btn-primary login_user" name="login_user">
                                        Entrar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;