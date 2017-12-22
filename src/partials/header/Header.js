import { Navigation } from '../../components/navigation';
import './header.scss';

export const Header = ({ login, setLoginState }) => (
  <header className="header">
    <Navigation list={['Home', 'Products', 'Tasks']} />
    {login && <button onClick={() => setLoginState()}>Logout</button>}
  </header>
);
