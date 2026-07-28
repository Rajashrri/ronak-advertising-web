import React from 'react'
import inquiry from "../../assets/imgs/location/inquiry.png"

const InquiryForm = () => {
  return (
    <div className='p-70 inform'>
      <div className="custom-container ">
        <div className="inquiry-container position-relative">
          <div className="imgboxin" data-gsap>
            <img src={inquiry} alt="" />
          </div>
          <div className="inquire-box" data-gsap>
            <h2>Inquiry Form</h2>
            <form action="">
              <div className="row">
                <div className="col-lg-6">
                  <div className="input-box">
                    <label htmlFor="">Your Name</label>
                    <input type="text" name="" placeholder='Adnan Walker' id="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-box">
                    <label htmlFor="">Your Number</label>
                    <input type="text" name="" placeholder='+088123456789' id="" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-box">
                    <label htmlFor="">Your Number</label>
                    <input type="text" name="" placeholder='info.example@gmail.com' id="" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-box">
                    <label htmlFor="">Message</label>
                    <textarea type="text" name="" placeholder='Message here..' rows={4} id="" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <a href="#!" class="btn bg-transparent m-0">Submit Enquiry<svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9766 5.96094L7.60156 10.3359C7.4375 10.5 7.21875 10.582 7 10.582C6.75391 10.582 6.53516 10.5 6.37109 10.3359C6.01562 10.0078 6.01562 9.43359 6.37109 9.10547L9.24219 6.20703H0.875C0.382812 6.20703 0 5.82422 0 5.33203C0 4.86719 0.382812 4.45703 0.875 4.45703H9.24219L6.37109 1.58594C6.01562 1.25781 6.01562 0.683594 6.37109 0.355469C6.69922 0 7.27344 0 7.60156 0.355469L11.9766 4.73047C12.332 5.05859 12.332 5.63281 11.9766 5.96094Z" fill="white"></path></svg></a>
                </div>
           
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default InquiryForm