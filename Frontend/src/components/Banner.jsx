import React from "react";
import image from "../../public/banner.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32 ">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome here to learn something{" "}
              <span className="text-pink-500">new everday!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              incidunt porro architecto, veritatis laudantium similique officiis
              labore sapiente quaerat commodi fugiat nisi assumenda, harum
              accusantium optio qui perspiciatis a! Illum!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
          </div>
          <button className="btn btn-secondary mt-6">Secondary</button>
        </div>
        <div className="order-1 w-full md:w-1/2">
        <img className="w-90 h-90" src={image}></img>
        </div>
      </div>
    </>
  );
}

export default Banner;
