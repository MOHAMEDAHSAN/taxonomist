import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { ArrowRight, Brain, ChartBarIcon, Shield, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Index = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      // @ts-ignore
      vantaEffect.current = window.VANTA.TOPOLOGY({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x89964e,
        backgroundColor: 0x222222
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#222222] font-['Poppins']">
      <Navbar />
      
      {/* Hero Section */}
      <div ref={vantaRef} className="relative min-h-screen">
        <section className="pt-32 pb-20 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="container mx-auto text-center"
          >
            <div className="inline-block mb-4 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-wider">
                Taxonomist
              </span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight font-['Poppins']">
              Predict Tax Policy Success with Machine Learning
            </h1>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto font-light">
              Make informed decisions about tax policies using our advanced ML model. Get instant predictions and comprehensive analysis.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-[#89964e] hover:bg-[#89964e]/90 text-white border-0">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12 text-[#89964e] mb-4" />,
                title: "ML-Powered Analysis",
                description: "Advanced machine learning algorithms analyze tax policy effectiveness."
              },
              {
                icon: <ChartBarIcon className="w-12 h-12 text-[#89964e] mb-4" />,
                title: "Accurate Predictions",
                description: "Get detailed predictions based on historical data and economic indicators."
              },
              {
                icon: <Shield className="w-12 h-12 text-[#89964e] mb-4" />,
                title: "Reliable Results",
                description: "Trust in our validated model with proven accuracy rates."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Abishai KC",
                role: "ML Engineer",
                image: "https://api.dicebear.com/7.x/initials/svg?seed=AK&backgroundColor=2D3648&textColor=ffffff",
                linkedin: "https://www.linkedin.com/in/abishai-k-c-6a5288271/"
              },
              {
                name: "Mohamed Ahsan",
                role: "Data Scientist",
                image: "https://api.dicebear.com/7.x/initials/svg?seed=MA&backgroundColor=2D3648&textColor=ffffff",
                linkedin: "https://www.linkedin.com/in/mohamedahsan037/"
              },
              {
                name: "Jai Surya",
                role: "UX/UI Designer",
                image: "https://api.dicebear.com/7.x/initials/svg?seed=JS&backgroundColor=2D3648&textColor=ffffff",
                linkedin: "https://www.linkedin.com/in/jai-surya-1801abc/"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-6 filter grayscale hover:grayscale-0 transition-all duration-300" 
                />
                <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                <p className="text-gray-400 mb-6">{member.role}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-white/10 hover:bg-white/10 text-white transition-colors"
                  onClick={() => window.open(member.linkedin, '_blank')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
