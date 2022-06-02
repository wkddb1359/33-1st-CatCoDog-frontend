import { Routes, Route } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import SignUp from '../login/SignUp';
import Cart from '../Cart/Cart';
import Main from './Main';
import Detail from '../Detail/Detail';

const MainRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Detail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
