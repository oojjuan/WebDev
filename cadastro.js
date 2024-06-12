function alternar() {
    if (document.getElementById("cadastro-container").style.display == 'none') {
        document.getElementById("cadastro-container").style.display = 'block';
        document.getElementById("login-container").style.display = 'none';
    } else {
        document.getElementById("cadastro-container").style.display = 'none';
        document.getElementById("login-container").style.display = 'block';
    }
}

function criarConta() {
    const email = document.getElementById('cadastro-email').value;
    const senha = document.getElementById('cadastro-senha').value;
    const confirmarSenha = document.getElementById('cadastro-confirmarSenha').value;
    if (senha !== confirmarSenha) {
        alert('As senhas não são as mesmas!');
        return
    }

    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
    alert('Conta criada com sucesso!');
    alternar();
}

function entrar() {
    const email = document.getElementById('cadastro-email').value;
    const senha = document.getElementById('cadastro-senha').value;

    const emailArmazenado = localStorage.getItem('email');
    const senhaArmazenada = localStorage.getItem('senha');

    if (email === emailArmazenado && senha === senhaArmazenada) {
        alert('Login realizado com sucesso!')
        window.location.href = 'pilotos.html';
    } else {
        alert('Email ou senha incorretos');
    }
}