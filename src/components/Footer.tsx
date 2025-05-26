import React from 'react'

const Footer: React.FC = () => {
  return (
<footer id="contact" className="bg-gray-900 text-white py-10 px-4">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

        {/* Project Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">CardiCare</h3>
          <p className="text-gray-400">
            Research team CardiCare is dedicated to advancing cardiovascular health through innovative research and technology. Our project, <span className="text-orange-400 font-bold">Healthy Tics</span>, aims to predict cardiovascular risks and empower individuals to take control of their heart health.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#project-scope" className="hover:text-blue-400">Project Scope</a></li>
            <li><a href="#milestones" className="hover:text-blue-400">Milestones</a></li>
            <li><a href="#downloads" className="hover:text-blue-400">Downloads</a></li>
            <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
          <p className="text-gray-300">Sri Lanka Institute of Information Technology</p>
          <p className="text-gray-300">Malabe Campus, New Kandy Road</p>
          <p className="text-gray-300">Email: <a href="mailto:" className="text-blue-400">cardicare@info.co</a></p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
        © 2025 CardiCare Research Team – All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
