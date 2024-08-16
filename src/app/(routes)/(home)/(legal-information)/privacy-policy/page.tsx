import { privacyPolicy, termsOfUse } from "@/lib/constants";
import React from "react";

const TermsOfUse = () => {
  return (
    <div className="max-w-[1000px] mx-auto text-white flex flex-col gap-2 my-3 sm:my-5 md:my-7  px-2">
      <h1 className="text-3xl underline mb-4">Privacy Policy</h1>
      {privacyPolicy.map((item, i) => (
        <div key={i} className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">{item.title}</h1>
          <div>
            <p className="text-sm">{item.item1}</p>
            <p className="text-sm">{item.item2}</p>
            <p className="text-sm">{item.item2}</p>
          </div>
        </div>
      ))}

      <ul className="mt-5 text- text-slate-200 list-disc">
        <li>Company Name: AlxnBusiness</li>
        <li>Email: alxnbusiness1@gmail.com</li>
        <li>Phone: +49 1515 7491907</li>
        <li>
          Address: Erdmarsgasse 4, Kaltenlengsfeld, Meiningen, 36452, Germany
        </li>
      </ul>
    </div>
  );
};

export default TermsOfUse;
