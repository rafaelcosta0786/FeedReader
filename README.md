# Como executar

Basta abrir o arquivo "index.html" para executar os suítes de teste. Caso queria adicionar mais teste, basta abrir o arquivo spec/feedreader.js.

# O que foi desenvolvido neste projeto

1. Teste que faça um loop em cada feed no objeto `allFeeds` e garanta que ele tenha um URL definido e que o URL não esteja vazio.
2. Teste que faça um loop em cada feed no objeto `allFeeds` e garanta que ele tenha um nome definido e que o nome não esteja vazio.
3. Teste novo conjunto de testes chamado `" O menu "`.
4. Teste que garanta que o elemento de menu esteja oculto por padrão. Você terá que analisar o HTML e o CSS para determinar como estamos realizando a ocultação / exibição do elemento de menu.
5. Teste que garanta que o menu mude de visibilidade quando o ícone do menu for clicado. Este teste deve ter duas expectativas: o menu é exibido quando clicado e oculta quando clicado novamente.
6. Escreva um conjunto de testes chamado `" Entradas Iniciais "`.
7. Teste que garanta que quando a função `loadFeed` é chamada e conclua seu trabalho, há pelo menos um único elemento` .entry` dentro do contêiner `.feed`.
8. Escreva um conjunto de testes chamado `" New Feed Selection "`.
9. Teste que garanta quando um novo feed é carregado pela função `loadFeed` que o conteúdo realmente muda.
10. Nenhum teste deve depender dos resultados de outro.
11. As chamadas de retorno devem ser usadas para garantir que os feeds sejam carregados antes de serem testados.
12. Implemente o tratamento de erros para variáveis ​​indefinidas e acesso à matriz fora do limite.
13. Todos os seus testes devem passar.

## Por que este projeto?

O teste é uma parte importante do processo de desenvolvimento e muitas organizações praticam um padrão de desenvolvimento conhecido como "desenvolvimento orientado a testes". É quando os desenvolvedores escrevem os testes primeiro, antes de começarem a desenvolver seu aplicativo. Todos os testes inicialmente falharam e então eles começaram a escrever o código do aplicativo para fazer esses testes passarem.

Se você trabalha em uma organização que usa desenvolvimento orientado a testes ou em uma organização que usa testes para garantir que o desenvolvimento futuro de recursos não destrua recursos existentes, é uma habilidade importante ter!