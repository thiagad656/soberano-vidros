document.getElementById('contato-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão para exibir o alerta
  
    // Simula o envio do formulário (substitua pela lógica de envio real)
    fetch(this.action, {
      method: 'POST',
      body: new FormData(this)
    })
      .then(response => {
        if (response.ok) {
          // Exibe um pop-up de sucesso
          alert('Mensagem enviada com sucesso!');
          // Limpa os campos do formulário
          this.reset();
        } else {
          alert('Houve um erro ao enviar sua mensagem. Por favor, tente novamente!');
        }
      })
      .catch(() => {
        alert('Houve um erro ao enviar sua mensagem. Por favor, tente novamente!');
      });
  });