import React from "react";
import Drawer from "../common/Drawer/Drawer";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { MdArrowDownward } from "react-icons/md";
const Contact = ({ isOpen, openContact, onClose }) => {
  return (
    <div>
      <button onClick={openContact}>
        <HiMiniEllipsisVertical className="text-2xl" />
      </button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <div className="mt-5">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">Contact</h1>{" "}
            <MdArrowDownward className="text-xl" />
          </div>
          <p className="flex justify-between border-t-2 border-[#f2f3f5] mt-10 py-5">
            <span>Address</span>
            <span>Jeshore,Khulna,Bangladesh</span>
          </p>
          <p className="flex justify-between border-t-2 border-[#f2f3f5] py-5">
            <span>Working hours:</span>
            <span>09:00am - 09:00pm</span>
          </p>
          <p className="flex justify-between border-t-2 border-[#f2f3f5] py-5">
            <span>Phone:</span>
            <span>01755876658</span>
          </p>
          <p className="flex justify-between border-t-2 border-b-2 border-[#f2f3f5] py-5">
            <span>Email:</span> <span>mddalim862483@gmail.com</span>
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default Contact;
