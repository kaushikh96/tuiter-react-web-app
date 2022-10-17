import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
    <div class="wd-content-padding wd-search-bar-div">
    <div class="row wd-search-content">
      <div class="col-11">
        <div class="position-relative">
            <span class="wd-search-icon position-absolute">
                <i class="fa fa-search" aria-hidden="true" style="color:#71767B"></i>
              </span>
        
        <input
          type="text"
          placeholder="Search Twitter"
          class="wd-search-bar"
        />
    </div>
      </div>
      <div class="col-1">
        <a href="explore-settings.html">
          <i
            class="fa fa-cog"
            style="padding-top:10px; font-size: 20px; color: darkgray"
          ></i>
        </a>
      </div>
    </div>
  </div>
    <ul class="nav nav-tabs wd-nav-tabs">
      <li class="nav-item">
        <b><a class="nav-link active wd-active-link" href="#">For you</a></b>
      </li>
      <li class="nav-item">
       <b><a class="nav-link" href="#">Trending</a></b>
      </li>
      <li class="nav-item">
        <b><a class="nav-link" href="#">News</a></b>
      </li>
      <li class="nav-item">
        <b><a class="nav-link" href="#">Sports</a></b>
      </li>
      <li class="d-none d-md-block d-lg-block d-xl-block d-xxl-block nav-item">
        <b><a class="nav-link" href="#">Entertainment</a></b>
      </li>
    </ul>
    <div class="wd-grid-row">
      <div class="wd-grid-right-posts">
      
        <div class="wd-spacex-image">
        <img id="wd-spacex-pic" src="../../image/spacexstarship.webp" />
        <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
        </div>
        ${PostSummaryList()}
    </div>
    </div>
`); }

export default ExploreComponent;
