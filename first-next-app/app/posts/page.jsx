import { getAllPosts } from "@utils/features";
import React from "react";

const page = async () => {
  const posts = await getAllPosts();
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-10">
      {posts?.map((i) => {
        return <div key={i.id}>{i.title}</div>;
      })}
    </div>
  );
};

export default page;
