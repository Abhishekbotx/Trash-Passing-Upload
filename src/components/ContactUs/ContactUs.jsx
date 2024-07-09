import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            console.log('request hit');
            const response = await axios.post(
                "https://trash-passing-backend.vercel.app/api/v1/checkin",
                {
                    fullName,
                    email,
                    phoneNumber,
                    message,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log('response', response.data);
            if (response.data.success) {
                toast.success('Your response was submitted');
                setFullName('');
                setEmail('');
                setPhoneNumber('');
                setMessage('');
            } else {
                toast.error('Submission failed');
            }
        } catch (error) {
            toast.error('Your response was not submitted');
            console.error('Error sending message', error);
        }
    };

    return (
        <div className="bg-black text-white py-8 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 rounded-lg min-h-[75vh] overflow-hidden">
                <div className="bg-zinc-900 p-8 space-y-5 rounded-lg flex flex-col">
                    <h2 className="text-2xl font-bold mb-4 raleway-sm">Contact Information</h2>
                    <div className="mb-4 space-y-6">
                        <div className="flex items-center gap-4">
                            <div>
                                <span className="mr-2 text-3xl">
                                    <FontAwesomeIcon icon={faPhone} />
                                </span>
                            </div>
                            <div className="text-lg">
                                <p className="flex items-center">+91 93216 31979</p>
                                <p className="flex items-center">+91 80108 70848</p>
                            </div>
                        </div>
                        <p className="flex items-center poppins lg:text-xl md:text-xl text-base whitespace-wrap lg:tracking-wide md:tracking-wide tracking-normal">
                            <span className="text-3xl mr-3">✉️</span> trashpassing.helpdesk@gmail.com
                        </p>
                    </div>
                    <div className="flex flex-col pt-8 items-center">
                        <h3 className="text-xl font-bold mb-4 raleway">Follow us</h3>
                        <div className="flex space-x-4">
                            <SocialIcon url="https://www.instagram.com" className="border-2 rounded-full border-slate-800" />
                            <SocialIcon url="https://www.x.com" className="border-2 rounded-full border-slate-900" />
                            <SocialIcon url="https://www.youtube.com" className="border-2 rounded-full border-slate-800" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 text-zinc-700 p-8">
                    <h2 className="text-2xl font-bold mb-4">Do you have any questions?</h2>
                    <form className="space-y-4 flex flex-col items-center" onSubmit={submitHandler}>
                        <div className="flex gap-4 flex-wrap">
                            <div>
                                <label className="block mb-2" htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    className="w-full p-2 rounded border-2 border-slate-600"
                                    onChange={(e) => setFullName(e.target.value)}
                                    value={fullName}
                                    placeholder="Aarush Singh"
                                />
                            </div>
                            <div>
                                <label className="block mb-2" htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    className="w-full p-2 rounded border-2 border-slate-600"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="0123456789"
                                    value={phoneNumber}
                                />
                            </div>
                            <div>
                                <label className="block mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-2 rounded border-2 border-slate-600"
                                    placeholder="xyzbh7@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="block mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full p-2 rounded border-2 border-slate-700"
                                placeholder="Write your message  . . . ."
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-auto py-2 px-4 rounded">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
