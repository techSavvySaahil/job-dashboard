import { Link } from "react-router-dom";
import { FooterItems } from "../../helpers/constants";
import "./index.css";

const Footer = () => (
  <footer>
    {FooterItems.map((item) => (
      <Link key={item.name} to={item.path}>
        {item.name}
      </Link>
    ))}
  </footer>
);

export default Footer;
