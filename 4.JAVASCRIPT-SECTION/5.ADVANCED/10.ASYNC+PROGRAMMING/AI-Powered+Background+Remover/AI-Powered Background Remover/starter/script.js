document.addEventListener("DOMContentLoaded", () => {
  // select important elements
  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("fileInput");
  const selectBtn = document.getElementById("selectButton");
  const originalImg = document.getElementById("originalImage");
  const processedImage = document.getElementById("processedImage");
  const removeBackgroundBtn = document.getElementById("removeBackground");
  const downloadBtn = document.getElementById("download");
  const apiKey = "e14327d536d24b63aa1ac7fd97bb23c1";
  const loading = document.querySelector(".loading");

  //hide loading
  loading.style.display = "none";
  // !drag and drop
  // ? 1.drag over
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });
  // ? 2.drag leave
  dropZone.addEventListener("dragleave", (e) => {
    dropZone.classList.remove("dragover");
  });
  // ? 3.drop
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      //   handle upload
      handleImageUpload(file);
    }
  });

  // ! click to upload
  selectBtn.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  });

  // !handle upload
  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      originalImg.src = e.target.result;
      originalImg.hidden = false;
      processedImage.hidden = true;
      removeBackgroundBtn.disabled = false;
      downloadBtn.disabled = true;
    };
    reader.readAsDataURL(file);
  };

  // !remove background
  removeBackgroundBtn.addEventListener("click", async () => {
    loading.style.display = "flex";
    try {
      // formData
      const formData = new FormData();
      // blob
      const blob = await fetch(originalImg.src).then((res) => res.blob());
      formData.append("source_image_file", blob);
      // api:https://api.slazzer.com/v2.0/remove_image_background
      const response = await fetch(
        "https://api.slazzer.com/v2.0/remove_image_background",
        {
          method: "POST",
          headers: {
            "API-KEY": `${apiKey}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const blob_response = await response.blob();
      const url = URL.createObjectURL(blob_response);
      processedImage.src = url;
      processedImage.hidden = false;
      downloadBtn.disabled = false;
    } catch (error) {
      console.error("Background removal error:", error);
      alert(
        "Oops! Something went wrong while removing the background. Please try again."
      );
    } finally {
      // hide the loading
      loading.style.display = "none";
    }
  });

  //  !download file
  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = processedImage.src;
    link.download = "processed_image.png";
    link.click();
  });
});
