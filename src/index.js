import * as ReactDOM from 'react-dom';
import createRoot from "react-dom/client"
import './styles.css'

function LinkButton(props) {
  return <button className='LinkButton' type="button">{props.title}</button>
}

function Header() {
  return(
    <div className="header">
      <div className='headerContent'>
        <img className='logo' src='https://github.com/CGWebDev2003/wbs-react-test/tree/main/src/assets/wbs_logo.png' />

        <nav>
          <LinkButton title="Button 1" />
          <LinkButton title="Button 2" />
          <LinkButton title="Button 3" />
          <LinkButton title="Button 4" />
          <LinkButton title="Button 5" />
        </nav>
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