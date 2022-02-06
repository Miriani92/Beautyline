import React from "react";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="page-footer">
      <a href="https://www.facebook.com/BeautyLineOne/" target="_blank">
        <span>
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </span>
      </a>

      <div className="copyright">
        <span>
          <FontAwesomeIcon icon={faCopyright} size="sm" />
        </span>
        <p1>ყველა უფლება დაცულია</p1>
      </div>
    </div>
  );
};

export default Footer;
