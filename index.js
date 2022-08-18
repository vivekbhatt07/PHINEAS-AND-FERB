const input_box = document.querySelector(".input-box");
const output_box = document.querySelector(".output-box");
const translate_btn = document.querySelector(".translate-btn");

const textReceive = (text) => {
  return (
    "https://api.funtranslations.com/translate/ferb-latin.json" +
    "?" +
    "text=" +
    text
  );
};

translate_btn.addEventListener("click", function clickHandler() {
  fetch(textReceive(input_box.value))
    .then(function responseHandler(response) {
      return response.json();
    })
    .then(function dataHandler(data) {
      var translated = data.contents.translated;
      output_box.innerHTML = translated;
    })
    .catch(function errorHandle(error) {
      output_box.innerText = "Try Again Later:" + " Currently Facing " + error;
    });
});
