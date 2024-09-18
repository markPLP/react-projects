import { list } from './data';
import Carousel from './Carousel';
import SlickSlider from './SlickSlider';

const App = () => {
  return (
    <main>
      <Carousel />
      <br />
      <br />
      <h1 style={{ textAlign: 'center' }}>Slick Slider Library</h1>
      <SlickSlider list={list} />
    </main>
  );
};
export default App;
