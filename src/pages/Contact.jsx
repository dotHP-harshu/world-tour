import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (email === "" || message === "") {
      alert("Input Field can not be empty.");
    }
    console.log({ email, message });
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-sm:my-10 my-20 max-sm:grid-cols-1 lg:px-40 sm:px-10 max-sm:px-5">
      <h1 className="text-4xl max-sm:text-xl text-center ">
        Feel free to reach out
      </h1>
      <div
        className="form-container mt-10 flex justify-center items-center lg:px-40 sm:px-20 max-sm:px-5
      "
      >
        <form
          action={handleForm}
          className="w-full rounded-lg lg:w-xl bg-[var(--dark-bg)] px-10 py-5 max-sm:py-3 max-sm:px-5 space-y-2"
        >
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            className="border-2 mb-4 border-[var(--light-bg)] w-full px-4 py-2 rounded-lg outline-none focus:border-white"
            type="email"
            placeholder="Email"
            name="email"
          />
          <label htmlFor="messsage">Message:</label>
          <textarea
            value={message}
            rows={6}
            onChange={(e) => setMessage(e.target.value)}
            className="border-2 mb-4 resize-none border-[var(--light-bg)] w-full px-4 py-2 rounded-lg outline-none focus:border-white"
            name="message"
            id="message"
            placeholder="Message "
          ></textarea>
          <button
            onClick={(e) => {
              handleForm(e);
            }}
            className="border-2  border-[var(--light-bg)] px-4 py-2 rounded-lg outline-none active:scale-95"
            type="submit "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
