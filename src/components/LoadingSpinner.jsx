import logo from '../assets/logo.png';

const LoadingSpinner = ({ inline = false }) => {
    if (inline) {
        return (
            // <div className="w-full flex items-center justify-center py-8">
            <div className="w-full flex items-center justify-center py-12">
                {/* <img 
                    src={logo} 
                    alt="Loading"
                    className="w-16 h-16 animate-spin"
                /> */}
                <img 
                    src={logo} 
                    alt="Loading"
                    // className="w-24 h-24 animate-spin"
                    className="w-20 h-20 sm:w-24 sm:h-24 animate-spin"
                />
            </div>
        );
    }

    return (
        // <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            {/* <img 
                src={logo} 
                alt="Loading hocche" 
                className="w-32 h-32 animate-spin"
            /> */}
            <img 
                src={logo} 
                alt="Loading hocche" 
                // className="w-24 h-24 sm:w-28 sm:h-28 animate-spin"
                className="w-28 h-28 sm:w-32 sm:h-32 animate-spin"
            />
        </div>
    );
};

export default LoadingSpinner;