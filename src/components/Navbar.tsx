import React, { useState } from 'react'

const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
    }
}

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    window.location.hash = id
    scrollToSection(id)
}

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scopeOpen, setScopeOpen] = useState(false)
    const [downloadOpen, setDownloadOpen] = useState(false)
    const [desktopScopeOpen, setDesktopScopeOpen] = useState(false)
    const [desktopDownloadOpen, setDesktopDownloadOpen] = useState(false)

    // Close dropdowns when menu closes
    React.useEffect(() => {
        if (!menuOpen) {
            setScopeOpen(false)
            setDownloadOpen(false)
        }
    }, [menuOpen])

    return (
        <nav className="bg-gray-800 text-white fixed w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <a
                    href="#land"
                    onClick={e => handleNavClick(e, 'land')}
                    className="text-xl font-bold text-orange-400"
                >
                    CardiCare
                </a>

                {/* Hamburger Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-sm items-center">
                    <li>
                        <a href="#home" onClick={e => handleNavClick(e, 'home')} className="hover:text-blue-400">Home</a>
                    </li>

                    {/* Project Scope Dropdown (Clickable) */}
                    <li className="relative">
                        <button
                            className="hover:text-blue-400 cursor-pointer select-none bg-transparent border-none outline-none"
                            onClick={() => setDesktopScopeOpen(open => !open)}
                            aria-expanded={desktopScopeOpen}
                        >
                            Project Scope ▾
                        </button>
                        {desktopScopeOpen && (
                            <ul className="absolute bg-white text-black rounded shadow-md mt-2 w-60 z-10">
                                <li><a href="#literature" onClick={e => handleNavClick(e, 'literature')} className="block px-4 py-2 hover:bg-gray-100">Literature Survey</a></li>
                                <li><a href="#gap" onClick={e => handleNavClick(e, 'gap')} className="block px-4 py-2 hover:bg-gray-100">Research Gap</a></li>
                                <li><a href="#problem" onClick={e => handleNavClick(e, 'problem')} className="block px-4 py-2 hover:bg-gray-100">Research Problem & Solution</a></li>
                                <li><a href="#objectives" onClick={e => handleNavClick(e, 'objectives')} className="block px-4 py-2 hover:bg-gray-100">Research Objectives</a></li>
                                <li><a href="#methodology" onClick={e => handleNavClick(e, 'methodology')} className="block px-4 py-2 hover:bg-gray-100">Methodology</a></li>
                                <li><a href="#technologies" onClick={e => handleNavClick(e, 'technologies')} className="block px-4 py-2 hover:bg-gray-100">Technologies</a></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <a href="#milestones" onClick={e => handleNavClick(e, 'milestones')} className="hover:text-blue-400">Milestones</a>
                    </li>

                    {/* Downloads Dropdown (Clickable) */}
                    <li className="relative">
                        <button
                            className="hover:text-blue-400 cursor-pointer select-none bg-transparent border-none outline-none"
                            onClick={() => setDesktopDownloadOpen(open => !open)}
                            aria-expanded={desktopDownloadOpen}
                        >
                            Downloads ▾
                        </button>
                        {desktopDownloadOpen && (
                            <ul className="absolute bg-white text-black rounded shadow-md mt-2 w-48 z-10">
                                <li><a href="#documents" onClick={e => handleNavClick(e, 'documents')} className="block px-4 py-2 hover:bg-gray-100">Documents</a></li>
                                <li><a href="#presentations" onClick={e => handleNavClick(e, 'presentations')} className="block px-4 py-2 hover:bg-gray-100">Presentations</a></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <a href="#about" onClick={e => handleNavClick(e, 'about')} className="hover:text-blue-400">About Us</a>
                    </li>
                    <li>
                        <a href="#achievements" onClick={e => handleNavClick(e, 'achievements')} className="hover:text-blue-400">Achievements</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={e => handleNavClick(e, 'contact')} className="hover:text-blue-400">Contact Us</a>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-700 text-white px-4 pb-4 space-y-2 text-sm">
                    <a href="#home" onClick={e => handleNavClick(e, 'home')} className="block py-2 border-b border-gray-600">Home</a>

                    <button onClick={() => setScopeOpen(open => !open)} className="w-full text-left py-2 border-b border-gray-600">
                        Project Scope ▾
                    </button>
                    {scopeOpen && (
                        <ul className="pl-4 text-gray-200">
                            <li><a href="#literature" onClick={e => handleNavClick(e, 'literature')} className="block py-1">Literature Survey</a></li>
                            <li><a href="#gap" onClick={e => handleNavClick(e, 'gap')} className="block py-1">Research Gap</a></li>
                            <li><a href="#problem" onClick={e => handleNavClick(e, 'problem')} className="block py-1">Research Problem & Solution</a></li>
                            <li><a href="#objectives" onClick={e => handleNavClick(e, 'objectives')} className="block py-1">Research Objectives</a></li>
                            <li><a href="#methodology" onClick={e => handleNavClick(e, 'methodology')} className="block py-1">Methodology</a></li>
                            <li><a href="#technologies" onClick={e => handleNavClick(e, 'technologies')} className="block py-1">Technologies</a></li>
                        </ul>
                    )}

                    <a href="#milestones" onClick={e => handleNavClick(e, 'milestones')} className="block py-2 border-b border-gray-600">Milestones</a>

                    <button onClick={() => setDownloadOpen(open => !open)} className="w-full text-left py-2 border-b border-gray-600">
                        Downloads ▾
                    </button>
                    {downloadOpen && (
                        <ul className="pl-4 text-gray-200">
                            <li><a href="#documents" onClick={e => handleNavClick(e, 'documents')} className="block py-1">Documents</a></li>
                            <li><a href="#presentations" onClick={e => handleNavClick(e, 'presentations')} className="block py-1">Presentations</a></li>
                        </ul>
                    )}

                    <a href="#about" onClick={e => handleNavClick(e, 'about')} className="block py-2 border-b border-gray-600">About Us</a>
                    <a href="#contact" onClick={e => handleNavClick(e, 'contact')} className="hover:text-blue-400">Contact Us</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar
