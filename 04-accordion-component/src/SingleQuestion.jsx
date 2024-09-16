import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ id, title, info, activeID, handleClick }) => {
  // check if variable is truthy or falsy
  // if falsy don't display {info}
  const isActive = id === activeID;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => handleClick(id)}>
          {!isActive ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {!isActive ? '' : <p>{info}</p>}
      {/* {isActive && <p>{info}</p>} */}
    </article>
  );
};

export default SingleQuestion;
