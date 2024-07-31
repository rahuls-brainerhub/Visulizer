import React from "react";

const Question = ({ faqData, toggleFAQ, activeIndex, titlePre, titleSuf }) => {
  return (
    <div className="max-w-[80rem] pb-[2rem]  gap-[2rem]">
      <div className="flex flex-col md:flex-row  items-start md:items-center">
        <h1 className="text-secondary leading-[3.375rem] font-[600] text-[2.813rem] pb-[1rem]">
          {titlePre}
          <span className="text-primary">&nbsp;{titleSuf}</span>
        </h1>
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
                  }`}
                >
                  <span
                    className={`${
                      activeIndex === index ? "text-primary" : "text-[#CAC2D1]"
                    }`}
                  >
                    {(index + 1).toString().padStart(2, "0") + "."}
                  </span>
                  &nbsp; &nbsp;
                  {faq.question}
                </span>
                <span
                  className={`text-xl ${
                    activeIndex === index ? "text-primary" : "text-primary"
                  }`}
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
              className={`text-primaryLight text-[1rem] leading-[1.563rem] font-[400] p-[1.45rem_1.25rem] pt-2 pb-9 text-algin-start ${
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
