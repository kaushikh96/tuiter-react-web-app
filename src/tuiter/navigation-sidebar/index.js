import React from "react";

const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
 return (
    <>
    <div className="list-group wd-unique">
      <a href="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
        <div className="row">
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i className="bi bi-house-door-fill"></i></div>
        <div className="d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4">Home</div>
        </div>
      </a>
      <a href="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
        <div className="row">
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i className="bi bi-hash"></i></div>
          <div className="d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4">Explore</div>         </div>
      </a>
      <div className="list-group-item wd-main-menu">
        <div className="row">
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i className="bi bi-bell-fill"></i></div>
          <div className="d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4">Notifications</div>        </div>
      </div>
      <div className="list-group-item wd-main-menu">
        <div className="row">
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i className="bi bi-envelope-fill"></i></div>
          <div className="d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4">Messages</div>        </div>
      </div>
      <div className="list-group-item wd-main-menu">
        <div className="row">
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i className="bi bi-bookmark-fill"></i></div>
          <div className="d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4">Bookmarks</div>        </div>
      </div>
      <div className="list-group-item wd-main-menu">
        <div className="row">
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i className="bi bi-list-ul"></i></div>
          <div className="d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4">Lists</div>        </div>
      </div>
      <div className="list-group-item wd-main-menu">
        <div className="row">
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i className="bi bi-person-fill"></i></div>
          <div className="d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4">Profile</div>        </div>
      </div>
      <div className="list-group-item wd-main-menu">
        <div className="row">
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i className="bi bi-dash-circle-fill"></i></div>
          <div className="d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4">More</div>        </div>
      </div>
    </div>
    <button id="wd-tweet-button" type="submit" className="btn btn-primary">
      Tweet
    </button>
    </>
   );
};

export default NavigationSidebar;