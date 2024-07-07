import React, { useEffect, useRef } from "react";
import { GoX } from "react-icons/go";

const Drawer = ({ isOpen, onClose, children, ariaLabel }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const handleKeydown = (event) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeydown);

      return () => {
        document.removeEventListener("keydown", handleKeydown);
      };
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      drawerRef.current.focus();
    }
  }, [isOpen]);

  const drawerClasses = isOpen
    ? "fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto"
    : "fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out";

  return (
    <div
      className={drawerClasses}
      ref={drawerRef}
      tabIndex={isOpen ? "0" : "-1"}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 p-2 focus:outline-none rounded-full bg-yellow-400 mr-5"
          aria-label="Close drawer"
        >
          <GoX className="text-2xl text-white" />
        </button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Drawer;
