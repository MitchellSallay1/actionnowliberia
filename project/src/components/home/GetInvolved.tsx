import React from 'react';
import { UserPlus, HeartHandshake, Heart } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const GetInvolved = () => {
  return (
    <Section id="get-involved" bgColor="bg-primary-700">
      <div className="text-center mb-16">
        <h2 className="section-title text-white">Get Involved</h2>
        <p className="section-subtitle text-primary-100">
          There are many ways to support our mission and help create positive change.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Volunteer */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-primary-50 rounded-full mb-4 text-primary-600">
              <UserPlus size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Volunteer With Us</h3>
            <p className="text-gray-600 mb-6">
              Looking to make a difference? We offer various volunteering opportunities that allow you to lend your time and skills to our causes.
            </p>
            <Button variant="outline" to="/get-involved">
              Learn More
            </Button>
          </div>
        </div>

        {/* Donate */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-primary-50 rounded-full mb-4 text-primary-600">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Donate</h3>
            <p className="text-gray-600 mb-6">
              Your contributions fund programs that create real, tangible change. Consider a one-time donation or become a recurring supporter.
            </p>
            <Button variant="accent" to="/get-involved">
              Donate Now
            </Button>
          </div>
        </div>

        {/* Partner */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-primary-50 rounded-full mb-4 text-primary-600">
              <HeartHandshake size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Partner With Us</h3>
            <p className="text-gray-600 mb-6">
              Join forces with ACTION NOW as a partner organization. Together, we can amplify our impact and make lasting change.
            </p>
            <Button variant="outline" to="/get-involved">
              Become a Partner
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default GetInvolved;