import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();

  

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for reaching out. We'll get back to you soon.",
      confirmButtonColor: "#f97316",
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
            Contact Us
          </h1>
          <p className="text-base-content/70 text-lg mb-4">
            We’d love to hear from you! Reach out with questions, suggestions, or just to say hello.
          </p>
        </div>

        {/* Content Card */}
        <div
          className="relative w-full max-w-[1000px] mx-auto rounded-xl overflow-hidden group"
          style={{
            padding: "2px",
            background: "linear-gradient(to right, #f97316, #ec4899, #8b5cf6)",
          }}
        >
          <div className="bg-base-100 dark:bg-gray-900 rounded-lg w-full h-full flex flex-col p-8 overflow-auto shadow-md group-hover:shadow-lg transition-shadow duration-300">

            {/* Contact Methods */}
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              How to Reach Us
            </h2>
            <p className="mb-6 text-base-content/70 leading-relaxed text-lg">
              You can contact us through any of the following channels, and we’ll get back to you as soon as possible:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-6 text-base-content/70 text-lg">
              <li>Email: <span className="text-white dark:text-gray-200 font-medium">support@artopia.com</span></li>
              <li>Phone: <span className="text-white dark:text-gray-200 font-medium">+8801456-789430</span></li>
              <li>Follow us on social media: <span className="text-white dark:text-gray-200 font-medium">Instagram, Twitter, Facebook</span></li>
            </ul>

            {/* Feedback Form */}
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-base-100 dark:bg-gray-800 text-base-content/90 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-base-100 dark:bg-gray-800 text-base-content/90 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-base-100 dark:bg-gray-800 text-base-content/90 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 text-white font-bold py-3 px-6 rounded-md hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
