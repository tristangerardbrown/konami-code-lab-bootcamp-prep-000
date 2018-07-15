const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

  init();

    function init() {
      let idx = 0
      document.body.addEventListener("keydown", (e) => {
        const key = e.key