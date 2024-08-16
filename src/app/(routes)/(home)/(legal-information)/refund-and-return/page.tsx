import { privacyPolicy, refundPolicy, termsOfUse } from "@/lib/constants";
import React from "react";

const TermsOfUse = () => {
  return (
    <div className="max-w-[1000px] mx-auto text-white flex flex-col gap-2 my-3 sm:my-5 md:my-7  px-2">
      <h1 className="text-3xl underline mb-4">Return and Refund</h1>
      {refundPolicy.map((item, i) => (
        <div key={i} className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">{item.title}</h1>
          <div>
            <p className="text-sm">{item.item1}</p>
            <p className="text-sm">{item.item2}</p>
            <p className="text-sm">{item.item2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TermsOfUse;
