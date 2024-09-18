import { useEffect, useState } from 'react';
import { shortList, list, longList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    // if (currentPerson === 0) {
    //   setCurrentPerson(people.length - 1);
    //   return;
    // }
    // setCurrentPerson(currentPerson - 1);

    // USING MODULUS OPERATOR
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    // if (currentPerson === people.length - 1) {
    //   setCurrentPerson(0);
    //   return;
    // }
    // setCurrentPerson(currentPerson + 1);

    // USING MODULUS OPERATOR
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  // autoplay
  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className='slider-container'>
      {people.map((item, personIndex) => {
        const { id, image, name, title, quote } = item;
        return (
          <article
            key={id}
            className='slide'
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? '1' : '0',
              visibility: personIndex === currentPerson ? 'visible' : 'hidden',
            }}
          >
            <img src={image} alt={name} className='person-img' />
            <h5>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button type='button' className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type='button' className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
