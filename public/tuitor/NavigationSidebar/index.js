const NavigationSidebar = () => {
    return(`
    <ul class="list-group wd-unique">
      <li class="list-group-item wd-main-menu"><i class="fab fa-twitter" style="font-size:30px"></i></li>
      <li class="list-group-item wd-main-menu wd-highlight-home">
        <div class="row">
        <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i class="fa-solid fa-house"></i></div>
          <div class="d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4"><a href="../HomeScreen/explore.html" id="wd-anchor">Home</a></div>
        </div>
      </li>
      <li class="list-group-item wd-main-menu wd-highlight-explore">
        <div class="row">
          <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i class="fa-solid fa-hashtag"></i></div>
          <div class="d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4"><a href="../explore/explore.html" id="wd-anchor">Explore</a></div>
          </a> </div>
      </li>
      <li class="list-group-item wd-main-menu">
        <div class="row">
          <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i class="fa-solid fa-bell"></i></div>
          <div class=" d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4">Notifications</div>
        </div>
      </li>
      <li class="list-group-item wd-main-menu">
        <div class="row">
          <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i class="fa-solid fa-envelope"></i></div>
          <div class="d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4">Messages</div>
        </div>
      </li>
      <li class="list-group-item wd-main-menu">
        <div class="row">
          <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i class="fa-solid fa-bookmark"></i></div>
          <div class="d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4">Bookmarks</div>
        </div>
      </li>
      <li class="list-group-item wd-main-menu">
        <div class="row">
          <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i class="fa-solid fa-list"></i></div>
          <div class="d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4">Lists</div>
        </div>
      </li>
      <li class="list-group-item wd-main-menu">
        <div class="row">
          <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i class="fa-solid fa-user"></i></div>
          <div class="d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4">Profile</div>
        </div>
      </li>
      <li class="list-group-item wd-main-menu">
        <div class="row">
          <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><i class="fa-solid fa-ellipsis"></i></div>
          <div class="d-none d-xxl-block d-xl-block col-4 col-sm-0 col-md-0 col-lg-0 col-xl-4 col-xxl-4">More</div>
        </div>
      </li>
    </ul>
    <button id="wd-tweet-button" type="submit" class="btn btn-primary">
      Tweet
    </button>
    `);
   }
   export default NavigationSidebar;