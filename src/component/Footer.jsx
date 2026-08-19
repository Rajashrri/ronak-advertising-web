import React from "react";
import footer from "../assets/imgs/footer-logo.png";
import { useState } from "react";
import { subscribeApi } from "../utils/frontApi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubscribe = async () => {
    setEmailError("");

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
  

    try {
      setLoading(true);

      const res = await subscribeApi({ email });

      if (res.data.success) {
        setEmail("");
        navigate("/thank-you");
      }
    } catch (err) {
      setEmailError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
    const year = new Date().getFullYear()
  return (
    
    <>
    <div className="footer">
      <div className="custom-container curve">
        <div className="subscrob">
          <h1 data-gsap>
            Subscribe <span>Newsletter</span>
          </h1>
          <p data-gsap>
            Get new media locations, campaign ideas and outdoor advertising insights delivered to your inbox.
          </p>
          <div data-gsap className="input">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
            />

            {emailError && (
              <p
                style={{
                  color: "#ff4d4f",
                  fontSize: "14px",
                  marginTop: "6px",
                }}
              >
                {emailError}
              </p>
            )}
            <button onClick={handleSubscribe} disabled={loading}>
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="row">
          <div className="col-lg-4" data-gsap>
            <div className="footerlogo">
              <img src={footer} alt="" />
            </div>
          </div>
          <div className="col-lg-2" data-gsap>
            <div className="footerlist">
              <h3>Quick Link</h3>
              <ul>
                {/* <li>
                  <a href="/">Home</a>
                </li> */}
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="/team">Team</a>
                </li>
                {/* <li>
                  <a href="/location">Locations</a>
                </li> */}
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
          </div>
          <div className="col-lg-3" data-gsap>
            <div className="footerlist">
              <h3>Contact Info</h3>
              <div className="locationcard">
                <div className="logo">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9688 12.1562L15.2188 15.3125C15.125 15.7812 14.75 16.0938 14.2812 16.0938C6.40625 16.0625 0 9.65625 0 1.78125C0 1.3125 0.28125 0.9375 0.75 0.84375L3.90625 0.09375C4.34375 0 4.8125 0.25 5 0.65625L6.46875 4.0625C6.625 4.46875 6.53125 4.9375 6.1875 5.1875L4.5 6.5625C5.5625 8.71875 7.3125 10.4688 9.5 11.5312L10.875 9.84375C11.125 9.53125 11.5938 9.40625 12 9.5625L15.4062 11.0312C15.8125 11.25 16.0625 11.7188 15.9688 12.1562Z"
                      fill="#DD2B1C"
                    />
                  </svg>
                </div>
                <div>
                  <p>Phone Number</p>
                  <a href="tel:+912249694802">+91 22-49694802</a> <br />
                  <a href="tel:+912220870060">+91 22-20870060</a>
                </div>
              </div>
              <div className="locationcard">
                <div className="logo">
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5 0C15.3125 0 16 0.6875 16 1.5C16 2 15.75 2.4375 15.375 2.71875L8.59375 7.8125C8.21875 8.09375 7.75 8.09375 7.375 7.8125L0.59375 2.71875C0.21875 2.4375 0 2 0 1.5C0 0.6875 0.65625 0 1.5 0H14.5ZM6.78125 8.625C7.5 9.15625 8.46875 9.15625 9.1875 8.625L16 3.5V10C16 11.125 15.0938 12 14 12H2C0.875 12 0 11.125 0 10V3.5L6.78125 8.625Z"
                      fill="#DD2B1C"
                    />
                  </svg>
                </div>
                <div>
                  <p>Email</p>
                  <a href="mailto:info@ronakadvertising.com">info@ronakadvertising.com  </a> <br />
                  <a href="mailto:ronak.advt@gmail.com">ronak.advt@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3" data-gsap>
            <div className="footerlist">
              <h3>Location</h3>
              <div className="locationcard">
                <div className="logo">
                  <svg
                    width="11"
                    height="15"
                    viewBox="0 0 11 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59375 13.6719C3.17188 11.8945 0 7.65625 0 5.25C0 2.35156 2.32422 0 5.25 0C8.14844 0 10.5 2.35156 10.5 5.25C10.5 7.65625 7.30078 11.8945 5.87891 13.6719C5.55078 14.082 4.92188 14.082 4.59375 13.6719ZM5.25 7C6.20703 7 7 6.23438 7 5.25C7 4.29297 6.20703 3.5 5.25 3.5C4.26562 3.5 3.5 4.29297 3.5 5.25C3.5 6.23438 4.26562 7 5.25 7Z"
                      fill="#DD2B1C"
                    />
                  </svg>
                </div>
                <div>
                  <p>Location</p>
                  <a href="#!">
                  1304 – 1308, Cyber One, <br />
                  Sector – 30-A, Vashi,<br />
                  Navi Mumbai – 400703.<br />
                  Near CIDCO Exhibition Center
                  </a>
                </div>
              </div>

              <div className="sociallisk">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/ronakadvertising.official" target="_blank">
                      <svg
                        width="16"
                        height="28"
                        viewBox="0 0 16 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.60938 16.4062H0V11.0469H3.60938V8.75C3.60938 2.78906 6.28906 0 12.1406 0C13.2344 0 15.1484 0.21875 15.9141 0.4375V5.30469C15.5312 5.25 14.8203 5.25 13.8906 5.25C11.0469 5.25 9.95312 6.34375 9.95312 9.13281V11.0469H15.6406L14.6562 16.4062H9.95312V28H3.60938V16.4062Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ronakadvertising.official" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none"><path d="M19.5 0C21.4891 0 23.3968 0.790176 24.8033 2.1967C26.2098 3.60322 27 5.51088 27 7.5V19.5C27 21.4891 26.2098 23.3968 24.8033 24.8033C23.3968 26.2098 21.4891 27 19.5 27H7.5C5.51088 27 3.60322 26.2098 2.1967 24.8033C0.790176 23.3968 0 21.4891 0 19.5V7.5C0 5.51088 0.790176 3.60322 2.1967 2.1967C3.60322 0.790176 5.51088 0 7.5 0H19.5ZM13.5 7.5C11.9087 7.5 10.3826 8.13214 9.25736 9.25736C8.13214 10.3826 7.5 11.9087 7.5 13.5C7.5 15.0913 8.13214 16.6174 9.25736 17.7426C10.3826 18.8679 11.9087 19.5 13.5 19.5C15.0913 19.5 16.6174 18.8679 17.7426 17.7426C18.8679 16.6174 19.5 15.0913 19.5 13.5C19.5 11.9087 18.8679 10.3826 17.7426 9.25736C16.6174 8.13214 15.0913 7.5 13.5 7.5ZM13.5 10.5C14.2956 10.5 15.0587 10.8161 15.6213 11.3787C16.1839 11.9413 16.5 12.7044 16.5 13.5C16.5 14.2956 16.1839 15.0587 15.6213 15.6213C15.0587 16.1839 14.2956 16.5 13.5 16.5C12.7044 16.5 11.9413 16.1839 11.3787 15.6213C10.8161 15.0587 10.5 14.2956 10.5 13.5C10.5 12.7044 10.8161 11.9413 11.3787 11.3787C11.9413 10.8161 12.7044 10.5 13.5 10.5ZM20.25 5.25C19.8522 5.25 19.4706 5.40804 19.1893 5.68934C18.908 5.97064 18.75 6.35218 18.75 6.75C18.75 7.14782 18.908 7.52936 19.1893 7.81066C19.4706 8.09196 19.8522 8.25 20.25 8.25C20.6478 8.25 21.0294 8.09196 21.3107 7.81066C21.592 7.52936 21.75 7.14782 21.75 6.75C21.75 6.35218 21.592 5.97064 21.3107 5.68934C21.0294 5.40804 20.6478 5.25 20.25 5.25Z" fill="white"></path></svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/ronak-advertising-867739113" target="_blank">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.75 0C23.6797 0 24.5 0.820312 24.5 1.80469V22.75C24.5 23.7344 23.6797 24.5 22.75 24.5H1.69531C0.765625 24.5 0 23.7344 0 22.75V1.80469C0 0.820312 0.765625 0 1.69531 0H22.75ZM7.38281 21V9.35156H3.77344V21H7.38281ZM5.57812 7.71094C6.72656 7.71094 7.65625 6.78125 7.65625 5.63281C7.65625 4.48438 6.72656 3.5 5.57812 3.5C4.375 3.5 3.44531 4.48438 3.44531 5.63281C3.44531 6.78125 4.375 7.71094 5.57812 7.71094ZM21 21V14.6016C21 11.4844 20.2891 9.02344 16.625 9.02344C14.875 9.02344 13.6719 10.0078 13.1797 10.9375H13.125V9.35156H9.67969V21H13.2891V15.2578C13.2891 13.7266 13.5625 12.25 15.4766 12.25C17.3359 12.25 17.3359 14 17.3359 15.3125V21H21Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.youtube.com/@amardeepsinghvig9976" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.6815 5.22705C16.7988 5.22705 17.9449 5.2558 19.0557 5.30285L20.3677 5.36557L21.6235 5.44006L22.7997 5.51977L23.8739 5.60341C25.0398 5.69213 26.137 6.18942 26.9722 7.0077C27.8075 7.82597 28.3272 8.91274 28.4398 10.0766L28.4921 10.632L28.5901 11.8212C28.6816 13.0535 28.7495 14.3969 28.7495 15.6815C28.7495 16.966 28.6816 18.3094 28.5901 19.5417L28.4921 20.7309L28.4398 21.2863C28.3271 22.4504 27.8072 23.5373 26.9717 24.3556C26.1362 25.1739 25.0387 25.6711 23.8725 25.7595L22.801 25.8418L21.6249 25.9228L20.3677 25.9973L19.0557 26.0601C17.9316 26.1087 16.8067 26.134 15.6815 26.1359C14.5564 26.134 13.4314 26.1087 12.3074 26.0601L10.9953 25.9973L9.73951 25.9228L8.56339 25.8418L7.4892 25.7595C6.32329 25.6708 5.22608 25.1735 4.39083 24.3552C3.55558 23.5369 3.03587 22.4502 2.92324 21.2863L2.87097 20.7309L2.77295 19.5417C2.67342 18.2573 2.62024 16.9697 2.61353 15.6815C2.61353 14.3969 2.68148 13.0535 2.77295 11.8212L2.87097 10.632L2.92324 10.0766C3.03583 8.91295 3.55535 7.82634 4.39033 7.0081C5.22532 6.18985 6.32221 5.69242 7.48789 5.60341L8.56077 5.51977L9.73689 5.44006L10.994 5.36557L12.3061 5.30285C13.4306 5.25414 14.556 5.22887 15.6815 5.22705ZM13.0679 12.5125V18.8504C13.0679 19.4542 13.7213 19.8305 14.244 19.53L19.7326 16.361C19.852 16.2922 19.9512 16.1932 20.0202 16.0739C20.0892 15.9546 20.1255 15.8193 20.1255 15.6815C20.1255 15.5436 20.0892 15.4083 20.0202 15.289C19.9512 15.1697 19.852 15.0707 19.7326 15.0019L14.244 11.8342C14.1248 11.7654 13.9896 11.7292 13.8519 11.7292C13.7142 11.7292 13.579 11.7655 13.4597 11.8344C13.3405 11.9032 13.2416 12.0023 13.1728 12.1216C13.104 12.2408 13.0678 12.3761 13.0679 12.5138V12.5125Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/ronak_advt" target="_blank">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M19.0443 13.5498L30.9571 0H28.1341L17.7903 11.7651L9.52875 0H0L12.4931 17.7909L0 32H2.82309L13.7464 19.5756L22.4713 32H32L19.0437 13.5498H19.0443ZM15.1777 17.9477L13.9119 16.1761L3.84029 2.07948H8.1764L16.3043 13.4559L17.5701 15.2275L28.1355 30.0151H23.7994L15.1777 17.9484V17.9477Z" fill="white"/>
</svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="custom-container hrcontainer"> */}
      <div className="line">
        <hr />
      </div>
      {/* </div> */}
      <div className="custom-container">
        <div className="copyright">
          <p>
            Copyright © {year} Ronak Advertising. All Rights Reserved. Powered By
            : <a href="https://digihost.in/" target="_blank">DIIGIIHOST</a>
          </p>
          <ul>
            <li>
              <a href="#!">Terms & Condition</a>
            </li>
            <li>
              <a href="#!">Privacy Policy</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flotingicon">
      <a href="https://wa.me/+919987259878">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 3C9.7155 3 3 9.7155 3 18C3 20.835 3.7875 23.49 5.157 25.752L3.819 30.3C3.74218 30.5611 3.73712 30.8381 3.80437 31.1019C3.87161 31.3656 4.00867 31.6064 4.20114 31.7989C4.39361 31.9913 4.63437 32.1284 4.89812 32.1956C5.16188 32.2629 5.43888 32.2578 5.7 32.181L10.248 30.843C12.5861 32.2574 15.2674 33.0035 18 33C26.2845 33 33 26.2845 33 18C33 9.7155 26.2845 3 18 3ZM14.607 21.3945C17.6415 24.4275 20.538 24.828 21.561 24.8655C23.1165 24.9225 24.6315 23.7345 25.221 22.356C25.2948 22.1844 25.3215 21.9962 25.2983 21.8108C25.2751 21.6255 25.2028 21.4496 25.089 21.3015C24.267 20.2515 23.1555 19.497 22.0695 18.747C21.8429 18.5899 21.5641 18.5267 21.2919 18.5709C21.0197 18.6151 20.7753 18.7632 20.61 18.984L19.71 20.3565C19.6624 20.43 19.5887 20.4827 19.5038 20.5038C19.4188 20.525 19.329 20.5131 19.2525 20.4705C18.642 20.121 17.7525 19.527 17.1135 18.888C16.4745 18.249 15.9165 17.4 15.603 16.8285C15.5651 16.7557 15.5544 16.6717 15.5728 16.5917C15.5912 16.5117 15.6376 16.4409 15.7035 16.392L17.0895 15.363C17.2879 15.1914 17.4159 14.9526 17.4492 14.6924C17.4824 14.4322 17.4184 14.1689 17.2695 13.953C16.5975 12.969 15.8145 11.718 14.679 10.8885C14.5321 10.783 14.3605 10.7172 14.1808 10.6975C14.001 10.6778 13.8192 10.7048 13.653 10.776C12.273 11.367 11.079 12.882 11.136 14.4405C11.1735 15.4635 11.574 18.36 14.607 21.3945Z" fill="#25D366"/>
      </svg>
      </a>
    </div>
    </>
  );
};

export default Footer;
