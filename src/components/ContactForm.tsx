"use client";
import { ChevronRight, Loader2 } from "lucide-react";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      // This connects to the /api/send route we created earlier
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      });

      const data = await res.json();
      
      if (data.error || data.resendError) {
        throw new Error(data.error || "Failed to send message");
      }

      toast({
        title: "Message Sent! 🚀",
        description: "I'll get back to you as soon as possible.",
        variant: "default",
        className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4 bg-zinc-900 border-zinc-800 text-white"),
      });

      setLoading(false);
      setFullName("");
      setEmail("");
      setMessage("");
      
      // Optional: Redirect after success
      const timer = setTimeout(() => {
        router.push("/");
        clearTimeout(timer);
      }, 2000);

    } catch (err: any) {
      console.error(err);
      toast({
        title: "Error",
        description: "Something went wrong! Please try again later.",
        className: cn(
          "top-0 w-full flex justify-center fixed md:max-w-7xl md:top-4 md:right-4 bg-red-900/90 border-red-900 text-white"
        ),
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <form className="min-w-7xl mx-auto sm:mt-4" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="fullname">Full name</Label>
          <Input
            id="fullname"
            placeholder=""
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="bg-zinc-900 border-zinc-800 text-zinc-200 placeholder:text-zinc-600 focus:ring-purple-500"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder=""
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-zinc-900 border-zinc-800 text-zinc-200 placeholder:text-zinc-600 focus:ring-purple-500"
          />
        </LabelInputContainer>
      </div>
      <div className="grid w-full gap-1.5 mb-4">
        <Label htmlFor="content">Your Message</Label>
        <Textarea
          placeholder="Tell me about about your project..."
          id="content"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-zinc-900 border-zinc-800 text-zinc-200 placeholder:text-zinc-600 focus:ring-purple-500 min-h-[120px]"
        />
        <p className="text-sm text-zinc-500">
          I&apos;ll never share your data with anyone else. Pinky promise!
        </p>
      </div>
      <Button
        disabled={loading}
        className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block dark:bg-zinc-800 w-full text-white rounded-md h-12 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:bg-zinc-800/80 transition-all border border-zinc-800"
        type="submit"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin text-purple-500" />
            <p>Sending...</p>
          </div>
        ) : (
          <div className="flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
            Send Message <ChevronRight className="w-4 h-4 ml-2 text-purple-500" />
          </div>
        )}
        <BottomGradient />
      </Button>
    </form>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
    </>
  );
};