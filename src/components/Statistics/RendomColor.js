// export function setRandomColors(isInitial) {
//     const colors = isInitial ? getColorsFromHash() : [];

// cols.forEach((col, index) => {   
//     const text = col.querySelector('h2');  // перевірка кольору напису 
    
//     const color = isInitial ? colors[index] ? colors[index] : getRandomHexColor() : getRandomHexColor(); // chroma.random()

//     colors.push(color)

//     text.textContent = color;      // зміна тексту 
//     col.style.background = color;  //зміна кольору

//     setTextColor(text, color);  // зміна кольору тексту  
// })


// }

// // функція зміни кольору текста
// function setTextColor(text, color) {
//  const luminance = chroma(color).luminance();
//  text.style.color = luminance > 0.5 ? 'black' : 'white';
// }

export function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }