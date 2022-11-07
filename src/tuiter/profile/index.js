import React from "react";
import WhoToFollowList from "../who-to-follow-list";
import "./index.css";
import { useSelector } from "react-redux";


const ProfileComponent = () => {
 const profileData = useSelector((state) => state.profile);
 return(
  
  <div class="row">
    
<div className="col-12 col-lg-7 col-xl-7">
  <div class="row">
    <div class="col-1">
    <i class="bi bi-arrow-left-short wd-back-icon"></i>
    </div>
    <div class="col-11">
    <b>Kai Hiwatari</b>
<div class="wd-tweets">{profileData.tweets} tweets</div>
    </div>
  </div>

<div class="columns the-header is-marginless">
<div class="column header-text is-6 is-offset-3 is-12-mobile">
  <img class="header-background" src="../../image/profilebackground.jpg" id="header-background-id" alt="background-img"/>
</div>
</div>
<div class="wd-editprofile-button">
<button class="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold">Edit Profile</button>
</div>
<div class="column is-13 has-text-left">
<img class="profile-picture" src="../../image/kai.png" alt="profile-picture"/>
</div>

<div class="wd-profile-name">
<h3>{profileData.firstName}&nbsp;{profileData.lastName}</h3>
</div>
<div class="wd-profile-handler">
{profileData.handle}
</div><br/>
<div class="wd-profile-info">
{profileData.bio}
</div><br/>
<div class="row wd-profile-details">
<div class="col-4">
<i class="bi bi-map"></i>&nbsp;{profileData.location}
</div>
<div class="col-4">
<i class="bi bi-balloon-fill"></i>&nbsp;{new Date(profileData.dateOfBirth).toDateString().slice(4)}
</div>
<div class="col-4">
<i class="bi bi-calendar"></i>&nbsp;{new Date(profileData.dateJoined).toDateString().slice(4)}
</div>
</div><br/>
<div class="wd-followers">
<b>{profileData.followersCount}</b> Followers <b>{profileData.followingCount}</b> Following
</div>
  </div>
<div className="d-none d-lg-block col-lg-5 col-xl-5">
<WhoToFollowList />
</div>
</div>
);
};
export default ProfileComponent;