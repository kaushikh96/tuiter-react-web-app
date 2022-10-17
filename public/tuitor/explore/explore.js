import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
       <div class="row mt-2">
        <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
         ${NavigationSidebar()}
        </div>
        <div class="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6" id="wd-main-content">
         ${ExploreComponent()}
        </div>
        <div class="d-none d-lg-block d-xxl-block d-xl-block col-4 mt-3">
         ${WhoToFollowList()}
        </div>
       </div>    
    `);
 }
 
 $(exploreComponent);