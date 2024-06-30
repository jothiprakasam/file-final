document.addEventListener("DOMContentLoaded", function () {
  const joinRoomForm = document.getElementById("joinRoomForm");
  const roomDetails = document.getElementById("roomDetails");
  const roomNameDisplay = document.getElementById("roomNameDisplay");
  const uploadForm = document.getElementById("uploadForm");
  const filesList = document.getElementById("filesList");

  joinRoomForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = document.getElementById("joinRoomName").value;
    const password = document.getElementById("joinRoomPassword").value;

    console.log("Joining room:", name);

    const response = await fetch("/api/rooms/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    });

    const popup = document.getElementById("join-room-popup");
    popup.style.display = "flex";

    if (response.ok) {
      const { room } = await response.json();
      console.log("Room joined successfully:", room);
      roomNameDisplay.textContent = room.name;
      filesList.innerHTML = "";
      room.files.forEach((file) => {
        const fileItem = document.createElement("li");
        fileItem.innerHTML = `<a href="${file.path}" target="_blank">${file.name}</a>`;
        filesList.appendChild(fileItem);
      });

      setTimeout(() => {
        popup.style.display = "none";
        alert("You have successfully joined the room!");
        roomDetails.style.display = "block";
        joinRoomForm.style.display = "none";
      }, 3000); // Simulate a 3-second delay for joining the room
    } else {
      console.error("Invalid password.");
      alert("Invalid password.");
      popup.style.display = "none";
    }
  });

  uploadForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const fileInput = document.getElementById("fileInput");
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    const name = document.getElementById("joinRoomName").value; // Use room name

    console.log("Uploading file to room:", name);

    const response = await fetch(`/api/rooms/${name}/upload`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const room = await response.json();
      console.log("File uploaded successfully:", room);
      const lastFile = room.files[room.files.length - 1];
      const fileItem = document.createElement("li");
      fileItem.innerHTML = `<a href="${lastFile.path}" target="_blank">${lastFile.name}</a>`;
      filesList.appendChild(fileItem);
    } else {
      console.error("File upload failed.");
      alert("File upload failed.");
    }
  });
});
