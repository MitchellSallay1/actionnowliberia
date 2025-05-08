import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { ScaleIcon, BookOpen, Users, Globe, Leaf, Heart } from 'lucide-react';

const Programs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Programs & Initiatives</h1>
            <p className="text-xl text-primary-100">
              Discover the various ways we're working to create positive change in our communities and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Advocacy Campaigns */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-4">
              <ScaleIcon className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold">Advocacy Campaigns</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Our advocacy campaigns aim to influence policies and promote justice at local, national, and international levels. From grassroots movements to global advocacy, we're creating waves for change.
            </p>
            <p className="text-gray-700 mb-6">
              We work on a range of issues, including climate action, social justice, economic equity, and democratic rights. Our campaigns combine research, public education, coalition building, and direct advocacy to achieve meaningful change.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Current Campaigns:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Clean Energy for All Initiative</li>
                <li>Affordable Housing Coalition</li>
                <li>Education Equity Project</li>
                <li>Criminal Justice Reform Campaign</li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/democracy-empowerment.jpg" 
              alt="Advocacy Campaign" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Education & Workshops */}
      <Section bgColor="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/community-meeting.jpg" 
              alt="Education Workshop" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold">Education & Workshops</h2>
            </div>
            <p className="text-gray-700 mb-6">
              We host workshops, webinars, and training sessions designed to inform, empower, and equip participants with the tools they need to make a difference in their communities.
            </p>
            <p className="text-gray-700 mb-6">
              Our educational programs cover a range of topics, from community organizing and advocacy skills to issue-specific knowledge on environmental sustainability, social justice, and civic engagement.
            </p>
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold">Workshop Series:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Community Organizing 101</li>
                <li>Digital Advocacy Toolkit</li>
                <li>Climate Justice Leadership Program</li>
                <li>Public Speaking for Change</li>
              </ul>
            </div>
            <Button variant="primary" to="/contact">
              Request a Workshop
            </Button>
          </div>
        </div>
      </Section>

      {/* Community Outreach */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold">Community Outreach</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Bringing people together is at the heart of what we do. Our community initiatives foster collaboration and collective action for a brighter future.
            </p>
            <p className="text-gray-700 mb-6">
              Through community events, volunteer opportunities, and neighborhood partnerships, we work to build stronger, more resilient communities where everyone has a voice and a role to play in creating positive change.
            </p>
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold">Outreach Programs:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Community Action Days</li>
                <li>Neighborhood Sustainability Projects</li>
                <li>Youth Leadership Development</li>
                <li>Inter-generational Mentoring</li>
              </ul>
            </div>
            <Button variant="primary" to="/get-involved">
              Join an Event
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/empowering-community.jpg" 
              alt="Community Outreach" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Featured Initiatives */}
      <Section bgColor="bg-primary-50">
        <h2 className="section-title">Featured Initiatives</h2>
        <p className="section-subtitle">
          Learn about some of our most impactful current projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Initiative 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 bg-primary-600 text-white flex items-center justify-center">
              <Globe className="w-8 h-8" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Global Climate Action Network</h3>
              <p className="text-gray-600 mb-4">
                A coalition of community groups working together on climate advocacy and sustainable community projects.
              </p>
              <Button variant="outline" to="/contact" className="w-full">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Initiative 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 bg-accent-500 text-white flex items-center justify-center">
              <Leaf className="w-8 h-8" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Urban Green Spaces Project</h3>
              <p className="text-gray-600 mb-4">
                Working to create and preserve green spaces in urban areas to improve community health and environmental sustainability.
              </p>
              <Button variant="outline" to="/contact" className="w-full">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Initiative 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 bg-secondary-600 text-white flex items-center justify-center">
              <Heart className="w-8 h-8" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Community Care Collective</h3>
              <p className="text-gray-600 mb-4">
                A mutual aid initiative providing support, resources, and care to vulnerable community members.
              </p>
              <Button variant="outline" to="/contact" className="w-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact Stories */}
      <Section bgColor="bg-white">
        <h2 className="section-title">Impact Stories</h2>
        <p className="section-subtitle">
          Read about the real-world impact of our programs and initiatives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Story 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
            <img 
              src="/images/action-now-liberia-sign.jpg" 
              alt="Featured Initiative" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Transforming Vacant Lots into Community Gardens</h3>
              <p className="text-gray-700 mb-4">
                Our Urban Green Spaces initiative helped transform 12 vacant lots into thriving community gardens across five neighborhoods, providing fresh produce and green space for over 1,000 residents.
              </p>
              <Button variant="outline" className="text-sm">
                Read Full Story
              </Button>
            </div>
          </div>
          
          {/* Story 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
            <img 
              src="/images/action-now-liberia-sign.jpg" 
              alt="Featured Initiative" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Youth-Led Climate Advocacy Success</h3>
              <p className="text-gray-700 mb-4">
                Participants from our Youth Leadership program successfully advocated for their city to adopt a climate action plan, demonstrating the power of young voices in policy change.
              </p>
              <Button variant="outline" className="text-sm">
                Read Full Story
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Programs;