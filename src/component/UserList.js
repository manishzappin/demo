import React from "react";
import { useGetUserQuery } from "./Slice/ApiSlice";

const UserList = () => {
  const { data: users, refetch, error, isLoading, isFetching } = useGetUserQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (isFetching) return <div>faching.....</div>;

  
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={ refetch}>Refresh list</button>
    </div>
  );
};

export default UserList;
