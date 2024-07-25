
import styles from '../styles/Home.module.css';
import { Carousel } from 'react-responsive-carousel';


const Home: React.FC = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h2>Welcome to AVD Turbo</h2>
        <p>Your turbocharger specialists.</p>

        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <div>
            <img src="/images/actuatoare.jpg" alt="Reparatii actuatoare electronice" />
            <p className="legend">Reparatii actuatoare electronice</p>
          </div>
          <div>
            <img src="/images/curatare.jpg" alt="Curatare DPF" />
            <p className="legend">Curatare DPF</p>
          </div>
          <div>
            <img src="/images/echilibrare.jpg" alt="Echilibrare Dinamica" />
            <p className="legend">Echilibrare Dinamica</p>
          </div>
          <div>
            <img src="/images/garantie.jpg" alt="Reparatii Turbosuflante" />
            <p className="legend">Reparatii Turbosuflante</p>
          </div>
          <div>
            <img src="/images/echipa.jpg" alt="Echipa de profesionisti" />
            <p className="legend">Echipa de profesionisti</p>
          </div>
        </Carousel>
        
      </main>
      
    </div>
  );
}

export default Home;
