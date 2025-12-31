<script>
  document.addEventListener("DOMContentLoaded", () => {
    const videoBtn = document.getElementById("videoBtn");
    const hiddenVideo = document.getElementById("hiddenVideo");

    if (!videoBtn || !hiddenVideo) return;

    videoBtn.addEventListener("click", () => {
      hiddenVideo.style.display = "block";
      videoBtn.style.display = "none";
    });
  });
</script>