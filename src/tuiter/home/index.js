import React from "react";
import PostList from "../post-list";
import TuitsList from "../tuits/TuitsList";
import WhoToFollowList from "../who-to-follow-list";
import "./index.css";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {

 return(
    <div class="row">
        <div className="col-12 col-lg-8 col-xl-8">
    <WhatsHappening/>
     <TuitsList />
     </div>
     <div className="d-none d-lg-block col-lg-4 col-xl-4">
     <WhoToFollowList />
     </div>
     </div>
 );
};
export default HomeComponent;

