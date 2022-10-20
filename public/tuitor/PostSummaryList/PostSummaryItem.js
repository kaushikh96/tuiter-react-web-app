const PostSummaryItem = (post) => {
    return(`            
    <div class="wd-posts-two">
    <div class="row">
      <div class="col-10">
        <div class="${post.topic?'wd-topic':''}">${post.topic}</div>
        <div class="wd-title"><b>${post.userName}</b>&nbsp;<i class="fa fa-check-circle"></i>&nbsp;<span class="wd-topic"> - ${post.time}</span></div>
        <div class="${post.title?'wd-title':''}"><b>${post.title}</b></div>
        <div class="${post.tweets?'wd-topic':''}"><b>${post.tweets}</b></div>
      </div>
      <div class="col-2">
        <img id="wd-react-image" src="${post.image}" />
      </div>
    </div>
  </div>
`); }

export default PostSummaryItem;