import React from 'react';
import ContactDetails from "../components/ContactDetails.jsx";
import ContactForm from "../components/ContactForm.jsx";
import PageIntro from "../components/PageIntro.jsx";
import {Breadcrumb} from "antd";

const Contact = () => {
    return (
      <>
          {/*<Breadcrumb*/}
          {/*    items={[*/}
          {/*        {*/}
          {/*            title: <a href="/">Home</a>,*/}
          {/*        },*/}
          {/*        {*/}
          {/*            title: 'Contact',*/}
          {/*        },*/}
          {/*    ]}*/}
          {/*/>*/}
          <PageIntro eyebrow="Contact us" title="Let’s study together">
              <p>We can not wait to hear from you.</p>
          </PageIntro>
          <div className=" container mx-auto mt-24 sm:mt-32 lg:mt-40">
              <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                  <ContactDetails />
                  <ContactForm />
              </div>
          </div>
      </>
    );
};

export default Contact;
