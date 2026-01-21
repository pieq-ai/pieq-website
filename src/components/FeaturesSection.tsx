import { motion } from 'framer-motion';
import { Zap, Share2, Layers, BellRing, Target, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'FLOW PREDICTIVE PRIORITIZATION',
    description: 'FLOW agents analyze workflow queues autonomously to rank tasks based on real-time business impact and urgency.',
  },
  {
    icon: MessageSquare,
    title: 'CONVERSATIONAL AI HUB',
    description: 'Natural language interface to interact with your processes, get insights, and trigger workflows through chat.',
  },
  {
    icon: BellRing,
    title: 'INTELLIGENT ALERTING',
    description: 'Powered by FLOW, move beyond noise with threshold-aware alerts that only notify stakeholders when intervention is required.',
  },
  {
    icon: Share2,
    title: 'FEDERATED LOGIC CORE',
    description: 'The FLOW engine enables decentralized orchestration, allowing departments to maintain sovereignty while syncing globally.',
  },
  {
    icon: Layers,
    title: 'COMPOSABILITY ARCHITECTURE',
    description: 'Build complex logic chains using FLOW’s modular, agent-first approach designed for enterprise agility.',
  },
  // {
  //   icon: Activity,
  //   title: 'PROPRIETARY OBSERVABILITY',
  //   description: 'Deep visibility into every decision path taken by the FLOW AI, ensuring full auditability and trust.',
  // },
  {
    icon: Zap,
    title: 'FLOW INTEGRATED BRIDGE',
    description: 'Connect to your existing ERP, CRM, and legacy systems through FLOW’s robust federated connectivity layer.',
  }
];

export default function FeaturesSection() {
  return (
    <section id="flow" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <div className="lg:w-1/2">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#A6823C]" />
              Proprietary AI Product
            </div> */}
            <h2 className="text-5xl md:text-7xl font-light text-zinc-950 mb-8 leading-[1.1]">
              <span className="font-bold">FLOW</span>.
              <div className="text-zinc-600 text-lg leading-relaxed max-w-xl"/>
              <span className="font-light text-[48px]">The Operating System for Intelligent Workflows</span>
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed max-w-xl">
              FLOW is PieQ's AI-native orchestration engine. It connects fragmented enterprise data, policies and workflows into a unified decision fabric-executing intelligent actions in real time across your business.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-[#A6823C] text-black">
                <div className="text-2xl font-bold mb-1">CROSS-DOMAIN INTELLIGENCE</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80"></div>
              </div>
              <div className="p-8 bg-black text-white">
                <div className="text-2xl font-bold mb-1">REAL TIME EXECUTION</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80"></div>
              </div>
            </div>
            <div className="p-8 border border-zinc-100">
              <p className="text-sm italic text-zinc-400 text-[16px]">"FLOW doesn't automate tasks - it orchestrates decisions."</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border border-zinc-50 hover:border-zinc-100 transition-all duration-300 group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-black text-white mb-8">
                <feature.icon className="w-5 h-5" />
              </div>
              <h4 className="text-[15px] font-bold text-black mb-4 tracking-tight uppercase">{feature.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed font-normal">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
