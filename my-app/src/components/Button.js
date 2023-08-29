import './Button.css'
import "../../node_modules/neptunecss-js/neptune"
import NeptuneAnimate from "../../node_modules/neptunecss-animations/neptune-animations"
// import neptune from '../neptune.png'

export default function Button(props) {
    return <button type="button" className='Button' id="winButton" onClick={() => func()}>{props.title}</button>
}

function func() {
    // Open Window
    // https://react.dev/learn/adding-interactivity


    // Implement Neptune animation onclick
    const myElement = document.getElementById("winButton");
    const neptuneAnimate = new NeptuneAnimate(myElement, "nep-jelly");
    neptuneAnimate.startAnimation();
}
