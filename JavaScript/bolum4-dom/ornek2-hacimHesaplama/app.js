function hesapla() {
  const r = document.getElementById("r").value;
  // ! classlara erisim icin .classAdi
  // ! id'li bir elemana erismek icin #id
  const h = document.querySelector(".h").value;
  const hacim = document.querySelector(".hacim");
  const sonuc = (Math.PI * r * r * h).toFixed(2);
  console.log(sonuc, r, h);
  document.querySelector(".hacim").textContent = sonuc;
}

const buton = document.querySelector(".btn");
buton.style.color = "red";
buton.style.backgroundColor = "black";
buton.style.width = "100px";