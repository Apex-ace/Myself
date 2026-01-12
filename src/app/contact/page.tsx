"use client";
import React, { useState } from "react";
import RevealAnimation from "@/components/reveal-animations";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Assuming your API route is at /api/contact or /api/send
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ fullName: "", email: "", message: "" });
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <RevealAnimation>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl shadow-xl">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-100">
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-zinc-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about my Business plan? Let me know.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-zinc-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow-sm bg-zinc-950 border border-zinc-700 text-zinc-100 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 placeholder-zinc-500"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-zinc-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="shadow-sm bg-zinc-950 border border-zinc-700 text-zinc-100 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 placeholder-zinc-500"
                  placeholder="Ayush Mishra"
                  required
                />
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-zinc-300"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-zinc-100 bg-zinc-950 rounded-lg shadow-sm border border-zinc-700 focus:ring-purple-500 focus:border-purple-500 placeholder-zinc-500"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full sm:w-fit py-3 px-8 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:outline-none focus:ring-purple-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin w-4 h-4" /> Sending...
                  </span>
                ) : status === "success" ? (
                  <span className="flex items-center gap-2">
                    Message Sent! <Send className="w-4 h-4" />
                  </span>
                ) : (
                  "Send message"
                )}
              </Button>

              {status === "error" && (
                <p className="text-red-400 text-sm bg-red-900/20 px-4 py-2 rounded-md border border-red-900/50">
                  {errorMessage || "Failed to send message. Please try again."}
                </p>
              )}
              {status === "success" && (
                <p className="text-green-400 text-sm bg-green-900/20 px-4 py-2 rounded-md border border-green-900/50">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              )}
            </div>
          </form>
        </div>
      </RevealAnimation>
    </div>
  );
}