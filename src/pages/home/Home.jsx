import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import playstore from '../../assets/playstore.png';
import appstore from '../../assets/appstore.png';
import hero from '../../assets/hero.png';
// import heroImage from '../../assets/hero.png';
import iconDownloads from '../../assets/icon-downloads.png';
// import downloadIcon from '../../assets/icon-downloads.png';
import LoadingSpinner from '../../components/LoadingSpinner';

const Home = () => {
    const [trendingApps, setTrendingApps] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        // fetch('/appdata.json')
        fetch('/appdata.json')
            .then(res => res.json())
            .then(data => {
                // const sorted = data.sort((a, b) => b.downloads - a.downloads).slice(0, 6);
                const sorted = data.sort((a, b) => b.downloads - a.downloads).slice(0, 8);
                setTrendingApps(sorted);
                setIsLoading(false);
            })
            .catch(err => {
                console.error('Error loading apps:', err);
                // setError(err.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    const getHighestRating = (ratings) => {
        if (!ratings || ratings.length === 0) return 5;
        // const max = Math.max(...ratings.map(r => parseInt(r.name.split(' ')[0])));
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

    return (
        <div className="bg-[#f5f5f5]">
            {/* Hero section */}
            {/* <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 pt-20 pb-12"> */}
            <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 pt-[90px] pb-12 sm:pb-16 lg:pb-20">
                {/* <h1 className="text-5xl lg:text-[72px] font-medium text-center leading-tight mb-6"> */}
                <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-medium text-center leading-tight mb-6">
                    We Build{' '}
                    <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                        Productive
                    </span>{' '}
                    Apps
                </h1>

                {/* <p className="text-[#627382] text-lg lg:text-xl text-center max-w-4xl mx-auto mb-10 px-4"> */}
                <p className="text-[#627382] text-base sm:text-lg lg:text-xl text-center max-w-4xl mx-auto mb-8 sm:mb-10 px-4">
                    At SAMI.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

{/* <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"> */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">

  <a  
    href="https://play.google.com/store/apps"
    target="_blank" 
    rel="noopener noreferrer"
    // className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow w-full sm:w-auto justify-center"
    className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto justify-center"
  >
    <img src={playstore} alt="Google Play" className="w-8 h-8" />
    <div className="text-left">
      <p className="text-xs text-gray-600">GET IT ON</p>
      <p className="text-lg font-semibold text-gray-900">Google Play</p>
    </div>
  </a>

  <a  
    href="https://www.apple.com/app-store/"
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto justify-center"
  >
    <img src={appstore} alt="App Store" className="w-8 h-8" />
    <div className="text-left">
      <p className="text-xs text-gray-600">Download on the</p>
      <p className="text-lg font-semibold text-gray-900">App Store</p>
    </div>
  </a>

</div>
  </section>
            {/* hero image */}
                <div className="flex justify-center">
                    {/* <img 
                        src={hero} 
                        alt="" 
                        className="w-full max-w-5xl h-auto"
                    /> */}
                    <img 
                        src={hero} 
                        alt="" 
                        className="w-full max-w-4xl h-auto"
                    />
                </div>
            

            {/* Stats banner */}
            {/* <section className="w-full bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-16 lg:py-20"> */}
            <section className="w-full bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-12 sm:py-16 lg:py-20">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
                    {/* <h2 className="text-4xl lg:text-[48px] font-bold text-white text-center mb-16"> */}
                    <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white text-center mb-12 sm:mb-16">
                        Trusted by Millions, Built for You
                    </h2>

                    {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-12"> */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
                        <div className="text-center">
                            {/* <p className="text-white/80 text-base mb-2">Total Downloads</p> */}
                            <p className="text-white/80 text-sm sm:text-base mb-2">Total Downloads</p>
                            {/* <p className="text-5xl lg:text-6xl font-bold text-white mb-2">29.6M</p> */}
                            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">29.6M</p>
                            {/* <p className="text-white/70 text-sm">21% More Than Last Month</p> */}
                            <p className="text-white/70 text-xs sm:text-sm">21% More Than Last Month</p>
                        </div>

                        <div className="text-center">
                            <p className="text-white/80 text-sm sm:text-base mb-2">Total Reviews</p>
                            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">906K</p>
                            <p className="text-white/70 text-xs sm:text-sm">46% More Than Last Month</p>
                        </div>

                        <div className="text-center">
                            <p className="text-white/80 text-sm sm:text-base mb-2">Active Apps</p>
                            {/* <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">132</p> */}
                            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">132+</p>
                            <p className="text-white/70 text-xs sm:text-sm">31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trending apps section */}
            {/* <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 lg:py-20"> */}
            <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">
                {/* <h2 className="text-4xl lg:text-[48px] font-bold text-[#001931] text-center mb-4"> */}
                <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#001931] text-center mb-4">
                    Trending Apps
                </h2>
                
                {/* <p className="text-[#627382] text-lg lg:text-xl text-center mb-16"> */}
                <p className="text-[#627382] text-base sm:text-lg lg:text-xl text-center mb-12 sm:mb-16">
                    Explore All Trending Apps on the Market developed by us
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {trendingApps.map((app) => (
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
                                    <div className="flex items-center gap-1.5 bg-[#F1F5E8] px-2.5 py-1 rounded">
                                        <img src={iconDownloads} alt="Downloads" className="w-4 h-4" />
                                        <span className="text-sm font-medium text-[#001931]">
                                            {formatDownloads(app.downloads)}
                                        </span>
                                    </div>
                                    
                                    <div className="flex items-center gap-1">
                                        <span className="text-orange-500 text-lg">★</span>
                                        <span className="text-sm font-medium text-[#001931]">
                                            {getHighestRating(app.ratings)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link 
                        to="/apps"
                        // className="px-8 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:shadow-xl transition-shadow"
                        className="px-8 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                        Show All
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;