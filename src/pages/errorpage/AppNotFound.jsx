import { useNavigate } from 'react-router-dom';
// import { useNavigate, Link } from 'react-router-dom';
// import React from 'react';
import appError from '../../assets/App-Error.png';
// import errorImage from '../../assets/App-Error.png';

const AppNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#f5f5f5] min-h-screen">
            {/* <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 lg:py-20"> */}
            <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">
                <div className="flex flex-col items-center justify-center">
                    
                
                    {/* <div className="w-full max-w-[800px] h-auto mb-8"> */}
                    <div className="w-full max-w-[500px] h-auto mb-8">
                        <img 
                            src={appError} 
                            alt="" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                    {/* <h1 className="text-4xl lg:text-[48px] font-bold text-[#001931] text-center mb-4"> */}
                    <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#001931] text-center mb-4">
                        OPPS!! APP NOT FOUND
                    </h1>
                    {/* <p className="text-lg lg:text-xl text-[#627382] text-center mb-8 max-w-2xl"> */}
                    <p className="text-base sm:text-lg lg:text-xl text-[#627382] text-center mb-8 max-w-2xl">
                        The App you are requesting is not found on our system. please try another apps
                    </p>

                  
                    <button
                        onClick={() => navigate('/apps')}
                        // onClick={() => navigate(-1)}
                        // className="w-[150px] h-[50px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                        className="w-[150px] h-[50px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold hover:shadow-lg transition-all duration-200"
                    >
                        Go Back
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AppNotFound;