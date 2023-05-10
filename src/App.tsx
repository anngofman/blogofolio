import { useContext } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { ThemeContext } from './helpers/ThemeContext';
import AsideMenu from './components/AsideMenu';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';

function App() {
  const theme = useContext(ThemeContext)
  return (
    <div className={'App'}>
      <Header />
      <AsideMenu />
      <Main className={theme} />
<SignUp />
<SignIn />
      <Footer className={theme} />
    </div>
  );
}

export default App;
