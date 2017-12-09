import img1 from './assets/1.jpeg';
import img2 from './assets/2.jpeg';
import img3 from './assets/3.jpeg';

export const Gallery = () => (
  <div className="gallery">
    <img src={img1} alt="img" /><br />
    <img src={img2} alt="img" /><br />
    <img src={img3} alt="img" /><br />
  </div>
);
