import logo from "../assets/imgs/logo.png";
import React, { useEffect, useState } from "react";
import { getLocationsApi } from "../utils/frontApi";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const res = await getLocationsApi();

      if (res.data.success) {
        setLocations(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="menu">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-9">
              <a href="#!" className="logo">
                <img src={logo} alt="Logo" />
              </a>
            </div>

            <div className="col-lg-7 mobhide">
              <ul className="menulist">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About us</a>
                </li>
                <li className="has-submenu">
                  <a href="/location">
                    Locations
                    <svg
                      className="ms-1"
                      width="8"
                      height="5"
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.37891 4.25781L0.253906 1.13281C0 0.898438 0 0.488281 0.253906 0.253906C0.488281 0 0.898438 0 1.13281 0.253906L3.82812 2.92969L6.50391 0.253906C6.73828 0 7.14844 0 7.38281 0.253906C7.63672 0.488281 7.63672 0.898438 7.38281 1.13281L4.25781 4.25781C4.02344 4.51172 3.61328 4.51172 3.37891 4.25781Z"
                        fill="#1A1A1A"
                      />
                    </svg>
                  </a>

                  <div className="mega-menu">
                    <div className="mega-grid">
                      {locations.map((item) => {
                        return (
                          <a key={item._id} href={`/location/${item.slug}`}>
                            {item.locationName}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/blogs">Blog</a>
                </li>
                <li>
                  <a href="/media">Media</a>
                </li>
                <li>
                  <a href="/case-study">Case Studies</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 mobhide">
              <a href="/contact" className="btn">
                Contact Us
                <svg
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9766 5.96094L7.60156 10.3359C7.4375 10.5 7.21875 10.582 7 10.582C6.75391 10.582 6.53516 10.5 6.37109 10.3359C6.01562 10.0078 6.01562 9.43359 6.37109 9.10547L9.24219 6.20703H0.875C0.382812 6.20703 0 5.82422 0 5.33203C0 4.86719 0.382812 4.45703 0.875 4.45703H9.24219L6.37109 1.58594C6.01562 1.25781 6.01562 0.683594 6.37109 0.355469C6.69922 0 7.27344 0 7.60156 0.355469L11.9766 4.73047C12.332 5.05859 12.332 5.63281 11.9766 5.96094Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>

            <div className="col-3 hidedesk">
              <div className="hamberger">
                <button onClick={() => setMenuOpen(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 5H21M3 12H21M3 19H21"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Popup Menu */}
      <div className={`mobileMenu ${menuOpen ? "active" : ""}`}>
        <div
          className="mobileMenuOverlay"
          onClick={() => setMenuOpen(false)}
        ></div>

        <div className="mobileMenuContent">
          <div className="">
            <button className="closeBtn" onClick={() => setMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <img src={logo} alt="" className="mobileLogo" />
          </div>
          <div className="mobilemenu1">
            <ul>
              <li>
                <a href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" onClick={() => setMenuOpen(false)}>
                  About us
                </a>
              </li>
              <li className="has-submenu">
                <a href="/location">
                  Locations
                  <svg
                    className="ms-1"
                    width="8"
                    height="5"
                    viewBox="0 0 8 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.37891 4.25781L0.253906 1.13281C0 0.898438 0 0.488281 0.253906 0.253906C0.488281 0 0.898438 0 1.13281 0.253906L3.82812 2.92969L6.50391 0.253906C6.73828 0 7.14844 0 7.38281 0.253906C7.63672 0.488281 7.63672 0.898438 7.38281 1.13281L4.25781 4.25781C4.02344 4.51172 3.61328 4.51172 3.37891 4.25781Z"
                      fill="#1A1A1A"
                    />
                  </svg>
                </a>

                <div className="mega-menu">
                  <div className="mega-grid">
                    {locations.map((item) => (
                      <a key={item._id} href={`/location/${item._id}`}>
                        {item.locationName}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <a href="/blogs" onClick={() => setMenuOpen(false)}>
                  Blog
                </a>
              </li>
              <li>
                <a href="/media" onClick={() => setMenuOpen(false)}>
                  Media
                </a>
              </li>
              <li>
                <a href="/case-study" onClick={() => setMenuOpen(false)}>
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>

            <a href="/contact" className="btn">
              Contact Us
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9766 5.96094L7.60156 10.3359C7.4375 10.5 7.21875 10.582 7 10.582C6.75391 10.582 6.53516 10.5 6.37109 10.3359C6.01562 10.0078 6.01562 9.43359 6.37109 9.10547L9.24219 6.20703H0.875C0.382812 6.20703 0 5.82422 0 5.33203C0 4.86719 0.382812 4.45703 0.875 4.45703H9.24219L6.37109 1.58594C6.01562 1.25781 6.01562 0.683594 6.37109 0.355469C6.69922 0 7.27344 0 7.60156 0.355469L11.9766 4.73047C12.332 5.05859 12.332 5.63281 11.9766 5.96094Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
