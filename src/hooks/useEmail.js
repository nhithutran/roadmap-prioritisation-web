const useEmail = () => {
  const currentUser = localStorage.getItem("user");

  const JSONcurrentUser = JSON.parse(currentUser);
  if (JSONcurrentUser.token && JSONcurrentUser.approved) {
    return JSONcurrentUser.email;
  }
};

export default useEmail;
