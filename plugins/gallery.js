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

function fetchImages(folderData) {
  // Base URL of your images
  const baseUrl = "https://kidatb.com/assets/images/gallery/";

  // Iterate through each folder
  folderData.forEach((folderObj) => {
    // Create a wrapper div for the current folder
    const folderDiv = document.createElement("div");
    folderDiv.classList.add(folderObj.folder);

    // Iterate through each filename in the folder
    folderObj.filenames.forEach((filename) => {
      // Create full image URL
      const imageUrl = baseUrl + folderObj.folder + "/" + filename;

      // Create img element
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.classList.add("w-100");

      // Create div element to wrap image
      const divElement = document.createElement("div");
      divElement.classList.add("galleryImageWrapper");

      // Append image to div
      divElement.appendChild(imgElement);

      // Append div to folder div
      folderDiv.appendChild(divElement);
    });

    // Append folder div to gallery container
    document.getElementById("galleryContainer").appendChild(folderDiv);
  });
}

// Specify the folder data containing folder names and filenames
const folderData = [
  {
    folder: "long",
    filenames: [
      "614653-EnableBankingAlt.jpg",
      "627587-EnableBankingFlyer.jpg",
      "763016-Cambridge-Brochure.png",
      "778040-Rollup-(3).png",
      "787372-towards_startup7.jpg",
      "911148-Mobile.png",
    ],
  },
  {
    folder: "wide",
    filenames: [
      "700236-Desktop.png",
      "764003-New-thumbnail.png",
      "845645-towards_startup1-â-3.png",
      "890602-linked-alt.png",
      "959853-Pierre-Event.png",
      "114856-nyxLogo.jpg",
      "115069-nyxLogoAlt.jpg",
      "158207-TreeNMockup.jpg",
      "271220-linkedin-size.png",
      "279448-bantabaFlyers.jpg",
      "603662-christina-wocintechchat-com-c6wbSBaYxkY-unsplash.png",
    ],
  },
  // Add more folder objects as needed
];

// Call fetchImages function with the folder data
fetchImages(folderData);
