// function fetchImages(folderData) {
//   // Base URL of your images
//   const baseUrl = "https://kidatb.com/assets/images/gallery/";

//   // Iterate through each folder
//   folderData.forEach((folderObj) => {
//     // Create a wrapper div for the current folder
//     const folderDiv = document.createElement("div");
//     folderDiv.classList.add(folderObj.folder);

//     // Iterate through each filename in the folder
//     folderObj.filenames.forEach((filename) => {
//       // Create full image URL
//       const imageUrl = baseUrl + folderObj.folder + "/" + filename;

//       // Create img element
//       const imgElement = document.createElement("img");
//       imgElement.src = imageUrl;
//       imgElement.classList.add("w-100");

//       // Create div element to wrap image
//       const divElement = document.createElement("div");
//       divElement.classList.add("galleryImageWrapper");

//       // Append image to div
//       divElement.appendChild(imgElement);

//       // Append div to folder div
//       folderDiv.appendChild(divElement);
//     });

//     // Append folder div to gallery container
//     document.getElementById("galleryContainer").appendChild(folderDiv);
//   });
// }

// // Specify the folder data containing folder names and filenames
// const folderData = [
//   {
//     folder: "long",
//     filenames: [
//       "614653-EnableBankingAlt.jpg",
//       "627587-EnableBankingFlyer.jpg",
//       "763016-Cambridge-Brochure.png",
//       "778040-Rollup-(3).png",
//       "787372-towards_startup7.jpg",
//       "911148-Mobile.png",
//     ],
//   },
//   {
//     folder: "wide",
//     filenames: [
//       "114856-nyxLogo.jpg",
//       "115069-nyxLogoAlt.jpg",
//       "700236-Desktop.png",
//       "764003-New-thumbnail.png",
//       "845645-towards_startup1-â-3.png",
//       "890602-linked-alt.png",
//       "959853-Pierre-Event.png",
//       "158207-TreeNMockup.jpg",
//       "271220-linkedin-size.png",
//       "279448-bantabaFlyers.jpg",
//       "603662-christina-wocintechchat-com-c6wbSBaYxkY-unsplash.png",
//       "RemodeDeck-min.jpg",
//     ],
//   },
//   // Add more folder objects as needed
// ];

// // Call fetchImages function with the folder data
// fetchImages(folderData);
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
      "114856-nyxLogo.jpg",
      "115069-nyxLogoAlt.jpg",
      "700236-Desktop.png",
      "764003-New-thumbnail.png",
      "845645-towards_startup1-â-3.png",
      "890602-linked-alt.png",
      "959853-Pierre-Event.png",
      "158207-TreeNMockup.jpg",
      "271220-linkedin-size.png",
      "279448-bantabaFlyers.jpg",
      "603662-christina-wocintechchat-com-c6wbSBaYxkY-unsplash.png",
      "RemodeDeck-min.jpg",
    ],
  },
  // Add more folder objects as needed
];

// Call fetchImages function with the folder data
fetchImages(folderData);
