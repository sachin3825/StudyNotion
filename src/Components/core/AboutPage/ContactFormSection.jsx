import React from "react";
import ContactUsForm from "../../Common/ContactPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className='mx-auto text-center flex flex-col gap-10'>
      <div>
        <h1 className='text-4xl font-bold text-richblack-5'>Get in Touch</h1>
        <p className='text-richblack-500 mt-2'>
          We'd love to here for you, Please fill out this form.
        </p>
      </div>

      <div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
