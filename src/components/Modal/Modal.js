// import default Component of React Transition Group Package
import Transition from 'react-transition-group/Transition';
import './Modal.css';

// define different timeouts for 'enter' (-> adding element)
// and 'exit' (-> removing) transition -> adding and removing from DOM
// if mountOnEnter and unmountOnExit is defined, otherwise only switch
// of states depending on css styles
const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = ({ show, closed }) => {
  return (
    <Transition mountOnEnter unmountOnExit in={show} timeout={animationTiming}>
      {(state) => {
        // use passed transition states to define when specific classes
        // with animations start execution of animations
        const classes = `Modal ${
          state === 'entering' ? 'ModalOpen' : state === 'exiting' ? 'ModalClosed' : null
        }`;

        return (
          <div className={classes}>
            <h1>A Modal</h1>
            <button className='Button' onClick={closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
