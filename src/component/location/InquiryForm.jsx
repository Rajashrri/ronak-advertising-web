import React from "react";
import inquiry from "../../assets/imgs/location/inquiry.webp";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getLocationDetailApi, locationEnquiryApi } from "../../utils/frontApi";
const InquiryForm = () => {
  const { slug } = useParams();

  const [siteName, setSiteName] = useState("");
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchLocation();
  }, [slug]);

  const fetchLocation = async () => {
    const res = await getLocationDetailApi(slug);

    if (res.data.success) {
      setSiteName(res.data.data.siteName);
    }
  };


const validate = () => {
  const err = {};

  if (!formData.fullName.trim())
    err.fullName = "Name is required";

  if (!formData.phone.trim())
    err.phone = "Phone is required";
  else if (!/^\d{10}$/.test(formData.phone))
    err.phone = "Enter valid 10 digit number";

  if (!formData.email.trim())
    err.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    err.email = "Invalid email";

  if (!formData.message.trim())
    err.message = "Message is required";

  setErrors(err);

  return Object.keys(err).length === 0;
};
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
    const res = await locationEnquiryApi({
  ...formData,
  siteName,
});

      if (res.data.success) {
        navigate("/thank-you");

       setFormData({
  fullName: "",
  phone: "",
  email: "",
  message: "",
});

        setErrors({});
      }
    } catch (err) {
  console.log("Error:", err);

  if (err.response) {
    console.log("Status:", err.response.status);
    console.log("Data:", err.response.data);
  } else {
    console.log("No Response");
  }
}
  };

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

  setErrors({
    ...errors,
    [e.target.name]: "",
  });
};
  return (
    <div className="p-70 inform">
      <div className="custom-container ">
        <div className="inquiry-container position-relative">
          <div className="imgboxin" data-gsap>
            <img src={inquiry} alt="" />
          </div>
          <div className="inquire-box" data-gsap>
            <h2>Inquiry Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="input-box">
                    <label htmlFor="">Your Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <div className="text-danger mt-1">{errors.fullName}</div>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-box">
                    <label htmlFor="">Company Name <span>*</span></label>
                    <input
                      type="text"
                      name="Company Name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <div className="text-danger mt-1">{errors.fullName}</div>
                    )}
                  </div>
                </div>
                   
                <div className="col-lg-6">
                  <div className="input-box">
                    <label htmlFor="">Your Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <div className="text-danger mt-1">{errors.phone}</div>
                    )}
                  </div>
                </div>
                  <div className="col-lg-6">
                  <div className="input-box">
                    <label htmlFor="">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="text-danger mt-1">{errors.email}</div>
                    )}
                  </div>
                </div>
                  <div className="col-lg-6">
                  <div className="input-box">
                    <label htmlFor="">City / Preferred Location <span>*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="text-danger mt-1">{errors.email}</div>
                    )}
                  </div>
                </div>
                 <div className="col-lg-6">
                  <div className="input-box">
                       <div className="custom-select">
                              <select
                                name="mediaType"
                                value={formData.mediaType}
                                onChange={handleChange}
                              >
                                <option value="Select *">Media Type *</option>
                                <option value="Hoarding">Hoarding </option>
                                <option value="LED">LED </option>
                                <option value="BQS">BQS </option>
                                <option value="Transit Media">
                                  Transit Media{" "}
                                </option>
                                <option value="Other">Other </option>
                              </select>
                                 <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#F5F5F5"
                            stroke-width="1.5"
                            stroke-linecap="square"
                            stroke-linejoin="round"
                          />
                        </svg>

                              {errors.mediaType && (
                                <div className="text-danger">
                                  {errors.mediaType}
                                </div>
                              )}
                              <svg
                                width="15"
                                height="10"
                                viewBox="0 0 15 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="path-1-outside-1_9500_3299"
                                  maskUnits="userSpaceOnUse"
                                  x="-0.976562"
                                  y="-0.0078125"
                                  width="15"
                                  height="10"
                                  fill="black"
                                >
                                  <rect
                                    fill="white"
                                    x="-0.976562"
                                    y="-0.0078125"
                                    width="15"
                                    height="10"
                                  />
                                  <path d="M6.30469 7.71094L1.30469 2.71094C0.898438 2.33594 0.898438 1.67969 1.30469 1.30469C1.67969 0.898438 2.33594 0.898438 2.71094 1.30469L7.02344 5.58594L11.3047 1.30469C11.6797 0.898438 12.3359 0.898438 12.7109 1.30469C13.1172 1.67969 13.1172 2.33594 12.7109 2.71094L7.71094 7.71094C7.33594 8.11719 6.67969 8.11719 6.30469 7.71094Z" />
                                </mask>
                                <path
                                  d="M6.30469 7.71094L1.30469 2.71094C0.898438 2.33594 0.898438 1.67969 1.30469 1.30469C1.67969 0.898438 2.33594 0.898438 2.71094 1.30469L7.02344 5.58594L11.3047 1.30469C11.6797 0.898438 12.3359 0.898438 12.7109 1.30469C13.1172 1.67969 13.1172 2.33594 12.7109 2.71094L7.71094 7.71094C7.33594 8.11719 6.67969 8.11719 6.30469 7.71094Z"
                                  fill="#1A1A1A"
                                />
                                <path
                                  d="M6.30469 7.71094L7.03949 7.03266L7.02593 7.01797L7.01179 7.00383L6.30469 7.71094ZM1.30469 2.71094L2.01179 2.00383L1.99766 1.98969L1.98297 1.97613L1.30469 2.71094ZM1.30469 1.30469L1.98297 2.03949L2.01236 2.01236L2.03949 1.98297L1.30469 1.30469ZM2.71094 1.30469L1.97613 1.98297L1.99093 1.99899L2.00641 2.01436L2.71094 1.30469ZM7.02344 5.58594L6.31891 6.29561L7.026 6.99758L7.73054 6.29304L7.02344 5.58594ZM11.3047 1.30469L12.0118 2.01179L12.0259 1.99766L12.0395 1.98297L11.3047 1.30469ZM12.7109 1.30469L11.9761 1.98297L12.0033 2.01236L12.0327 2.03949L12.7109 1.30469ZM12.7109 2.71094L12.0327 1.97613L12.018 1.98969L12.0038 2.00383L12.7109 2.71094ZM7.71094 7.71094L7.00383 7.00383L6.98969 7.01797L6.97613 7.03266L7.71094 7.71094ZM6.30469 7.71094L7.01179 7.00383L2.01179 2.00383L1.30469 2.71094L0.597581 3.41804L5.59758 8.41804L6.30469 7.71094ZM1.30469 2.71094L1.98297 1.97613C1.98928 1.98196 1.99437 1.98954 1.99724 1.99635C1.99972 2.00221 2 2.00599 2 2.00781C2 2.00964 1.99972 2.01341 1.99724 2.01928C1.99437 2.02608 1.98928 2.03366 1.98297 2.03949L1.30469 1.30469L0.626407 0.569884C-0.208802 1.34085 -0.208802 2.67478 0.626407 3.44574L1.30469 2.71094ZM1.30469 1.30469L2.03949 1.98297C2.03366 1.98928 2.02608 1.99437 2.01928 1.99724C2.01341 1.99972 2.00964 2 2.00781 2C2.00599 2 2.00221 1.99972 1.99635 1.99724C1.98954 1.99437 1.98196 1.98928 1.97613 1.98297L2.71094 1.30469L3.44574 0.626408C2.67478 -0.208802 1.34085 -0.208802 0.569884 0.626408L1.30469 1.30469ZM2.71094 1.30469L2.00641 2.01436L6.31891 6.29561L7.02344 5.58594L7.72797 4.87626L3.41547 0.595015L2.71094 1.30469ZM7.02344 5.58594L7.73054 6.29304L12.0118 2.01179L11.3047 1.30469L10.5976 0.597581L6.31633 4.87883L7.02344 5.58594ZM11.3047 1.30469L12.0395 1.98297C12.0337 1.98928 12.0261 1.99437 12.0193 1.99724C12.0134 1.99972 12.0096 2 12.0078 2C12.006 2 12.0022 1.99972 11.9963 1.99724C11.9895 1.99437 11.982 1.98928 11.9761 1.98297L12.7109 1.30469L13.4457 0.626408C12.6748 -0.208802 11.3408 -0.208802 10.5699 0.626408L11.3047 1.30469ZM12.7109 1.30469L12.0327 2.03949C12.0263 2.03366 12.0213 2.02608 12.0184 2.01928C12.0159 2.01341 12.0156 2.00964 12.0156 2.00781C12.0156 2.00599 12.0159 2.00221 12.0184 1.99635C12.0213 1.98954 12.0263 1.98196 12.0327 1.97613L12.7109 2.71094L13.3892 3.44574C14.2244 2.67478 14.2244 1.34085 13.3892 0.569884L12.7109 1.30469ZM12.7109 2.71094L12.0038 2.00383L7.00383 7.00383L7.71094 7.71094L8.41804 8.41804L13.418 3.41804L12.7109 2.71094ZM7.71094 7.71094L6.97613 7.03266C6.98196 7.02634 6.98954 7.02126 6.99635 7.01838C7.00221 7.0159 7.00599 7.01562 7.00781 7.01562C7.00964 7.01562 7.01341 7.0159 7.01928 7.01838C7.02608 7.02126 7.03366 7.02634 7.03949 7.03266L6.30469 7.71094L5.56988 8.38922C6.34085 9.22443 7.67478 9.22443 8.44574 8.38922L7.71094 7.71094Z"
                                  fill="#F5F5F5"
                                  mask="url(#path-1-outside-1_9500_3299)"
                                />
                              </svg>
                            </div>

                        {errors.fullName && (
                          <small className="text-danger">{errors.fullName}</small>
                        )}
                      </div>
                  {/* </div> */}
                </div>
             
              
                <div className="col-lg-12">
                  <div className="input-box">
                    <label htmlFor="">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />{" "}
                  </div>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="btn bg-transparent m-0">
                    Submit Enquiry
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
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
