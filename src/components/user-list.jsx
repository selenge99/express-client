import UserHead from "./user-head";
import UserRow from "./user-row";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState();
  const [refetch, setRefetch] = useState(false);

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
    setRefetch(!refetch);
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
    // setUsers([...users, user]);
    setRefetch(!refetch);
  };

  const editEmployeesData = async (userId) => {
    const res = await fetch(`http://localhost:8000/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: "John",
        lastname: "David",
        email: "naraa@gmail.com",
        position: "Account",
      }),
    });
    const { user } = await res.json();

    setRefetch(!refetch);
  };

  useEffect(() => {
    getEmployeesData();
  }, [refetch]);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <UserHead />
        </thead>
        <tbody>
          {users?.map((user) => (
            <UserRow
              user={user}
              deleteEmplpyeeById={deleteEmplpyeeById}
              editEmployeesData={editEmployeesData}
            />
          ))}
        </tbody>
      </table>
      <div>
        <button
        // className="btn btn-outline btn-success  "
        // onClick={() => {
        //   createEmployee();
        // }}
        >
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Add Employee
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <div className="flex flex-col gap-4 ">
                <input
                  // onChange={HandleChange}
                  type="text"
                  className="border border-gray-600 rounded-md p-2 "
                  placeholder="FistName"
                />
                <input
                  type="text"
                  className="grow border border-gray-600 rounded-md p-2"
                  placeholder="LastName"
                />
                <input
                  type="text"
                  className="grow border border-gray-600 rounded-md p-2"
                  placeholder="Position"
                />
                <input
                  type="text"
                  className="grow border border-gray-600 rounded-md p-2"
                  placeholder="Email"
                />
              </div>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    onClick={() => {
                      createEmployee();
                    }}
                    className="btn"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </button>
      </div>
    </div>
  );
};

export default UserList;
