import React from "react";
import Drawer from "../common/Drawer/Drawer";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdArrowDownward } from "react-icons/md";

const Contact = ({ isOpen, openContact, onClose }) => {
  return (
    <div>
      <button onClick={openContact} aria-label="Toggle Contact Information">
        <HiOutlineDotsVertical className="text-2xl" />
      </button>
      <Drawer isOpen={isOpen} onClose={onClose} ariaLabel="Contact Information">
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Contact</h1>
            <MdArrowDownward className="text-xl" />
          </div>
          <p className="flex justify-between border-t-2 border-[#f2f3f5] mt-5 py-2">
            <span>Address:</span>
            <span>Jeshore, Khulna, Bangladesh</span>
          </p>
          <p className="flex justify-between border-t-2 border-[#f2f3f5] py-2">
            <span>Working Hours:</span>
            <span>09:00 AM - 09:00 PM</span>
          </p>
          <p className="flex justify-between border-t-2 border-[#f2f3f5] py-2">
            <span>Phone:</span>
            <span>01755876658</span>
          </p>
          <p className="flex justify-between border-t-2 border-b-2 border-[#f2f3f5] py-2">
            <span>Email:</span>
            <span>mddalim862483@gmail.com</span>
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default Contact;
