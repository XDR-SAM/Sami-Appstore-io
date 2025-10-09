import { useNavigation, Outlet } from 'react-router-dom';
// import { useNavigation, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../components/nav';
import Footer from '../../components/footer';
import LoadingSpinner from '../../components/LoadingSpinner';

const Root = () => {
    const navigation = useNavigation();
    // const location = useLocation();

    return (
        <div>
            {/* {navigation.state === 'loading' || navigation.state === 'submitting' ? <LoadingSpinner /> : null} */}
            {navigation.state === 'loading' && <LoadingSpinner />}
            <Navbar />
            <Outlet />
            {/* <main><Outlet /></main> */}
            <Footer />
        </div>
    );
};

export default Root;