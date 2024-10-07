import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from './CocktailCard';

const CocktailList = ({ drinks }) => {
  // OPTIONAL
  // destructure and properly name the properties and return
  const formatDrinkProperty = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      glass: strGlass,
      info: strAlcoholic,
    };
  });

  return (
    <Wrapper>
      {formatDrinkProperty.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
