import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-4 py-4">
      <div className="container text-center">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
          <div className="d-flex align-items-center gap-2">
            <FaEnvelope />
            <span>driveroyal@gmail.com</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <FaPhone />
            <span>+380686114876</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <FaMapMarkerAlt />
            <span>Soborna 27, Rivne, Ukraine</span>
          </div>
        </div>
        <p className="mt-3 mb-0">&copy; 2026 Drive Royal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
