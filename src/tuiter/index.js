import Nav from "../nav";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import HomeComponent from "./home"
import ProfileComponent from "./profile";
import {Routes, Route} from "react-router";
import { Provider } from "react-redux";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profiledata-reducer";
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore(
 {reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer}}
);


  function Tuiter() {

    return(
      <Provider store = {store}>
        <div>
        <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar />
        </div>
        <div className="col-10 col-md-10 col-lg-11 col-xl-10">
        <Routes>
         <Route path="home"    element={<HomeComponent/>}/>
         <Route path="explore" element={<ExploreComponent/>}/>
         <Route path="profile" element={<ProfileComponent/>}/>
       </Routes>
       </div>
        </div>
       </div> 
       </Provider>   
    );
 }
 export default Tuiter;