import dynamic from "next/dynamic";
import { AiOutlineShopping } from "react-icons/ai";
import { MdArrowDownward } from "react-icons/md";
import Image from "next/image";
import CommonButton from "../common/commonButton/CommonButton";
import UseGetCart from "@/Hook/UseGetCart";
import Link from "next/link";

const DynamicDrawer = dynamic(() => import("../common/Drawer/Drawer"), {
  ssr: false,
});

const AddToCart = ({ isOpen, openAddToCartOpen, onClose }) => {
  const allCartFood = UseGetCart();
  const totalQuantity = allCartFood?.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="relative">
      <div className="relative">
        <button
          onClick={openAddToCartOpen}
          className="bg-[#f9fafc] p-5 rounded-full"
          aria-label="Open Shopping Cart"
        >
          <AiOutlineShopping className="text-2xl" />
        </button>
        <span
          className="absolute top-1 bg-yellow-400 text-black font-semibold right-0 badge badge-sm indicator-item"
          aria-label={`${totalQuantity} items in cart`}
        >
          {totalQuantity}
        </span>
      </div>
      <DynamicDrawer isOpen={isOpen} onClose={onClose} ariaLabel="Your Order">
        <div className="mb-10">
          <h1 className="flex justify-between text-xl font-semibold">
            <span>Your order.</span>{" "}
            <span>
              <MdArrowDownward />
            </span>
          </h1>
          {allCartFood ? (
            allCartFood?.map((item) => (
              <div
                key={item?._id}
                className="flex justify-between items-center bg-[#f9fafc] mt-10"
              >
                <Image
                  src={item?.image}
                  alt={item?.name}
                  width={60}
                  height={60}
                />
                <h1>{item?.name}</h1>
                <CommonButton ariaLabel={`Add ${item.name} to Cart`}>
                  ${item?.price}
                </CommonButton>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-between absolute bottom-0 w-full bg-white px-5 py-5">
          <nav>
            <ul role="menu">
              <li role="menuitem">
                <Link href={"/view-order"}>
                  <button
                    className="bg-[#f9fafc] p-5 font-semibold hover:underline text-blue-600"
                    aria-label="View Order"
                  >
                    View Order
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
          <Link href={"/checkout"}>
            <CommonButton ariaLabel="Proceed to Checkout">
              Checkout
            </CommonButton>
          </Link>
        </div>
      </DynamicDrawer>
    </div>
  );
};

export default AddToCart;
