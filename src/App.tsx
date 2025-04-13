import React from 'react';
import { Shield, Lock, Server, Users, AlertCircle, Terminal, ExternalLink, Menu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-800/50 backdrop-blur-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-cyan-500" />
              <span className="ml-2 text-xl font-bold text-white">CyberShield</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-gray-300" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Secure Your Digital Future
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Advanced cybersecurity solutions protecting your business 24/7 with cutting-edge technology and expert support.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-medium">
                Get Protected Now
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#158b9c_0%,rgba(9,9,11,0.9)_100%)]"></div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Security Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="w-8 h-8 text-cyan-500" />,
                title: "Endpoint Protection",
                description: "Advanced security for all your devices with real-time threat detection and response."
              },
              {
                icon: <Server className="w-8 h-8 text-cyan-500" />,
                title: "Cloud Security",
                description: "Comprehensive cloud infrastructure protection and compliance monitoring."
              },
              {
                icon: <Users className="w-8 h-8 text-cyan-500" />,
                title: "Security Training",
                description: "Employee cybersecurity awareness training and phishing simulation."
              },
              {
                icon: <AlertCircle className="w-8 h-8 text-cyan-500" />,
                title: "Incident Response",
                description: "24/7 security monitoring and rapid incident response team."
              },
              {
                icon: <Terminal className="w-8 h-8 text-cyan-500" />,
                title: "Penetration Testing",
                description: "Thorough security assessments and vulnerability scanning."
              },
              {
                icon: <Shield className="w-8 h-8 text-cyan-500" />,
                title: "Compliance & Audit",
                description: "Industry compliance management and security audit services."
              }
            ].map((service, index) => (
              <div key={index} className="bg-slate-900 p-6 rounded-xl hover:bg-slate-700 transition-colors">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-500 mb-2">500+</div>
              <div className="text-gray-400">Clients Protected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-500 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guaranteed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-500 mb-2">24/7</div>
              <div className="text-gray-400">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Get in touch with our security experts for a free consultation and security assessment.
          </p>
          <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-medium inline-flex items-center">
            Contact Us <ExternalLink className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-cyan-500" />
                <span className="ml-2 text-lg font-bold text-white">CyberShield</span>
              </div>
              <p className="text-gray-400">
                Protecting your digital assets with next-generation security solutions.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Endpoint Protection</li>
                <li>Cloud Security</li>
                <li>Security Training</li>
                <li>Incident Response</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CyberShield. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;