import React from "react";

const Footer = () => {
  return (
    <div className="footer-item">
      <div>
        <ul>
          <li>
            <i class="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i class="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i class="fa-brands fa-youtube"></i>
          </li>
        </ul>
      </div>
      <div className="download">
        <div className="apple">
          <i class="appleLogo fa-brands fa-apple"></i> Download on the<br></br>
          <span className="appStore">App Store</span>
        </div>
        <div className="andriod">
          <i class="appleLogo fa-brands fa-android"></i> Get It On <br></br>{" "}
          <span className="googlePlay">Google Play</span>{" "}
        </div>
      </div>
      <div className="privacy">PRIVACY | ONLINE TERMS AND CONDITIONS</div>
    </div>
  );
};

export default Footer;
