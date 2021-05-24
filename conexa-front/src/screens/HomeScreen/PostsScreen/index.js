import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.sass";
import { Divider } from "@chakra-ui/react";
import { fetchPosts } from "../../../services/user.service";

//Components
import Loading from "../../../components/Loading";
import Post from "./Post";
import PaginationButtons from "../../../components/PaginationButtons";

const PostsScreen = () => {
  // Hooks - Redux
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  // Hooks - useState
  const [offset, setOffset] = useState(0);

  // Hooks - useEffect
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div id="posts-screen" className="screen">
      <div className="screen-title">Posts</div>
      <Divider />
      {posts.loading ? (
        <Loading />
      ) : (
        <div className="posts">
          {posts.posts.map((post, i) => (
            <Post key={post.id} i={i} data={post} />
          ))}
        </div>
      )}

      {/* Pagination Interface */}
      <PaginationButtons
        offset={offset}
        setOffset={setOffset}
        dispatch={dispatch}
        fetchData={fetchPosts}
      />
    </div>
  );
};

export default PostsScreen;
