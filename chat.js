let listaMensagens = [];
const chatMessages = document.querySelector('#chat-messages');
const botaoCommit = document.querySelector('#message-commit');
const inputMessage = document.querySelector('#message-input');

function adicionarMensagem(mensagem){
    
    listaMensagens.push({
        apelido: 'Lucas',
        mensagem: mensagem
    })
}

function formatarMensagens(){
    let htmlData = '';
    
    for (i in listaMensagens){
        let objeto = listaMensagens[i];
        
        htmlData += `
        <div class="chat-message">
            <span class="chat-message-apelido">
                <!-- implementar apelido aqui -->
                ${objeto.apelido}:
            </span>
            <span class="chat-message-item">
                <!-- implementar mensagem -->
                ${objeto.mensagem}
            </span>
        </div>
        `
    }
    
    atualizarHTML(htmlData);
}

function atualizarHTML(conteudo) {
    chatMessages.innerHTML= conteudo;
}

function commitMessageClickHandler() {
    
    botaoCommit.addEventListener('click', () => {
    
        if (inputMessage.value.trim().length === 0) {
            inputMessage.focus();
            return;
        }
        adicionarMensagem(inputMessage.value);
        formatarMensagens();
        inputMessage.value = '';
    });
}

window.addEventListener('load', commitMessageClickHandler())

