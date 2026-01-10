export const updateComplaintStatus = async (id, status) => {
  const getAuthHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});
  const res = await fetch(
    `http://localhost:2000/api/admin/complaint/${id}/status`,
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