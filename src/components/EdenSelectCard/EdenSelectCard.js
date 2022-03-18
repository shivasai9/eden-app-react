import './EdenSelectCard.css'

const EdenSelectCard = ({ iconClasses, isSelected, heading, body, onClickHandler, value }) => {
    return <div className={`eden-select-card ${isSelected ? 'eden-selected-card' : ''}`} onClick={() => onClickHandler(value)}>
        <i className={`${iconClasses} eden-card-icon
        ${isSelected ? 'eden-card-selected' : ''}`}></i>
        <div className='eden-card-heading'>{heading}</div>
        <div className='eden-card-body'>{body}</div>
    </div>
}

export default EdenSelectCard;