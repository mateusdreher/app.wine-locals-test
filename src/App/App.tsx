import imagem from '../assets/shareEatLogo.svg';
import { ArrowBack } from '../components/ArrowBack';
import { Pages } from '../pages';
import styles from './styles.module.scss';


function App() {
  return (
    <div className={"App " + styles.container}>
      <div className={styles.top}>
        <ArrowBack />
        <img src={imagem} alt="Logo Share Eat" />
      </div>
      <Pages />
    </div>
  );
}

export default App;
