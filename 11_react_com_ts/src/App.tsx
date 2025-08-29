// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// 4 -  Imoportação de componentes
 import FirstComponent from './components/firstComponent';


function App() {

  // 1 - variaveis

  const name: string = "Matheus";
  const age: number = 30;
  const isWorking: boolean = true;

  const user = {
    name,
    age,
    isWorking
  };


  // 2 -  funções

  const userGreeting = (name: string): string => {
    return `olá ${name}, bem vindo a nossa plataforma!`;
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h1>React with TypeScript</h1>
      <h2>Welcome {user.name}</h2>
      <h2>Your age is {user.age}</h2>

      <h2>You are {user.isWorking ? "working" : "not working"}</h2>

      <h3>{userGreeting(user.name)}</h3>
      <FirstComponent />
    </div>
  );
}

export default App;
