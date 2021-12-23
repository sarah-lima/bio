import logo from '../logo.svg';
import Image from 'next/image';
import avatar from '../assets/avatar.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Image src={avatar} />
      </header>
    </div>
  );
}

export default App;
