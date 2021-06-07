//const não pode mdar o valor, já a let pode mudar
const novaTarefa = document.querySelector('[data-form-button]')  //chamando as "variaveis/funçoes" do botão
const inputTarefa = document.querySelector('[data-form-input]')  //chamando as "variaveis/funçoes" do input




function criarTarefa(evento)                                         //atualiza a pagina toda vez que clicar no botão
{
    evento.preventDefault()                                         //não deixa carregar a pagina/ remove o "recarregar pagina" padrão do botão
  
    const valorTarefa = inputTarefa.value                           //escreve o que escrevemos no imput no console
    const listaDeTarefas = document.querySelector('[data-task]')    //variavel  da lista de tarefas



    novaLabel = document.createElement('label')
    novaLabel.innerText = valorTarefa
    novaLabel.className = "form-check-label"

    novoItem = document.createElement('li')
    novoItem.appendChild(novaLabel)

    listaDeTarefas.appendChild(novoItem)

    inputTarefa.value = ""    //atualiza a barra para que quando envia uma nova tarefa a barra fica limpa

  

}

novaTarefa.addEventListener('click', criarTarefa)            //adiciona um evento no botão / atualiza a pagina toda vez que clicar no botão



