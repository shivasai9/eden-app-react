import './EdenInput.css';

const EdenInput = ({ inputType, label, placeHolder, value, onChangeHandler, isOptional = false, staticText = '' }) => {
    const labelText = `${isOptional ? label + ' (optional)' : label}`
    return <div className='eden-input'>
        <label className='eden-input-label'>{labelText}</label>
        <div className='eden-input-container'>
            {staticText.length ? <div className='eden-input-static-text'>{staticText}</div> : null}
            <input className={`eden-input-field ${staticText.length ? 'eden-inpuit-field-no-left-border-radius' : ''}`} type={inputType} placeholder={placeHolder} value={value} onChange={onChangeHandler} />
        </div>
    </div>

}

export default EdenInput; 