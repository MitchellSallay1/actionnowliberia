import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import { Users, Award, Target } from 'lucide-react';

const About = () => {
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
            <h1 className="mb-6">About Us</h1>
            <p className="text-xl text-primary-100">
              Learn more about our mission, vision, and the team behind Action Now-Liberia.
            </p>
          </div>
        </div>
      </section>

      {/* Organizational Framework */}
      <Section bgColor="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Organizational Framework for Action Now-Liberia</h2>
          <h3 className="text-2xl font-bold mt-8 mb-2">Vision Statement</h3>
          <p className="text-gray-700 mb-6">
            A just, equitable, and empowered society where every citizen actively contributes to inclusive national development through civic participation, leadership, and social justice.
          </p>
          <h3 className="text-2xl font-bold mb-2">Mission Statement</h3>
          <p className="text-gray-700 mb-6">
            To inspire, empower, and mobilize communities—especially youth and marginalized groups—through advocacy, education, and capacity-building initiatives that foster civic responsibility, leadership, and inclusive governance.
          </p>
          <h3 className="text-2xl font-bold mb-2">Core Values</h3>
          <ol className="list-decimal pl-6 text-gray-700 mb-6">
            <li><b>Commitment</b> – Unwavering dedication to the mission and the people we serve.</li>
            <li><b>Service</b> – Prioritizing community needs through responsible action and volunteerism.</li>
            <li><b>Integrity</b> – Upholding transparency, honesty, and accountability in all endeavors.</li>
            <li><b>Equity</b> – Promoting fairness and inclusiveness in all programs and interventions.</li>
            <li><b>Empowerment</b> – Building individual and collective capacities to drive sustainable change.</li>
          </ol>
        </div>
      </Section>

      {/* Organizational Background and Rationale */}
      <Section bgColor="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">Organizational Background and Rationale</h3>
          <p className="text-gray-700 mb-6">
            Founded in 2017 by <b>Josiah F. Joekai, Jr.</b>, a renowned advocate for democratic governance and social justice, <b>Action Now-Liberia</b> was born out of the need to address Liberia's growing civic disengagement, youth marginalization, and leadership accountability gaps. Recognizing that sustainable national development requires active citizen participation and equitable access to opportunities, the organization aims to bridge these divides through targeted advocacy, inclusive education, and youth-centered leadership development.<br /><br />
            As Liberia rebuilds its democratic and social structures, <b>Action Now-Liberia</b> fills a critical gap by nurturing informed citizens, mentoring future leaders, and holding institutions accountable to the people they serve.
          </p>
        </div>
      </Section>

      {/* Overall Goal and Objectives */}
      <Section bgColor="bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">Overall Goal</h3>
          <p className="text-gray-700 mb-6">
            To strengthen democratic governance and inclusive national development through citizen engagement, leadership development, and social justice interventions.
          </p>
          <h3 className="text-2xl font-bold mb-2">Specific Objectives</h3>
          <ol className="list-decimal pl-6 text-gray-700 mb-6">
            <li>To build civic knowledge and participation among youth and marginalized groups in Liberia.</li>
            <li>To promote transparent and inclusive policy reforms through strategic advocacy campaigns.</li>
            <li>To develop a new generation of ethical, service-driven leaders through mentorship and training.</li>
            <li>To foster inclusive spaces for dialogue on diversity, equity, and inclusion in public policy and civil society.</li>
            <li>To support national development efforts by aligning community-driven initiatives with Liberia's development agenda.</li>
          </ol>
        </div>
      </Section>

      {/* Thematic / Intervention Areas & Approaches */}
      <Section bgColor="bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">Thematic / Intervention Areas & Approaches</h3>
          <ol className="list-decimal pl-6 text-gray-700 mb-6">
            <li>
              <b>Policy Advocacy</b>
              <ul className="list-disc pl-6">
                <li>Engage communities in identifying policy issues affecting them.</li>
                <li>Conduct research and policy analysis to inform evidence-based recommendations.</li>
                <li>Use media, stakeholder dialogues, and public forums to amplify citizen voices.</li>
                <li><b>Relevance:</b> Empowers citizens to influence governance and ensures accountability and responsiveness in public policy aligned with Liberia's Pro-Poor Agenda for Prosperity and Development (PAPD).</li>
              </ul>
            </li>
            <li>
              <b>Leadership Training</b>
              <ul className="list-disc pl-6">
                <li>Implement intensive training modules on ethical leadership, conflict resolution, strategic thinking, and servant leadership.</li>
                <li>Target emerging leaders, university students, and community influencers.</li>
                <li><b>Relevance:</b> Addresses the leadership vacuum and cultivates a new generation of accountable leaders essential to national stability and progress.</li>
              </ul>
            </li>
            <li>
              <b>Youth Mentoring</b>
              <ul className="list-disc pl-6">
                <li>Pair experienced professionals with young people for one-on-one mentorship.</li>
                <li>Facilitate entrepreneurship and skills development initiatives.</li>
                <li>Integrate school-based clubs and community projects.</li>
                <li><b>Relevance:</b> Investing in youth potential ensures long-term socio-economic growth and reduces unemployment, crime, and civic apathy.</li>
              </ul>
            </li>
            <li>
              <b>Civic Education</b>
              <ul className="list-disc pl-6">
                <li>Design and deliver civic education programs in schools, communities, and online platforms.</li>
                <li>Utilize participatory methods, simulations, and public education campaigns.</li>
                <li><b>Relevance:</b> Strengthens democratic culture by increasing awareness of rights, responsibilities, and the importance of participation in democratic processes.</li>
              </ul>
            </li>
            <li>
              <b>Diversity, Equity & Inclusion (DEI) Initiatives</b>
              <ul className="list-disc pl-6">
                <li>Conduct DEI audits and workshops in institutions and communities.</li>
                <li>Promote inclusive dialogues across ethnic, gender, and socio-economic lines.</li>
                <li>Advocate for equitable policies and practices.</li>
                <li><b>Relevance:</b> Supports national reconciliation, unity, and inclusive growth by confronting systemic inequalities and promoting dignity for all.</li>
              </ul>
            </li>
          </ol>
        </div>
      </Section>

      {/* Our Story */}
      <Section bgColor="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Founded in 2015, Action Now-Liberia began as a small group of community activists who believed in the power of collective action. Frustrated by the lack of progress on key social and environmental issues, our founders decided to create an organization that would bridge the gap between awareness and action.
          </p>
          <p className="text-gray-700 mb-6">
            In our early days, we focused on local community initiatives and small-scale advocacy campaigns. As our impact grew, so did our team and our reach. Today, Action Now-Liberia works across multiple regions, partnering with diverse stakeholders to create meaningful change.
          </p>
          <p className="text-gray-700 mb-6">
            Throughout our journey, we've remained committed to our core belief: that ordinary people can accomplish extraordinary things when they come together with passion, purpose, and a plan for action.
          </p>
          <p className="text-gray-700">
            Our story is still being written, and we invite you to be part of the next chapter.
          </p>
          <div className="mt-8 text-center">
            <a
              href="/founder-profile"
              className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow hover:bg-primary-700 transition-colors duration-300 text-lg"
            >
              Meet Our Founder: Dr. Josiah F. Joekai, Jr.
            </a>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section bgColor="bg-white">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">
          Meet the dedicated individuals who make our work possible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img 
              src="/images/community-meeting.jpg" 
              alt="Team Member 1" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
              <p className="text-primary-600 mb-4">Executive Director</p>
              <p className="text-gray-600">
                With over 15 years of experience in nonprofit leadership, Sarah brings vision, passion, and strategic thinking to Action Now-Liberia.
              </p>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img 
              src="/images/empowering-community.jpg" 
              alt="Team Member 2" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Michael Rodriguez</h3>
              <p className="text-primary-600 mb-4">Program Director</p>
              <p className="text-gray-600">
                Michael oversees our programs and initiatives, ensuring they align with our mission and create maximum impact.
              </p>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img 
              src="/images/action-now-liberia-sign.jpg" 
              alt="Team Member 3" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Aisha Patel</h3>
              <p className="text-primary-600 mb-4">Community Outreach Manager</p>
              <p className="text-gray-600">
                Aisha builds and maintains relationships with our community partners, volunteers, and supporters.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section bgColor="bg-primary-50">
        <h2 className="section-title">Our Values</h2>
        <p className="section-subtitle">
          These core principles guide our work and shape our organization.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-primary-700">Integrity</h3>
            <p className="text-gray-700">
              We are committed to honesty, transparency, and ethical practices in all that we do.
            </p>
          </div>
          
          {/* Value 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-primary-700">Collaboration</h3>
            <p className="text-gray-700">
              We believe in the power of working together and value diverse perspectives and experiences.
            </p>
          </div>
          
          {/* Value 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-primary-700">Innovation</h3>
            <p className="text-gray-700">
              We embrace creative thinking and continuous learning to find effective solutions to complex problems.
            </p>
          </div>
          
          {/* Value 4 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-primary-700">Inclusivity</h3>
            <p className="text-gray-700">
              We create spaces where everyone feels welcome, valued, and empowered to contribute.
            </p>
          </div>
          
          {/* Value 5 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-primary-700">Accountability</h3>
            <p className="text-gray-700">
              We take responsibility for our actions and are committed to measuring and sharing our impact.
            </p>
          </div>
          
          {/* Value 6 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-primary-700">Courage</h3>
            <p className="text-gray-700">
              We are willing to take bold action, speak truth to power, and stand up for what is right.
            </p>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default About;