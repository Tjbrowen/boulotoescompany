import React, { useContext, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "../Services/Services.css";
import useServices from "../../components/hooks/useServices";
import { PuffLoader } from "react-spinners";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import UserDetailContext from "../../context/UserDetailContext";

const Quotes = () => {
  const { data, isLoading, isError } = useServices();
  const [filter, setFilter] = useState("");
  const {userDetails: {bookings}}= useContext(UserDetailContext)

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius="1"
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth services-container">
        <SearchBar filter={filter} setFilter={setFilter} />
        <div className="paddings flexCenter services">
          {
            // data.map((card, i) => (<ServicesCard card={card} key={i} />))
            data
             
            .filter((service) =>
            bookings.map((booking) => booking.id).includes(service.id)
          )
            
              .filter(
                (service) =>
                  service.title.toLowerCase().includes(filter.toLowerCase()) ||
                  service.description
                    .toLowerCase()
                    .includes(filter.toLowerCase())
              )
              .map((card, i) => (
                <ServicesCard card={card} key={i} />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default Quotes;