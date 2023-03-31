<a name="readme-top"></a>

<h1 align="center">Project Trivia 💡❓</h1>

> [🇧🇷 Clique aqui para acessar a versão em português.](README_pt-br.md)

## Summary

<ol>
  <li><a href="#description">Description</a></li>
  <li><a href="#technologies">Technologies</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#how-to-run">How to Run</a></li>
  <li><a href="#about-trybe">About Trybe</a></li>
  <li><a href="#development-team">Development Team</a></li>
</ol>

## Description

**14th project** of the [Trybe][trybe-site-url] Web Development course.

The application presents a format similar to a trivia game, with interactive questions and answers, in which the player must answer a sequence of 5 questions. At the end of the game, the player will have access to their score and can also check a ranking of the best scores.

The database used comes from two distinct APIs: [Trivia API](https://opentdb.com/api_config.php) for questions and [Gravatar](https://br.gravatar.com/site/implement/images/) for player images.

The project was developed in a <a href="#development-team">team</a>, with the adoption of the agile methodology and Scrum and Kanban frameworks. Scrum was used to manage the project, while Kanban tracked tasks and provided a visualization of activities.

[![Projeto Trivia][project-demo]][project-url]

<br/>

## Technologies

<details>
  <summary><strong>💻 Development </strong></summary><br />

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
  <summary><strong>🧪 Testing </strong></summary><br />

- [Jest][jest-url]
- [React Testing Library][rtl-url]

---

</details>

<details>
  <summary><strong>✨ Code alignment and quality </strong></summary><br />

- [ESLint][eslint-url]
- [StyleLint][stylelint-url]

---

</details>

<br/>

## Features

<ul>
  <li>Log in to the game and, if the email is registered on the <a href="https://en.gravatar.com/">Gravatar</a> website, have the user's profile picture associated with their account.</li>
  <li>Access the game page, where the player must choose one of the available answers for each of the questions presented. The answer must be marked before the countdown timer reaches zero, otherwise the answer will be considered incorrect.</li>
  <li>After 5 questions answered, the player will be redirected to the score screen, where the text shown depends on the number of correct answers.</li>
  <li>View the ranking page, if desired, at the end of each game.</li>
  <li>Configure some options for the game on a settings screen accessible from the app header.</li>
</ul>

<br/>

## How to Run

> ℹ️ If you only want to test the application, [click here][project-url].

To run the project locally, follow the steps below.

1. Clone the repository;

```
git clone git@github.com:garciaagui/trivia-react-redux.git
```

2. Navigate to the project root directory;

```
cd trivia-react-redux/
```

3. Install the dependencies;

```
npm install
```

4. Start the project;

```
npm run start
```

5. If desired, use the command below to run the tests.

```
npm run test:coverage
```

<br/>

## About Trybe

_"[Trybe][trybe-site-url] is a future school for anyone who wants to improve their lives and build a successful career in technology, where the person only pays when they get a good job."_

_"The program features over 1,500 hours of online classes covering introduction to software development, front-end, back-end, computer science, software engineering, agile methodologies, and behavioral skills."_

<br/>

## Development Team

Check out the social networks and means of contact of the team members responsible for the development of this project 👇

- Eric da Silva Contimos | [Email](email-eric) - [LinkedIn](linkedin-eric) - [GitHub](github-eric)

- Gabriel Voltani Vatanabe | [LinkedIn](linkedin-gabriel) - [GitHub](github-gabriel)

- Guilherme Garcia | [Email](email-guilherme) - [LinkedIn](linkedin-guilherme) - [GitHub](github-guilherme)

- Guyddo Gonçalves Lima | [Email](email-guyddo) - [LinkedIn](linkedin-guyddo) - [GitHub](github-guyddo)

- Miguel Vieira | [LinkedIn](linkedin-miguel) - [GitHub](github-miguel)

<p align="right"><a href="#readme-top">Voltar ao topo</a></p>

<!-- MARKDOWN LINKS & IMAGES -->

[trybe-site-url]: https://www.betrybe.com/
[project-demo]: ./project-demo.gif
[project-url]: https://trivia-g5.vercel.app

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
