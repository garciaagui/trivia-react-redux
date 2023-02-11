<a name="readme-top"></a>

<h1 align="center">Projeto Trivia 💡❓</h1>

<details>
  <summary>Sumário</summary>
  <ol>
    <li><a href="#sobre-o-projeto">Sobre o Projeto</a></li>
    <li><a href="#tecnologias">Tecnologias</a></li>
    <li><a href="#funcionalidades">Funcionalidades</a></li>
    <li><a href="#como-executar-o-projeto">Como Executar o Projeto</a></li>
    <li><a href="#habilidades">Habilidades</a></li>
    <li><a href="#sobre-a-trybe">Sobre a Trybe</a></li>
    <li><a href="#equipe">Equipe</a></li>
  </ol>
</details>

## Sobre o Projeto

Projeto **14** do curso de Desenvolvimento Web da [Trybe][trybe-site-url].

O Trivia é um jogo de perguntas e respostas, no qual a pessoa jogadora deverá responder uma sequência de 5 perguntas. Ao término da partida, ela terá acesso ao seu _score_ e também poderá conferir um ranking das melhores pontuações.

A base de dados utilizada provêm de duas APIs distintas: [Trivia API](https://opentdb.com/api_config.php) para as questões e [Gravatar](https://br.gravatar.com/site/implement/images/) para as imagens das pessoas jogadoras.

O projeto foi realizado em <a href="#equipe">equipe</a>, com a adoção da metodologia ágil e dos frameworks Scrum e Kanban. O Scrum foi utilizado para gerenciar o projeto, enquanto o Kanban acompanhava as tarefas e permitia uma visualização das atividades.

<!-- [![Projeto Trivia][project-demo]][project-url] -->

<br/>

## Tecnologias

<details>
  <summary><strong>💻 Desenvolvimento </strong></summary><br />

- [HTML5][html5-url]
- [CSS3][css3-url]
- [JavaScript][javascript-url]
- [Bootstrap][bootstrap-url]
- [React.js][react-url]
- [React Router][react-router-url]
- [Redux][redux-url]

---

</details>

<details>
  <summary><strong>🧪 Testes </strong></summary><br />

- [Jest][jest-url]
- [React Testing Library][rtl-url]

---

</details>

<details>
  <summary><strong>✨ Alinhamento e qualidade de código </strong></summary><br />

- [ESLint][eslint-url]
- [StyleLint][stylelint-url]

---

</details>

<br/>

## Funcionalidades

<ul>
  <li>Logar no jogo e, se o email tiver cadastro no site <a href="https://pt.gravatar.com/">Gravatar</a>, ter sua foto associada ao perfil da pessoa usuária.</li>
  <li>Acessar a página referente ao jogo, onde a pessoa jogadora deve escolher uma das respostas disponíveis para cada uma das perguntas apresentadas. A resposta deve ser marcada antes do contador de tempo chegar a zero, caso contrário a resposta será considerada errada.</li>
  <li>Após 5 perguntas respondidas, a pessoa jogadora será redirecionada para a tela de score, onde o texto mostrado depende do número de acertos.</li>
  <li>Visualizar a página de ranking, se quiser, ao final de cada jogo.</li>
  <li>Configurar algumas opções para o jogo em uma tela de configuração acessível a partir do cabeçalho do app.</li>
</ul>

<br/>

## Como Executar o Projeto

<!-- > ℹ️ Caso deseje somente testar a aplicação, [clique aqui][project-url]. -->

Para rodar o projeto localmente, siga os passos abaixo.

1. Clone o repositório;

```
git clone git@github.com:garciaagui/trybe-project-14_trivia-react-redux.git
```

2. Navegue até a raiz do projeto;

```
cd trybe-project-14_trivia-react-redux
```

3. Instale as dependências;

```
npm install
```

4. Inicialize o projeto;

```
npm run start
```

5. Caso deseje, utilize o comando abaixo para executar os testes.

```
npm run test:coverage
```

<br/>

## Habilidades

<ul>
  <li>Utilização de componentes funcionais React.</li>
  <li>Utilização do Redux para gerencimento de estado.</li>
  <li>Criação de rotas utilizando React Router.</li>
  <li>Criação de testes automatizados com RTL, de modo a garantir que a aplicação possua uma boa cobertura de testes.</li>
  <li>Aplicação dos frameworks de metodologia ágil Scrum e Kanban para gerenciamento do projeto.</li>
</ul>

<br/>

## Sobre a Trybe

_"A [Trybe][trybe-site-url] é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa só paga quando conseguir um bom trabalho."_

_"O programa conta com mais de 1.500 horas de aulas presenciais e online, aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais._"

<br/>

## Equipe

### Eric da Silva Contimos

[![Gmail][gmail-badge]][email-eric] [![Linkedin][linkedin-badge]][linkedin-eric] [![GitHub][github-badge]][github-eric]

### Gabriel Voltani Vatanabe

[![Linkedin][linkedin-badge]][linkedin-gabriel] [![GitHub][github-badge]][github-gabriel]

### Guilherme Garcia

[![Gmail][gmail-badge]][email-guilherme] [![Linkedin][linkedin-badge]][linkedin-guilherme] [![GitHub][github-badge]][github-guilherme]

### Guyddo Gonçalves Lima

[![Gmail][gmail-badge]][email-guyddo] [![Linkedin][linkedin-badge]][linkedin-guyddo] [![GitHub][github-badge]][github-guyddo]

### Miguel Vieira

[![Linkedin][linkedin-badge]][linkedin-miguel] [![GitHub][github-badge]][github-miguel]

<p align="right"><a href="#readme-top">Voltar ao topo</a></p>

<!-- MARKDOWN LINKS & IMAGES -->

[trybe-site-url]: https://www.betrybe.com/
[project-demo]: ./project-demo.gif
[project-url]: https://recipes-perfecto-app.vercel.app

<!-- Stacks URLs -->

[bootstrap-url]: https://getbootstrap.com/
[css3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[eslint-url]: https://eslint.org/
[html5-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[jest-url]: https://jestjs.io/
[react-url]: https://reactjs.org/
[react-router-url]: https://reactrouter.com/en/main
[redux-url]: https://redux.js.org/
[rtl-url]: https://testing-library.com/docs/react-testing-library/intro/
[stylelint-url]: https://stylelint.io/

<!-- Contact Badges -->

[gmail-badge]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[linkedin-badge]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[github-badge]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[instagram-badge]: https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white

<!-- Contact URLs -->

[email-eric]: ericdasilva0@gmail.com
[linkedin-eric]: https://www.linkedin.com/in/eric-contimos/
[github-eric]: https://github.com/Eric-html
[linkedin-gabriel]: https://www.linkedin.com/in/gabrielvoltani/
[github-gabriel]: https://github.com/gabrielvoltani
[email-guilherme]: mailto:garciaguig@gmail.com
[linkedin-guilherme]: https://www.linkedin.com/in/garciaagui/
[github-guilherme]: https://github.com/garciaagui
[linkedin-miguel]: https://www.linkedin.com/in/miguel-vieira015/
[github-miguel]: https://github.com/mjggel
[email-guyddo]: guyddogl@gmail.com
[linkedin-guyddo]: https://www.linkedin.com/in/guyddogl/
[github-guyddo]: https://github.com/guyddogl
