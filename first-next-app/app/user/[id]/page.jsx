import { getUserDetails } from "@utils/features";
import Link from "next/link";
import React, { Suspense } from "react";
import Post from "./post";
import {notFound} from 'next/navigation'
//import Loading from "@app/Loading";

// export const dynamicParams = false;

export const generateStaticParams = () => {
  // ssg
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
  ];
};

// generate metadata
export const generateMetadata = async ({ params }) => {
  const user = await getUserDetails(params.id);

  if(!user.id) return notFound()

  return {
    title: `${user.name}'s Profile`,
  };
};
const page = async ({ params }) => {
  const user = await getUserDetails(params.id);

  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center mt-10">
        <h1 className=" font-bold text-[30px]">
          <span>Name: </span> {user.name}
        </h1>

        <h3 className="text-[23px]">
          {" "}
          <span>Email: </span> {user.email}
        </h3>
        <Link
          className="text-blue-900 border-2 border-blue-900 px-4 py-1 rounded-lg"
          href={"/"}
        >
          All{" "}
        </Link>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center mt-10">
        <Suspense fallback={<div>loading.....</div>}>
          <Post id={params.id} />
        </Suspense>
      </div>
    </>
  );
};

export default page;
