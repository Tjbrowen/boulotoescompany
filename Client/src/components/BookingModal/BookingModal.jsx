import React, { useContext, useState } from "react";
import { MantineProvider, Modal, Button } from "@mantine/core";
import "@mantine/dates/styles.css";
import { DatePicker } from "@mantine/dates";
import UserDetailContext from "../../context/UserDetailContext.js";
import { bookVisit } from "../../utils/api.js";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import dayjs from "dayjs";

const BookingModal = ({ opened, setOpened, email, serviceId }) => {
  const [value, setValue] = useState(null);
  const { setUserDetails } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    toast.success("Thank you, we will get back at you as soon as possible", {
      position: "bottom-right",
    });
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        {
          id: serviceId,
          date: dayjs(value).format("DD/MM/YYYY"),
        },
      ],
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(value, serviceId, email),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) => toast.error(response.data.message),
    onSettled: () => setOpened(false),
  });
  return (
    <MantineProvider>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Select your date to start the project"
        centered
      >
        <div className="flexColCenter" style={{ gap: "1rem" }}>
          <DatePicker value={value} onChange={setValue} minDate={new Date()} />
          <Button disabled={!value || isLoading} onClick={() => mutate()}>
            Get a Quote
          </Button>
        </div>
      </Modal>
    </MantineProvider>
  );
};

export default BookingModal;
