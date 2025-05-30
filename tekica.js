function prijaviSe() {
  const ime = document.getElementById("ime").value;
  const password = document.getElementById("password").value;

  if ((ime === "Dina") & (password === "123456")) {
    window.location.href = "dashboard.html";
  } else {
    alert("Neuspjela prijava.");
  }
  if (!ime || !password) {
    alert("Nedostaje ime ili lozinka!");
    return;
  }
}

const forma = document.getElementById("forma");
forma.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(forma);

  // const unosi = Object.fromEntries(formData.entries());
  // prijaviSe(unosi);
});
