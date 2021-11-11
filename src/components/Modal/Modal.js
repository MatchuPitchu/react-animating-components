import './Modal.css';

const modal = ({ closed }) => (
  <div className='Modal'>
    <h1>A Modal</h1>
    <button className='Button' onClick={closed}>
      Dismiss
    </button>
  </div>
);

export default modal;
