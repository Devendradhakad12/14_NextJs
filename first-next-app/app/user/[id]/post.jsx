import { getUserPosts } from "@utils/features";
import React from "react";

const Post = async ({ id }) => {
  const post = await getUserPosts(id);

  return (
    <div>
      {post?.map((i) => {
        return <div key={i.id}>{i.title}</div>;
      })}
    </div>
  );
};

export default Post;
