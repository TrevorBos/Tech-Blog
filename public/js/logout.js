const logout = async function () {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
    alert("You have been logged out!");
  } else {
    alert("Log out failed!");
  }
};

document.querySelector("#logout-link").addEventListener("click", logout);
