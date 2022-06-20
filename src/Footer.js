import React from "react";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="page-footer">
      <a href="https://www.facebook.com/BeautyLineOne/" target="_blank">
        <span>
          <FontAwesomeIcon icon={faFacebookF} className="icon" />
        </span>
      </a>

      <div className="copyright">
        <div>
          <FontAwesomeIcon icon={faCopyright} />
        </div>
        <p style={{ marginLeft: "10px" }}>ყველა უფლება დაცულია</p>
      </div>
    </div>
  );
};

export default Footer;
