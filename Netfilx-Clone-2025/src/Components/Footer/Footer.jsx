import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <facebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data"></div>
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notice</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie preference</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Gift Cards</li>
          <li>Terms of User</li>
          <li>Corporate Information</li>
        </ul>
      </div>
      {/* <div> */}
      {/* <ul>
          <li>Gift Cards</li>
          <li>Terms of Users</li>
          <li>Corporate Information</li>
        </ul> */}
      {/* </div> */}
      <div>
        <ul>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Use</li>
        </ul>
      </div>
      <div className="service_code">{/* <P>Service Code</P> */}</div>
      <div className="copy write"> &copy;1997-2024Netflix,Inc</div>
    </div>
  );
};

export default Footer;
