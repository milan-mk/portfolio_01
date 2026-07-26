interface DetailsAboutMe {
    label: string;
    value: string;
}

const Details: DetailsAboutMe[] = [
    { label: "LOCATION", value: "Raigarh, Chhattisgarh" },
    { label: "DEGREE", value: "B.Tech" },
    { label: "CGPA", value: "8.4" },
    { label: "FOCUS", value: "AI/ML" },
];

function About() {
    return (
        <section id="about" className="min-h-screen flex justify-center  py-14 ">
            <div className="text-white max-w-7xl w-full p-6">
                <p className="text-sm my-3 tracking-wider text-[#9797fc]">ABOUT ME</p>
                <h2 className="text-5xl my-4 font-sans font-bold text-[#6366f1]">Who I Am</h2>

                <div className="text-md text-gray-400">
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                        I am a passionate and dedicated web developer with a strong foundation in front-end and back-end technologies. I have a keen eye for detail and a commitment to delivering high-quality, user-friendly web applications. My goal is to create seamless digital experiences that leave a lasting impact on users.
                    </p>
                </div>

                <button className="flex items-center gap-2 mt-8 border border-accent/40 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/5  btn-hover">
                    Request Resume
                </button>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                    {Details.map((item) => (
                        <div
                            key={item.label}
                            className="card rounded-xl p-5 flex items-center gap-4 min-w-0 btn-hover1"
                        >
                            <div className="min-w-0">
                                <p className="text-xs text-gray-500 tracking-widest mb-1">{item.label}</p>
                                <p className="text-white font-semibold break-words">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;