import { useState, useContext } from 'react';
import './WelcomePage.css';
import { EdenInput, EdenButton } from '../../components';
import { AppContext } from '../../providers/AppStateProvider';

const WelcomePage = () => {
    const [fullName, updateFullName] = useState('');
    const [displayName, updateDisplayName] = useState('');
    const { actions } = useContext(AppContext);

    const fullNameChangeHandler = (event) => {
        const updatedFullName = event.target.value;
        updateFullName(updatedFullName);
    }
    const displayNameChangeHandler = (event) => {
        const updatedDispalyName = event.target.value;
        updateDisplayName(updatedDispalyName);
    }
    const buttonClickHandler = () => {
        actions.incrementCurrentpageNo();
    }

    return <div className='eden-welcome-page'>
        <h1>Welcome! First things first...</h1>
        <p className='eden-page-caption'>You can always change them later.</p>
        <div className='eden-page-form-container'>
            <EdenInput
                inputType='text'
                label='Full Name'
                placeHolder='Steve jobs'
                value={displayName}
                onChangeHandler={displayNameChangeHandler}
            />
            <EdenInput
                inputType='text'
                label='Display Name'
                placeHolder='Steve'
                value={fullName}
                onChangeHandler={fullNameChangeHandler}
            />
            <EdenButton
                buttonText='Create Workspace'
                disabled={!
                    (fullName.length && displayName.length)}
                clickHandler={buttonClickHandler} />
        </div>
    </div>

}

export default WelcomePage; 