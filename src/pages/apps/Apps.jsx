import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import iconDownloads from '../../assets/icon-downloads.png';
import LoadingSpinner from '../../components/LoadingSpinner';

const Apps = () => {
    const [allApps, setAllApps] = useState([]);
    const [filteredApps, setFilteredApps] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isSearching, setIsSearching] = useState(false);
    // const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch('/appdata.json')
            .then(res => res.json())
            .then(data => {
                setAllApps(data);
                setFilteredApps(data);
                setIsLoading(false);
                // setError(null);
            })
            .catch(err => {
                console.error('Error loading apps:', err);
                setIsLoading(false);
                // setError('Failed to load apps');
            });
    }, []);

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredApps(allApps);
            setIsSearching(false);
        } else {
            setIsSearching(true);
            // const timer = setTimeout(() => {
            const timer = setTimeout(() => {
                const filtered = allApps.filter(app =>
                    app.title.toLowerCase().includes(searchQuery.toLowerCase())
                    // app.title.toLowerCase().startsWith(searchQuery.toLowerCase())
                );
                setFilteredApps(filtered);
                setIsSearching(false);
            }, 300);
            // }, 500);

            return () => clearTimeout(timer);
        }
    }, [searchQuery, allApps]);

    // const getHighestRating = (ratings) => {
    //     if (!ratings || ratings.length === 0) return 5;
    //     // const max = Math.max(...ratings.map(r => parseInt(r.name.split(' ')[0])));
    //     const max = ratings.reduce((prev, current) => 
    //         current.count > prev.count ? current : prev
    //     );
    //     return parseInt(max.name.split(' ')[0]);
    // };

    // new logic use ratingAvg 
    const getHighestRating = (app) => {
        if (app.ratingAvg) return app.ratingAvg; // use average rating from JSON if exists
        const ratings = app.ratings;
        if (!ratings || ratings.length === 0) return 5;
        const max = ratings.reduce((prev, current) => 
            current.count > prev.count ? current : prev
        );
        return parseInt(max.name.split(' ')[0]);
    };

    const formatDownloads = (downloads) => {
        // if (downloads >= 1000000000) return `${(downloads / 1000000000).toFixed(1)}B+`;
        if (downloads >= 1000000000) return `${(downloads / 1000000000).toFixed(1)}B`;
        if (downloads >= 1000000) return `${(downloads / 1000000).toFixed(1)}M`;
        if (downloads >= 1000) return `${(downloads / 1000).toFixed(1)}K`;
        return downloads.toString();
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="bg-[#f5f5f5] min-h-screen">
            {/* <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 lg:py-20"> */}
            <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">
                {/* <h1 className="text-4xl lg:text-[48px] font-bold text-[#001931] text-center mb-4"> */}
                <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#001931] text-center mb-4">
                    Our All Applications
                </h1>
                
                {/* <p className="text-[#627382] text-lg lg:text-xl text-center mb-16"> */}
                <p className="text-[#627382] text-base sm:text-lg lg:text-xl text-center mb-12 sm:mb-16">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>

                {/* Search section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    {/* <div className="text-[#001931] font-semibold text-xl"> */}
                    <div className="text-[#001931] font-semibold text-lg">
                        ({filteredApps.length}) Apps Found
                    </div>
                    
                    {/* <div className="relative w-full sm:w-96"> */}
                    <div className="relative w-full sm:w-80">
                        <input 
                            type="text"
                            placeholder="Search Apps"
                            // placeholder="Search for apps..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            // className="w-full px-4 py-3 pl-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            className="w-full px-4 py-2.5 pl-10 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <svg 
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Loading during search */}
                {isSearching ? (
                    <LoadingSpinner inline />
                ) : filteredApps.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                        {/* <div className="text-7xl mb-4">🔍</div> */}
                        <div className="text-6xl mb-3">🔍</div>
                        {/* <h3 className="text-2xl font-bold text-gray-800">No Results Found!</h3> */}
                        <h3 className="text-2xl font-semibold text-gray-800">No Results Found!</h3>
                        {/* <p className="text-gray-600 mt-2">Can't find what you're looking for 😕</p> */}
                        <p className="text-gray-500 mt-1">Can't find what you're looking for 😕</p>
                        {/* <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"> */}
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Try Again Vhai
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredApps.map((app) => (
                            <Link 
                                key={app.id} 
                                to={`/apps/${app.id}`}
                                // className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                                className="bg-white rounded-2xl overflow-hidden shadow-sm"
                            >
                                <div className="w-full aspect-square overflow-hidden">
                                    <img 
                                        src={app.image} 
                                        alt={app.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                                <div className="p-4">
                                    {/* <h3 className="text-[#001931] text-lg font-semibold mb-4 line-clamp-1"> */}
                                    <h3 className="text-[#001931] text-lg font-medium mb-4 line-clamp-1">
                                        {app.title}
                                    </h3>
                                    
                                    <div className="flex items-center justify-between">
                                        {/* <div className="flex items-center gap-1.5 bg-[#F1F5E8] px-3 py-1 rounded"> */}
                                        <div className="flex items-center gap-1.5 bg-[#f1f7e5] px-2.5 py-1 rounded">
                                            <img src={iconDownloads} alt="Downloads" className="w-4 h-4" />
                                            <span className="text-sm font-medium text-[#001931]">
                                                {formatDownloads(app.downloads)}
                                            </span>
                                        </div>
                                        {/* image use korlam na emoji die kaj chalay dilam */}
                                        <div className="flex items-center gap-1 bg-orange-50 px-2 py-0.5 rounded">
                                            <span className="text-orange-500 text-lg">★</span>
                                            {/* <span className="text-sm font-medium text-orange-700">
                                                {getHighestRating(app.ratings)}
                                            </span> */}
                                            <span className="text-sm font-medium text-orange-700">
                                                {getHighestRating(app)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Apps;
