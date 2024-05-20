import { useState } from 'react';
import { useAuth } from '../store/Auth';
import { Navbar } from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const defaultContactForm = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactForm);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(contact);
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact(defaultContactForm);
        const data = await response.json();
        console.log(data);
        alert("Message sent successfully");
      }
    } catch (error) {
      alert("Message not sent");
      console.log(error);
    }
  };

  return (
    <>
    
      <section className=" bg-gradient-to-br from-violet-600 to-purple-300 ">
      <Navbar/>
      <div className='px-44 py-24 text-2xl font-semibold'>
        <div className=" mx-auto ">
          <div className="flex justify-center items-center">
            {/* Left Side - Image */}
            <div className="w-[70%] ">
              <img src="bg2.png" alt="Registration" className=" w-full " />
            </div>

            {/* Right Side - Contact Form */}
            <div className="-ml-40 flex bg-violet-100 rounded-3xl p-8 px-6 flex-col justify-center">
              <h1 className="text-3xl font-semibold mb-4">Contact Us <FontAwesomeIcon icon={faPhone} className='pl-1 text-purple-950' /></h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-input mt-1 block w-full rounded-md"
                    placeholder="Username"
                    required
                    value={contact.username}
                    onChange={inputHandler}
                    autoComplete="off"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-input mt-1 block w-full rounded-md"
                    placeholder="Your email"
                    required
                    value={contact.email}
                    onChange={inputHandler}
                    autoComplete="on"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">Message</label>
                  <textarea
                    cols="30"
                    rows="5"
                    name="message"
                    id="message"
                    className="form-textarea mt-1 block w-full rounded-md"
                    placeholder="Enter message"
                    required
                    value={contact.message}
                    onChange={inputHandler}
                  />
                </div>
                <button type="submit" className="hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-md bg-purple-950 transition duration-300">
                  Submit
                </button>
              </form>
            </div>
          </div></div>
        </div>
      </section>
    </>
  );
};
