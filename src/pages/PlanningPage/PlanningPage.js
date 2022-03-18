import './PlanningPage.css';
import { EdenButton, EdenSelectCard } from '../../components';
import { useState, useContext } from 'react';
import { AppContext } from '../../providers/AppStateProvider';

const PlanningPage = () => {
    const [planName, updatePlanName] = useState('');
    const ismyselfSelected = planName === 'myself';
    const iswithteamSelected = planName === 'withteam';
    const { actions } = useContext(AppContext);

    const cardSelectHandler = (value) => {
        updatePlanName(value);
    }

    const buttonClickHandler = () => {
        actions.incrementCurrentpageNo();
    }

    return <div className='eden-planning-page'>
        <h1>How are you planning to use Eden?</h1>
        <p className='eden-page-caption'>We'll streamline your setup experience accordingly.</p>
        <div className='eden-page-form-container'>
            <div className='eden-planning-selections'>
                <EdenSelectCard
                    iconClasses={'fa fa-user'}
                    heading='For myself'
                    body='Write better. Think more clearly. Stay organized.'
                    isSelected={ismyselfSelected}
                    value='myself'
                    onClickHandler={cardSelectHandler}
                />
                <EdenSelectCard
                    iconClasses={'fa fa-group'}
                    heading='With my team'
                    body='Wikis, docs, tasks & projects, all in one place.'
                    isSelected={iswithteamSelected}
                    value='withteam'
                    onClickHandler={cardSelectHandler} />
            </div>
            <EdenButton
                buttonText='Create Workspace'
                disabled={!planName.length}
                clickHandler={buttonClickHandler} />
        </div>
    </div>

}

export default PlanningPage;