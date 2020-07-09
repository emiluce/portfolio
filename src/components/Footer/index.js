import React from "react";

import "./style.scss"

function Footer() {
  return (
    <div className="footer">

      <div className="contatti">
        <p className="contattiTitles"><strong>Contatti:</strong></p>
        <p><i class="fas fa-envelope-open"></i> emanuelaluciani0@gmail.com</p>
        <p><i class="fas fa-phone-alt"></i> 393 5860935</p>
        <p><i class="fas fa-map-marker-alt"></i> Milano (MI)</p>

        <div className="lastrow">
          <a className="linkedinLink" href="https://www.linkedin.com/in/emanuelal/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin-in"></i> Emanuela Luciani
          </a>


          <div className="credit">
            <p className="creditP">© 2020, made by Emanuela Luciani</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
