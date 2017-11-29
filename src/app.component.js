import { Header } from './header';
import { Main } from './main';
import { Sidebar } from './sidebar';
import { Footer } from './footer';

import './app.scss';

export const App = (
  <div className="container">
    <Header />
    <Sidebar />
    <Main />
    <Footer />
  </div>
);
