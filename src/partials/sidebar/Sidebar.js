import './sidebar.scss';

import { Greet } from '../../components/greet';
import { ShowHide } from '../../components/showHide';
import { Timer } from '../../components/timer';

export const Sidebar = () => (
  <aside className="sidebar">
    <p>Sidebar</p>
    <Greet name="Taras" />
    <Timer />
    <br />
    <ShowHide />
  </aside>
);
