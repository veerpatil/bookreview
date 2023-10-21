import logo from './logo.svg';
import './App.css';
import Stepper from "./components/stepper";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <div className="app" data-cy="my-bookreview-app">
        <main className="main">
          <Stepper/>
        </main>
      </div>
  );
}

export default App;
