import { Dropdown } from "./Dropdown";
import { voivodeshipList, districtList, serviceList } from "../data/data.ts";
import { AiOutlineSearch } from "react-icons/ai";
import testData from "../data/test.json";
import { SingleOffer } from "./SingleOffer.tsx";
import { useState } from "react";
import axios from "axios";

type OfferProps = {
  id: number;
  voivodeship: string;
  district: string;
  service: string;
  description: string;
  img: string;
};

export const CurrentNeeds = () => {
  const [location, setLocation] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const userCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const bdcAPI = `https://api-bdc.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`;
          getAPI(bdcAPI);
        },
        (err) => {
          alert(err.message);
        },
      );
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };

  const getAPI = (bdcAPI: string) => {
    axios
      .get(bdcAPI)
      .then((response) => {
        if (response.status === 200) {
          const result = response.data;
          console.log(result);
          setLocation(result.city);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const searchOffers = testData.filter((offer) => {
    return search.toLowerCase() === ""
      ? offer
      : offer.service.toLowerCase().includes(search);
  });

  return (
    <div className="flex items-center justify-center">
      <div className="w-full md:w-[70%] flex flex-col min-h-[800px] bg-[#fff]">
        <div className="relative border border-yellow-default my-12 mx-8 py-6 px-2">
          <div className="absolute text-2xl font-light px-4 bg-[#fff] top-[-1.5%]">
            Aktualne potrzeby
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 mb-12 gap-6">
              <div>
                <span className="border-b border-gray-300">Sortowanie</span>
              </div>
              <div className="flex justify-center items-center text-[#000] w-60 h-10 border border-gray-300 rounded-md">
                <input
                  autoFocus
                  placeholder="Wyszukaj potrzebę"
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border-none outline-none ml-2 text-sm"
                />
                <label className="border-l border-gray-300 h-full flex justify-center items-center w-14 rounded-md hover:cursor-pointer">
                  <AiOutlineSearch />
                </label>
              </div>
              <Dropdown label="województwo" options={voivodeshipList} />
              <Dropdown label="powiat" options={districtList} />
              <Dropdown label="pomoc" options={serviceList} />
              <div className="flex items-center text-[#000]">
                <div className="flex items-center w-40 h-10 border border-gray-300 rounded-md outline-none pl-2">
                  {location}
                </div>
                <div
                  className="bg-gray-200 text-sm px-2 h-[80%] flex justify-center items-center ml-6 font-medium rounded-sm hover:cursor-pointer"
                  onClick={() => userCoordinates()}
                >
                  Pobierz lokalizacje
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300">
            <div className="grid grid-cols-1 gap-x-24 gap-y-12 lg:grid-cols-2 px-2 sm:px-8 mt-12">
              {searchOffers.length === 0 ? (
                <p className="text-center font-medium">
                  Nie znaleziono potrzeb
                </p>
              ) : (
                searchOffers.map((offer: OfferProps) => (
                  <SingleOffer key={offer.id} {...offer} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
