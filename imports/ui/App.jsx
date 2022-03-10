import React from 'react';
import { ContactList } from './contactList';
import { ContactForm } from './contactForm';
import { Header } from './Header';


// Contact: name, email, imageURL
export const App = () => (
  <div>
    <Header />
    <div className="min-h-full">
      <div className="max-w-4xl mx-auto p-2">
        <ContactForm />
        <ContactList />
      </div>
    </div>
    
  </div>
);
