import logo from './logo.svg';
import './App.css';
import MyComponent from './components/myComponent';

function App() {
  // const myName = 'Osvaldo';
  // const myFavDrink = "Cappucino"
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        {/* <p>Hello my name is {myName}</p>
        <p>My fsavorite drink is {myFavDrink}</p>
        <p>I can use full JS inside JSX: {(() => myName+' '+ myFavDrink)()}</p>  */}
        <MyComponent/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


