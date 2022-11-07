import React from "react";
import WhoToFollowList from "../who-to-follow-list";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateProfile } from "../profile/profiledata-reducer";



const EditProfileComponent = () => {
 const profileData = useSelector((state) => state.profile);
 let firstName = profileData.firstName;
 let lastName = profileData.lastName;
 let fullName = firstName.concat(" ").concat(lastName);
 const [name, setName] = useState(fullName);
 const [bio, setBio] = useState(profileData.bio);
 const [location, setLocation] = useState(profileData.location);
 const [website, setWebsite] = useState(profileData.website);
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const nameChangeHandler = (event) => {
  setName(event.target.value);
}
const bioChangeHandler = (event) => {
  setBio(event.target.value);
}
const locationChangeHandler = (event) => {
  setLocation(event.target.value);
}
const websiteChangeHandler = (event) => {
  setWebsite(event.target.value);
}
const saveProfile = () =>{
  firstName = name.split(" ")[0];
  lastName = name.split(" ")[1];
  const values = {
    firstName, lastName, bio, location, website
  }
  console.log(values)
  dispatch(updateProfile(values))
  navigate("/tuiter/profile")
}
 return(
  
  <div class="row">
    
<div className="col-12 col-lg-7 col-xl-7">
  <div class="row">
    <Link to="/tuiter/profile" class="col-1">
    <i class="bi bi-x wd-back-icon"></i>
    </Link>
    <div class="col-9 wd-edit-text">
    <b>Edit Profile</b>
    </div>
    <div class="col-2">
    <button class="rounded-pill btn btn-primary float-end ps-3 pe-3 fw-bold" onClick={saveProfile}>Save</button>
    </div>
  </div>

<div class="columns the-header is-marginless">
<div class="column header-text is-6 is-offset-3 is-12-mobile">
  <img class="header-background" src="../../image/profilebackground.jpg" id="header-background-id" alt="background-img"/>
</div>
</div>
<div class="column is-13 has-text-left">
<img class="profile-picture" src="../../image/kai.png" alt="profile-picture"/>
</div>

<div class="wd-profile-name">
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput"  onChange={nameChangeHandler} value={name}/>
  <label for="floatingInput">Name</label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" onChange={bioChangeHandler} value={bio}/>
  <label for="floatingInput">Bio</label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" onChange={locationChangeHandler} value={location}/>
  <label for="floatingInput">Location</label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" onChange={websiteChangeHandler} value={website}/>
  <label for="floatingInput">Website</label>
</div>
<div class="form-floating mb-3">
  <input type="date" class="form-control" id="floatingInput" value={new Date(profileData.dateOfBirth)}/>
  <label for="floatingInput">Birth Date</label>
</div>


</div>


  </div>
<div className="d-none d-lg-block col-lg-5 col-xl-5">
<WhoToFollowList />
</div>
</div>
);
};
export default EditProfileComponent;