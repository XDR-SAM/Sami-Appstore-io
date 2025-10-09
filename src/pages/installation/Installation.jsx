import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router/dom';
import { toast } from 'react-toastify';
import iconDownloads from '../../assets/icon-downloads.png';
import iconRatings from '../../assets/icon-ratings.png';
// import ratingIcon from '../../assets/icon-ratings.png';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState('high-low');
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadInstalledApps();
    }, []);

    useEffect(() => {
        sortApps();
    }, [sortOrder]);
    // sortorder install nai

    const loadInstalledApps = () => {
        const installedIds = JSON.parse(localStorage.getItem('installedApps') || '[]');
        
        fetch('/appdata.json')
            .then(res => res.json())
            .then(data => {
                const installed = data.filter(app => installedIds.includes(app.id));
                setInstalledApps(installed);
                // setIsLoading(false);
            })
            .catch(err => console.error('Error loading apps:', err));
            // .catch(err => { console.error('Error loading apps:', err); setIsLoading(false); });
    };

    const sortApps = () => {
        setInstalledApps(prev => {
            const sorted = [...prev];
            if (sortOrder === 'high-low') {
                sorted.sort((a, b) => b.downloads - a.downloads);
            } else {
                sorted.sort((a, b) => a.downloads - b.downloads);
            }
            return sorted;
        });
    };

    //apptitle lagbe na but tao rakhlam jate future e lage
    const handleUninstall = (appId, appTitl) => {
        const installedIds = JSON.parse(localStorage.getItem('installedApps') || '[]');
        const updatedIds = installedIds.filter(id => id !== appId);
        localStorage.setItem('installedApps', JSON.stringify(updatedIds));
        
        setInstalledApps(prev => prev.filter(app => app.id !== appId));
       
        toast.error('App Uninstalled😭');
    };

    const formatDownloads = (downloads) => {
        // if (downloads >= 1000000000) return `${(downloads / 1000000000).toFixed(1)}B+`;
        if (downloads >= 1000000000) return `${(downloads / 1000000000).toFixed(1)}B`;
        if (downloads >= 1000000) return `${(downloads / 1000000).toFixed(1)}M`;
        if (downloads >= 1000) return `${(downloads / 1000).toFixed(1)}K`;
        return downloads.toString();
    };

    const getHighestRating = (ratings) => {
        if (!ratings || ratings.length === 0) return 5;
        // const max = Math.max(...ratings.map(r => parseInt(r.name.split(' ')[0])));
        const max = ratings.reduce((prev, current) => 
            current.count > prev.count ? current : prev
        );
        return parseInt(max.name.split(' ')[0]);
    };

    return (
        <div className="bg-[#f5f5f5] min-h-screen">
            {/* <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 lg:py-20"> */}
            <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">
                
                {/* <h1 className="text-4xl lg:text-[48px] font-bold text-[#001931] text-center mb-4"> */}
                <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#001931] text-center mb-4">
                    Your Installed Apps
                </h1>
                
                {/* <p className="text-[#627382] text-lg lg:text-xl text-center mb-16"> */}
                <p className="text-[#627382] text-base sm:text-lg lg:text-xl text-center mb-12 sm:mb-16">
                    Explore All Trending Apps on the Market developed by us
                </p>

                {/* Header section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    {/* <div className="text-[#001931] font-semibold text-xl lg:text-2xl"> */}
                    <div className="text-[#001931] font-semibold text-lg sm:text-xl lg:text-2xl">
                        {installedApps.length} Apps Found
                    </div>
                    
                    <div className="relative w-full sm:w-auto">
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            // className="appearance-none w-full bg-white border border-gray-200 rounded-lg px-4 py-3 pr-10 text-[#001931] font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
                            className="appearance-none w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 pr-10 text-[#001931] font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="high-low">Sort By Size: High-Low</option>
                            <option value="low-high">Sort By Size: Low-High</option>
                        </select>
                        <svg 
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Installed apps list */}
                {installedApps.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        {/* <div className="text-7xl mb-4">📦</div> */}
                        <div className="text-6xl mb-4">📦</div>
                        {/* <h3 className="text-2xl font-bold text-gray-800 mb-2"> */}
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                            No Apps Installed
                        </h3>
                        {/* <p className="text-gray-600 mb-6"> */}
                        <p className="text-gray-500 mb-4">
                            Looks like you forgot to install 😅 <br /> Start installing your favorite apps!
                        </p>
                        <Link
                            to="/apps"
                            // className="px-6 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all"
                            className="px-6 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                        >
                            🚀 Browse Apps
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {installedApps.map((app) => (
                            <div 
                                key={app.id}
                                // className="bg-white min-h-[115px] flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:px-6 sm:py-4 gap-4 shadow-md hover:shadow-lg transition-shadow"
                                className="bg-white min-h-[115px] flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:px-6 sm:py-4 gap-4 shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-grow w-full sm:w-auto">
                                    {/* App image */}
                                    <Link to={`/apps/${app.id}`} className="flex-shrink-0">
                                        {/* <div className="w-20 h-20 sm:w-[82px] sm:h-[82px] overflow-hidden"> */}
                                        <div className="w-16 h-16 sm:w-[82px] sm:h-[82px] overflow-hidden">
                                            <img 
                                                src={app.image} 
                                                alt={app.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </Link>

                                    {/* App info */}
                                    <div className="flex-grow min-w-0">
                                        <Link to={`/apps/${app.id}`}>
                                            {/* <h3 className="text-[#001931] text-lg lg:text-xl font-semibold mb-2 hover:underline line-clamp-1"> */}
                                            <h3 className="text-[#001931] text-base sm:text-lg lg:text-xl font-medium mb-1 sm:mb-2 hover:underline line-clamp-1">
                                                {app.title}
                                            </h3>
                                        </Link>
                                        
                                        {/* <div className="flex flex-wrap items-center gap-3 lg:gap-4"> */}
                                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4">
                                            <div className="flex items-center gap-1">
                                                {/* <img src={iconDownloads} alt="Downloads" className="w-4 h-4" /> */}
                                                <img src={iconDownloads} alt="Downloads" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                {/* <span className="text-[#00ce8d] font-medium text-sm lg:text-base"> */}
                                                <span className="text-[#00ce8d] font-medium text-xs sm:text-sm lg:text-base">
                                                    {formatDownloads(app.downloads)}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <img src={iconRatings} alt="Rating" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                <span className="text-[#ff8811] font-medium text-xs sm:text-sm lg:text-base">
                                                    {getHighestRating(app.ratings)}
                                                </span>
                                            </div>

                                            {/* <span className="text-[#627382] text-sm lg:text-base"> */}
                                            <span className="text-[#627382] text-xs sm:text-sm lg:text-base">
                                                {app.size} MB
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Uninstall button */}
                                <button
                                    onClick={() => handleUninstall(app.id, app.title)}
                                    // className="bg-[#00d390] text-white font-semibold px-6 py-2.5 hover:bg-[#00bd80] transition-colors flex-shrink-0 w-full sm:w-auto"
                                    className="bg-[#00d390] text-white font-semibold px-4 sm:px-6 py-2 sm:py-2.5 hover:bg-[#00bd80] transition-all duration-200 flex-shrink-0 w-full sm:w-auto text-sm sm:text-base"
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Installation;