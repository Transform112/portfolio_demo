import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
  id: number;
  type: 'work' | 'education';
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const timeline: TimelineItem[] = [
    {
      id: 1,
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading development of cloud-based enterprise solutions',
      achievements: [
        'Architected and deployed microservices handling 1M+ daily requests',
        'Reduced deployment time by 60% through CI/CD optimization',
        'Mentored team of 5 junior developers',
      ],
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      period: '2020 - 2022',
      description: 'Developed responsive web applications for diverse clients',
      achievements: [
        'Built 15+ production-ready web applications',
        'Improved application performance by 40% through optimization',
        'Implemented automated testing reducing bugs by 50%',
      ],
    },
    {
      id: 3,
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'Tech University',
      period: '2016 - 2020',
      description: 'Specialized in Software Engineering and AI',
      achievements: [
        'Graduated with Honors (GPA: 3.8/4.0)',
        'Led university tech club with 100+ members',
        'Published research paper on machine learning applications',
      ],
    },
    {
      id: 4,
      type: 'work',
      title: 'Junior Developer',
      company: 'StartUp Labs',
      period: '2019 - 2020',
      description: 'Part-time role focusing on frontend development',
      achievements: [
        'Redesigned company website increasing traffic by 35%',
        'Developed internal tools improving team productivity',
        'Collaborated with designers to implement pixel-perfect UIs',
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          timeline.forEach((item, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, item.id]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.1 }
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

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#3664F4] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#3664F4]">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-[#3664F4] mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional experience and educational background
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#3664F4] via-gray-700 to-transparent hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isItemVisible = visibleItems.includes(item.id);

              return (
                <div
                  key={item.id}
                  className={`relative transition-all duration-1000 ${
                    isItemVisible
                      ? 'opacity-100 translate-x-0'
                      : `opacity-0 ${isLeft ? '-translate-x-10' : 'translate-x-10'}`
                  }`}
                >
                  <div
                    className={`flex flex-col md:flex-row gap-8 items-center ${
                      isLeft ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="md:w-1/2" />

                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                      <div className="w-12 h-12 bg-gray-900 rounded-full border-4 border-[#3664F4] flex items-center justify-center shadow-lg shadow-[#3664F4]/50">
                        {item.type === 'work' ? (
                          <Briefcase className="w-5 h-5 text-[#3664F4]" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-[#3664F4]" />
                        )}
                      </div>
                    </div>

                    <div className="md:w-1/2 w-full">
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 hover:border-[#3664F4] transition-all duration-500 hover:shadow-xl hover:shadow-[#3664F4]/20 group">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="md:hidden w-12 h-12 bg-gray-900 rounded-full border-4 border-[#3664F4] flex items-center justify-center flex-shrink-0">
                            {item.type === 'work' ? (
                              <Briefcase className="w-5 h-5 text-[#3664F4]" />
                            ) : (
                              <GraduationCap className="w-5 h-5 text-[#3664F4]" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-white group-hover:text-[#3664F4] transition-colors">
                                {item.title}
                              </h3>
                              <span className="px-3 py-1 bg-[#3664F4]/20 text-[#3664F4] rounded-full text-sm font-medium">
                                {item.period}
                              </span>
                            </div>
                            <p className="text-gray-400 font-medium mb-3">{item.company}</p>
                            <p className="text-gray-300 mb-4">{item.description}</p>
                            <ul className="space-y-2">
                              {item.achievements.map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-gray-400 text-sm"
                                >
                                  <span className="w-1.5 h-1.5 bg-[#3664F4] rounded-full mt-2 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
