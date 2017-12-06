import { Header } from './partials/header';
import { Main } from './partials/main';
import { Sidebar } from './partials/sidebar';
import { Footer } from './partials/footer';

import './app.scss';

export const App = (
  <div className="container">
    <Header />
    <Sidebar />
    <Main />
    <Footer />
  </div>
);
