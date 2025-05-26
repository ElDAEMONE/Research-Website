import React from 'react'

interface TeamMember {
  name: string
  role: string
  status: string
  university: string
  department: string
  image: string
}

const team: TeamMember[] = [
  {
    name: 'Ms. Thamali Dassanyake',
    role: 'Supervisor',
    status: 'Lecturer',
    university: 'Sri Lanka Institute of Information Technology',
    department: 'Software Engineering',
    image: '/images/supervisor.jpg',
  },
  {
    name: 'Dolawatta T.Y.R',
    role: 'Group Leader',
    status: 'Undergraduate',
    university: 'Sri Lanka Institute of Information Technology',
    department: 'Software Engineering',
    image: '/images/kolla.jpg',
  },
  {
    name: 'Samarasinghe P.D.P',
    role: 'Group Member',
    status: 'Undergraduate',
    university: 'Sri Lanka Institute of Information Technology',
    department: 'Software Engineering',
    image: '/images/kella1.jpg',
  },
  {
    name: 'Perera W.N.D.N.D',
    role: 'Group Member',
    status: 'Undergraduate',
    university: 'Sri Lanka Institute of Information Technology',
    department: 'Software Engineering',
    image: '/images/kella2.jpg',
  },
  
]

const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet Our Team 👨‍💻👩‍🏫</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border hover:shadow-xl transition text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-blue-600">{member.role}</p>
              <p className="text-sm text-gray-600 italic">{member.status}</p>
              <p className="text-sm text-gray-600 mt-2">{member.university}</p>
              <p className="text-sm text-gray-600">{member.department}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
