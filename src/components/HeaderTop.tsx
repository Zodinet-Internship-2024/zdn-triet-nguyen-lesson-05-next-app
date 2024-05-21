import React from "react";

const HeaderTop = () => {
  return (
    <div className="bg-[#F3F5F7]  hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-center items-center gap-2">
          <img src="/ticket-percent.svg" alt="Ticket Percent" />
          <div className="text-[12px] font-semibold text-sm">
            <b>30% off storewide - Limited timel</b>{" "}
            <a
              href="https://example.com"
              className="text-blue-500 font-bold underline"
            >
              {"Shop Now ->"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
