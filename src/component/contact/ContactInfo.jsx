import React, { useState } from "react";
import Heading from "../reuse/Heading";
import { contactApi } from "../../utils/frontApi";

import { useNavigate } from "react-router-dom";
const ContactInfo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let val = value;

    // Phone only digits
    if (name === "phone") {
      val = value.replace(/\D/g, "").slice(0, 10);
    }

    // Name only letters & spaces
    if (name === "fullName") {
      val = value.replace(/[^A-Za-z\s]/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const validate = () => {
    let err = {};

    if (!formData.fullName.trim()) {
      err.fullName = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
      err.fullName = "Only letters allowed";
    }

    if (!formData.email.trim()) {
      err.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      err.email = "Invalid email";
    }

    if (!formData.phone.trim()) {
      err.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      err.phone = "Phone must be 10 digits";
    }

    if (!formData.message.trim()) {
      err.message = "Message is required";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await contactApi(formData);

      if (res.data.success) {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });

        setErrors({});

        // Loader chalta rahega aur Thank You page open ho jayega
        navigate("/thank-you");
        return;
      }
    } catch (err) {
      setErrors({
        api: err.response?.data?.message || "Something went wrong",
      });

      // Error aaye tabhi loader band karo
      setLoading(false);
    }
  };
  return (
    <>
      <div className="p-70">
        <div className="custom-container">
          <Heading
            title="Contact us"
            // subtitle="Socials"
            titleclass="text-black"
          />

          <div className="contactbox mt-4">
            <div className="row">
              <div className="col-lg-3" data-gsap>
                <div className="boxcot">
                  <div className="conicon">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <mask id="path-1-inside-1_8858_1318" fill="white">
                          <path d="M8.00781 1.36719L9.96094 6.05469C10.3027 6.83594 10.1074 7.76367 9.42383 8.30078L7.03125 10.3027C8.64258 13.7207 11.4258 16.5039 14.8438 18.1152L16.8457 15.7227C17.3828 15.0391 18.3105 14.8438 19.0918 15.1855L23.7793 17.1387C24.707 17.4805 25.1465 18.5059 24.9023 19.4336L23.7305 23.7305C23.4863 24.5605 22.7539 25.1465 21.875 25.1465C9.76562 25.1465 0 15.3809 0 3.27148C0 2.39258 0.585938 1.66016 1.41602 1.41602L5.71289 0.244141C6.64062 0 7.66602 0.439453 8.00781 1.36719Z" />
                        </mask>
                        <path
                          d="M8.00781 1.36719L9.96094 6.05469C10.3027 6.83594 10.1074 7.76367 9.42383 8.30078L7.03125 10.3027C8.64258 13.7207 11.4258 16.5039 14.8438 18.1152L16.8457 15.7227C17.3828 15.0391 18.3105 14.8438 19.0918 15.1855L23.7793 17.1387C24.707 17.4805 25.1465 18.5059 24.9023 19.4336L23.7305 23.7305C23.4863 24.5605 22.7539 25.1465 21.875 25.1465C9.76562 25.1465 0 15.3809 0 3.27148C0 2.39258 0.585938 1.66016 1.41602 1.41602L5.71289 0.244141C6.64062 0 7.66602 0.439453 8.00781 1.36719Z"
                          fill="#FA0000"
                        />
                        <path
                          d="M8.00781 1.36719L7.06947 1.71289L7.0767 1.73251L7.08474 1.7518L8.00781 1.36719ZM9.96094 6.05469L9.03786 6.4393L9.04125 6.44744L9.04478 6.45551L9.96094 6.05469ZM9.42383 8.30078L8.80601 7.51446L8.79391 7.52397L8.78211 7.53384L9.42383 8.30078ZM7.03125 10.3027L6.38953 9.5358L5.79762 10.0311L6.12672 10.7292L7.03125 10.3027ZM14.8438 18.1152L14.4173 19.0198L15.1154 19.3489L15.6107 18.757L14.8438 18.1152ZM16.8457 15.7227L17.6126 16.3644L17.6225 16.3526L17.632 16.3405L16.8457 15.7227ZM19.0918 15.1855L18.691 16.1017L18.699 16.1052L18.7072 16.1086L19.0918 15.1855ZM23.7793 17.1387L23.3947 18.0617L23.414 18.0698L23.4336 18.077L23.7793 17.1387ZM24.9023 19.4336L25.8671 19.6967L25.8694 19.6881L24.9023 19.4336ZM23.7305 23.7305L24.6898 24.0126L24.6926 24.0031L24.6952 23.9936L23.7305 23.7305ZM1.41602 1.41602L1.1529 0.451252L1.14335 0.453857L1.13385 0.45665L1.41602 1.41602ZM5.71289 0.244141L5.45839 -0.722973L5.44977 -0.720623L5.71289 0.244141ZM8.00781 1.36719L7.08474 1.7518L9.03786 6.4393L9.96094 6.05469L10.884 5.67007L8.93089 0.982573L8.00781 1.36719ZM9.96094 6.05469L9.04478 6.45551C9.21722 6.84964 9.10589 7.27884 8.80601 7.51446L9.42383 8.30078L10.0416 9.0871C11.109 8.2485 11.3883 6.82223 10.8771 5.65387L9.96094 6.05469ZM9.42383 8.30078L8.78211 7.53384L6.38953 9.5358L7.03125 10.3027L7.67297 11.0697L10.0656 9.06772L9.42383 8.30078ZM7.03125 10.3027L6.12672 10.7292C7.83707 14.3572 10.7893 17.3094 14.4173 19.0198L14.8438 18.1152L15.2702 17.2107C12.0622 15.6984 9.44808 13.0842 7.93578 9.87632L7.03125 10.3027ZM14.8438 18.1152L15.6107 18.757L17.6126 16.3644L16.8457 15.7227L16.0788 15.0809L14.0768 17.4735L14.8438 18.1152ZM16.8457 15.7227L17.632 16.3405C17.8676 16.0406 18.2968 15.9293 18.691 16.1017L19.0918 15.1855L19.4926 14.2694C18.3243 13.7582 16.898 14.0375 16.0594 15.1048L16.8457 15.7227ZM19.0918 15.1855L18.7072 16.1086L23.3947 18.0617L23.7793 17.1387L24.1639 16.2156L19.4764 14.2625L19.0918 15.1855ZM23.7793 17.1387L23.4336 18.077C23.8111 18.2161 24.0672 18.6778 23.9353 19.1791L24.9023 19.4336L25.8694 19.6881C26.2258 18.334 25.603 16.7449 24.125 16.2003L23.7793 17.1387ZM24.9023 19.4336L23.9376 19.1705L22.7657 23.4674L23.7305 23.7305L24.6952 23.9936L25.8671 19.6967L24.9023 19.4336ZM23.7305 23.7305L22.7711 23.4483C22.6445 23.8787 22.2839 24.1465 21.875 24.1465V25.1465V26.1465C23.224 26.1465 24.3281 25.2424 24.6898 24.0126L23.7305 23.7305ZM21.875 25.1465V24.1465C10.3179 24.1465 1 14.8286 1 3.27148H0H-1C-1 15.9331 9.21334 26.1465 21.875 26.1465V25.1465ZM0 3.27148H1C1 2.86263 1.26777 2.50197 1.69818 2.37538L1.41602 1.41602L1.13385 0.45665C-0.0958915 0.818338 -1 1.92253 -1 3.27148H0ZM1.41602 1.41602L1.67913 2.38078L5.97601 1.2089L5.71289 0.244141L5.44977 -0.720623L1.1529 0.451252L1.41602 1.41602ZM5.71289 0.244141L5.96738 1.21122C6.46873 1.07928 6.9304 1.33543 7.06947 1.71289L8.00781 1.36719L8.94616 1.02148C8.40163 -0.456522 6.81252 -1.07928 5.4584 -0.722935L5.71289 0.244141Z"
                          fill="#FA0000"
                          mask="url(#path-1-inside-1_8858_1318)"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="continfo">
                    <h3>Phone number</h3>
                    <a href="#!">+91 22-49694802</a>
                    <a href="#!">+91 22-20870060</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" data-gsap>
                <div className="boxcot">
                  <div className="conicon">
                    <svg
                      width="25"
                      height="19"
                      viewBox="0 0 25 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <mask id="path-1-inside-1_8858_1326" fill="white">
                          <path d="M2.34375 0H22.6562C23.9258 0 25 1.07422 25 2.34375C25 3.125 24.6094 3.80859 24.0234 4.24805L13.4277 12.207C12.8418 12.6465 12.1094 12.6465 11.5234 12.207L0.927734 4.24805C0.341797 3.80859 0 3.125 0 2.34375C0 1.07422 1.02539 0 2.34375 0ZM0 5.46875L10.5957 13.4766C11.7188 14.3066 13.2324 14.3066 14.3555 13.4766L25 5.46875V15.625C25 17.3828 23.584 18.75 21.875 18.75H3.125C1.36719 18.75 0 17.3828 0 15.625V5.46875Z" />
                        </mask>
                        <path
                          d="M2.34375 0H22.6562C23.9258 0 25 1.07422 25 2.34375C25 3.125 24.6094 3.80859 24.0234 4.24805L13.4277 12.207C12.8418 12.6465 12.1094 12.6465 11.5234 12.207L0.927734 4.24805C0.341797 3.80859 0 3.125 0 2.34375C0 1.07422 1.02539 0 2.34375 0ZM0 5.46875L10.5957 13.4766C11.7188 14.3066 13.2324 14.3066 14.3555 13.4766L25 5.46875V15.625C25 17.3828 23.584 18.75 21.875 18.75H3.125C1.36719 18.75 0 17.3828 0 15.625V5.46875Z"
                          fill="#FA0000"
                        />
                        <path
                          d="M24.0234 4.24805L23.4234 3.44805L23.4228 3.44849L24.0234 4.24805ZM13.4277 12.207L14.0277 13.007L14.0283 13.0066L13.4277 12.207ZM11.5234 12.207L10.9228 13.0066L10.9234 13.007L11.5234 12.207ZM0.927734 4.24805L1.52832 3.44849L1.52773 3.44805L0.927734 4.24805ZM0 5.46875L0.602937 4.67096L-1 3.45953V5.46875H0ZM10.5957 13.4766L9.99273 14.2744L10.0013 14.2807L10.5957 13.4766ZM14.3555 13.4766L14.9499 14.2808L14.9566 14.2757L14.3555 13.4766ZM25 5.46875H26V3.46508L24.3988 4.66963L25 5.46875ZM2.34375 0V1H22.6562V0V-1H2.34375V0ZM22.6562 0V1C23.3735 1 24 1.6265 24 2.34375H25H26C26 0.521935 24.4781 -1 22.6562 -1V0ZM25 2.34375H24C24 2.77762 23.7849 3.17698 23.4234 3.44805L24.0234 4.24805L24.6234 5.04805C25.4339 4.44021 26 3.47238 26 2.34375H25ZM24.0234 4.24805L23.4228 3.44849L12.8271 11.4075L13.4277 12.207L14.0283 13.0066L24.624 5.0476L24.0234 4.24805ZM13.4277 12.207L12.8277 11.407C12.5974 11.5798 12.3538 11.5798 12.1234 11.407L11.5234 12.207L10.9234 13.007C11.8649 13.7132 13.0862 13.7132 14.0277 13.007L13.4277 12.207ZM11.5234 12.207L12.124 11.4075L1.52832 3.44849L0.927734 4.24805L0.327145 5.0476L10.9228 13.0066L11.5234 12.207ZM0.927734 4.24805L1.52773 3.44805C1.20257 3.20417 1 2.82162 1 2.34375H0H-1C-1 3.42838 -0.518975 4.41302 0.327734 5.04805L0.927734 4.24805ZM0 2.34375H1C1 1.61289 1.59119 1 2.34375 1V0V-1C0.459589 -1 -1 0.535547 -1 2.34375H0ZM0 5.46875L-0.602937 6.26654L9.99277 14.2744L10.5957 13.4766L11.1986 12.6788L0.602937 4.67096L0 5.46875ZM10.5957 13.4766L10.0013 14.2807C11.4776 15.3719 13.4736 15.3719 14.9499 14.2807L14.3555 13.4766L13.7611 12.6724C12.9913 13.2414 11.9599 13.2414 11.1901 12.6724L10.5957 13.4766ZM14.3555 13.4766L14.9566 14.2757L25.6012 6.26787L25 5.46875L24.3988 4.66963L13.7543 12.6774L14.3555 13.4766ZM25 5.46875H24V15.625H25H26V5.46875H25ZM25 15.625H24C24 16.8204 23.0419 17.75 21.875 17.75V18.75V19.75C24.126 19.75 26 17.9453 26 15.625H25ZM21.875 18.75V17.75H3.125V18.75V19.75H21.875V18.75ZM3.125 18.75V17.75C1.91947 17.75 1 16.8305 1 15.625H0H-1C-1 17.9351 0.814903 19.75 3.125 19.75V18.75ZM0 15.625H1V5.46875H0H-1V15.625H0Z"
                          fill="#FA0000"
                          mask="url(#path-1-inside-1_8858_1326)"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="continfo">
                    <h3>Email Address</h3>
                    <a href="#!">info@ronakadvertising.com</a>
                    <a href="#!">ronak.advt@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5" data-gsap>
                <div className="boxcot">
                  <div className="conicon">
                    <svg
                      width="19"
                      height="26"
                      viewBox="0 0 19 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.8"
                        d="M10.498 24.4141C9.91211 25.1465 8.78906 25.1465 8.20312 24.4141C5.71289 21.2402 0 13.6719 0 9.375C0 4.19922 4.19922 0 9.375 0C14.5508 0 18.75 4.19922 18.75 9.375C18.75 13.6719 13.0371 21.2402 10.498 24.4141ZM9.375 6.25C8.25195 6.25 7.22656 6.88477 6.64062 7.8125C6.10352 8.78906 6.10352 10.0098 6.64062 10.9375C7.22656 11.9141 8.25195 12.5 9.375 12.5C10.4492 12.5 11.4746 11.9141 12.0605 10.9375C12.5977 10.0098 12.5977 8.78906 12.0605 7.8125C11.4746 6.88477 10.4492 6.25 9.375 6.25Z"
                        fill="#FA0000"
                      />
                    </svg>
                  </div>
                  <div className="continfo">
                    <h3>Address</h3>
                    <a href="#!">
                      1304 - 1308, Cyber One, Sector - 30-A, Vashi, Navi Mumbai
                      - 400703. Near CIDCO Exhibition Center
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-70">
        <div className="custom-container">
          <Heading
            title="Inquiry Form"
            // subtitle="Socials"
            titleclass="text-black"
          />
          <div className="row conrow1">
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="conpage" data-gsap>
                  <div className="input">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />

                    {errors.fullName && (
                      <small className="text-danger">{errors.fullName}</small>
                    )}
                  </div>
                  <div className="input">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <small className="text-danger">{errors.email}</small>
                    )}{" "}
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={10}
                    />

                    {errors.phone && (
                      <small className="text-danger">{errors.phone}</small>
                    )}
                  </div>
                  <div className="input">
                    <textarea
                      name="message"
                      placeholder="Message here..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn w-100 mt-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          width="13"
                          height="11"
                          viewBox="0 0 13 11"
                          fill="none"
                        >
                          <path
                            d="M11.9766 5.96094L7.60156 10.3359C7.4375 10.5 7.21875 10.582 7 10.582C6.75391 10.582 6.53516 10.5 6.37109 10.3359C6.01562 10.0078 6.01562 9.43359 6.37109 9.10547L9.24219 6.20703H0.875C0.382812 6.20703 0 5.82422 0 5.33203C0 4.86719 0.382812 4.45703 0.875 4.45703H9.24219L6.37109 1.58594C6.01562 1.25781 6.01562 0.683594 6.37109 0.355469C6.69922 0 7.27344 0 7.60156 0.355469L11.9766 4.73047C12.332 5.05859 12.332 5.63281 11.9766 5.96094Z"
                            fill="white"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="map" data-gsap>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17397.481993284087!2d72.97049270269142!3d19.06680219198273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7d556251dc3%3A0x15b5b02ea9809606!2sCyber%20One!5e1!3m2!1sen!2sin!4v1786342599021!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
