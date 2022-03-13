import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Auth from "./component/auth/Auth";
import CompanyDetail from "./component/company/CompanyDetail";
import DanhbaNhaNong from "./component/danhbanhanong/DanhbaNhaNong";
import DanhbaNhaNongHome from "./component/danhbanhanong/DanhbaNhaNongHome";
import Footer from "./component/footer/Footer";
import GoToTop from "./component/gotoTop/GoToTop";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import ListPostContent from "./component/lisPost/ListPostContent";
import ListPostHome from "./component/lisPost/ListPostHome";
import PostDetail from "./component/lisPost/PostDetail";
import ProductDetail from "./component/sanpham/ProductDetail";
import Shop from "./component/shop/Shop";
import ShopCategory from "./component/shop/shopContent/ShopCategory";
import ShopHome from './component/shop/shopContent/ShopHome';
import AuthContextProvider from "./Context/AuthContext";
import Cart from "./component/cart/Cart";
import './grid.scss';
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cua-hang/" element={<Shop />} >
              <Route path="/cua-hang/:category" element={<ShopCategory />} />
              <Route path="/cua-hang/" element={<ShopHome />} />
            </Route>
            <Route path="/san-pham/:idsp" element={<ProductDetail />} />
            <Route path="/danh-ba-nha-nong/" element={<DanhbaNhaNong />} >
              <Route path="/danh-ba-nha-nong/:tencty" element={<CompanyDetail />} />
              <Route path="/danh-ba-nha-nong/" element={<DanhbaNhaNongHome />} />
            </Route>
            <Route path="/chia-se-kien-thuc" element={<ListPostContent />}>
              <Route path="/chia-se-kien-thuc/:ten" element={<PostDetail />} />
              <Route path="/chia-se-kien-thuc/" element={<ListPostHome />} />
            </Route>
            <Route
              exact
              path="/register"
              element={<Auth authRoute="register" />}
            />
            <Route path="/login" element={<Auth authRoute="login" />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <GoToTop />
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
