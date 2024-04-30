import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});
{
  /* Services Route */
}
export const getAllServices = async () => {
  try {
    const response = await api.get("/services/allserv", {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getService = async (id) => {
  try {
    const response = await api.get(`/services/${id}`, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

{
  /* Projects Route */
}

export const getAllProjects = async () => {
  try {
    const response = await api.get("/projects/allproj", {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getProject = async (id) => {
  try {
    const response = await api.get(`/projects/${id}`, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

{
  /* User Route */
}

export const createUser = async (email) => {
  try {
    await api.post(`/user/register`, { email });
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};
export const bookVisit = async (date, serviceId, email, token) => {
  try {
    await api.post(
      `/user/bookVisit/${serviceId}`,
      {
        email,
        id: serviceId,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const removeBooking = async (id, email) => {
  try {
    await api.post(`/user/removeBooking/${id}`, {
      email,
    });
  } catch (error) {
    toast.error("Something went wrong, Please try again");

    throw error;
  }
};

export const getAllBookings = async (email) => {
  if (!email) return;
  try {
    const res = await api.post(`/user/allBookings`, {
      email,
    });
    return res.data["bookedVisits"];
  } catch (error) {
    toast.error("Something went wrong while fetching bookings");
    throw error;
  }
};
