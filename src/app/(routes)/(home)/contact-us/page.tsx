import ContactForm from "@/components/contact_components/contact-form";
import React from "react";

import Newsletter from "@/components/newsletter/newsletter";
import QuestionsAccordion from "@/components/accordions/questions-accordion";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full h-[2.5rem] bg-slate-300" />
      <div className="px-2 max-w-[1200px] mx-auto">
        <div className="mt-4">
          <h1 className="text-3xl md:text-4xl">Contact Us</h1>
          <p className="text-sm text-slate-500 md:text-base">
            Do you have any questions or need help? Don't hesitate to contact us
            for anything you need.
          </p>
        </div>
        <div className="sm:flex flex-row-reverse gap-2 sm:my-5 md:gap-6">
          <div className="sm:w-1/2">
            <ContactForm />
          </div>
          <div className="sm:w-1/2">
            <QuestionsAccordion />
          </div>
        </div>
      </div>
      <div className="py-3 sm:py-5 lg:py-8">
        <Newsletter />
      </div>
    </div>
  );
};

export default ContactPage;
