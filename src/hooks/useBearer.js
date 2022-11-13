const useBearer = () => {
  const currentUser = localStorage.getItem("user");

  const JSONcurrentUser = JSON.parse(currentUser);
  if (JSONcurrentUser.token && JSONcurrentUser.approved) {
    return `Bearer ${JSONcurrentUser.token}`;
  }
};

export default useBearer;
