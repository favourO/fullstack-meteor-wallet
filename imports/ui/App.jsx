import React from 'react';
import { ContactList } from './contactList';
import { ContactForm } from './contactForm';


// Contact: name, email, imageURL
export const App = () => (
  <div>
    <h1>Welcome Wallet Meteor!</h1>
    <ContactForm />
    <ContactList />
  </div>
);
