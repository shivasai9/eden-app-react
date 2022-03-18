import { EdenButton } from '../../components';
import './CongratulationsPage.css'
const CongratulationsPage = () => {
        return <div className='eden-congratulations-page'>
            <i className="fa fa-check eden-circle-check"></i>
            <h1>Congratulations, Eren!</h1>
            <p className='eden-page-caption'>You have completed onboarding, you can start using the Eden!</p>
            <div className='eden-page-form-container'>
                <EdenButton buttonText='Launch Eden' clickHandler={() => alert('congratulations for launching Eden!')}/>
            </div>
        </div>
}

export default CongratulationsPage;