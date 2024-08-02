import React from "react";

const Question = ({ faqData, toggleFAQ, activeIndex, titlePre, titleSuf }) => {
  return (
    <div className="max-w-[80rem] gap-[2rem]">
      <div className="flex flex-col md:flex-row  items-start md:items-center">
        <h3 className="text-secondary leading-[2.375rem] font-[700] text-[1.75rem] pb-[1rem] md:pb-[1.75rem]">
          {titlePre}
          <span className="text-primary">&nbsp;{titleSuf}</span>
        </h3>
      </div>

      <div className="border-t ">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b">
            <div key={index} className=" p-[1.45rem_1.25rem]">
              <button
                className="w-full text-left py-0 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`text-[1.25rem] font-[600] leading-[1.25rem] flex flex-row ${
                    activeIndex === index ? "text-primary" : "text-black"
                  } pr-[0.8rem]`}
                >
                  <span
                    className={`${
                      activeIndex === index ? "text-primary" : "text-[#CAC2D1]"
                    } pr-[0.8rem]`}
                  >
                    {(index + 1).toString().padStart(2, "0") + "."}
                  </span>
                  {faq.question}
                </span>
                <span
                  className={`text-xl ${
                    activeIndex === index ? "text-primary" : "text-primary"
                  } min-w-[1.5rem]`}
                >
                  {activeIndex === index ? (
                    <img src="/subtract.png" />
                  ) : (
                    <img src="/add.png" />
                  )}
                </span>
              </button>
            </div>
            <div
              className={`text-primaryLight text-[1rem] leading-[1.563rem] font-[400] p-[1.45rem_1.25rem] pt-2 pb-6 text-algin-start ${
                activeIndex === index ? "" : "hidden"
              }`}
            >
              {faq?.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
