import axios from "axios";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import React, { useEffect, useState } from "react";
import "./App.css"; // You can create this CSS file for styling

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const onUserSelect = (user) => {
    console.log("Selected user:", user);
    setSelectedUser(user);
  };
  return (
    <div className="App w-screen h-screen bg-white">
      {loading ? (
        <p>Loading...</p>
      ) : users.length > 0 ? (
        <>
          <div className="flex h-screen flex-row">
            <div
              className="w-1/2  mt-9 flex justify-center items-center overflow-y-scroll"
            >
              <div className="  h-screen ">
                <UserList
                  users={users}
                  onClick={onUserSelect}
                  onUserSelect={onUserSelect}
                />
              </div>
            </div>
            <div className="w-1/2 items-center justify-center">
              <UserDetails user={selectedUser} />
            </div>
          </div>
        </>
      ) : (
        <p>No data to show</p>
      )}
    </div>
  );
}
<script src="script.js"></script>;
export default App;
