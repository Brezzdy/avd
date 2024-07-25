import React from 'react';
import styles from '../styles/Home.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <div>
            <img
              src="/images/actuatoare.jpg"
              alt="Reparatii actuatoare electronice"
            />
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

        <div className={styles.row}>
          <div className={styles.proView}>
            <div className={styles.boxTitle}>
              <a href="/contact">Cine suntem?</a>
            </div>
            <img src="/images/whoweare.jpg" alt="" className={styles.image} />
            <div className={styles.proMask}>
              <p>
                Centru specializat in reparatia si reconditionarea
                turbosuflantelor auto, cu o experienta de peste 15 ani. AVD
                Turbo ofera servicii profesionale de reconditionare
                turbosuflante, service montaj, diagnosticare, calibrare
                actuatoare, crestere a performantei turbosuflantelor si curatare
                filtre particule.
              </p>
              <a href="/contact" className={styles.proBtn}>
                mai mult
              </a>
            </div>
          </div>

          <div className={styles.proView}>
            <div className={styles.boxTitle}>
              <a href="/services">Ce va oferim?</a>
            </div>
            <img src="/images/whatwedo.jpg" alt="" className={styles.image} />
            <div className={styles.proMask}>
              <div>
                <p>Reconditionari Turbine</p>
                <p>Vanzari si reparatii actuatoare</p>
                <p>Tehnologie know-how</p>
                <p>Upgrade turbo</p>
                <p>Turbine noi</p>
              </div>
              <a href="/contact" className={styles.proBtn}>
                detalii
              </a>
            </div>
          </div>

          <div className={styles.proView}>
            <div className={styles.boxTitle}>
              <a href="/contact">Intrebari frecvente</a>
            </div>
            <img src="/images/whyus.jpg" alt="" className={styles.image} />
            <div className={styles.proMask}>
              <p>
                Afla tot ce trebuie sa stii din sectiunea Intrebari frecvente.
                In cazul in care nu gasesti raspuns la intrebarea ta, ne poti
                contacta telefonic pentru detalii la numarul 0751.666.600.
              </p>
              <a href="/contact" className={styles.proBtn}>
                mai mult
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
