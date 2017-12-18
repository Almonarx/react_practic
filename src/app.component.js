import { Header } from './partials/header';
import { Pages } from './pages';
import { Sidebar } from './partials/sidebar';
import { Footer } from './partials/footer';

import './app.scss';

export const App = () => (
  <div className="container">
    <Header />
    <Sidebar />
    <Pages />
    <Footer />
  </div>
);
