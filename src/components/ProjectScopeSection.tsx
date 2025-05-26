import React from 'react'

const sections = [
  {
    id: 'literature',
    title: 'Literature Survey',
    description:
      'Studies have explored integrating machine learning and IoT for cardiovascular disease (CVD) prediction and management. KNN achieved 88.52% accuracy in heart disease classification [Jindal et al.], and ensemble learning further improved prediction accuracy [Chowdary et al.].',
    image: '/images/1.jpg',
  },
  {
    id: 'gap',
    title: 'Research Gap',
    description:
      'CVDs remain a leading cause of death. Traditional diagnostics are limited by infrequent assessments, lack of personalized data, and delayed interventions. Current systems are reactive, not proactive, and rarely account for individual lifestyles.',
    image: '/images/2.jpg',
  },
  {
    id: 'problem',
    title: 'Research Problem & Solution',
    description:
      'Existing healthcare systems lack dynamic, real-time, and individualized cardiovascular care. Our solution: a Personalized Cardiovascular Healthcare System using machine learning and IoT devices for proactive risk assessment and management.',
    image: '/images/3.jpg',
  },
  {
    id: 'objectives',
    title: 'Research Objectives',
    description:
      'Develop a Predictive Health Dashboard, integrate Telemedicine, design Personalized Dietary Plans, create Dynamic Exercise Recommendations, and enable Continuous Monitoring with IoT health bands.',
    image: '/images/4.jpg',
  },
  {
    id: 'methodology',
    title: 'Methodology',
    description:
      'We combine data science, medical expertise, and IoT. Steps: collect and preprocess health data, develop ML models, stratify risk, personalize plans, and provide real-time monitoring via IoT devices.',
    image: '/images/5.jpg',
  },
  {
    id: 'technologies',
    title: 'Technologies Used',
    description: 'Firebase, TensorFlow, Python, Flutter, Arduino',
    image: '/images/6.jpg',
  },
]

const ProjectScopeSection: React.FC = () => {
  return (
    <section id="project-scope" className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-black tracking-tight">
          Project Scope
        </h2>
        <div className="space-y-20">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } items-center gap-10 md:gap-16 group`}
            >
              <div className="md:w-1/2 flex justify-center">
                {/* Smartphone frame */}
                <div className="relative w-[260px] h-[520px] bg-gray-900 rounded-3xl shadow-2xl border-4 border-gray-200 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
                  {/* Speaker and camera */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-gray-300 rounded-full" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full ml-2" />
                  </div>
                  {/* Image as screen */}
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-[232px] h-[496px] object-cover rounded-2xl border border-gray-300"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-950 mb-4 flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-fuchsia-950" />
                  {section.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">{section.description}</p>
                {/* Optional: Add a subtle divider for better separation */}
                {index < sections.length - 1 && (
                  <div className="hidden md:block h-1 w-24 bg-gradient-to-r from-fuchsia-950 to-transparent rounded-full mt-6" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectScopeSection
