import * as ReactDOM from 'react-dom';
import './styles.css'

function Header() {
  return(
    <div className="header">
      <div className='headerContent'>
        <img src='./assets/wbs_logo.png'></img>
      </div>
    </div>
  )
}

function Spacer() {
  return <div className="spacer"></div>
}

function Welcome(props) {
  return <h1 className="welcome">Hellooooooo, {props.name}</h1>
}

function App() {
  return(  
    <div>
      <Header />
      <Spacer height="500" />


      <Welcome name="Colin" />
      <Welcome name="Karl Hainz" />
      <Welcome name="Kai Uwe" />
      <Welcome name="Kevin" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);