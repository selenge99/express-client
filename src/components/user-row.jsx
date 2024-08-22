import React from "react";

const UserRow = ({ user, deleteEmplpyeeById, editEmployeesData }) => {
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="w-12 h-12 mask mask-squircle">
            <img src={user.profileImg} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{user.firstname}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-primary badge-outline badge-sm">
          {user.position}
        </span>
      </td>
      <td>{user.email}</td>
      <td>
        <button
          className="btn btn-outline btn-info btn-xs "
          onClick={() => {
            console.log(user.eid);
            editEmployeesData(user.eid);
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-outline btn-error btn-xs "
          onClick={() => {
            console.log(user.eid);
            deleteEmplpyeeById(user.eid);
          }}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
