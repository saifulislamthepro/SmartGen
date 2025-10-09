'use client';

import Head from 'next/head';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      email: form.email,
      number: form.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert('✅ Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch(error => {
        console.error('EmailJS error:', error);
        alert('❌ Failed to send message. Please try again.');
      });
  };

  return (
    <>
      <main className="contact-page">
        <section className="contact-hero">
          <h1>📬 Contact SmartGen</h1>
          <p>We’d love to hear from you. Whether you’re ready to start a project or just exploring, let’s talk.</p>
        </section>

        <section className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
          <p>Give your contact details so we can contact You</p>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Phone Number</label>
              <input
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn-orange">Contact Me</button>
          </form>

          <div className="contact-info">
            <h2>📍 Our Office</h2>
            <p>SmartGen Digital Marketing Agency</p>
            <p>Dhaka, Bangladesh</p>
            <p>Email: hello@smartgen.com.bd</p>
            <p>Phone: +880-1XXX-XXXXXX</p>
          </div>
        </section>
      </main>
    </>
  );
}