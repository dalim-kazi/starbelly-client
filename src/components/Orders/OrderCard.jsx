import Image from "next/image";
import React from "react";
import logo from "@/assets/icon/arrow.svg";
import cart from "@/assets/icon/cart.svg";
import Link from "next/link";
 
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/Data/reducer/AddToCart/AddToCart.Reducer";
const OrderCard = ({ menu }) => {
  const dispatch = useDispatch();
  const addToCard = async (item) => {
    const newFood = {
      _id: item?._id,
      category: item?.category,
      name: item?.name,
      image: item?.image,
      price: item?.price,
      quantity: item?.quantity,
      recipe: item?.recipe,
    };
    console.log(newFood);
    await dispatch(addItemToCart(newFood));
  };
  return (
    <section className="relative mb-10">
      <div>
        <Image
          src={menu?.image}
          alt={menu?.name}
          width={300}
          height={200}
          layout="responsive"
          className="w-full h-48 object-cover rounded"
        />
      </div>
      <div className="flex justify-between items-center gap-5 mt-2">
        <h1 className="text-lg font-semibold w-2/3">{menu?.name}</h1>
        <h1 className="text-xl font-bold text-orange-500">${menu?.price}</h1>
      </div>
      <p className="text-[#6f6f87] mt-2 mb-14">{menu?.recipe.slice(0, 50)}</p>

      <div className="absolute -bottom-5 left-0 right-0 flex items-center justify-between">
        <div>
          {" "}
          <Link href={`/order/${menu?._id}`}>
            <button className="bg-[#f9fafc] p-4 rounded-full ">
              <Image src={logo} alt="logo" width={30} height={30} />
            </button>
          </Link>
        </div>
        <button
          onClick={() => addToCard(menu)}
          className="flex opacity-100 border-none px-2 py-2 md:px-5 md:py-5 cursor-pointer transform scale-100 leading-normal text-blue-600 hover:underline underline-offset-2 font-semibold bg-yellow-400 transition duration-300 ease-in-out"
        >
          <Image
            src={cart}
            alt="cart"
            width={20}
            height={20}
            quality={100}
            className="object-cover mr-5"
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
          Add To Cart
        </button>
      </div>
    </section>
  );
};

export default OrderCard;
