# Secret Santa Raffler

[Click here to read the English version of this Readme](#credits)

Sorteador de amigo secreto, desenvolvido utilizando os princípios de TDD (*Test-Driven Development*)

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Sorteador de amigo secreto**
| :label: Tecnologias | React, TypeScript
| :rocket: URL         | 
| :fire: Curso     | https://cursos.alura.com.br/course/react-testando-componentes

![](https://user-images.githubusercontent.com/19349339/233178790-c908dd9e-2e93-4c79-b1ff-4889eaaa99aa.png#vitrinedev)

## Créditos

Este projeto foi desenvolvido no curso [React: testando os seus componentes
](https://cursos.alura.com.br/course/react-testando-componentes) oferecido pela [Alura](https://www.alura.com.br).

Instrutor: **[Vinicios Neves](https://www.linkedin.com/in/vinny-neves/)**.

## Detalhes do projeto

Esta é uma aplicação que faz o sorteio de amigo secreto para você. Após informar o nome das pessoas que irão participar, a aplicação efetua o sorteio e garante que nenhuma pessoa irá sortear a si própria. 

Há duas páginas: a inicial e a de sorteio. 

Na página inicial, há um campo para adicionar o nome da pessoa. Nomes iguais não são permitidos, e é necessário adicionar pelo menos 3 pessoas para a brincadeira começar. Uma lista vai sendo exibida com os nomes adicionados.

**Tela da página inicial**

![tela da página inicial na versão mobile, mostrando uma lista de nomes de personagens da série "Fogo e Sangue"](https://user-images.githubusercontent.com/19349339/233179294-7efac21a-05f6-4b5c-8f86-41b059a0f96b.png)

Na página de sorteio, o nome das pessoas participantes se encontra em um campo de select. A pessoa seleciona seu nome e então pressiona o botão "Sortear". O nome do amigo ou amiga secreto aparece em destaque na tela por 5 segundos. 

**Tela da página de sorteio**

![tela da página de sorteio na versão mobile, mostrando o nome da participante "Alicent" e o nome da amiga secreta "Rhaenyra"](https://user-images.githubusercontent.com/19349339/233179913-74a2cf97-28fb-428a-90ca-9f41845c530d.png)

O projeto foi desenvolvido em React, seguindo os princípios do **TDD (*Test-Driven Development*)**. Essa é uma forma de desenvolvimento em que primeiro escrevemos um teste e depois desenvolvemos o código para passar neste teste, repetindo o ciclo a cada nova funcionalidade adicionada. Os testes foram feitos utilizando Jest e a React Testing Library (RTL).

A aplicação é responsiva e foi feita seguindo o conceito de *mobile first*. Há um layout para telas pequenas e outro para telas com largura a partir de 1024px.

## Instalação e execução 

O projeto foi criado com o Create React App, utilizando Node.js (versão v16.15.1) e npm (versão 8.11.0). É necessário possuir ambos instalados em sua máquina para rodar a aplicação.

Após clonar/baixar o projeto, abra um terminal, navegue até a pasta do projeto e rode o seguinte comando para instalar todas as dependências necessárias

    npm install

Após isso, você pode rodar a aplicação em modo de desenvolvimento com o seguinte comando:

    npm start

A aplicação irá rodar no endereço **http://localhost:3000**.

---

## Credits

This project was developed in a course from [Alura](https://www.alura.com.br) called "React: testing your components" ([React: testando os seus componentes
](https://cursos.alura.com.br/course/react-testando-componentes), in Portuguese).

Instructor: **[Vinicios Neves](https://www.linkedin.com/in/vinny-neves/)**.

## Project details

This app performs the raffling for a secret santa event. After entering the names, the app does the draws and guarantee that no one will get his/her own name.

The app is in Portuguese and has two pages: home and raffle.

In the home page, there's an input to add the names. Identical names are not allowed, and one needs to add at least 3 names to start the raffle. A list display the names already entered.

**Screenshot of the home page**

![screenshot of the mobile version of the home page, showing a list of names from some characters from "Fire and Blood" TV show](https://user-images.githubusercontent.com/19349339/233179294-7efac21a-05f6-4b5c-8f86-41b059a0f96b.png)

In the raffle page, the names are in a combobox. After selecting a name and pressing the button "Sortear", the name of the secret santa is displayed for a few seconds. 

**Screenshot of the raffle page**

![screenshot of the mobile version of the raffle page, displaying "Rhaenyra" as the secret santa of "Alicent"](https://user-images.githubusercontent.com/19349339/233179913-74a2cf97-28fb-428a-90ca-9f41845c530d.png)

This project was developed in React, following the **TDD (*Test-Driven Development*)** principles, in which first we create a test and then we develop the code to pass such test, repeating the cycle for each new feature. Tests were created using Jest and the React Testing Library (RTL).

This app is responsive and was created following the concept of 
*mobile first*. There's a layout for small screens and another for larger ones (over 1024px wide).

## Installation

This project was bootstrapped with Create React App, using Node.js (version v16.15.1) and npm (version 8.11.0). You need Node.js and npm installed in order to run this project.

After cloning or downloading this project, open a terminal, navigate to the project's folder and run the following command in order to install all necessary dependencies:

    npm install

After that, you can run the app in the development mode with the following command:

    npm start

The app will run at **http://localhost:3000**.
