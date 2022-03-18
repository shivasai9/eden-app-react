import './EdenStepper.css';
import React from 'react';
const EdenStepper = ({ steps, currentStep, onStepClickHandler }) => {
    const stepsArray = [...Array(steps).keys()];

    return <div className='eden-stepper'>
        {stepsArray.length ? stepsArray.map((step) => {
            return <React.Fragment key={step}>
                <div className={`eden-step 
                ${step + 1 <= currentStep ? 'eden-step-completed' : ''}`} onClick={() => onStepClickHandler(step + 1)}>{step + 1}</div>
                {step !== (steps - 1) ?
                    <div
                        className={`eden-connection 
                        ${step + 1 === currentStep ? 'eden-connection-half-fill' : ''}
                        ${step + 1 < currentStep ? 'eden-connection-full-fill' : ''}`}>
                    </div> : null}
            </React.Fragment>
        }) : null}
    </div>
}

export default EdenStepper;