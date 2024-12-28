import React from "react";

const Another = () => {
  return (
    <div className="flex justify-around mx-5">
      <div class=" my-16 flex h-72 w-[45%] items-center justify-around rounded-2xl bg-custom-green px-5">
        <div>
          <img
            class="mt-8 h-64 w-64"
            src="https://plus.unsplash.com/premium_photo-1677165481551-c91ed6e15f09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3"
            alt=""
          />
        </div>
        <div>
          <p class="text-center text-3xl font-bold text-white">
            Order Medicines <br />
            on Call <br />
            8955579470
          </p>
          <p class="mt-5 text-xl text-white">Working hours 8AM to 10PM</p>
        </div>
      </div>

      <div class=" my-16 flex h-72 w-[45%] items-center justify-around rounded-2xl bg-custom-green px-5">
        <div>
          <img
            class="mt-8 h-64 w-64"
            src="https://plus.unsplash.com/premium_photo-1677165481551-c91ed6e15f09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <p class="text-center text-3xl font-bold text-white">
            Consult a Doctor <br />
             or <br />
            Upload a Prescription
          </p>
         <button className="flex items-center mt-5 text-white font-semibold cursor-pointer border-2 rounded-3xl border-white px-8 py-3 gap-2 text-center justify-center">
         <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><path d="M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
            Upload</button>
        </div>
      </div>
    </div>
  );
};

export default Another;
