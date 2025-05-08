import React from 'react';
import { Target, Heart, Users } from 'lucide-react';
import Section from '../ui/Section';

const Mission = () => {
  return (
    <Section id="mission" bgColor="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary-600 mb-4">Commitment and Service</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're committed to making a real difference through meaningful action and dedicated service to our communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100 hover:border-primary-300 transition-colors duration-300">
          <div className="text-primary-500 mb-6">
            <Target size={48} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-primary-900">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To empower individuals and communities through decisive action, fostering positive change where it's needed most.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-red/20 hover:border-brand-red/40 transition-colors duration-300">
          <div className="text-brand-red mb-6">
            <Heart size={48} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-primary-900">Our Values</h3>
          <p className="text-gray-600 leading-relaxed">
            Commitment to service, integrity in action, and dedication to creating lasting positive impact in our communities.
          </p>
        </div>

        {/* Community */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100 hover:border-primary-300 transition-colors duration-300">
          <div className="text-primary-500 mb-6">
            <Users size={48} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-primary-900">Our Community</h3>
          <p className="text-gray-600 leading-relaxed">
            A network of dedicated individuals working together to drive meaningful change and create a better future for all.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Mission;