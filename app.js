const colors = ["AliceBlue", "DarkOliveGreen",	"Indigo",	"MediumPurple",	"Purple",
    "AntiqueWhite",	"DarkOrange",	"Ivory",	"MediumSeaGreen",	"Red",
    "Aqua",	"DarkOrchid",	"Khaki",	"MediumSlateBlue",	"RosyBrown",
    "AquaMarine",	"DarkRed",	"Lavender",	"MediumSpringGreen",	"RoyalBlue",
    "Azure",	"DarkSalmon",	"LavenderBlush",	"MediumTurquoise",	"SaddleBrown",
    "Beige", "DarkSeaGreen",	"LawnGreen",	"MediumVioletRed",	"Salmon",
    "Bisque",	"DarkSlateBlue",	"LemonChiffon",	"MidnightBlue",	"SandyBrown",
    "Black",	"DarkSlateGray",	"LightBlue",	"MintCream",	"SeaGreen",
    "BlanchedAlmond",	"DarkTurquoise",	"LightCoral",	"MistyRose",	"SeaShe",
    "Blue",	"DarkViolet",	"LightCyan",	"Moccasin",	"Sienna",
    "BlueViolet",	"DeepPink",	"LightGoldenrodYellow",	"NavajoWhite",	"Silver",
    "Brown",	"DeepSkyBlue",	"LightGray",	"Navy",	"SkyBlue",
    "BurlyWood",	"DimGray",	"LightGreen",	"OldLace",	"SlateBlue",
    "CadetBlue",	"DodgerBlue",	"LightPink",	"Olive",	"SlateGray",
    "Chartreuse",	"FireBrick",	"LightSalmon",	"OliveDrab",	"Snow",
    "Chocolate",	"FloralWhite",	"LightSeaGreen",	"Orange",	"SpringGreen",
    "Coral",	"ForestGreen",	"LightSkyBlue",	"OrangeRed",	"SteelBlue",
    "CornFlowerBlue",	"Fuchsia",	"LightSlateGray",	"Orchid",	"Tan",
    "Cornsilk",	"Gainsboro",	"LightSteelBlue",	"PaleGoldenRod",	"Teal",
    "Crimson",	"GhostWhite",	"LightYellow",	"PaleGreen",	"Thistle",
    "Cyan",	"Gold",	"Lime",	"PaleTurquoise",	"Tomato",
    "DarkBlue",	"GoldenRod",	"LimeGreen",	"PaleVioletRed",	"Turquoise",
    "DarkCyan", "Gray",	"Linen",	"PapayaWhip",	"Violet",
    "DarkGoldenRod",	"Green",	"Magenta",	"PeachPuff","Wheat",
    "DarkGray",	"GreenYellow",	"Maroon",	"Peru",	"White",
    "DarkGreen",	"HoneyDew",	"MediumAquaMarine",	"Pink",	"WhiteSmoke",
    "DarkKhaki",	"HotPink",	"MediumBlue",	"Plum",	"Yellow",
    "DarkMagenta",	"IndianRed","MediumOrchid",	"PowderBlue",	"YellowGreen"];


const btn= document.getElementById("btn");
const color= document.querySelector(".color");

btn.addEventListener ("click", ()=>{
const randomNumber = getRandomNumber ();
console.log(randomNumber);
document.body.style.backgroundColor=colors[randomNumber];
color.textContent=colors[randomNumber];
})
function getRandomNumber (){
return Math.floor (Math.random() *colors.length);
}