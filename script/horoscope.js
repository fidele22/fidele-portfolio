"use strict";

const arrObj = [
  {
    sign: "Aquarius",
    image: "http://www.astrology-zodiac-signs.com/images/aquarius.jpg",
    horoscope:
      "The year 2023 is full of changes, Aquarius, and they all make you more influential and important. You may not always take yourself seriously, but please take what you do seriously, and see great progress and success this year.",
    monthTime: ["01", "02"],
    day: ["20", "18"],
  },
  {
    sign: "Pisces",
    image: "http://www.astrology-zodiac-signs.com/images/pisces.jpg",
    horoscope:
      "The year 2023 is one for hard work, Pisces, and the stars are working hard for you. On New Year's Day, the moon, Mars, Jupiter, and Neptune are all in water signs. You have keen sensitivities and sharp insights and intuition all year long.",
    monthTime: ["02", "03"],
    day: ["19", "20"],
  },
  {
    sign: "Aries",
    image: "http://www.astrology-zodiac-signs.com/images/aries.jpg",
    horoscope:
      "The year 2023 is one for hard work, Pisces, and the stars are working hard for you. On New Year's Day, the moon, Mars, Jupiter, and Neptune are all in water signs. You have keen sensitivities and sharp insights and intuition all year long.",
    monthTime: ["03", "04"],
    day: ["21", "19"],
  },
  {
    sign: "Taurus",
    image: "http://www.astrology-zodiac-signs.com/images/taurus.jpg",
    horoscope:
      "Rock your world in 2023! Your ruling planet Venus is one of the best connected and most powerful forces in the sky this year.",
    monthTime: ["04", "05"],
    day: ["20", "20"],
  },
  {
    sign: "Gemini",
    image: "http://www.astrology-zodiac-signs.com/images/gemini.jpg",
    horoscope:
      "Welcome to bustling, beautiful 2023, Gemini! You'll have the chance to connect with more people and engage in more new situations as never before.",
    monthTime: ["05", "06"],
    day: ["21", "20"],
  },
  {
    sign: "Cancer",
    image: "http://www.astrology-zodiac-signs.com/images/cancer.jpg",
    horoscope:
      "The year 2023 is an open book for you, Cancer. You have access to all that the stars have to offer. If it's work, family, finances, love, or anything else, there will be a planet ready to give you a hand.",
    monthTime: ["06", "07"],
    day: ["21", "22"],
  },
  {
    sign: "Leo",
    image: "http://www.astrology-zodiac-signs.com/images/leo.jpg",
    horoscope:
      "The year 2023 blazes with energy, challenges, and opportunities of the most practical and far-reaching kind. You're looking at a golden year, Leo!",
    monthTime: ["07", "08"],
    day: ["23", "22"],
  },
  {
    sign: "Virgo",
    image: "http://www.astrology-zodiac-signs.com/images/virgo.jpg",
    horoscope:
      "Virgo, 2023 is your year to get intense! Intensity has its ups and downs, and you can make the most of the ups while coping skillfully with any downs.",
    monthTime: ["08", "9"],
    day: ["23", "22"],
  },
  {
    sign: "Libra",
    image: "http://www.astrology-zodiac-signs.com/images/libra.jpg",
    horoscope:
      "The focus is on you for 2023, Libra. Be prepared for people to look to you for advice and leadership. It will be easy and it will come naturally, so relax and enjoy the attention.",
    monthTime: ["09", "10"],
    day: ["23", "22"],
  },
  {
    sign: "Scorpio",
    image: "http://www.astrology-zodiac-signs.com/images/scorpio.jpg",
    horoscope:
      "You're a powerful person and a force of nature in 2023, Scorpio! The year begins with your planet Mars conjoined with influential Jupiter in Scorpio. Once you decide on a plan of action, nothing and no one will be able to slow you down.",
    monthTime: ["10", "11"],
    day: ["23", "21"],
  },
  {
    sign: "Sagittarius",
    image: "http://www.astrology-zodiac-signs.com/images/sagittarius.jpg",
    horoscope:
      "Enter 2023 moving in high speed, Sagittarius, and accelerate from there. Your planet Jupiter is powerful and ambitious and will keep you going full blast in the direction that moves you forward.",
    monthTime: ["11", "12"],
    day: ["22", "21"],
  },
  {
    sign: "Capricorn",
    image: "http://www.astrology-zodiac-signs.com/images/capricorn.jpg",
    horoscope:
      "Life makes more and better sense in 2023, Capricorn. A clearer perspective will make it much easier to achieve your goals and dreams.",
    monthTime: ["12", "01"],
    day: ["22", "19"],
  },
];


const btn = document.querySelector(".btn");
const horoName = document.querySelector(".horo-name");
const horoImage = document.querySelector(".horo-pic");
const horoDescript = document.querySelector(".horo-descript");
const horoContainer = document.querySelector('.hide')

const horoScope = function () {
	let dateField = document.getElementById("dateField").value
	let inputvalue = dateField.split("-");
	for (let i = 0; i < arrObj.length; i++) {
		if (
			((inputvalue[1] === arrObj[i].monthTime[0]) &&
			(inputvalue[2] >= arrObj[i].day[0])) ||
			((inputvalue[1] === arrObj[i].monthTime[1]) &&
			(inputvalue[2] <= arrObj[i].day[1]))
			) {
				horoName.textContent = arrObj[i].sign
				horoImage.src = arrObj[i].image;
				horoDescript.textContent = arrObj[i].horoscope
				horoContainer.style.opacity = 1;
				//=========================animation======================/////////////
				horoImage .animate({ opacity: [0, 1] }, { duration: 2000, iterations: 1, easing: "ease-out" })
				.onfinish = (e) => {
					 e.target.effect.target.style.opacity = 1;
				};
				horoName.animate({ opacity: [0, 1] }, { duration: 3000, iterations: 1, easing: "ease-out" })
				.onfinish = (e) => {
					 e.target.effect.target.style.opacity = 1;
				};
				horoDescript.animate({ opacity: [0, 1] }, { duration: 2000, iterations: 1, easing: "ease-out" })
				.onfinish = (e) => {
					 e.target.effect.target.style.opacity = 1;
				};
			}
		}
	};
	btn.addEventListener("click", function () {
	horoScope();

});
