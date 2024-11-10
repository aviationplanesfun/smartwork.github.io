// Password for the admin panel
const adminPassword = "your_secure_password";

// Function to prompt for password and redirect to admin page
function promptAdminPassword() {
  const password = prompt("Enter Admin Password:");
  if (password === adminPassword) {
    // Redirect to admin page
    window.location.href = "admin.html";
  } else {
    alert("Incorrect password.");
  }
}

// Function to check password on admin page load
function checkAdminAccess() {
  const password = prompt("Enter Admin Password:");
  if (password === adminPassword) {
    document.getElementById("admin-panel").style.display = "block";
    loadPendingUploads();
  } else {
    alert("Incorrect password.");
    window.location.href = "index.html";
  }
}

// Mock function to load pending uploads
function loadPendingUploads() {
  const pendingUploads = [
    { id: 1, file: "image1.jpg", description: "First image" },
    { id: 2, file: "image2.jpg", description: "Second image" }
  ];

  const pendingList = document.getElementById("pending-list");
  pendingList.innerHTML = "";

  pendingUploads.forEach((upload) => {
    const uploadDiv = document.createElement("div");
    uploadDiv.classList.add("pending-upload");

    uploadDiv.innerHTML = `
      <p><strong>${upload.description}</strong></p>
      <img src="${upload.file}" alt="${upload.description}" width="150">
      <button onclick="approveUpload(${upload.id})">Approve</button>
      <button onclick="rejectUpload(${upload.id})">Reject</button>
    `;

    pendingList.appendChild(uploadDiv);
  });
}

// Admin approve/reject functions (mock)
function approveUpload(id) {
  alert(`Approved upload with ID: ${id}`);
}

function rejectUpload(id) {
  alert(`Rejected upload with ID: ${id}`);
}

// Run checkAdminAccess only if on admin.html
if (window.location.pathname.includes("admin.html")) {
  window.onload = checkAdminAccess;
}
