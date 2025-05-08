import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { BookOpen, FileText, Video, Download, BookIcon, Link as LinkIcon } from 'lucide-react';

const Resources = () => {
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
            <h1 className="mb-6">Resources</h1>
            <p className="text-xl text-primary-100">
              Access tools, guides, and information to support your advocacy and community work.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <Section bgColor="bg-white">
        <h2 className="section-title">Resource Library</h2>
        <p className="section-subtitle">
          Browse our collection of resources to help you learn, advocate, and take action.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Category 1 */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 bg-primary-600 text-white flex items-center">
              <BookOpen className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold">Educational Materials</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Access fact sheets, guides, and research reports on key issues related to our mission and programs.
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
              <h3 className="text-xl font-bold">Advocacy Toolkits</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Find resources to help you advocate for change, from communication templates to strategy guides.
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
              <h3 className="text-xl font-bold">Multimedia Resources</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Watch videos, listen to podcasts, and view presentations related to our work and mission.
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
            Educational Materials
          </h2>
          <p className="text-gray-700 mb-8">
            These resources provide information and insight on key issues related to our mission. Use them to deepen your understanding and share knowledge with others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Resource 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start">
              <div className="p-2 bg-primary-50 rounded-lg mr-4">
                <FileText className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Climate Action Guide</h3>
                <p className="text-gray-700 mb-4">
                  A comprehensive guide to understanding climate change and taking effective action at individual and community levels.
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
          
          {/* Resource 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start">
              <div className="p-2 bg-primary-50 rounded-lg mr-4">
                <FileText className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Social Justice Primer</h3>
                <p className="text-gray-700 mb-4">
                  An introduction to key concepts and issues in social justice, with a focus on equity, inclusion, and systemic change.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookIcon className="w-4 h-4 mr-1" />
                  <span>15 pages</span>
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
                <FileText className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Community Resilience Handbook</h3>
                <p className="text-gray-700 mb-4">
                  Strategies and case studies on building strong, resilient communities that can adapt to challenges and support all members.
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
          
          {/* Resource 4 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start">
              <div className="p-2 bg-primary-50 rounded-lg mr-4">
                <FileText className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sustainable Living Guide</h3>
                <p className="text-gray-700 mb-4">
                  Practical tips and resources for reducing your environmental footprint and living more sustainably.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookIcon className="w-4 h-4 mr-1" />
                  <span>18 pages</span>
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
            Advocacy Toolkits
          </h2>
          <p className="text-gray-700 mb-8">
            These resources provide practical tools and guidance for effective advocacy. Use them to plan campaigns, communicate your message, and create change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Toolkit 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start">
              <div className="p-2 bg-secondary-50 rounded-lg mr-4">
                <FileText className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Community Organizing Toolkit</h3>
                <p className="text-gray-700 mb-4">
                  A step-by-step guide to organizing your community around shared goals and creating grassroots movements for change.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookIcon className="w-4 h-4 mr-1" />
                  <span>30 pages</span>
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
                <h3 className="text-xl font-bold mb-2">Policy Engagement Guide</h3>
                <p className="text-gray-700 mb-4">
                  Tools and strategies for engaging with policymakers and advocating for policy change at local, state, and national levels.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookIcon className="w-4 h-4 mr-1" />
                  <span>22 pages</span>
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
                <FileText className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Digital Advocacy Toolkit</h3>
                <p className="text-gray-700 mb-4">
                  Strategies and tools for effective online advocacy, including social media campaigns, digital storytelling, and online organizing.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookIcon className="w-4 h-4 mr-1" />
                  <span>28 pages</span>
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
                <FileText className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Campaign Planning Workbook</h3>
                <p className="text-gray-700 mb-4">
                  A comprehensive workbook for planning and executing effective advocacy campaigns, from setting goals to measuring impact.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <BookIcon className="w-4 h-4 mr-1" />
                  <span>35 pages</span>
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
            Multimedia Resources
          </h2>
          <p className="text-gray-700 mb-8">
            These resources provide information and inspiration in video, audio, and visual formats. Use them for learning, sharing, and inspiring others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Multimedia 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="aspect-w-16 aspect-h-9 bg-gray-300">
              <img 
                src="https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Webinar preview" 
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
              <h3 className="text-xl font-bold mb-2">Webinar: Effective Community Organizing</h3>
              <p className="text-gray-700 mb-4">
                Learn strategies and best practices for organizing your community around shared goals and creating collective impact.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Video className="w-4 h-4 mr-1" />
                <span>60 minutes</span>
                <span className="mx-2">•</span>
                <LinkIcon className="w-4 h-4 mr-1" />
                <span>Video</span>
              </div>
              <Button variant="outline" className="text-sm">
                Watch Webinar
              </Button>
            </div>
          </div>
          
          {/* Multimedia 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="aspect-w-16 aspect-h-9 bg-gray-300">
              <img 
                src="https://images.pexels.com/photos/6953871/pexels-photo-6953871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Podcast preview" 
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
              <h3 className="text-xl font-bold mb-2">Podcast: Voices of Change</h3>
              <p className="text-gray-700 mb-4">
                A monthly podcast featuring interviews with changemakers and discussions about key social and environmental issues.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <BookIcon className="w-4 h-4 mr-1" />
                <span>12 episodes</span>
                <span className="mx-2">•</span>
                <LinkIcon className="w-4 h-4 mr-1" />
                <span>Audio</span>
              </div>
              <Button variant="outline" className="text-sm">
                Listen to Podcast
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Success Stories */}
      <Section bgColor="bg-white">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-subtitle">
          Read about how individuals and communities have used our resources to create change.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Story 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <img 
              src="https://images.pexels.com/photos/3823542/pexels-photo-3823542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Community garden project" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">From Vacant Lot to Community Garden</h3>
              <p className="text-gray-700 mb-4">
                How residents in Springfield used our Community Organizing Toolkit to transform an abandoned space into a thriving garden.
              </p>
              <Button variant="outline" className="text-sm">
                Read Story
              </Button>
            </div>
          </div>
          
          {/* Story 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <img 
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Community meeting" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Youth-Led Climate Action</h3>
              <p className="text-gray-700 mb-4">
                How high school students used our Climate Action Guide to advocate for renewable energy in their school district.
              </p>
              <Button variant="outline" className="text-sm">
                Read Story
              </Button>
            </div>
          </div>
          
          {/* Story 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <img 
              src="https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="City hall" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Policy Change for Affordable Housing</h3>
              <p className="text-gray-700 mb-4">
                How advocates used our Policy Engagement Guide to successfully campaign for affordable housing legislation.
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