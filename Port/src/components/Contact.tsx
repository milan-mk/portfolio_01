
import { useState } from "react";
import { Mail, Send } from "lucide-react";
const socialLinks = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/milan-kumar-modak", icon: "" ,displayText:"Milan Kumar Modak" },
    { label: "GitHub", url: "https://github.com/milan-mk", icon: "",displayText:"@milan-mk" },
    { label: "Leetcode", url: "https://leetcode.com/u/Milan__Kumar/", icon: "",displayText:"Milan__Kumar" },
]
function Contact() {


    const [IsHovered, setIsHovered] = useState<string | null>(null);
    const icon = <Mail size={24} color="red" />;

    const [formdata, setformdata] = useState({ name: "", email: "", message: ""});
    const [status, setstatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e: FromEvent) {
        e.preventDefault();
        setstatus("sending");

        try {

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(formdata),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.detail || "Failed to send");
            };

            setstatus("sent");
            setformdata({ name: "", email: "", message: "" });
        } catch (err) {
            setstatus("error");
        }
    }


    return <section className="min-h-screen px-6 py-20 font-bold">
        <div className="w-full max-w-7xl mx-auto">
            <p className="text-sm tracking-wider font-bold text-[#2929a2] mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">CONTACT</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col  mx-1 md:mx-10 items-stretch justify-between">
                    <div onMouseEnter={() => setIsHovered("Milan")} onMouseLeave={() => setIsHovered(null)} className="flex items-center gap-4 rounded-lg p-6  btn-hover bg-accent/7">
                        <div>
                            <p className="p-2 bg-accent/10 rounded-lg">{icon}</p>
                        </div>
                        <div>

                            <p className="font-bold text-gray-500 text-sm ">E-mail</p>
                            <p className="font-bold text-white text-sm">{IsHovered === "Milan" ? "milanmodak2005@gmail.com" : "Milan"}</p>
                        </div>
                    </div>
                    {socialLinks.map((link) => (
                        <a onMouseEnter={() => setIsHovered(link.label)} onMouseLeave={() => setIsHovered(null)} href={link.url} key={link.label} target="_blank" className="flex items-center gap-4  rounded-lg p-6 btn-hover bg-accent/7">
                            <div className="bg-accent/10 text-accent rounded-lg p-2">
                                {link.icon}
                            </div>
                            <div className="min-w-0">
                                <p className="font-bold text-gray-500 text-xs">{link.label.toUpperCase()}</p>
                                <p className="font-bold text-white truncate text-sm">
                                    
                                    
                                    {link.label===IsHovered?link.url:link.displayText}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Form for sending message */}
                <form onSubmit={handleSubmit} action="" className="flex flex-col gap-6 px-10 text-white bg-accent/6 p-6 rounded-xl btn-hover">
                    <p className="px-2">Send a Message</p>
                    <div>

                        <input type="text" className="bg-accent/6 w-full p-4 rounded-xl" name="name" value={formdata.name} onChange={handleChange} placeholder="name...." />
                    </div>

                    <div>

                        <input type="text" className="bg-accent/6 w-full p-4 rounded-xl" name="email" value={formdata.email} onChange={handleChange} placeholder="email..." />
                    </div>

                    <div>
                        <textarea className="bg-accent/6 w-full p-4 rounded-xl min-h-[120px]" value={formdata.message} onChange={handleChange} required rows={5} name="message" id="message" placeholder="Message..."></textarea>
                    </div>

                    <button type="submit" disabled={status === "sending"} className="flex justify-center items-center gap-4 bg-accent/14 p-3 rounded-full" >
                        <Send size={15} />
                        {status === "sending" ? "Sending..." : "Send Message"}</button>

                    {status === "sent" && (
                        <p className="text-green-400 text-sm text-center">Message sent successfully!!</p>
                    )}
                    {status === "error" && (
                        <p className="text-green-400 text-sm text-center">Message not sent! Something went wrong.</p>
                    )}
                </form>
            </div>
        </div>
    </section>
}

export default Contact;