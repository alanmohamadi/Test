const GetApi = async () => {
  const res = await axios.get("/user");
  return res.data;
};

// useQuery({
//   queryKey: ["user"],
//   queryFn: GetApi,
// });