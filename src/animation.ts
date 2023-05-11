import animation from "animejs";

(() => {
  const anime = animation({
    targets: ".anime",
    translateX: 250,
    rotate: "1turn",
    backgroundColor: "#FFF",
    duration: 8000,
    loop: true,
  });
  anime.play();

  console.log(" animation.ts: anime: ");
})();
