const escuderiasF1 = [
    { monoplaza: 'Mercedes W12', equipo: 'Mercedes Benz', price: "$1999.90"},
    { monoplaza: 'Red Bull RB16B', equipo: 'Red Bull', price: "$2560.90" },
    { monoplaza: 'Aston Martin AMR21', equipo: 'Aston Martin', price: "$3999.90" }
  ];


const textCar = document.querySelectorAll(".text-car");
const textMonoplaza = document.querySelectorAll(".text-team")
const textPrice = document.querySelectorAll(".text-price");


textCar.forEach((elemento, index) => elemento.textContent = escuderiasF1[index].monoplaza); 

textMonoplaza.forEach((elemento, index) => elemento.textContent = escuderiasF1[index].equipo);

textPrice.forEach((elemento, index) => elemento.textContent = escuderiasF1[index].price);