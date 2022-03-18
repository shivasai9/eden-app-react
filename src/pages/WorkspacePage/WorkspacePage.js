import { EdenInput, EdenButton } from '../../components';
import './WorkspacePage.css';
import { AppContext } from '../../providers/AppStateProvider';
import { useState, useContext } from 'react';

const WorkspacePage = () => {
    const [workspaceName, updateWorkspaceName] = useState('');
    const [workspaceUrl, updateWorkSpaceUrl] = useState('');
    const { actions } = useContext(AppContext);

    const workspaceNameChangeHandler = (event) => {
        const updatedWorkspaceName = event.target.value;
        updateWorkspaceName(updatedWorkspaceName);
    }
    const workspaceUrlChangeHandler = (event) => {
        const updatedworkspaceUrl = event.target.value;
        updateWorkSpaceUrl(updatedworkspaceUrl);
    }
    const buttonClickHandler = () => {
        actions.incrementCurrentpageNo();
    }

    return <div className='eden-workspace-page'>
        <h1>Lets's set up a home for all your work</h1>
        <p className='eden-page-caption'>You can always create another workspace later.</p>
        <div className='eden-page-form-container'>
            <EdenInput
                inputType='text'
                label='Workspace Name'
                placeHolder='Eden'
                value={workspaceName}
                onChangeHandler={workspaceNameChangeHandler}
            />
            <EdenInput
                inputType='text'
                label='Workspace Url'
                placeHolder='Example'
                isOptional={true}
                value={workspaceUrl}
                onChangeHandler={workspaceUrlChangeHandler}
                staticText='www.eden.com/'
            />
            <EdenButton
                buttonText='Create Workspace'
                disabled={!
                    (workspaceName.length && workspaceUrl.length)}
                clickHandler={buttonClickHandler} />
        </div>
    </div>

}

export default WorkspacePage;