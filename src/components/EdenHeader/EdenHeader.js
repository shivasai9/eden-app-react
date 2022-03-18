import './EdenHeader.css';
import edenLogo from '../../assets/eden-logo.PNG';

const EdenHeader = () => {
    return <div className='eden-heading'>
    <img src={edenLogo} alt='logo'></img>
    <h1>Eden</h1>
  </div>
}

export default EdenHeader;