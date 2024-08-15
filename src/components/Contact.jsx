import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div id="contact" className="bg-[#bbcba9] p-8 rounded-xl my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-lg font-medium">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject", { required: "Subject is required" })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Message:
              </label>
              <textarea
                id="message"
                rows="5"
                {...register("message", { required: "Message is required" })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="text-end">
              <button
                type="submit"
                className="px-6 py-3 bg-[#768048] text-white font-bold rounded-xl shadow-xl "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-bold">Get in Touch</h3>
          <p>
            If you have any questions, feel free to reach out to us through the
            following contact details:
          </p>
          <div>
            <h4 className="font-semibold">Phone:</h4>
            <p>+1 234 567 890</p>
          </div>
          <div>
            <h4 className="font-semibold">Email:</h4>
            <p>contact@evershop.com</p>
          </div>
          <div>
            <h4 className="font-semibold">Address:</h4>
            <p>1234 Street Name, City, State, ZIP</p>
          </div>
          <div>
            <h4 className="font-semibold">Working Hours:</h4>
            <p>24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
