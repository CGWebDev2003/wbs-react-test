import * as ReactDOM from 'react-dom';
import createRoot from "react-dom/client"

import Header from './components/Header';
import Spacer from './components/Spacer';
import Welcome from './components/Welcome';

import './styles.css'

function App() {
  return(  
    <div>
      <Header />
      <Spacer />

      <Welcome name="Colin" />
      <Welcome name="Karl Hainz" />
      <Welcome name="Kai Uwe" />
      <Spacer />
      <Welcome name="Kevin" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);