import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { BookOpen, FileText, Video, Download, BookIcon, Link as LinkIcon, Users, Heart, Globe } from 'lucide-react';

const Resources = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/african-pattern.png')] opacity-10"></div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold">African Resources & Knowledge Hub</h1>
            <p className="text-xl text-primary-100">
              Access tools, guides, and information rooted in African wisdom and traditions to support community development and social change.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <Section bgColor="bg-white">
        <h2 className="section-title">Resource Library</h2>
        <p className="section-subtitle">
          Explore our collection of African-focused resources that blend traditional wisdom with modern approaches to create positive change.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Category 1 */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 bg-primary-600 text-white flex items-center">
              <BookOpen className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold">African Development Guides</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Access comprehensive guides that integrate traditional African knowledge with sustainable development practices.
              </p>
              <Button variant="outline" to="#educational-materials">
                View Resources
              </Button>
            </div>
          </div>
          
          {/* Category 2 */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 bg-secondary-600 text-white flex items-center">
              <FileText className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold">African Advocacy Tools</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Find culturally-relevant resources that honor African traditions while promoting community organizing and policy advocacy.
              </p>
              <Button variant="outline" to="#advocacy-toolkits">
                View Resources
              </Button>
            </div>
          </div>
          
          {/* Category 3 */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 bg-accent-500 text-white flex items-center">
              <Video className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold">African Success Stories</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Watch inspiring stories of how communities are combining traditional wisdom with modern approaches to create change.
              </p>
              <Button variant="outline" to="#multimedia-resources">
                View Resources
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Educational Materials */}
      <Section id="educational-materials" bgColor="bg-gray-50">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <BookOpen className="w-8 h-8 text-primary-600 mr-3" />
            African Development Guides
          </h2>
          <p className="text-gray-700 mb-8">
            These resources provide insights and practical guidance that honor African traditions while addressing modern challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Resource 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start">
              <div className="p-2 bg-primary-50 rounded-lg mr-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ubuntu Leadership in Africa</h3>
                <p className="text-gray-700 mb-4">
                  A comprehensive guide to traditional African leadership principles and their application in modern community development.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookIcon className="w-4 h-4 mr-1" />
                  <span>25 pages</span>
                  <span className="mx-2">•</span>
                  <Download className="w-4 h-4 mr-1" />
                  <span>PDF</span>
                </div>
                <Button variant="outline" className="text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resource
                </Button>
              </div>
            </div>
          </div>
          
          {/* Resource 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start">
              <div className="p-2 bg-primary-50 rounded-lg mr-4">
                <Heart className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Youth Empowerment in Liberia</h3>
                <p className="text-gray-700 mb-4">
                  Strategies that combine traditional mentorship with modern approaches to engage and empower young people.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookIcon className="w-4 h-4 mr-1" />
                  <span>20 pages</span>
                  <span className="mx-2">•</span>
                  <Download className="w-4 h-4 mr-1" />
                  <span>PDF</span>
                </div>
                <Button variant="outline" className="text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resource
                </Button>
              </div>
            </div>
          </div>
          
          {/* Resource 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start">
              <div className="p-2 bg-primary-50 rounded-lg mr-4">
                <Globe className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sustainable Development in West Africa</h3>
                <p className="text-gray-700 mb-4">
                  Case studies of communities integrating traditional ecological knowledge with modern sustainability practices.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookIcon className="w-4 h-4 mr-1" />
                  <span>30 pages</span>
                  <span className="mx-2">•</span>
                  <Download className="w-4 h-4 mr-1" />
                  <span>PDF</span>
                </div>
                <Button variant="outline" className="text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resource
                </Button>
              </div>
            </div>
          </div>
          
          {/* Resource 4 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start">
              <div className="p-2 bg-primary-50 rounded-lg mr-4">
                <BookOpen className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Traditional Knowledge Systems</h3>
                <p className="text-gray-700 mb-4">
                  Exploring and preserving traditional African knowledge systems for modern community development.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookIcon className="w-4 h-4 mr-1" />
                  <span>22 pages</span>
                  <span className="mx-2">•</span>
                  <Download className="w-4 h-4 mr-1" />
                  <span>PDF</span>
                </div>
                <Button variant="outline" className="text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resource
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Advocacy Toolkits */}
      <Section id="advocacy-toolkits" bgColor="bg-white">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <FileText className="w-8 h-8 text-secondary-600 mr-3" />
            African Advocacy Toolkits
          </h2>
          <p className="text-gray-700 mb-8">
            Practical tools and guidance that respect African cultural contexts while promoting effective advocacy and community organizing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Toolkit 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start">
              <div className="p-2 bg-secondary-50 rounded-lg mr-4">
                <Users className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Community Mobilization in Liberia</h3>
                <p className="text-gray-700 mb-4">
                  A culturally-sensitive guide to organizing communities and creating grassroots movements for change in Liberia.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookIcon className="w-4 h-4 mr-1" />
                  <span>28 pages</span>
                  <span className="mx-2">•</span>
                  <Download className="w-4 h-4 mr-1" />
                  <span>PDF + Worksheets</span>
                </div>
                <Button variant="outline" className="text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Toolkit
                </Button>
              </div>
            </div>
          </div>
          
          {/* Toolkit 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start">
              <div className="p-2 bg-secondary-50 rounded-lg mr-4">
                <FileText className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Policy Advocacy in West Africa</h3>
                <p className="text-gray-700 mb-4">
                  Tools and strategies for engaging with policymakers while respecting traditional governance structures.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookIcon className="w-4 h-4 mr-1" />
                  <span>25 pages</span>
                  <span className="mx-2">•</span>
                  <Download className="w-4 h-4 mr-1" />
                  <span>PDF + Templates</span>
                </div>
                <Button variant="outline" className="text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Toolkit
                </Button>
              </div>
            </div>
          </div>
          
          {/* Toolkit 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start">
              <div className="p-2 bg-secondary-50 rounded-lg mr-4">
                <Globe className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Digital Advocacy in Africa</h3>
                <p className="text-gray-700 mb-4">
                  Strategies for effective online advocacy that bridge traditional communication methods with digital platforms.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookIcon className="w-4 h-4 mr-1" />
                  <span>20 pages</span>
                  <span className="mx-2">•</span>
                  <Download className="w-4 h-4 mr-1" />
                  <span>PDF + Social Media Templates</span>
                </div>
                <Button variant="outline" className="text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Toolkit
                </Button>
              </div>
            </div>
          </div>
          
          {/* Toolkit 4 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start">
              <div className="p-2 bg-secondary-50 rounded-lg mr-4">
                <Heart className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Youth Leadership Development</h3>
                <p className="text-gray-700 mb-4">
                  A comprehensive guide that combines traditional mentorship with modern leadership development approaches.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookIcon className="w-4 h-4 mr-1" />
                  <span>32 pages</span>
                  <span className="mx-2">•</span>
                  <Download className="w-4 h-4 mr-1" />
                  <span>PDF + Worksheets</span>
                </div>
                <Button variant="outline" className="text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Toolkit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Multimedia Resources */}
      <Section id="multimedia-resources" bgColor="bg-gray-50">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Video className="w-8 h-8 text-accent-500 mr-3" />
            African Success Stories
          </h2>
          <p className="text-gray-700 mb-8">
            Watch inspiring stories of how communities are combining traditional wisdom with modern approaches to create positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Multimedia 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="aspect-w-16 aspect-h-9 bg-gray-300">
              <img 
                src="/images/african-community.jpg" 
                alt="Community workshop in Liberia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Youth Empowerment in Monrovia</h3>
              <p className="text-gray-700 mb-4">
                Watch how young leaders in Monrovia are combining traditional wisdom with modern approaches to create positive change.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Video className="w-4 h-4 mr-1" />
                <span>45 minutes</span>
                <span className="mx-2">•</span>
                <LinkIcon className="w-4 h-4 mr-1" />
                <span>Video</span>
              </div>
              <Button variant="outline" className="text-sm">
                Watch Story
              </Button>
            </div>
          </div>
          
          {/* Multimedia 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="aspect-w-16 aspect-h-9 bg-gray-300">
              <img 
                src="/images/african-education.jpg" 
                alt="Education program in Liberia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Voices of Change: African Perspectives</h3>
              <p className="text-gray-700 mb-4">
                Listen to inspiring stories from community leaders and activists who are bridging traditional and modern approaches.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <BookIcon className="w-4 h-4 mr-1" />
                <span>8 episodes</span>
                <span className="mx-2">•</span>
                <LinkIcon className="w-4 h-4 mr-1" />
                <span>Audio</span>
              </div>
              <Button variant="outline" className="text-sm">
                Listen to Stories
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Success Stories */}
      <Section bgColor="bg-white">
        <h2 className="section-title">African Success Stories</h2>
        <p className="section-subtitle">
          Read about how communities across Africa are combining traditional wisdom with modern approaches to create positive change.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Story 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <img 
              src="/images/liberia-community.jpg" 
              alt="Community project in Liberia" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Youth-Led Community Development</h3>
              <p className="text-gray-700 mb-4">
                How young leaders in Monrovia are combining traditional wisdom with modern approaches to transform their community.
              </p>
              <Button variant="outline" className="text-sm">
                Read Story
              </Button>
            </div>
          </div>
          
          {/* Story 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <img 
              src="/images/african-education.jpg" 
              alt="Education initiative" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Education for All in Liberia</h3>
              <p className="text-gray-700 mb-4">
                A community's journey to integrate traditional learning methods with modern education approaches.
              </p>
              <Button variant="outline" className="text-sm">
                Read Story
              </Button>
            </div>
          </div>
          
          {/* Story 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <img 
              src="/images/african-women.jpg" 
              alt="Women's empowerment" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Women's Leadership Initiative</h3>
              <p className="text-gray-700 mb-4">
                How women leaders are combining traditional wisdom with modern approaches to drive social change.
              </p>
              <Button variant="outline" className="text-sm">
                Read Story
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Resources;