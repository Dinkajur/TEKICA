function prijaviSe() {
  const ime = document.getElementById("ime").value;
  const password = document.getElementById("password").value;

  if (ime === "" || password === "") {
    alert("Potrebno unijeti podatke.");
  } else {
    console.log(ime + " je uspješno prijavljen/a.");
  }
}

const forma = document.getElementById("forma");
forma.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(forma);

  const unosi = Object.fromEntries(formData.entries());
  // prijaviSe(unosi);
});
