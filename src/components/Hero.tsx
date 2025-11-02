import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, #3664F4 0%, transparent 50%)`,
        }}
      />

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20 animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: Math.random() * 3 + 2 + 's',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-[30%] space-y-6 animate-fadeIn">
            <p className="text-gray-400 text-lg font-light tracking-wide">Hello,</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight animate-slideUp">
              I'm <span className="text-[#3664F4]">Alex Morgan</span>
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-300 font-light animate-slideUp animation-delay-200">
              Full Stack Developer
            </p>
            <div className="flex gap-4 animate-slideUp animation-delay-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#3664F4] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#3664F4]/50"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#3664F4] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#3664F4]/50"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:alex@example.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#3664F4] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#3664F4]/50"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div className="lg:w-[70%] flex flex-col sm:flex-row items-center gap-8">
            <div className="sm:w-[50%] animate-fadeIn animation-delay-300">
              <div
                className="relative group"
                style={{
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                <div className="absolute inset-0 bg-[#3664F4] rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Profile"
                  className="relative rounded-2xl w-full object-cover aspect-[3/4] shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="sm:w-[50%] space-y-4 animate-fadeIn animation-delay-600">
              <h3 className="text-2xl font-semibold text-white">About Me</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate developer who loves creating elegant solutions to complex problems.
                With expertise in modern web technologies, I build scalable applications that make a
                difference.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>
              <button className="px-6 py-3 bg-[#3664F4] text-white rounded-lg hover:shadow-lg hover:shadow-[#3664F4]/50 transition-all duration-300 hover:scale-105">
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;
