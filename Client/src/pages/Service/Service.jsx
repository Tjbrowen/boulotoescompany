import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getService, removeBooking } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import "./Service.css";
import { MdLocationPin } from "react-icons/md";
import Map from "../../components/Map/Map";
import useAuthCheck from "../../components/hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../../components/BookingModal/BookingModal";
import UserDetailContext from "../../context/UserDetailContext.js";
import { Button, MantineProvider } from "@mantine/core";
import { cancelBooking } from "../../../../Server/controllers/userCntrl.js";
import { toast } from "react-toastify";

const Service = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

  const { data, isLoading, isError } = useQuery(["serv, id"], () =>
    getService(id)
  );

  const [modalOpened, setModalOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  const {
    userDetails: { bookings },
    setUserDetails,
  } = useContext(UserDetailContext);

  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBooking(id, user?.email),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== id),
      }));
      toast.success("Quote cancelled", { position: "bottom-right" });
    },
  });

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the service details</span>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth service-container">
        <img src={data.image} alt="home image" />
        <div className="flexCenter property-details">
          {/*left side*/}

          <div className="flexColStart left">
            {/*head*/}

            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span></span>
            </div>
            {/* description*/}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/*address*/}

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />

              <span className="secondaryText address-pin">
                {data?.address} {""}
                {data?.city} {""}
                {data.country}
              </span>
            </div>

            {/*booking Button*/}
            {bookings?.map((booking) => booking.id).includes(id) ? (
              <>
                <MantineProvider>
                  <Button
                    variant="outline"
                    w={"100%"}
                    color="red"
                    onClick={() => cancelBooking()}
                    disabled={cancelling}
                  >
                    <span>Cancel Quote</span>
                  </Button>
                </MantineProvider>
                <span>
                  Your quote has been booked for date{" "}
                  {bookings?.filter((booking) => booking?.id === id)[0].date}
                </span>
              </>
            ) : (
              <button
                className="button"
                onClick={() => {
                  validateLogin() && setModalOpened(true);
                }}
              >
                Get a Quote
              </button>
            )}
            <BookingModal
              opened={modalOpened}
              setOpened={setModalOpened}
              serviceId={id}
              email={user?.email}
            />
          </div>

          {/*right side*/}

          <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
