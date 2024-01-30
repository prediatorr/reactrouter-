import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className=" grid justify-items-center">
      <div className="grid bg-gray-600 text-white text-3xl p-4 w-5/6 justify-center">
        User: {userid}
      </div>
    </div>
  );
}

export default User;
