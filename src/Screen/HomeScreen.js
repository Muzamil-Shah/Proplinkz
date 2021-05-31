import React from "react";
import state from "../states";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div className="w-full h-screen bg-gray-100 py-10">
      <div className="w-11/12 h-full bg-white m-auto rounded-xl shadow-xl overflow-hidden flex justify-start items-start">
        <div className="w-1/12 h-full bg-white-100 flex flex-col justify-start items-center overflow-hidden">
          <div className="w-full  py-6">Logo</div>
          <div className="mt-10 w-full h-5/6 flex flex-col justify-evenly items-center  text-xl font-bold">
            <h3 className="w-full py-5 transform -rotate-90 px-2  text-gray-800 border-b-4 border-gray-900">
              Buy
            </h3>
            <h3
              className="transform -rotate-90 px-2 t text-gray-800  py-5 border-b-4 border-white 
hover:border-b-4 hover:border-gray-900"
            >
              Rent
            </h3>
            <h3
              className="transform -rotate-90 px-2  text-gray-800  py-5
border-b-4 border-white hover:border-gray-900"
            >
              Rent
            </h3>
            <h3
              className="transform -rotate-90 px-2  text-gray-800  py-5
border-b-4 border-white hover:border-gray-900"
            >
              Rent
            </h3>
          </div>
        </div>
        <div className="w-11/12 h-full ">
          <div className="w-full h-24 flex justify-between items-center bg-white">
            <div className=" w-7/12 flex justify-start items-center space-x-3">
              <select className="w-6/12 py-2 border">
                {state.map((item) => (
                  <option key={item.key} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              <div className="w-11/12 flex justify-between items-center space-x-3 border">
                <input
                  className="w-10/12  py-2 text-center"
                  type="text"
                  placeholder="Type Location or Keyword"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="w-4/12 flex justify-around items-center space-x-3 text-sm lg:text-lg font-bold px-3">
              <h3 className="">Home Leons</h3>
              <h3 className="">Project</h3>
              <h3 className="">Help line</h3>
            </div>
            <div className="w-16 md:w-28 flex justify-between items-center px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:w-8 md:h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:w-8 md:h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
          <div className="w-full h-full flex justify-start items-start">
            <div className="w-9/12 h-full p-4 rounded-t-xl bg-purple-200">
              <header className="w-full py-3 flex justify-start items-center ">
                <div className="w-8/12 flex justify-between items-center space-x-3 font-bold text-lg ">
                  <select className="w-3/12 bg-transparent border-none border">
                    {state.map((item) => (
                      <option key={item.key} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select className=" w-3/12 bg-transparent border-none border">
                    {state.map((item) => (
                      <option key={item.key} value={item.name}>
                        Rent Price
                      </option>
                    ))}
                  </select>
                  <select className="w-3/12 bg-transparent border-none border">
                    {state.map((item) => (
                      <option key={item.key} value={item.name}>
                        Area Size
                      </option>
                    ))}
                  </select>
                  <select className="w-3/12 bg-transparent border-none border">
                    <option value="BedRoom">BedRoom</option>
                  </select>
                </div>
                <div className="w-4/12 flex justify-end items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:w-8 md:h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:w-8 md:h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </div>
              </header>
              <main className="w-full h-5/6  flex flex-col justify-start items-start  space-y-8 py-2">
                <h1 className="text-4xl font-bold text-gray-900">
                  Find The best Property
                </h1>
                <div className="w-full grid grid-cols-3 gap-3 gap-y-10 px-3 overflow-y-scroll ">
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/details">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-80  rounded-md overflow-hidden bg-white">
                    <div className="relative w-full h-1/2">
                      <img
                        className="w-full h-full"
                        alt="roomss"
                        src="./Image/home.jpg"
                      />
                      <div className="absolute top-2 right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-coolGray-200 border rounded-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-32 bg-white rounded-full">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start items-start p-2 pt-6 text-gray-700 space-y-2">
                      <h3 className="text-xl font-bold">$7000.00 / Monthly</h3>
                      <span className="text-base font-bold">
                        Family/Bechlore
                      </span>
                      <span className="flex justify-start items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-lime-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Banjara Hills, Hyderabad
                      </span>
                      <div className="w-full flex justify-start items-center space-x-10">
                        <span className="flex justify-between items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 mr-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                            />
                          </svg>{" "}
                          5000 sdfc
                        </span>
                        <span className="flex justify-between items-center">
                          <img
                            className="w-6 h-6 mr-3"
                            src="./Image/bedroom.png"
                            alt="room"
                          />
                          2 Bedrooms
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <div className="w-3/12 h-full bg-white flex flex-col justify-start items-center space-y-4">
              <h3 className="text-3xl font-semibold text-center">
                Best Aggents
              </h3>
              <div className="w-full flex flex-col justify-start items-start space-y-3 p-2">
                <div className=" w-full flex justify-start items-center bg-purple-200 p-2 py-4 rounded-lg space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:w-16 md:h-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="flex flex-col justify-start items-start text-sm font-semibold ">
                    <h3 className="text-lg font-bold">Mr.Muzamil shah</h3>
                    <p className="flex  justify-start items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>{" "}
                      +91 89290193502
                    </p>
                    <p className="flex  justify-start items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>{" "}
                      muzamilshahquraishi@gmail.com
                    </p>
                  </div>
                </div>
                <div className=" w-full flex justify-start items-center bg-purple-200 p-2 py-4 rounded-lg space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:w-16 md:h-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="flex flex-col justify-start items-start text-sm font-semibold ">
                    <h3 className="text-lg font-bold">Mr.Muzamil shah</h3>
                    <p className="flex  justify-start items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>{" "}
                      +91 89290193502
                    </p>
                    <p className="flex  justify-start items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>{" "}
                      muzamilshahquraishi@gmail.com
                    </p>
                  </div>
                </div>
                <div className=" w-full flex justify-start items-center bg-purple-200 p-2 py-4 rounded-lg space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:w-16 md:h-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="flex flex-col justify-start items-start text-sm font-semibold ">
                    <h3 className="text-lg font-bold">Mr.Muzamil shah</h3>
                    <p className="flex  justify-start items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>{" "}
                      +91 89290193502
                    </p>
                    <p className="flex  justify-start items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>{" "}
                      muzamilshahquraishi@gmail.com
                    </p>
                  </div>
                </div>
                <div className=" w-full flex justify-start items-center bg-purple-200 p-2 py-4 rounded-lg space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:w-16 md:h-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="flex flex-col justify-start items-start text-sm font-semibold ">
                    <h3 className="text-lg font-bold">Mr.Muzamil shah</h3>
                    <p className="flex  justify-start items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>{" "}
                      +91 89290193502
                    </p>
                    <p className="flex  justify-start items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>{" "}
                      muzamilshahquraishi@gmail.com
                    </p>
                  </div>
                </div>
                <div className=" w-full flex justify-start items-center bg-purple-200 p-2 py-4 rounded-lg space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:w-16 md:h-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="flex flex-col justify-start items-start text-sm font-semibold ">
                    <h3 className="text-lg font-bold">Mr.Muzamil shah</h3>
                    <p className="flex  justify-start items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>{" "}
                      +91 89290193502
                    </p>
                    <p className="flex  justify-start items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>{" "}
                      muzamilshahquraishi@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
