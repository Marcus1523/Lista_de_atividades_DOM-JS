(() => { //não deixa o cod funcionar pois esta no modo anonimo para não vazar dados do cod.
    //chamando as "variaveis/funçoes" do botão e do input que estão no HTML.
    const novaTarefa = document.querySelector('[data-form-button]')
    const inputTarefa = document.querySelector('[data-form-input]')

    function criarBotaoDelete() {
        const botaoDelete = document.createElement('span') //span da a possibilidade de por o X
        botaoDelete.innerText = "X"
        botaoDelete.className = "close" 

        botaoDelete.addEventListener('click', deletarTarefa)  //sempre queclcar no botão delete chama a função deletar tarefa e delata

        return botaoDelete;
    }

    function deletarTarefa(evento) {
        const botaoDeleteClicado = evento.target //descobre o que foi clicado
        const itemDaLista = botaoDeleteClicado.parentElement  //descobre quem é o "pai"

        itemDaLista.remove(); //remove o item da lista
    }

    function criarTarefa(evento) {
        //O DOM assume o camando e não deixa carregar a pagina/ remove o "recarregar pagina" padrão do botão
        evento.preventDefault()

        //pega a string da nova tarefa e adiciona na lista
        const valorTarefa = "- " + inputTarefa.value + "."
        const listaDeTarefas = document.querySelector('[data-task]')

        //label 
        novaLabel = document.createElement('label')
        novaLabel.innerText = valorTarefa    //coloca o valor o input dentro da label
        novaLabel.className = "form-check-label"


        novoItem = document.createElement('li')
        novoItem.appendChild(novaLabel)
        novoItem.appendChild(criarBotaoDelete())

        //coloca dentro da Li (um filho da lista)
        listaDeTarefas.appendChild(novoItem)

        //limpa o barra depois que adicionou uma nova tarefa
        inputTarefa.value = " "
    }

    //adiciona um evento quando o botão é precionado
    novaTarefa.addEventListener('click', criarTarefa)

})(/*deixa o cod funcionar com o modo anonimo mas n mostra nenhum dado*/)