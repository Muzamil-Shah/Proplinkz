import React from "react";
import state from "../states";

function DetailsScreen() {
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
              Sugestion
            </h3>
            <h3
              className="transform -rotate-90 px-2  text-gray-800  py-5
border-b-4 border-white hover:border-gray-900"
            >
              Account
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
            <div className="w-9/12 h-5/6 overflow-hidden rounded-t-xl ">
              <div className="relative w-full   flex flex-col items-center justify-start space-y-3 ">
                <img
                  className="w-full h-96"
                  src="./Image/home.jpg"
                  alt="home"
                />
                <div className="flex justify-center items-center space-x-3">
                  <img
                    className="w-16 h-16 border-2 border-white"
                    src="./Image/home.jpg"
                    alt="home"
                  />
                  <img
                    className="w-16 h-16 border-2 border-white"
                    src="./Image/home.jpg"
                    alt="home"
                  />
                  <img
                    className="w-16 h-16 border-2 border-white"
                    src="./Image/home.jpg"
                    alt="home"
                  />
                </div>
              </div>
              <div className="w-full py-4 flex flex-col justify-start items-center text-green-900">
                <div className="flex  justify-between items-center space-x-4 border-b-2 p-1 ">
                  <div className="flex justify-between items-center space-x-4 border-b-2 p-1 ">
                    <div className="flex justify-start items-center">
                      <i className="far fa-couch fa-2x mr-2"></i>
                      Furnishing Status
                    </div>
                    <span className="font-semibold ">Semi</span>
                  </div>
                  <div className="flex justify-between items-center space-x-4 border-b-2 p-1 ">
                    <div className="flex justify-start items-center">
                      <i className="far fa-compass fa-2x mr-2"></i>
                      Facing
                    </div>
                    <span className="font-semibold ">North</span>
                  </div>
                  <div className="flex justify-between items-center space-x-4 border-b-2 p-1 ">
                    <div className="flex justify-start items-center">
                      <i className="far fa-tint fa-2x mr-2"></i>
                      Water Supply
                    </div>
                    <span className="font-semibold ">Both</span>
                  </div>
                  <div className="flex justify-between items-center space-x-4 border-b-2 p-1 ">
                    <div className="flex justify-start items-center">
                      <i className="far fa-building fa-2x mr-2"></i>
                      Floor
                    </div>
                    <span className="font-semibold ">2/5</span>
                  </div>
                </div>
                <div className="flex justify-between items-center space-x-4 border-b-2 p-1 ">
                  <div className="flex justify-between items-center space-x-4 border-b-2 p-1 ">
                    <div className="flex justify-start items-center">
                      <i className="far fa-shower fa-2x mr-2"></i>
                      Bathroom
                    </div>
                    <span className="font-semibold ">1</span>
                  </div>
                  <div className="flex justify-between items-center space-x-4 border-b-2 p-1 ">
                    <div className="flex justify-start items-center">
                      <i className="far fa-turkey fa-2x mr-2"></i>
                      Non-Veg Allowed
                    </div>
                    <span className="font-semibold ">Yes</span>
                  </div>
                  <div className="flex justify-between items-center space-x-4 border-b-2 p-1 ">
                    <div className="flex justify-start items-center">
                      <i className="far fa-user-hard-hat fa-2x mr-2"></i>
                      Gated Security
                    </div>
                    <span className="font-semibold ">Yes</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-4/12 h-full bg-white flex flex-col justify-start items-center space-y-4 p-2">
              <div className="w-full text-gray-900">
                <div className="w-full flex justify-start items-start">
                  <div className="w-1/2 flex justify-start items-center space-x-2 border p-2 py-4">
                    <i className="far fa-money-bill-alt fa-2x"></i>
                    <div className="flex flex-col justify-start items-start">
                      <h3 className="text-lg font-semibold">
                        &#x20b9; 16000.00
                      </h3>
                      <p className="text-sm">Negotiable</p>
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-start items-center space-x-2 border p-2 py-4">
                    <i className="far fa-money-bill-alt fa-2x"></i>
                    <div className="flex flex-col justify-start items-start">
                      <h3 className="text-lg font-semibold">
                        &#x20b9; 40,000.00
                      </h3>
                      <p className="text-sm">Deposit</p>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-start items-start">
                  <div className="w-1/2 flex justify-start items-center space-x-2 border p-2 py-4">
                    <i className="far fa-bed-alt fa-2x"></i>
                    <div className="flex flex-col justify-start items-start">
                      <h3 className="text-lg font-semibold">2 Bedroom</h3>
                      <p className="text-sm">No.of Bedroom</p>
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-start items-center space-x-2 border p-2 py-4">
                    <i className="far fa-building fa-2x"></i>
                    <div className="flex flex-col justify-start items-start">
                      <h3 className="text-lg font-semibold">Apartment</h3>
                      <p className="text-sm">Property TypeS</p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-start items-start">
                  <div className="w-1/2 flex justify-start items-center space-x-2 border p-2 py-4">
                    <i className="far fa-person-sign fa-2x"></i>
                    <div className="flex flex-col justify-start items-start">
                      <h3 className="text-lg font-semibold">Family/Bechlore</h3>
                      <p className="text-sm">Preferred Tenant</p>
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-start items-center space-x-2 border p-2 py-4">
                    <i className="far fa-key fa-2x"></i>
                    <div className="flex flex-col justify-start items-start">
                      <h3 className="text-lg font-semibold">Immediately</h3>
                      <p className="text-sm">Possession</p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-start items-start">
                  <div className="w-1/2 flex justify-start items-center space-x-2 border p-2 py-4">
                    <i className="far fa-parking fa-2x"></i>
                    <div className="flex flex-col justify-start items-start">
                      <h3 className="text-lg font-semibold">Bike and Car</h3>
                      <p className="text-sm">Parking</p>
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-start items-center space-x-2 border p-2 py-4">
                    <i className="far fa-birthday-cake fa-2x"></i>
                    <div className="flex flex-col justify-start items-start">
                      <h3 className="text-lg font-semibold">10 Years More</h3>
                      <p className="text-sm">Age of Building</p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-start items-start">
                  <div className="w-1/2 flex justify-start items-center space-x-2 border p-2 py-4">
                    <i className="far fa-gopuram fa-2x"></i>
                    <div className="flex flex-col justify-start items-start">
                      <h3 className="text-lg font-semibold">2</h3>
                      <p className="text-sm">Balcony</p>
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-start items-center space-x-2 border p-2 py-4">
                    <i className="far fa-clock fa-2x"></i>
                    <div className="flex flex-col justify-start items-start">
                      <h3 className="text-lg font-semibold">May 27,2021</h3>
                      <p className="text-sm">Posted On</p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center space-y-3 py-2">
                  <p className="text-lg font-semibold">
                    Kahaf masjid, road no:12, banjara hills, 500034,
                    Hyderabad,Telengana
                  </p>
                  <button className="">See Location In Map</button>
                </div>
              </div>
              <div className="w-full flex justify-center items-center bg-purple-50 p-2 space-x-2">
                <button
                  className="border-2 border-purple-400 text-purple-400 px-4 py-2 text-xl font-bold "
                  type="button"
                >
                  Contact
                </button>
                <button
                  className="bg-purple-400 text-white px-4 py-2 text-xl font-bold "
                  type="button"
                >
                  Add Wish List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsScreen;
