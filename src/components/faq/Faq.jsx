import React, { useState } from "react";
import Question from "./Question";
import generalQueries from "../../utils/generalQueries";
import priceRelated from "../../utils/priceRelated";
import refundRelated from "../../utils/refundRelated";
import softwareRelated from "../../utils/softwareRelated";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState({
    section: null,
    index: null,
  });

  const toggleFAQ = (section, index) => {
    setActiveIndex((prevState) =>
      prevState.section === section && prevState.index === index
        ? { section: null, index: null }
        : { section, index }
    );
  };
  return (
    <div className=" max-w-[80rem] flex flex-row py-[6rem] m-auto padding px-5 gap-[1rem]">
      <div className="w-[17rem]  py-[.5rem] mx-auto">
        <h1 className="text-primary leading-[2.25rem] font-[700] text-[2.25rem] pb-[1.2rem]">
          NEED HELP?
        </h1>
        <p className="text-primaryLight font-[500] text-[1rem] leading-[1.5rem]">
          Frequently asked questions
        </p>
        <img className="py-[1.2rem]" src="/faq.png" />
      </div>
      <div className="flex-row w-[100%]  ">
        <Question
          faqData={generalQueries}
          toggleFAQ={(index) => toggleFAQ("general", index)}
          activeIndex={
            activeIndex.section === "general" ? activeIndex.index : null
          }
          titlePre={"General"}
          titleSuf={"Queries"}
        />
        <Question
          faqData={priceRelated}
          toggleFAQ={(index) => toggleFAQ("price", index)}
          activeIndex={
            activeIndex.section === "price" ? activeIndex.index : null
          }
          titlePre={"Price"}
          titleSuf={"related"}
        />
        <Question
          faqData={refundRelated}
          toggleFAQ={(index) => toggleFAQ("refund", index)}
          activeIndex={
            activeIndex.section === "refund" ? activeIndex.index : null
          }
          titlePre={"Refund"}
          titleSuf={"related"}
        />
        <Question
          faqData={softwareRelated}
          toggleFAQ={(index) => toggleFAQ("software", index)}
          activeIndex={
            activeIndex.section === "software" ? activeIndex.index : null
          }
          titlePre={"Software"}
          titleSuf={"related"}
        />
      </div>
    </div>
  );
};

export default Faq;
