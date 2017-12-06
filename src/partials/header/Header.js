import { Navigation } from '../../components/navigation';
import './header.scss';

export const Header = () => (
  <header className="header">
    Header
    <Navigation list={['Home', 'Products', 'Contacts']} />
  </header>
);
