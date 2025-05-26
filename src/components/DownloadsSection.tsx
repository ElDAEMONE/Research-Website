import React from 'react'

interface DownloadItem {
  title: string
  submittedOn: string
  type: 'Group' | 'Individual'
  link?: string
}

const documents: DownloadItem[] = [
  { title: 'Topic Assessment', submittedOn: 'Done', type: 'Group', link: '#' },
  { title: 'Project Charter', submittedOn: 'Done', type: 'Group', link: '#' },
  { title: 'Project Proposal', submittedOn: 'Done', type: 'Individual', link: '#' },
  { title: 'Status Documents I', submittedOn: 'Done', type: 'Individual', link: '#' },
  { title: 'Status Documents II', submittedOn: 'Yet to be submitted, link will be updated soon.', type: 'Individual' },
  { title: 'Research Paper', submittedOn: 'Yet to be submitted, link will be updated soon.', type: 'Group' },
  { title: 'Final Report', submittedOn: 'Done', type: 'Group', link: '#' },
  { title: 'Final Report', submittedOn: 'Done', type: 'Individual', link: '#' },
  { title: 'Poster', submittedOn: 'Done', type: 'Group', link: '#' },
]

const presentations: DownloadItem[] = [
  { title: 'Project Proposal', submittedOn: 'Done', type: 'Group', link: '#' },
  { title: 'Progress Presentation I', submittedOn: 'Done', type: 'Group', link: '#' },
  { title: 'Progress Presentation II', submittedOn: 'Done', type: 'Group', link: '#' },
  { title: 'Final Presentation', submittedOn: 'Yet to be submitted, link will be updated soon.', type: 'Group' },
]

const DownloadsSection: React.FC = () => {
  const renderTable = (items: DownloadItem[]) => (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-emerald-600 text-white text-left">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Submission</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{item.title}</td>
              <td className="px-4 py-2">{item.submittedOn}</td>
              <td className="px-4 py-2">{item.type}</td>
              <td className="px-4 py-2">
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-sm text-white bg-emerald-500 hover:bg-orange-400 px-3 py-1 rounded"
                    download
                  >
                    Download
                  </a>
                ) : (
                  <span className="text-gray-400 italic">Pending</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <section id="downloads" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Downloads</h2>

        <div id="documents" className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">📄 Documents</h3>
          <p className="text-gray-600 mb-4">
            Please find all documents related to this project below.
          </p>
          {renderTable(documents)}
        </div>

        <div id="presentations">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">📽️ Presentations</h3>
          <p className="text-gray-600 mb-4">
            Please find all presentations related to this project below.
          </p>
          {renderTable(presentations)}
        </div>
      </div>
    </section>
  )
}

export default DownloadsSection
