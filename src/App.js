import logo from './imageInSrc.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
          <h1 className="title red">Nouhaila EL ARROUM</h1>
            <br />
            <div className='images'>
            <img src={logo} />
            <br />
            <img src="./imageInPublic.jpg" />
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
