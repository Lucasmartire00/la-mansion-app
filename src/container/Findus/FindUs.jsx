import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Encontranos en...</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Ituzaingó, Gobernador Mariano Acosta 178. Buenos Aires, Argentina.</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Nuestros Horarios</p>
        <p className="p__opensans">Lunes A Viernes: 19:00 - 02:00</p>
        <p className="p__opensans">Sabados Y Domingos: 19:00 - 04:00</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
