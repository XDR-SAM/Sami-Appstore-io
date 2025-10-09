import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import github from '../assets/github.png';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/apps' },
    { name: 'Installation', path: '/installation' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
    // return location.pathname == path;
    // if(location.pathname === path) { return true } else { return false }
  };

  return (
    // <nav className="w-full h-20 bg-white shadow-sm fixed top-0 z-50">
    <nav className="w-full h-20 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 h-full flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          {/* <div className="w-10 h-10 flex-shrink-0"> */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
            <img 
              src={logo} 
              alt="Sami.io Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          {/* <span className="text-base font-bold text-purple-600"> */}
          <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Sami.io
          </span>
        </Link>

        {/* <div className="hidden md:flex items-center gap-12"> */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              // className={`text-base font-medium transition-colors ${isActive(item.path) ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
              className={`text-base font-medium transition-all duration-200 relative ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'
                  : 'text-gray-600 hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent'
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                // <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-600"></span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"></span>
              )}
            </Link>
          ))}
        </div>

        
        
   <a       href="https://github.com/XDR-SAM"
          target="_blank"
          rel="noopener noreferrer"
          // className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-purple-600 rounded-lg hover:shadow-lg transition-all"
          className="hidden sm:flex items-center gap-2 px-4 lg:px-6 py-2.5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          <img 
            src={github} 
            alt="GitHub" 
            // className="w-6 h-6"
            className="w-5 h-5"
          />
          {/* <span className="text-white font-semibold text-base"> */}
          <span className="text-white font-semibold text-sm lg:text-base">
            Contribute
          </span>
        </a>

        <button 
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
          // onClick={() => { const menu = document.getElementById('mobile-menu'); menu.style.display = menu.style.display === 'none' ? 'block' : 'none'; }}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* <div id="mobile-menu" className="hidden md:hidden bg-white shadow-lg"> */}
      <div id="mobile-menu" className="hidden md:hidden bg-white border-t shadow-lg">
        <div className="max-w-[1440px] mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              // className={`text-base font-medium py-2 ${isActive(item.path) ? 'text-purple-600 font-bold' : 'text-gray-600'}`}
              className={`text-base font-medium py-2 ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'
                  : 'text-gray-600'
              }`}
              onClick={() => document.getElementById('mobile-menu').classList.add('hidden')}
              // onClick={() => document.getElementById('mobile-menu').style.display = 'none'}
            >
              {item.name}
            </Link>
          ))}
          
          
      <a      href="https://github.com/XDR-SAM"
            // href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            // className="flex sm:hidden items-center justify-center gap-2 px-4 py-2.5 bg-purple-600 rounded-lg"
            className="flex sm:hidden items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg"
          >
            <img 
              src={github} 
              alt="GitHub" 
              className="w-5 h-5"
            />
            <span className="text-white font-semibold text-sm">
              Contribute
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;