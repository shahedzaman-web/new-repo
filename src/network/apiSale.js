import baseApi from "../api/baseApi";

export const postSale = async (id, token, payload) => {
  try {
    const response = await baseApi.post(`/app/sale/${id}`, payload, {
      headers: { "Content-type": "application/json", Authorization: token },
    });

    if (response?.status !== 201) {
      console.log("Something Went Wrong");
      alert("Something Went Wrong");
    } else {
      return response?.data.message;
    }
  } catch (e) {
    alert("Something Went Wrong");

    console.log(e.response);
  }
};
