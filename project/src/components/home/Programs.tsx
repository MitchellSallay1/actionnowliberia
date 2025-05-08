import React from 'react';
import { ScaleIcon, BookOpen, Users } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Programs = () => {
  const programs = [
    {
      title: 'Advocacy Campaigns',
      description: 'Drive meaningful change through our advocacy initiatives. We focus on policy reform, social justice, and environmental action, working together to create lasting impact in our communities.',
      icon: <ScaleIcon size={32} />
    },
    {
      title: 'Education & Training',
      description: 'Expand your knowledge and skills through our comprehensive workshops and training programs. Learn practical strategies for community organizing, leadership, and effective advocacy.',
      icon: <BookOpen size={32} />
    },
    {
      title: 'Community Programs',
      description: 'Join our community-driven initiatives that bring people together for positive change. From local projects to regional campaigns, we\'re building stronger communities through collaboration.',
      icon: <Users size={32} />
    }
  ];

  return (
    <Section id="programs" bgColor="bg-white">
      <div className="text-center mb-16">
        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2 block">What We Do</span>
        <h2 className="section-title">Our Programs & Initiatives</h2>
        <p className="section-subtitle">
          Discover how our programs create lasting impact through education, advocacy, and community engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {programs.map((program, index) => (
          <Card
            key={index}
            title={program.title}
            description={program.description}
            icon={program.icon}
          />
        ))}
      </div>

      <div className="text-center">
        <Button 
          variant="primary" 
          to="/programs"
          className="inline-flex items-center px-8 py-3 text-lg"
        >
          Explore Our Programs
        </Button>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
          <div className="text-gray-600">Active Campaigns</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-primary-600 mb-2">10k+</div>
          <div className="text-gray-600">Program Participants</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
          <div className="text-gray-600">Community Partners</div>
        </div>
      </div>
    </Section>
  );
};

export default Programs;