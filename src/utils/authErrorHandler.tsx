import { toast } from "react-toastify";

export default function catchErrorFunc(err, navigate) {
  if (
    err?.response?.data?.message ===
    "Unauthorized - Bearer token missing or invalid"
  ) {
    toast.error("Please login to continue");
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  } else {
    toast.error("Oopps!!!, something went wrong, please try again");
  }
}
