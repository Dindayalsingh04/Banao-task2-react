import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

function UserDetails({ user }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate an API call to fetch data, including images
    setTimeout(() => {
      fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users ")
        .then((response) => response.json())
        .then((responseData) => {
          // Set the data, including images, in the state
          setData(responseData);
        })
        .catch((error) => {
          console.error("API request failed", error);
        });
    }, 8000); // Simulated 8-second delay
  }, []);
  return (
    <div className="flex flex-row px-5 w-502 h-755 flex-shrink-0 justify-center items-center mt-20">
      {user ? (
        <section className="flex flex-col px-5 ">
          <section className=" inline-flex justify-center items-center rounded-tl-[8px] rounded-tr-[8px] bg-blue-300 w-[502px] h-[70px]">
            <p className="text-black font-Montserrat text-2xl font-normal font-semibold leading-normal">
              USER DETAILS
            </p>
          </section>
          <section className="flex flex-col items-center">
            <div className="w-[156px] h-[138px] flex-shrink-0 ">
              {data ? (
                // Data, including images, has been loaded
                <div>
                  {" "}
                  <div className=" w-[156px] h-[138px] flex-shrink-0 ">
                    <img
                      src={user.avatar}
                      alt="User Profile"
                      className=" rounded-full mt-7"
                    />
                  </div>
                </div>
              ) : (
                <InfinitySpin width="200" color="#4fa94d" />
              )}
            </div>
            <div className="text-black text-lg font-medium self-center mt-8 ">
              <p className="text-black font-Montserrat text-base font-normal font-semibold leading-normal">
                @{user.profile.username}
              </p>
            </div>
            <div className="text-black text-sm font-medium self-center w-[304px] items-start rounded border bg-zinc-300 max-w-full mt-8 pl-2 pr-5 pt-2 pb-7 border-solid border-neutral-500">
              <p className=" w-271 flex-shrink-0 text-black font-Montserrat text-base font-normal font-semibold leading-normal">
                {user.Bio}
              </p>
            </div>
            <div className="justify-center items-start self-center flex w-[304px] max-w-full flex-col mt-10">
              <div className="text-black font-Montserrat text-xs font-normal font-semibold leading-normal">
                Full Name
              </div>
              <label className="text-black text-xs font-medium items-start rounded border bg-zinc-300 w-full grow mt-2 pl-2 pr-5 py-2 border-solid border-neutral-500 ">
                <p className="text-black font-Montserrat text-sm font-normal font-semibold leading-normal">
                  {" "}
                  {user.profile.firstName} {user.profile.lastName}
                </p>
              </label>
            </div>
            <div className="justify-center items-start self-center flex w-[304px] max-w-full flex-col mt-4">
              <div className=" text-black font-Montserrat text-xs font-normal font-semibold leading-normal">
                Job Title
              </div>
              <label className="text-black text-xs font-medium items-start rounded border bg-zinc-300 w-full grow mt-2 pl-2 pr-5 py-2 border-solid border-neutral-500">
                <p className="text-black font-Montserrat text-sm font-normal font-semibold leading-normal">
                  {" "}
                  {user.jobTitle}
                </p>
              </label>
            </div>
            <div className="justify-center items-start self-center flex w-[304px] max-w-full grow flex-col mt-4">
              <div className="text-black font-Montserrat text-xs font-normal font-semibold leading-normal">
                Email
              </div>
              <label className="text-black text-xs font-medium items-start rounded border bg-zinc-300 w-full grow mt-2 pl-2 pr-5 py-2 border-solid border-neutral-500">
                <p className="text-black font-Montserrat text-sm font-normal font-semibold leading-normal">
                  {" "}
                  {user.profile.email}
                </p>
              </label>
            </div>
          </section>
        </section>
      ) : (
        <p>Please Select a User </p>
      )}
    </div>
  );
}

export default UserDetails;
