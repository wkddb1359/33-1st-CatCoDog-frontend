import { Routes, Route } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import SignUp from '../login/SignUp';
import Cart from '../Cart/Cart';
import MyPage from '../login/MyPage';
import Detail from '../Detail/Detail';
import Main from '../Main/Main';
import ProductListPage from '../List/ProductListPage';

const MainRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/list" element={<ProductListPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
