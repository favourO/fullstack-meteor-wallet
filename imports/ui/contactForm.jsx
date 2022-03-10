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
        <form>
            <div>
                <label htmlFor='name'>
                Name  
                </label>
                <input value={name} id='name' onChange={(e) => setName(e.target.value)} type="text" />
            </div>
            <div>
                <label htmlFor='email'>
                    Email  
                </label>
                <input value={email} id='name' onChange={(e) => setEmail(e.target.value)} type="email" />
            </div>
            <div>
                <label htmlFor='imageUrl'>
                    Image URL  
                </label>
                <input value={imageUrl} id='imageUrl' onChange={(e) => setImageUrl(e.target.value)} type="text" />
            </div>
            <div>
                <button type="button" onClick={saveContact}>Save Contact</button>
            </div>
         </form>
    )
}