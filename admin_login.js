document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar sua lógica de autenticação
    // Para o exemplo, vamos usar um username e password fixos
    const validUsername = 'admin';
    const validPassword = 'senha123';

    const loginMessage = document.getElementById('loginMessage');

    // Verifica se o username e password estão corretos
    if (username === validUsername && password === validPassword) {
        loginMessage.textContent = 'Login bem-sucedido!'; // Mensagem de sucesso
        loginMessage.className = 'text-success'; // Adiciona classe de sucesso
        window.location.href="direcionamento.html"
    } else {
        loginMessage.textContent = 'Usuário ou senha incorretos.'; // Mensagem de erro
        loginMessage.className = 'text-danger'; // Adiciona classe de erro
    }
});

