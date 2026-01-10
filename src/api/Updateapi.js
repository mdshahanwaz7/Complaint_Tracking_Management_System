export const updateComplaintStatus = async (id, status) => {
  const getAuthHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});
const Api_url=import.meta.env.VITE_API_URL
  const res = await fetch(
    `${Api_url}/api/admin/complaint/${id}/status`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeader(),
      },
      body: JSON.stringify({ status }),
    }
  );

  const data = await res.json();
  // await fetchcomplaints()

  if (!res.ok) {
    throw new Error(data.message || "Failed to update status");
  }

  return data;
};