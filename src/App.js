import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
                </a></header>
            <nav><a href="/home">Home</a> | <a href="/projects">Projects</a> | <a href="/about">About</a> | <a href="/contact">Contact Us</a></nav>
        </div>
    );
}

export default App;
