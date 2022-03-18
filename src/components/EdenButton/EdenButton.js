import './EdenButton.css';

const EdenButton = ({ buttonText, disabled, clickHandler }) => {
    return <button
        className='eden-button'
        disabled={disabled}
        onClick={clickHandler}
    >{buttonText} </button>
}

export default EdenButton; 