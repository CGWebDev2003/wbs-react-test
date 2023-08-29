import './Window.css'

export default function Window() {
    return (
        <>
            <div className="Window" id="Window">
                <button className="closeButton" onClick={() => closeWindow()}>x</button>
            </div>
        </>
    );
}

function closeWindow() {
    // FIXME Cannot read properties of null (reading 'style')
    document.getElementById("window").style.display = 'none';
}