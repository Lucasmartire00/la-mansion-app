import React from 'react';

import FooterOverlay from '../../components/Footer/FooterOverlay';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactanos</h1>
        <p className="p__opensans">Gobernador Mariano Acosta 178, Ituzaingó. Buenos Aires, Argentina.</p>
        <p className="p__opensans">011 6048-5471</p>
        <p className="p__opensans">OTRA LINEA (OPCIONAL)</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans"> </p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <></>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Nuestros horarios</h1>
        <p className="p__opensans">Lunes a Viernes:</p>
        <p className="p__opensans">19:00  - 02:00 </p>
        <p className="p__opensans">Sabados y Domingos:</p>
        <p className="p__opensans">19:00 - 04:00 </p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 La Mansion by La Casa Bar.</p>
    </div>
  </div>
);

export default Footer;
