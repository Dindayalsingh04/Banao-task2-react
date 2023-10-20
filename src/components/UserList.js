import React from "react";

function UserList({ users, onUserSelect }) {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto p-[94px] md:px-10 sm:px-5 w-full">
        <main className="bg-white flex flex-col px-5 ">
          <section className="flex md:flex-col flex-row md:gap-1 items-start justify-between max-w-[1230px] mt-[81px] mx-auto w-full">
            <section className="bg-blue-300 font-medium h-[70px] justify-center sm:px-5 px-[35px] py-[19px] rounded-tl-lg rounded-tr-lg text-2xl md:text-[22px] text-black inline-flex justify-center items-center rounded-tl-[8px] rounded-tr-[8px] bg-blue-300 w-[502px] h-[70px]">
              <p className="text-black font-Montserrat text-2xl font-normal font-semibold leading-normal">
                USER LISTS
              </p>
            </section>
            {users.map((user) => (
              <div className="self-center w-full max-w-[1131px] mt-5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[100%] max-md:w-full max-md:ml-0">
                    <div className="flex flex-col max-md:max-w-full max-md:mt-1">
                      <div
                        key={user.id}
                        onClick={() => onUserSelect(user)}
                        className="items-center rounded bg-gray-200 self-stretch flex flex-col pl-2.5 pr-5 py-2 max-md:max-w-full"
                      >
                        <div className="flex w-[227px] max-w-full items-start gap-2.5">
                          <img
                            src={user.avatar}
                            alt="User Profile"
                            className="rounded-full aspect-square object-cover object-center w-[52px] h-[50px] justify-center items-center overflow-hidden shrink-0"
                          />
                          <div className="text-black text-2xl font-medium self-center my-auto">
                            <p>{user.profile.username}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

export default UserList;
