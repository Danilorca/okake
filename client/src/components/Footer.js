import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import { Link} from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <footer className="background_footer" >
        <section >
          <ul>
            <li className="text_footer">Nosotros</li>
            <li className="text_footer">Privacidad</li>
            <li className="text_footer">Condiciones</li>
            {/* <li className="text_footer"><a href="https://www.lun.com/" target="_blank" rel="noreferrer">Prensa</a> </li> */}
            <li className="text_footer">Prensa </li>
            <li className="text_footer">Blog</li>
          </ul>
          <ul>
            <li className="text_footer">Sé parte de Okake</li>
            <li className="text_footer">Únete a nuestro newsletter</li>
            <li className="text_footer">Siguenos en</li>
            <li className="text_footer">Descargar app</li>
          </ul>
          <article>
            <p className="text_footer">Siguenos en</p>
            <FacebookIcon fontSize="medium" style={{ color: "white"}} />
            <TwitterIcon fontSize="medium" className="icon" style={{ color: "white"}} />
            <YouTubeIcon fontSize="medium" className="icon" style={{ color: "white"}}/>
          </article>
          <article>
          <p className="text_footer">Descargar nuestras app</p>
          <AndroidIcon fontSize="medium" style={{ color: "white"}} />
          <AppleIcon fontSize="medium" className="icon" style={{ color: "white"}}/>
          </article>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
