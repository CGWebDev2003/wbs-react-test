import LinkButton from "./LinkButton"
import "./Header.css"

export default function Header() {
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
  