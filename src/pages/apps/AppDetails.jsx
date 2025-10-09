import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
// import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { toast } from 'react-toastify';
import iconDownloads from '../../assets/icon-downloads.png';
import iconRatings from '../../assets/icon-ratings.png';
import iconReview from '../../assets/icon-review.png';
import LoadingSpinner from '../../components/LoadingSpinner';

const AppDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [app, setApp] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isInstalled, setIsInstalled] = useState(false);
    // const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch('/appdata.json')
            .then(res => res.json())
            .then(data => {
                // const foundApp = data.find(app => app.id == id);
                const foundApp = data.find(app => app.id === parseInt(id));
                if (foundApp) {
                    setApp(foundApp);
                    
                    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
                    setIsInstalled(installedApps.includes(foundApp.id));
                } else {
                    navigate('/app-not-found');
                }
                setIsLoading(false);
            })
            .catch(err => {
                console.error('Error loading app:', err);
                setIsLoading(false);
                navigate('/app-not-found');
            });
    }, [id, navigate]);

    const formatNumber = (num) => {
        // if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B+`;
        if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`;
        if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
        return num.toString();
    };

    const handleInstall = () => {
        if (!isInstalled && app) {
            const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
            // if (!installedApps.includes(app.id)) {
            installedApps.push(app.id);
            localStorage.setItem('installedApps', JSON.stringify(installedApps));
            setIsInstalled(true);
            // toast.success('App installed successfully!');
            toast.success('App installed🥴');
            // }
        }
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (!app) {
        return null;
    }

    // const chartData = app.ratings.map(rating => ({ name: rating.name, count: rating.count })).reverse();
    const chartData = app.ratings.map(rating => ({
        name: rating.name,
        count: rating.count
    })).reverse();

    return (
        <div className="bg-[#f5f5f5] min-h-screen">
            {/* <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 lg:py-20"> */}
            <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">
                
                <div className="flex flex-col lg:flex-row gap-8 mb-8">
                    
                    <div className="flex-shrink-0">
                        {/* <div className="w-full sm:w-[400px] aspect-square overflow-hidden"> */}
                        <div className="w-full sm:w-[350px] aspect-square overflow-hidden">
                            <img 
                                src={app.image} 
                                alt={app.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex-grow">
                        {/* <h1 className="text-3xl lg:text-[32px] font-bold text-[#001931] mb-3"> */}
                        <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#001931] mb-3">
                            {app.title}
                        </h1>
                        
                        {/* <p className="text-xl text-[#627382] mb-6"> */}
                        <p className="text-lg sm:text-xl text-[#627382] mb-6">
                            Developed by{' '}
                            <span className="font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                {app.companyName}
                            </span>
                        </p>

                        <hr className="border-gray-300 mb-6" />

                        {/* <div className="flex flex-wrap gap-8 mb-6"> */}
                        <div className="flex flex-wrap gap-8 mb-6 max-w-[500px]">
                            <div>
                                <img src={iconDownloads} alt="Downloads" className="w-10 h-10 mb-2" />
                                {/* <p className="text-sm text-[#627382] mb-1">Downloads</p> */}
                                <p className="text-xs sm:text-sm text-[#627382] mb-1">Downloads</p>
                                {/* <p className="text-3xl lg:text-[40px] font-extrabold text-[#001931]"> */}
                                <p className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#001931]">
                                    {formatNumber(app.downloads)}
                                </p>
                            </div>

                            <div>
                                <img src={iconRatings} alt="Ratings" className="w-10 h-10 mb-2" />
                                <p className="text-xs sm:text-sm text-[#627382] mb-1">Average Ratings</p>
                                <p className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#001931]">
                                    {app.ratingAvg}
                                </p>
                            </div>

                            <div>
                                <img src={iconReview} alt="Reviews" className="w-10 h-10 mb-2" />
                                <p className="text-xs sm:text-sm text-[#627382] mb-1">Total Reviews</p>
                                <p className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#001931]">
                                    {formatNumber(app.reviews)}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={handleInstall}
                            disabled={isInstalled}
                            // className={`w-full sm:w-auto px-8 py-3 font-semibold text-white rounded-lg transition-all ${isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00d390] hover:bg-[#00bd80]'}`}
                            className={`w-full sm:w-auto px-8 py-3 font-semibold text-white transition-all duration-200 ${
                                isInstalled 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-[#00d390] hover:bg-[#00bd80] hover:shadow-lg'
                            }`}
                        >
                            {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
                        </button>
                    </div>
                </div>

                <hr className="border-gray-300 mb-8" />

                <div className="mb-8">
                    {/* <h2 className="text-2xl font-semibold text-[#001931] mb-6">Ratings</h2> */}
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#001931] mb-6">Ratings</h2>
                    
                    <div className="w-full overflow-x-auto">
                        {/* <div style={{ minWidth: '500px', height: '300px' }}> */}
                        <div style={{ minWidth: '600px', height: '300px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart 
                                    data={chartData}
                                    layout="vertical"
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                    <XAxis type="number" />
                                    <YAxis dataKey="name" type="category" />
                                    <Tooltip />
                                    {/* <Bar dataKey="count" fill="#FF8C42" radius={[0, 0, 0, 0]}> */}
                                    <Bar dataKey="count" radius={[0, 0, 0, 0]}>
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill="#FF8C42" />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-300 mb-8" />

                <div>
                    {/* <h2 className="text-2xl font-semibold text-[#001931] mb-4">Description</h2> */}
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#001931] mb-4">Description</h2>
                    {/* <p className="text-xl text-[#627382] leading-relaxed"> */}
                    <p className="text-lg sm:text-xl text-[#627382] leading-relaxed">
                        {app.description}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AppDetails;