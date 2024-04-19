// function fetchImages(folders) {
//   // Iterate through each folder
//   folders.forEach((folder) => {
//     fetch(`assets/images/gallery/${folder}`) // Path to each image folder
//       .then((response) => response.text())
//       .then((data) => {
//         // Parse the HTML response to extract image URLs
//         const parser = new DOMParser();
//         const htmlDocument = parser.parseFromString(data, "text/html");
//         const imageLinks = Array.from(htmlDocument.querySelectorAll("a"))
//           .map((link) => link.getAttribute("href"))
//           .filter((href) => /\.(jpe?g|png|gif)$/i.test(href)); // Filter out non-image links

//         // Convert relative URLs to absolute URLs
//         const absoluteImageLinks = imageLinks.map(
//           (link) => new URL(link, window.location.href).href
//         );

//         // Create a wrapper div for the current folder
//         const folderDiv = document.createElement("div");
//         folderDiv.classList.add(folder);

//         // Display the images
//         absoluteImageLinks.forEach((imageUrl) => {
//           // Create div element to wrap image
//           const divElement = document.createElement("div");
//           divElement.classList.add("galleryImageWrapper");

//           const imgElement = document.createElement("img");
//           imgElement.src = imageUrl;
//           imgElement.classList.add("w-100");
//           document.getElementById("galleryContainer").appendChild(imgElement);
//           // Append image to div
//           divElement.appendChild(imgElement);

//           // Append div to folder div
//           folderDiv.appendChild(divElement);
//         });

//         // Append folder div to gallery container
//         document.getElementById("galleryContainer").appendChild(folderDiv);
//       })
//       .catch((error) => {
//         console.error("Error fetching images:", error);
//       });
//   });
// }

// // Specify the folders containing images
// const folders = ["wide", "long"];

// // Call fetchImages function with the list of folders
// fetchImages(folders);

function fetchImages(folders) {
  // Base URL of your GitHub repository
  const baseUrl =
    "https://github.com/notdura/kidatb/tree/main/assets/images/gallery/";

  // Iterate through each folder
  folders.forEach((folder) => {
    fetch(baseUrl + folder) // Construct the URL for each folder
      .then((response) => response.text())
      .then((data) => {
        // Parse the HTML response to extract image URLs
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, "text/html");
        const imageLinks = Array.from(htmlDocument.querySelectorAll("a"))
          .map((link) => link.getAttribute("href"))
          .filter((href) => /\.(jpe?g|png|gif)$/i.test(href)); // Filter out non-image links

        // Convert relative URLs to absolute URLs
        const absoluteImageLinks = imageLinks.map(
          (link) => baseUrl + folder + "/" + link
        );

        // Display the images
        absoluteImageLinks.forEach((imageUrl) => {
          // Create img element
          const imgElement = document.createElement("img");
          imgElement.src = imageUrl;
          imgElement.classList.add("w-100");

          // Append img element to gallery container
          document.getElementById("galleryContainer").appendChild(imgElement);
        });
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  });
}

// Specify the folders containing images
const folders = ["wide", "long"];

// Call fetchImages function with the list of folders
fetchImages(folders);
