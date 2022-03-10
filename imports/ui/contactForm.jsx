import React, { useState } from "react";
import { ContactsCollection } from "../api/ContactsCollection";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const saveContact = () => {
        console.log({name, email, imageUrl});
        ContactsCollection.insert({name, email, imageUrl});
        setName("");
        setEmail("");
        setImageUrl("");
    }
    return (
        <form className="mt-6">
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label htmlFor='name' className="block text-sm font-medium text-gray-700">
                    Name  
                    </label>
                    <input 
                        value={name} 
                        id='name' 
                        onChange={(e) => setName(e.target.value)} 
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus" />
                </div>
                
                
            </div>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label htmlFor='email' className="block text-sm font-medium text-gray-700">
                    Email  
                    </label>
                    <input 
                        value={email} 
                        id='email' 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus" />
                </div>
                
                
            </div>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label htmlFor='imageUrl' className="block text-sm font-medium text-gray-700">
                    ImageUrl  
                    </label>
                    <input 
                        value={imageUrl} 
                        id='imageUrl' 
                        onChange={(e) => setImageUrl(e.target.value)} 
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus" />
                </div>
                
                
            </div>
            <div>
                <button type="button" className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-content text-white" onClick={saveContact}>Save Contact</button>
            </div>
         </form>
    )
}