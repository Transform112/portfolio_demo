import { useEffect, useRef, useState } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code is my priority',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Bringing beautiful designs to life with attention to detail',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized solutions that deliver exceptional user experiences',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] bg-repeat" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#3664F4]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#3664F4] mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div
            className={`lg:w-1/2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3664F4] to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About me"
                className="relative rounded-2xl w-full object-cover shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          <div
            className={`lg:w-1/2 space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-3xl font-semibold text-white">
              Crafting Digital Experiences
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              With over 5 years of experience in web development, I specialize in building modern,
              responsive applications that combine beautiful design with powerful functionality. My
              journey in tech started with a curiosity about how things work, and evolved into a
              passion for creating solutions that impact people's lives.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. My
              approach combines technical expertise with creative problem-solving, ensuring every
              project I work on exceeds expectations.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-[#3664F4] hover:text-white transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-[#3664F4] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#3664F4]/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="w-14 h-14 bg-[#3664F4]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3664F4] transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-[#3664F4]" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
