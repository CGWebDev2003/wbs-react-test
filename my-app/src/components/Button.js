import './Button.css'
// import neptune from '../neptune.png'

export default function Button(props) {
    return <button type="button" className='Button' onClick={() => func()}>{props.title}</button>
}

function func() {
    alert("Helloooooo")
    console.log("argaegag")
    console.log("argaegrag")
    console.log("afagar")
}

// Implement Neptune animation onclick