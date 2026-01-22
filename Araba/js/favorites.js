function Arabalar(img ,baslik,aciklama,ozellikler ){
    this.img = img
    this.baslik = baslik
    this.aciklama = aciklama 
    this.ozellikler = ozellikler
    
}

const car1 = new Arabalar("../js/car-gallery/1968_Dodge_Charger_R-T.jpg","Dodge Charger R/T" ,"Performans odaklı Amerikan muscle car" ,["5.7L HEMI V8 motor", "370 HP", "0-100 km/s 5.1 sn", "240 km/s maksimum hız"])


const car2 = new Arabalar("../js/car-gallery/1993_Toyota_Supra_(62041).jpg","Toyota Supra " ,"Toyota Supra, özellikle spor performansı ve sürüş keyfi ile bilinen bir Japon spor otomobili" ,["Motor: 3.0L turbo inline-6 (son nesil)" ,"Güç: Yaklaşık 382 beygir" ,"Şanzıman: 8 ileri otomatik" ,"0-100 km/s: Yaklaşık 3.9 saniye" ,"Maksimum hız: ~250 km/s (elektronik sınırlı)"])


const car3 = new Arabalar("../js/car-gallery/Nissan GT-R (R35).avif","Nissan GT-R (R35)", "Nissan GT-R (R35) gerçekten efsanevi bir performans canavarı",[
    "Motor: 3.8L V6 Twin-Turbo","Güç: Yaklaşık 565–600 HP (model ve pakete göre değişir)","Tork: ~633–652 Nm","Şanzıman: 6 ileri çift kavramalı otomatik (dual-clutch)","0-100 km/s: Yaklaşık 2.9–3.2 saniye","Maksimum hız: ~315 km/s"
])
const car4 = new Arabalar(
  "../js/car-gallery/BMW_M4_Competition.avif",
  "BMW M4 Competition",
  "BMW M4 Competition, günlük kullanım ile pist performansını aynı gövdede sunan agresif bir spor otomobildir.",
  [
    "Motor: 3.0L Twin-Turbo Inline-6",
    "Güç: 510 HP",
    "Şanzıman: 8 ileri M Steptronic",
    "0-100 km/s: ~3.9 saniye",
    "Maksimum hız: 290 km/s (M Driver's Package)"
  ]
);

const carlist = [car1, car2, car3, car4];

const carListDiv = document.querySelector(".carlist");
const carListContainer = document.querySelector(".carlist");

carlist.forEach(car => {
  const carDiv = document.createElement("div");
  carDiv.className = "car";

  carDiv.innerHTML = `
    <img src="${car.img}" alt="${car.baslik}">
    <div class="car-content">
      <h1>${car.baslik}</h1>
      <p>${car.aciklama}</p>
      <ul>
        ${car.ozellikler.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;

  carListContainer.appendChild(carDiv);
});
