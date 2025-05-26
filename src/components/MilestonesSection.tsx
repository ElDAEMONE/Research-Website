import React from 'react'

interface Milestone {
  title: string
  date: string
  description: string
  marks: number
}

const milestones: Milestone[] = [
  {
    title: 'Project Proposal',
    date: 'October 2024',
    description: 'Initial document outlining problem, objectives, and methodology.',
    marks: 10,
  },
  {
    title: 'Progress Presentation 1',
    date: 'November 2024',
    description: 'Evaluate the first development phase, implementation plan, and UI mockups.',
    marks: 10,
  },
  {
    title: 'Research Paper',
    date: 'December 2024',
    description: 'Submission of IEEE-style conference paper detailing findings and methodology.',
    marks: 15,
  },
  {
    title: 'Progress Presentation 2',
    date: 'February 2025',
    description: 'Covers system implementation, testing results, and research updates.',
    marks: 10,
  },
  {
    title: 'Website Assessment',
    date: 'May 2025',
    description: 'Evaluation of the project website’s completeness, accuracy, and responsiveness.',
    marks: 5,
  },
  {
    title: 'LogBook',
    date: 'May 2025',
    description: 'Weekly log entries reviewed to ensure consistent progress.',
    marks: 5,
  },
  {
    title: 'Final Report',
    date: 'May 2025',
    description: 'Comprehensive report on the entire project, including results, diagrams, and references.',
    marks: 25,
  },
  {
    title: 'Final Presentation & Viva',
    date: 'May 2025',
    description: 'Viva is held individually to assess each member’s contribution to the project.',
    marks: 20,
  },
]

const MilestonesSection: React.FC = () => {
  return (
    <section id="milestones" className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Project Milestones Timeline
        </h2>

        <div className="relative border-l-4 border-orange-400 pl-6 space-y-10">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-3 top-1 w-6 h-6 bg-emerald-600 rounded-full border-4 border-white shadow" />

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-orange-500">{milestone.title}</h3>
                  <span className="text-sm text-gray-500 italic">{milestone.date}</span>
                </div>
                <p className="text-gray-700 mb-2">{milestone.description}</p>
                <p className="text-sm font-medium text-gray-600">Marks Allocated: <span className="text-black">{milestone.marks}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MilestonesSection
