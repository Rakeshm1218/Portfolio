import { useState } from "react";
import { ToastContainer, toast,Bounce } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "06deaecf-9c30-4c3c-a3f1-6534e6450c8e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success('Message Sent!!!!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error('Invalid mail-id!!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      setResult(data.message);
    }
  };

  return (
    <div className="border-neutral-900 pb-20 flex justify-center">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[60%] border border-purple-800 rounded-lg p-10 mt-20">
        <h2 className="my-5 text-center text-4xl text-white">Get in Touch</h2>

        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="text-lg mb-1 text-gray-300">Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-transparent outline-none border border-purple-800 p-3 rounded-lg"
              name="name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg mb-1 text-gray-300">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent rounded-lg outline-none border border-purple-800 p-3"
              name="email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg mb-1 text-gray-300">Message:</label>
            <textarea
              placeholder="Enter your message"
              rows="4"
              className="bg-transparent outline-none border border-purple-800 p-3 rounded-lg"
              name="message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition duration-200 text-white px-5 py-2 rounded-lg"
          >
            Send Message
          </button>

          <p className="text-center text-sm text-gray-400">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
