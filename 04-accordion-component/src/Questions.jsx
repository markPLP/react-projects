import SingleQuestion from './SingleQuestion';

const Questions = ({ questions, activeID, handleClick }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeID={activeID}
            handleClick={handleClick}
          />
        );
      })}
    </section>
  );
};

export default Questions;
