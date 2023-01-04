import { useQuery } from "@tanstack/react-query";
import { successAlert } from "../../../components/successAlert";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("smileToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("smileToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          successAlert("Admin Created Successful");
          refetch();
        }
      });
  };

  return (
    <div>
      <h1>Allusers</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Favorite Color</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-primary btn-xs"
                    >
                      make admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-error btn-xs">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
