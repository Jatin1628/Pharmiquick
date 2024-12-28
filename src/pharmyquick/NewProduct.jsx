import React from "react";

const NewProduct = () => {
  return (
    <div>
      <div className="mx-16 mt-20 mb-10 flex justify-between">
        <p className="text-2xl font-bold">New Products</p>

        <div className="flex cursor-pointer items-center gap-5">
        <p className="text-xl">View All</p>
        <svg
          className="h-7 cursor-pointer hover:scale-110"

          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>

        </div>

      </div>
      <div className="flex">
        <div className="ml-16 mr-5 flex h-72 w-52 flex-col cursor-pointer hover:scale-110 rounded-3xl border-2 shadow-2xl">
          <img
            className="h-[60%] rounded-t-3xl border-b-4"
            src="https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="m-3 text-base">
            <p>Name of the Product</p>
            <p>Price : 250Rs.</p>
          </div>
          <p className="rounded-b-3xl bg-custom-green p-3 text-center font-bold text-white">
            Add to Cart (icon)
          </p>
        </div>
        <div className="mx-5 flex h-72 w-52 flex-col cursor-pointer hover:scale-110 rounded-3xl border-2 shadow-2xl">
          <img
            className="h-[60%] rounded-t-3xl border-b-4"
            src="https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="m-3 text-base">
            <p>Name of the Product</p>
            <p>Price : 250Rs.</p>
          </div>
          <p className="rounded-b-3xl bg-custom-green p-3 text-center font-bold text-white">
            Add to Cart (icon)
          </p>
        </div>
        <div className="mx-5 flex h-72 w-52 flex-col cursor-pointer hover:scale-110 rounded-3xl border-2 shadow-2xl">
          <img
            className="h-[60%] rounded-t-3xl border-b-4"
            src="https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="m-3 text-base">
            <p>Name of the Product</p>
            <p>Price : 250Rs.</p>
          </div>
          <p className="rounded-b-3xl bg-custom-green p-3 text-center font-bold text-white">
            Add to Cart (icon)
          </p>
        </div>
        <div className="mx-5 flex h-72 w-52 flex-col cursor-pointer hover:scale-110 rounded-3xl border-2 shadow-2xl">
          <img
            className="h-[60%] rounded-t-3xl border-b-4"
            src="https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="m-3 text-base">
            <p>Name of the Product</p>
            <p>Price : 250Rs.</p>
          </div>
          <p className="rounded-b-3xl bg-custom-green p-3 text-center font-bold text-white">
            Add to Cart (icon)
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
