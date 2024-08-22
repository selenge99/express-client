import UserHead from "./user-head";
import UserRow from "./user-row";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState();

  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json(res);
    setUsers(users);
  };

  const deleteEmplpyeeById = async (id) => {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    });
    const { user } = await res.json(res);
    console.log("success deleted", user);
    getEmployeesData();
  };

  const createEmployee = async () => {
    const res = await fetch(`http://localhost:8000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: "Naraa",
        lastname: "Gerlee",
        email: "naraa@gmail.com",
        position: "Developer",
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    const { user } = await res.json(res);
    console.log("success deleted", user);
    setUsers([...users, user]);
  };

  useEffect(() => {
    getEmployeesData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <UserHead />
        </thead>
        <tbody>
          {users?.map((user) => (
            <UserRow user={user} deleteEmplpyeeById={deleteEmplpyeeById} />
          ))}
        </tbody>
      </table>
      <div>
        <button
          className="btn btn-outline btn-success  "
          onClick={() => {
            createEmployee();
          }}
        >
          Ажилтан үүсгэх
        </button>
      </div>
    </div>
  );
};

export default UserList;
