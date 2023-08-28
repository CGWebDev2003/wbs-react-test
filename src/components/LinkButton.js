import './LinkButton.css';

export default function LinkButton(props) {
    return <button className='LinkButton' type="button">{props.title}</button>
}