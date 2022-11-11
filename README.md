[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
 

<h3 align="center">Cadastro de Veículos Para Teste Técnico</h3>

  <p align="center">
    Ess projeto foi desenvolvido como teste tecnico para a aplicação de uma vaga de desenvolvedor na empresa Tinnova.
    <br />
    <br />
    <a href="https://github.com/mmar11/testetinnova"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/mmar11/testetinnova">View Demo</a>
    ·
    <a href="https://github.com/mmar11/testetinnova">Report Bug</a>
    ·
    <a href="https://github.com/mmar11/testetinnova">Request Feature</a>
  </p>
</div>





<!-- SOBRE O PROJETO -->
## Sobre o Projeto

O desenvolvimento do projeto foi feito com base no Javascript com o EJS engine view e utilizando uma estrutura de API e de dados JSON para organização.
O objetivo foi construir o projeto competo, backend e frontend.<br />

Backend: Desenvolvido em Express - Node.js com as rotas configuradas conforme a demanda do cliente.

Frontend: Desenvolvido em HTML - CSS - Javascript para que seja simples e intuitivo, reduzindo a chance de erros do usuário.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Documentação da API - 

API Rest desenvolvida para permitir o acesso e utilização do servidos e base de dados por aplicações externas. Possue as seguintes rotas:


ENDPOINTS

1- GET - '/veiculo' - Permite a consulta de todos os veículos cadastrados no banco

2- GET - '/veiculos' - Permite a consulta de veículos cadastrados via req.query
  
  Parametros esperados: { ano: NNNN, cor: 'xxxxxxx' , marca: 'xxxxxxx'}
  
  
3- GET - '/veiculo/{id}' - Permite a consulta de um veículo individual via url

4- POST - '/veiculos' - Permite o cadastro de um novo registro na base de dados:

Parametros esperados:   {
    "veiculo": "xxxxxxx",
    "marca": "xxxxxxx",
    "ano": XXXX,
    "descricao": "xxxxxxxxxxxxxxxxxx",
    "vendido": "true",
   }
   !! Importante enviar todos os dados como string, inclusive a informação de vendido
   
   
5- PUT - '/veiculos/{id}' - Permite a alteração por completo do registro 
Parametros esperados:   {
    "veiculo": "xxxxxxx",
    "marca": "xxxxxxx",
    "ano": XXXX,
    "descricao": "xxxxxxxxxxxxxxxxxx",
    "vendido": "true",
   }
   !! Importante enviar todos os dados como string, inclusive a informação de vendido
   
  
  6- PATCH - '/veiculos/{id}' Permite informar se o veículo foi vendido e atualizar o banco.
Parametros esperados:   {
    "vendido": "true"
   }
   

  7- DELETE - '/veiculos/{id}' Permite deletar qualquer registro da base.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Sugestões são sempre bem vindas!!





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://www.linkedin.com/in/marcelo-mariano-dev/
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/mmar11/cadastro_simbiose/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/marcelo-mariano-dev/
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
