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
                    <label htmlFor="">Your Name <span>*</span></label>
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
                    <label htmlFor="">Your Number <span>*</span></label>
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
                        <label htmlFor="">Media Type <span>*</span></label>
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
