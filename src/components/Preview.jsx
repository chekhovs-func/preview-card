import '../styles/preview.scss';
import sedans from '../assets/icon-sedans.svg';
import suvs from '../assets/icon-suvs.svg';
import luxury from '../assets/icon-luxury.svg';

export default function Preview() {
  return (
    <>
      <article className='--preview-wrapper'>
        <img src={sedans} className='--preview-icon' />
        <h1 className='--preview-title'>SEDANS</h1>
        <p className='--preview-body'>
          Choose a sedan for its affordability and excellent fuel economy. Ideal for
          cruising in the city or on your next road trip.
        </p>
        <button className='--preview-button'>Learn More</button>
      </article>
      <article className='--preview-wrapper'>
        <img src={suvs} className='--preview-icon' />
        <h1 className='--preview-title'>SUVS</h1>
        <p className='--preview-body'>
          Take an SUV for its spacious interior, power, and versatility. Perfect for your
          next family vacation and off-road adventures.
        </p>
        <button className='--preview-button'>Learn More</button>
      </article>
      <article className='--preview-wrapper'>
        <img src={luxury} className='--preview-icon' />
        <h1 className='--preview-title'>LUXURY</h1>
        <p className='--preview-body'>
          Cruise in the best car brands without the bloated prices. Enjoy the enhanced
          comfort of a luxury rental and arrive in style.
        </p>
        <button className='--preview-button'>Learn More</button>
      </article>
    </>
  );
}
