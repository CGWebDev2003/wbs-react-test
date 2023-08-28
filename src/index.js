import * as ReactDOM from 'react-dom';
import './styles.css'

function Welcome(props) {
  return <h1>Hellooooooo, {props.name}</h1>
}

function Header() {
  return <div className="header">Header</div>
}

function App() {
  return(  
    <div>
      <Header />

      <Welcome name="Colin" />
      <Welcome name="Karl Hainz" />
      <Welcome name="Kai Uwe" />
      <Welcome name="Kevin" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);