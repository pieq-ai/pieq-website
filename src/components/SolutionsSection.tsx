import { motion } from 'framer-motion';
import { Shield, Hotel, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

// Hospitality Assets from user snippet
import ratioAnalysisImg from '../assets/9a04cfad2abd8f6bf66b472c361042ec7403f18b.png';
import plAnalysisImg from '../assets/8151acb666ed6fa3349666a73ffff9a0976b9ee2.png';

// Insurance Assets - Using confirmed dashboard IDs from LaptopCarousel
import agentChatImg from '../assets/1b14404a46a61dcf8448ff60458f26202823f8c2.png';
import performanceImg from '../assets/03f96de82b2dcb0e29a988ebe890ff1444a73938.png';
import salesLeaderImg from '../assets/079bbee345ad0b81589ec054760733fd82b8393e.png';

const solutions = [
  {
    id: 'hospitality',
    title: 'Hospitality Bookkeeper',
    subtitle: 'AI-ORCHESTRATED FINANCIAL OPERATIONS FOR HOSPITALITY',
    description: 'An AI-powered financial operations solution purpose-built for restaurants and hospitality groups. Powered by FLOW, it orchesrates bookkeeping, reconciliation, and reporting across locations-turning daily financial activity into real-time operational insight',
    icon: Hotel,
    images: [
      ratioAnalysisImg,
      plAnalysisImg,
      'https://images.unsplash.com/photo-1753955900083-b62ee8d97805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYm9va2tlZXBpbmclMjBmaW5hbmNlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2ODU0MDIzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      'Automated Reconciliation',
      'Financial Reporting',
      'Tax Preparation Support',
      'Hospitality Context',
      'POS & Vendor Integrations',
      'Multi-Location/Multi Client Management'
    ]
  },
  {
    id: 'insurance',
    title: 'Insurance Architect',
    subtitle: 'AI-ORCHESTRATED INSURANCE OPERATIONS',
    description: 'AI workflow orchestration platform for insurance agencies and MGAs, powered by FLOW, it coordinates commission reconciliation, payouts, policy workflows, and agent experiences-executing insurance operations with speed and precision.',
    icon: Shield,
    images: [
      agentChatImg,
      performanceImg,
      salesLeaderImg,
      'https://images.unsplash.com/photo-1721593979313-8661afd501c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3Njg1MzQxODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      'Commission Reconciliation',
      'Automated Payout Management',
      'Policy workflow management',
      'Agent experience',
      'Agent self service portal',
      'Agentic AI dashboard',
      '',
    ]
  }
];

export default function SolutionsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
    fade: true,
  };

  return (
    <section id="solutions" className="py-32 bg-white relative z-10">
      <style>{`
        .custom-dots {
          position: absolute;
          bottom: 24px;
          display: block;
          width: 100%;
          padding: 0;
          margin: 0;
          list-style: none;
          text-align: center;
          z-index: 10;
        }
        .custom-dots li {
          position: relative;
          display: inline-block;
          width: 20px;
          height: 2px;
          margin: 0 4px;
          padding: 0;
          cursor: pointer;
        }
        .custom-dots li button {
          font-size: 0;
          line-height: 0;
          display: block;
          width: 20px;
          height: 2px;
          cursor: pointer;
          color: transparent;
          border: 0;
          outline: none;
          background: #000;
          opacity: 0.1;
          transition: all 0.3s ease;
        }
        .custom-dots li.slick-active button {
          opacity: 1;
          background: #A6823C;
          width: 30px;
        }
      `}</style>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#A6823C] font-black uppercase tracking-[0.4em] text-[10px] mb-6"
            >
              Vertical Specialization
            </motion.div>
            <h3 className="text-5xl md:text-7xl font-light text-zinc-950 leading-[1.1] tracking-tighter">
              Orchestrating <br />
              <span className="font-bold">Industry Slices.</span>
            </h3>
          </div>
          <p className="text-zinc-500 text-lg max-w-sm font-normal leading-relaxed">
            PieQ deploys <span className="text-black font-bold">FLOW</span>—the industry's first agentic AI core—to help leaders orchestrate complex business processes with precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <motion.div 
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative flex flex-col bg-zinc-50/50 border border-zinc-100 overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-black">
                {solution.images && (
                  <Slider {...settings} className="h-full">
                    {solution.images.map((img, i) => (
                      <div key={i} className="h-full relative outline-none overflow-hidden">
                        <ImageWithFallback 
                          src={img} 
                          alt={`${solution.title} - view ${i + 1}`}
                          className="object-cover w-full h-[350px] md:h-[450px] lg:h-[400px] transition-all duration-1000 grayscale group-hover:grayscale-0 brightness-90 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    ))}
                  </Slider>
                )}
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border border-zinc-100 flex items-center justify-center text-[#A6823C] shadow-sm">
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-zinc-900">{solution.title}</h4>
                    <p className="text-[#A6823C] text-xs font-bold uppercase tracking-widest">{solution.subtitle}</p>
                  </div>
                </div>

                <p className="text-zinc-600 leading-relaxed">
                  {solution.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {solution.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zinc-500">
                      <div className="w-1 h-1 bg-[#A6823C] rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 text-zinc-900 text-sm font-semibold uppercase tracking-widest hover:text-[#A6823C] transition-colors group/btn">
                  Explore {solution.title} Solution
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
