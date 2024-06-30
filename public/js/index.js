document.addEventListener("DOMContentLoaded", () => {
  const joinForm = document.getElementById("joinRoomForm");
  const createForm = document.getElementById("createRoomForm");
  const toggleToCreate = document.getElementById("toggleToCreate");
  const toggleToJoin = document.getElementById("toggleToJoin");

  toggleToCreate.addEventListener("click", (e) => {
    e.preventDefault();
    joinForm.style.display = "none";
    createForm.style.display = "block";
  });

  toggleToJoin.addEventListener("click", (e) => {
    e.preventDefault();
    createForm.style.display = "none";
    joinForm.style.display = "block";
  });
});
