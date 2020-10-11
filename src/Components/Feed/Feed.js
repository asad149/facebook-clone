import React from "react";
import StoryReel from "././StoryReel/StroryReel";
import MessageSender from "././MessageSender/MessageSender";
import Post from "././Post/Post";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://lh3.googleusercontent.com/a-/AOh14Gj-n9beS930W0hKV4wvcYdgf_3wnfoO5wKCDqnKPw=s96-c"
        message="WOW this works!"
        timestamp="This is a timestamp"
        username="asad.97"
        image="https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Post
        profilePic="https://lh3.googleusercontent.com/a-/AOh14Gj-n9beS930W0hKV4wvcYdgf_3wnfoO5wKCDqnKPw=s96-c"
        message="WOW this works!"
        timestamp="This is a timestamp"
        username="asad.97"
      />
    </div>
  );
};

export default Feed;
