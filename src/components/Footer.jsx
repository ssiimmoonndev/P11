import "../style/footer.scss"
import logo from "../assets/LOGO-white.png";

export default function Footer() {
  return (
    <div className="footer-page">
      <img src={logo} alt="Logo noir et blanc" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}