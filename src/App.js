import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    name: "Jean Carlos Izepon",
    counter: 0,
  };

  handlePClick = () => {
    this.setState({ name: "Izepon" });
  };

  handleAClick = (event) => {
    //Para buscar o "this" desse click, usei um hack do javascript que é arrow function que não tem this, sendo assim vai buscar o elemento do pai que é a class App e assim vamos ter a mesma execução de um "this" sem precisar fazer o bind.
    event.preventDefault(); // previne eventos.
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };
  render() {
    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o link
          </a>
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Olá Mundo!</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
