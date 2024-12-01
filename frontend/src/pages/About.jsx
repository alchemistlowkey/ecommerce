// eslint-disable-next-line no-unused-vars
import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            This is an e-commerce website built with React, Tailwind CSS, and
            Shopify. It is a fully functional e-commerce website with features
            like product listing, product details, cart, and checkout. The
            website is built with a mobile-first approach and is fully
            responsive.
          </p>
          <p>
            The website is is able to pay with paystack, razorpay, and stripe
            payment gateway. The website is built with a mobile-first approach
            and is fully responsive. Their is also the cash on delivery payment
            option.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to provide the best online shopping experience for
            our customers. We aim to provide the best quality products at the
            best prices. We also aim to provide the best customer service to our
            customers.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We provide the best quality products at the best prices. We have a
            team of quality assurance experts who ensure that all products meet
            our quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We provide a convenient shopping experience for our customers. Our
            website is easy to use and navigate. We have a wide range of
            products to choose from. We also provide fast and reliable delivery
            services.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            We provide exceptional customer service to our customers. Our
            customer service team is available 24/7 to assist you with any
            queries or concerns you may have. We aim to provide the best
            shopping experience for our customers.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
