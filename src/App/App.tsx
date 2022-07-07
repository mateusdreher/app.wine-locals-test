import imagem from '../assets/shareEatLogo.svg';
import { Dishes } from '../pages/Dishes';
import { NewDish } from '../pages/NewDish';
import { Restaurants } from '../pages/Restaurants';

function App() {
  return (
    <div className="App" style={{paddingTop: '17px'}}>
      <img src={imagem} alt="Logo Share Eat" style={{marginLeft: '122px'}} />
      <Restaurants />
    </div>
  );
}

export default App;
