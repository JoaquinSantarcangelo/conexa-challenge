import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.sass";
import { Divider } from "@chakra-ui/react";
import { fetchPosts } from "../../../services/user.service";

//Components
import Loading from "../../../components/Loading";
import Post from "./Post";

const PostsScreen = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div id="posts-screen">
      <div className="screen-title">Posts</div>
      <Divider />
      {posts.loading ? (
        <Loading />
      ) : (
        <div className="posts">
          {posts.posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsScreen;
