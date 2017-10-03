![Itelios](http://www.itelios.com.br/images/logo_itelios_orange@2x.png)

# Itelios Frontend Challenge

## Tecnologias utilizadas
- A prateleira foi feita com javascript puro.
- No carrossel utilizei o Slick.js.
- Para desenvolver o CSS utilizei o pré-processador SASS.
- Para fazer todo o controle de automatização de tarefas, utilizei o Gulp.js, compilando o SASS, minificando CSS e JS e exportando para um ambiente final uma cópia do ambiente de produção.

## Instruções

- No prompt de comando entre no diretório do projeto e digite:
- npm install + enter (criação da pasta node modules)
- Na raiz do projeto, crie um arquivo .bowerrc e coloque esse trecho de código:
{
  "directory": "src/bower_components"
}
- No prompt de comando digite:
- bower install + enter (criação da pasta bower_components)
- Na pasta dist já existem os arquivos compilados, mas caso queira compilá-los novamente digite no prompt de commando:
- gulp clean + enter (limpar os arquivos da pasta dist)
- e depois
- gulp build + enter (compilar os arquivos e jogar uma cópia na pasta dist)



