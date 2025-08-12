import { Badge } from "./ui/badge";
import { Award } from 'lucide-react';

export default function AboutSection() {



  return (
    <section id="about" className="py-20 bg-white p-[0px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">
            <Award size={16} className="mr-2" />
            Agentic AI Powered
          </Badge>
          <h2 className="text-4xl lg:text-5xl mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block">
              PieQ?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with industry expertise to deliver automation solutions that drive real business results.
          </p>
        </div>






      </div>
    </section>
  );
}