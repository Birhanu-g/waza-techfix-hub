"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Contact Us
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Let's Solve Your
            <span className="block text-blue-600">
              Technology Challenge
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Need IT support, a website, networking, server solutions,
            training or another technology service? Contact WazaTechFix Hub.
          </p>
        </div>

        {/* Main area */}
        <div className="mt-14 grid gap-8 lg:grid-cols-5">

          {/* Contact information */}
          <div className="rounded-3xl bg-slate-950 p-8 lg:col-span-2">

            <h3 className="text-2xl font-bold text-white">
              Get in Touch
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Tell us what you need and our team can help you identify
              the right technology solution.
            </p>

            <div className="mt-8 space-y-6">

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 text-white">
                    +251 XXX XXX XXX
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 text-white">
                    info@wazatechfix.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 text-white">
                    Ethiopia
                  </p>
                </div>
              </div>

            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/251000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-5 py-3.5 font-bold text-white transition hover:border-green-500 hover:text-green-400"
            >
              <MessageCircle size={19} />
              Contact via WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-3">

            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Send size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-950">
                  Thank You!
                </h3>

                <p className="mt-3 max-w-md text-slate-600">
                  Your request has been received. We will contact you
                  as soon as possible.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-semibold text-blue-600 hover:text-blue-700"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                <div className="grid gap-6 sm:grid-cols-2">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+251..."
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                </div>

                {/* Email */}
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Service */}
                <div className="mt-6">
                  <label
                    htmlFor="service"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Service Needed
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  >
                    <option value="">Select a service</option>
                    <option>Computer Repair</option>
                    <option>Networking</option>
                    <option>Server Solutions</option>
                    <option>Web Development</option>
                    <option>Software Development</option>
                    <option>Security Systems</option>
                    <option>IT Support</option>
                    <option>Training</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you need..."
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
                >
                  Send Service Request
                  <Send size={18} />
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}