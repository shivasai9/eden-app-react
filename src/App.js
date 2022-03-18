import './App.css';
import { WelcomePage, WorkspacePage, PlanningPage, CongratulationsPage } from './pages';
import { EdenStepper, EdenHeader } from './components'
import { useContext } from 'react';
import { AppContext } from './providers/AppStateProvider';

function App() {
  const { state, actions } = useContext(AppContext);
  const currentpageNo = state.currentPageNo;

  const onStepClickHandler = (step) => {
    actions.updateCurrentpageNo(step)
  }

  return (
    <div className="eden-app">
      <EdenHeader />
      <EdenStepper steps={4} currentStep={currentpageNo} onStepClickHandler={onStepClickHandler} />
      {currentpageNo === 1 ? <WelcomePage /> : null}
      {currentpageNo === 2 ? <WorkspacePage /> : null}
      {currentpageNo === 3 ? <PlanningPage /> : null}
      {currentpageNo === 4 ? <CongratulationsPage /> : null}
    </div>
  );
}

export default App;
