import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import postList from "./PostList.js";
(function ($) {
    $('#wd-explore').append(`
    <div class="row mt-2">
    <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
     ${NavigationSidebar()}
    </div>
    <div class="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6" id="wd-main-content">
     ${postList()}
    </div>
    <div class="d-none d-lg-block d-xxl-block d-xl-block col-4 mt-3" id="wd-right-content">
     ${PostSummaryList()}
    </div>
   </div> 
    `);

})($);