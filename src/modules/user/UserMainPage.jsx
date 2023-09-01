import { Outlet } from 'react-router-dom';
import { HEADER_NAVIGATION } from '../../constants';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LoginModal from '../auth/LoginModal/LoginModal';
import RegisterModal from '../auth/RegisterModal/RegisterModal';

const UserMainPage = () => (
    <>
       <div className='wrapper'>
           <Header navigationData={HEADER_NAVIGATION} />
           <Outlet />
           <Footer />
       </div>
    </>
);

export default UserMainPage;
