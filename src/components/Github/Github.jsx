import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const userData = useLoaderData();
  //   const [userData, setUserData] = useState([]);
  //   console.log(userData);
  //   useEffect(() => {
  //     const fetch_github = async () => {
  //       const res = await fetch("https://api.github.com/users/prediatorr");
  //       const data = await res.json();
  //       setUserData(data);
  //     };
  //     fetch_github();
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white">
      <div className="text-3xl">{userData?.login}</div>
      <div className="flex justify-evenly content-center p-10">
        <img src={userData?.avatar_url} alt="" width={300} />
        <div className="bg-red-500 w-1/4 h-1/4 content-center items-center ">
          <a href={userData?.html_url}>click me</a>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/prediatorr");
  return response.json();
};
