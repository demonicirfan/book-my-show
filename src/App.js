import { Route } from 'react-router-dom';
import HomePage from './pages/Home.page.jsx';
import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <>
      <DefaultHOC path='/' exact component={HomePage} />
      <DefaultHOC path='/movies' exact component={HomePage} />
    </>
  );
}

export default App;
