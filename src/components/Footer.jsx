import { socialLinks } from "../dumyData";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <PageLinks parentClass="footer-links" itemClass="footer-link" />

        <ul className="footer-icons">
          {socialLinks.map((link) => {
            return (
              <SocialLink key={link.id} {...link} itemClass="footer-icon" />
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Birds Sunctuary | non-profit company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;
