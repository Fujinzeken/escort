import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopThirtyFive from "pages/DesktopThirtyFive";
import DesktopThirtyFour from "pages/DesktopThirtyFour";
import DesktopTwentySix from "pages/DesktopTwentySix";
import DesktopTwentyFive from "pages/DesktopTwentyFive";
import Becomeamember from "pages/Becomeamember";
import Divdtindexfoot from "pages/Divdtindexfoot";
import DesktopThirtySeven from "pages/DesktopThirtySeven";
import ProfilePage from "pages/Profile";
import BecomeamemberOne from "pages/BecomeamemberOne";
import A from "pages/A";
import DesktopTwentyNine from "pages/DesktopTwentyNine";
import DesktopThirtyOne from "pages/DesktopThirtyOne";
import DesktopThirty from "pages/DesktopThirty";
import Meesages from "pages/Meesages";
import DesktopThirtyThree from "pages/DesktopThirtyThree";
import ChangePassword from "pages/ChangePassword";
import ForgotPassword from "pages/ForgotPassword";
import ForgotPasswordOne from "pages/ForgotPasswordOne";
import DesktopFifteen from "pages/DesktopFifteen";
import DesktopTwo from "pages/DesktopTwo";
import Signup from "pages/Signup";
import Login from "pages/Login";
import DesktopThirtyTwo from "pages/DesktopThirtyTwo";
import Service from "pages/Services";
import EscortProfile from "pages/EscortProfile";
import ConfirmEmail from "pages/ConfirmEmail";
import EscortDashboard from "pages/EscortDashboard";
import Authenticate from "pages/Authenticate";
import EscortMainProfile from "pages/EscortMainProfile";
import AddImages from "pages/AddImages";
import AddVideos from "pages/AddVideos";
import DesktopFourtyNine from "pages/DesktopFourtyNine";
import Gallery from "pages/Gallery";
import LadiesStar from "pages/LadiesStars";
import ProfileEditPage from "pages/ProfileEdit";
import Checkout from "pages/Checkout";
import Payment from "pages/Payment";
import DesktopFourtyEight from "pages/DesktopFourtyEight/Index";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesktopThirtyTwo />} />
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/desktoptwo" element={<DesktopTwo />} />
        <Route path="/desktopfifteen" element={<DesktopFifteen />} />
        <Route path="/forgotpasswordone" element={<ForgotPasswordOne />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/desktopthirtythree" element={<DesktopThirtyThree />} />
        <Route path="/meesages" element={<Meesages />} />
        <Route path="/desktopthirty" element={<DesktopThirty />} />
        <Route path="/desktopthirtyone" element={<DesktopThirtyOne />} />
        <Route path="/desktoptwentynine" element={<DesktopTwentyNine />} />
        <Route path="/a" element={<A />} />
        <Route path="/becomeamemberone" element={<BecomeamemberOne />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile-edit" element={<ProfileEditPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/desktopthirtyseven" element={<DesktopThirtySeven />} />
        <Route path="/divdtindexfoot" element={<Divdtindexfoot />} />
        <Route path="/becomeamember" element={<Becomeamember />} />
        <Route path="/desktoptwentyfive" element={<DesktopTwentyFive />} />
        <Route path="/desktoptwentysix" element={<DesktopTwentySix />} />
        <Route path="/live-video" element={<DesktopThirtyFour />} />
        <Route path="/desktopthirtyfive" element={<DesktopThirtyFive />} />
        <Route path="/service" element={<Service />} />
        <Route path="/EscortProfile" element={<EscortProfile />} />
        <Route path="/ConfirmEmail" element={<ConfirmEmail />} />
        <Route path="/EscortDashboard" element={<EscortDashboard />} />
        <Route path="/Authenticate" element={<Authenticate />} />
        <Route path="/EscortMainProfile" element={<EscortMainProfile />} />
        <Route path="/AddImages" element={<AddImages />} />
        <Route path="/AddVideos" element={<AddVideos />} />
        <Route path="/DesktopFourtyEight" element={<DesktopFourtyEight />} />
        <Route path="/DesktopFourtyNine" element={<DesktopFourtyNine />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="/ladies-star" element={<LadiesStar />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
