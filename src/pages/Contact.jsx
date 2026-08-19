import React, { useEffect } from 'react'
import Breadcrumb from '../component/reuse/BreadCrumb'
import contact from "../assets/imgs/breadcrumb/contact.jpg"
import ContactInfo from '../component/contact/ContactInfo'

const Contact = () => {
    useEffect(() => {
      document.title = "Contact | Ronak Advertising";
    }, []);
  return (
    <>
      <Breadcrumb
  title="Contact"
  items={[
    { label: "Home", link: "/" },
    { label: "Contact" },
  ]}
  bgimg={contact}
/>
    <ContactInfo/>
    </>
  )
}

export default Contact