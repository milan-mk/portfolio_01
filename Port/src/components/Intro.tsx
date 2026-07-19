function Intro() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black/80"
    >
      {/* Image blended into background on the left */}
      <div className="absolute left-0 top-0 h-full w-[55%]">
        <img
          src="/profile.jpg"
          alt="Milan Kumar"
          className="w-full h-full object-cover"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 90% at 40% 50%, black 40%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 90% at 40% 50%, black 40%, transparent 75%)",
          }}
        />
      </div>

      {/* Text content, positioned right of center */}
      <div className="relative z-10 ml-[42%] max-w-2xl pr-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-none tracking-tight">
          MILAN KUMAR MODAK
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mt-6 tracking-widest">
          FULL-STACK DEVELOPER
        </h2>

        <p className="text-sm md:text-base text-gray-500 mt-3 tracking-widest">
          AI • MACHINE LEARNING • TYPESCRIPT • FASTAPI
        </p>
        <p className="text-sm md:text-base text-gray-500 mt-3 tracking-widest">
          B.TECH IN COMPUTER SCIENCE & ENGINEERING - OP JINDAL UNIVERSITY
        </p>

        <div className="flex gap-4 mt-10">
          
          <a  href="#projects"
            className="bg-white/5 border border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            View Projects
          </a>
          
          <a  href="#contact"
            className="bg-white/5 border border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Get In Touch →
          </a>
        </div>
      </div>

      {/* Bottom hint text */}
      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 tracking-widest">
        ↑ MOVE CURSOR TO EXPLORE ↑
      </p>
    </section>
  );
}

export default Intro;