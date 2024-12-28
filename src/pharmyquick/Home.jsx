import React from "react";

const Home = () => {
  return (
    <div className="flex justify-around bg-custom-green">
  <div className="flex w-[50%] flex-col">
    <p className="mt-5 p-10 pb-0 text-5xl text-white">Order Medicines <br /> @ flat 25% off</p>
    <p className="m-5 ml-10 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo veritatis nesciunt neque itaque quod deserunt consequatur doloremque distinctio nobis voluptatibus, esse ut rem suscipit omnis.</p>
    <button className="ml-10 mt-5 w-44 rounded active:scale-90 bg-white p-2 font-semibold">Start Shopping (icon)</button>
  </div>
  <div className="mt-10 flex h-96">
    <img className="w-80" src="https://plus.unsplash.com/premium_photo-1677165481551-c91ed6e15f09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  </div>
</div>

  );
};

export default Home;
