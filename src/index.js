import * as ReactDOM from 'react-dom';

import Header from './components/Header';
import Spacer from './components/Spacer';
import Page1 from './Pages/Page1';

import './styles.css';

function App() {
  return(  
    <div>
      <Header />
      <Spacer />

      <Page1 />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);