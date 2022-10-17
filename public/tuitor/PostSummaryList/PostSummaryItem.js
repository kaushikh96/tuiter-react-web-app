const PostSummaryItem = (post) => {
    return(`            
    <div class="wd-posts-two">
    <div class="row">
      <div class="col-10">
        <span class="wd-topic">${post.topic}</span><br />
        <span class="wd-title"><b>${post.userName}</b>&nbsp;<i class="fa fa-check-circle"></i>&nbsp;<span class="wd-topic"> - ${post.time}</span></span><br />
        <span class="wd-title"><b>${post.title}</b></span><br />
        <span class="wd-topic"><b>${post.tweets}</b></span><br />
      </div>
      <div class="col-2">
        <img id="wd-react-image" src="${post.image}" />
      </div>
    </div>
  </div>
`); }

export default PostSummaryItem;