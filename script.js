document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const input = document.querySelector(".input");
  const answer = document.querySelector(".answer");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = input.value;

    if (inputValue == "test") {
      console.log("right");
      answer.innerHTML =
        "<a href='https://goo.gl/maps/6R4FBxWpeU9M3eAE9?coh=178573&entry=tt' > Your next step</a>";
    } else {
      answer.innerHTML = "wrong";
      console.log("wrong");
    }
    console.log(inputValue);
    input.value = "";
  });
});
