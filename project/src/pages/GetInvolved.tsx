import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { UserPlus, Heart, HeartHandshake, Calendar, Users, Gift } from 'lucide-react';

const GetInvolved = () => {
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
            <h1 className="mb-6">Get Involved</h1>
            <p className="text-xl text-primary-100">
              Discover how you can join our community and help create positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <Section bgColor="bg-white">
        <h2 className="section-title">Ways to Make an Impact</h2>
        <p className="section-subtitle">
          There are many ways to support our mission. Find the one that works best for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Volunteer */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="h-2 bg-primary-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <UserPlus className="w-8 h-8 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold">Volunteer</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Contribute your time and skills to our programs and initiatives. Whether you can give a few hours or make a long-term commitment, your help makes a difference.
              </p>
              <Button variant="primary" to="#volunteer-section">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Donate */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="h-2 bg-accent-500"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-accent-500 mr-3" />
                <h3 className="text-2xl font-bold">Donate</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Support our work through financial contributions. Your donations fund programs that create real, tangible change in our communities.
              </p>
              <Button variant="accent" to="#donate-section">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Partner */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="h-2 bg-secondary-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <HeartHandshake className="w-8 h-8 text-secondary-600 mr-3" />
                <h3 className="text-2xl font-bold">Partner</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Join forces with ACTION NOW as a partner organization. Together, we can amplify our impact and make lasting change.
              </p>
              <Button variant="secondary" to="#partner-section">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Volunteer Section */}
      <Section id="volunteer-section" bgColor="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-4">
              <UserPlus className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold">Volunteer With Us</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Volunteers are the lifeblood of our organization. By sharing your time and talents, you help us expand our reach and deepen our impact.
            </p>
            <p className="text-gray-700 mb-6">
              We offer flexible volunteering opportunities to match your skills, interests, and availability. Whether you're interested in event support, administrative tasks, community outreach, or specialized professional services, we have a role for you.
            </p>
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold">Volunteer Opportunities:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Event Coordination and Support</li>
                <li>Community Outreach and Education</li>
                <li>Administrative and Office Support</li>
                <li>Communications and Social Media</li>
                <li>Research and Policy Analysis</li>
                <li>Professional Services (Legal, Design, IT)</li>
              </ul>
            </div>
            <Button variant="primary" to="/contact">
              Apply to Volunteer
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/empowering-community.jpg" 
              alt="Volunteers working together" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Donate Section */}
      <Section id="donate-section" bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/democracy-empowerment.jpg" 
              alt="Community project funded by donations" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-accent-500 mr-3" />
              <h2 className="text-3xl font-bold">Donate</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Your financial support enables us to implement programs, respond to emerging needs, and work toward lasting change. Every contribution, no matter the size, makes a difference.
            </p>
            <p className="text-gray-700 mb-6">
              We are committed to transparency and accountability in the use of donor funds. Your donations are used efficiently and effectively to advance our mission.
            </p>
            <div className="space-y-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Ways to Give:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <Gift className="w-5 h-5 text-accent-500 mt-1 mr-2" />
                    <div>
                      <p className="font-semibold">One-time Donation</p>
                      <p className="text-sm text-gray-600">Support our work with a single contribution.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-accent-500 mt-1 mr-2" />
                    <div>
                      <p className="font-semibold">Monthly Giving</p>
                      <p className="text-sm text-gray-600">Provide sustained support through regular donations.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Where Your Money Goes:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Programs & Services</span>
                    <span className="font-bold">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  
                  <div className="flex justify-between mb-2 mt-4">
                    <span>Administration</span>
                    <span className="font-bold">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  
                  <div className="flex justify-between mb-2 mt-4">
                    <span>Fundraising</span>
                    <span className="font-bold">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="accent" to="/contact">
              Donate Now
            </Button>
          </div>
        </div>
      </Section>

      {/* Partner Section */}
      <Section id="partner-section" bgColor="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-4">
              <HeartHandshake className="w-8 h-8 text-secondary-600 mr-3" />
              <h2 className="text-3xl font-bold">Partner With Us</h2>
            </div>
            <p className="text-gray-700 mb-6">
              We believe in the power of collaboration. By partnering with other organizations, businesses, and institutions, we can leverage our collective resources, expertise, and networks to create greater impact.
            </p>
            <p className="text-gray-700 mb-6">
              Our partnerships take many forms, from joint programming and resource sharing to sponsorships and collaborative advocacy. We work with partners across sectors, including nonprofits, businesses, government agencies, educational institutions, and community groups.
            </p>
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold">Partnership Opportunities:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Program Collaboration</li>
                <li>Corporate Social Responsibility Initiatives</li>
                <li>Event Sponsorship</li>
                <li>Resource Sharing</li>
                <li>Coalition Building</li>
                <li>Cross-Promotion and Awareness Raising</li>
              </ul>
            </div>
            <Button variant="secondary" to="/contact">
              Explore Partnerships
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/community-meeting.jpg" 
              alt="Partnership meeting" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section bgColor="bg-primary-700">
        <h2 className="section-title text-white">Volunteer Testimonials</h2>
        <p className="section-subtitle text-primary-100">
          Hear from the amazing individuals who have joined our community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.pexels.com/photos/3759079/pexels-photo-3759079.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="Volunteer" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h4 className="font-bold">James Wilson</h4>
                <p className="text-sm text-gray-600">Volunteer since 2020</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Volunteering with ACTION NOW has been an incredibly rewarding experience. I've developed new skills, met amazing people, and know that my time is making a real difference in my community."
            </p>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.pexels.com/photos/3861439/pexels-photo-3861439.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="Volunteer" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h4 className="font-bold">Maria Chen</h4>
                <p className="text-sm text-gray-600">Monthly Donor</p>
              </div>
            </div>
            <p className="text-gray-700">
              "I'm proud to support ACTION NOW as a monthly donor. The transparency about how funds are used and the regular updates about impact make me confident that my contributions are making a difference."
            </p>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="Partner Organization" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h4 className="font-bold">Green Future Collective</h4>
                <p className="text-sm text-gray-600">Partner Organization</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Our partnership with ACTION NOW has amplified our impact and allowed us to reach new audiences. Their collaborative approach and commitment to shared goals make them an ideal partner."
            </p>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default GetInvolved;