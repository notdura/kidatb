function fetchImages() {
  fetch("assets/images/gallery") // Path to your image folder
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
        (link) => new URL(link, window.location.href).href
      );

      // Display the images
      absoluteImageLinks.forEach((imageUrl) => {
        // Create div element to wrap image
        const divElement = document.createElement("div");
        divElement.classList.add("galleryImageWrapper");

        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.classList.add("w-100");
        document.getElementById("galleryContainer").appendChild(imgElement);
        // Append image to div
        divElement.appendChild(imgElement);
        // Append div to container
        document.getElementById("galleryContainer").appendChild(divElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
    });
}

fetchImages();
