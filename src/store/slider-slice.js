import { createSlice } from "@reduxjs/toolkit";

import slide1 from "../img/slider-image.png";
import slide2 from "../img/slider-image1.png"

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    slides: [
      {
        image: slide1,
        PL: {
          topTitle: "kulinarne rpa",
          bottomTitle: "z Grześkiem Zawieruchą",
          middleText: "Kucharska przygoda, która zapamietasz na całe życie",
          keypoints: [
            "Wspólne gotowanie ze zwycięzcą VIII edycji MasterChef",
            "Dwa tygodnie na wyspach południowo-zachodniej części Oceanu Indyjskiego",
          ]
        },
        EN: {
            topTitle: "culinary South Africa",
            bottomTitle: "with Grzesiek Zawierucha",
            middleText: "A cooking adventure that you will remember for a lifetime",
            keypoints: [
              "Cooking together with the winner of the 8th edition of MasterChef",
              "Two weeks on the islands of the Southwest Indian Ocean",
            ]
          },
          RU: {
            topTitle: "кулинария ЮАР",
            bottomTitle: "с Гжесеком Заверухой",
            middleText: "Кулинарное приключение, которое вы запомните на всю жизнь",
            keypoints: [
              "Готовим вместе с победителем 8-го выпуска МастерШеф",
              "Две недели на островах юго-запада Индийского океана",
            ]
          }
      },

      {
        image: slide2,
        PL: {
          topTitle: "kulinarne rpa",
          bottomTitle: "z Grześkiem Zawieruchą",
          middleText: "Kucharska przygoda, która zapamietasz na całe życie",
          keypoints: [
            "Wspólne gotowanie ze zwycięzcą VIII edycji MasterChef",
            "Dwa tygodnie na wyspach południowo-zachodniej części Oceanu Indyjskiego",
          ]
        },
        EN: {
            topTitle: "culinary South Africa",
            bottomTitle: "with Grzesiek Zawierucha",
            middleText: "A cooking adventure that you will remember for a lifetime",
            keypoints: [
              "Cooking together with the winner of the 8th edition of MasterChef",
              "Two weeks on the islands of the Southwest Indian Ocean",
            ]
          },
          RU: {
            topTitle: "кулинария ЮАР",
            bottomTitle: "с Гжесеком Заверухой",
            middleText: "Кулинарное приключение, которое вы запомните на всю жизнь",
            keypoints: [
              "Готовим вместе с победителем 8-го выпуска МастерШеф",
              "Две недели на островах юго-запада Индийского океана",
            ]
          }
      },

      {
        image: slide1,
        PL: {
          topTitle: "kulinarne rpa",
          bottomTitle: "z Grześkiem Zawieruchą",
          middleText: "Kucharska przygoda, która zapamietasz na całe życie",
          keypoints: [
            "Wspólne gotowanie ze zwycięzcą VIII edycji MasterChef",
            "Dwa tygodnie na wyspach południowo-zachodniej części Oceanu Indyjskiego",
          ]
        },
        EN: {
            topTitle: "culinary South Africa",
            bottomTitle: "with Grzesiek Zawierucha",
            middleText: "A cooking adventure that you will remember for a lifetime",
            keypoints: [
              "Cooking together with the winner of the 8th edition of MasterChef",
              "Two weeks on the islands of the Southwest Indian Ocean",
            ]
          },
          RU: {
            topTitle: "кулинария ЮАР",
            bottomTitle: "с Гжесеком Заверухой",
            middleText: "Кулинарное приключение, которое вы запомните на всю жизнь",
            keypoints: [
              "Готовим вместе с победителем 8-го выпуска МастерШеф",
              "Две недели на островах юго-запада Индийского океана",
            ]
          }
      },

      {
        image: slide1,
        PL: {
          topTitle: "kulinarne rpa",
          bottomTitle: "z Grześkiem Zawieruchą",
          middleText: "Kucharska przygoda, która zapamietasz na całe życie",
          keypoints: [
            "Wspólne gotowanie ze zwycięzcą VIII edycji MasterChef",
            "Dwa tygodnie na wyspach południowo-zachodniej części Oceanu Indyjskiego",
          ]
        },
        EN: {
            topTitle: "culinary South Africa",
            bottomTitle: "with Grzesiek Zawierucha",
            middleText: "A cooking adventure that you will remember for a lifetime",
            keypoints: [
              "Cooking together with the winner of the 8th edition of MasterChef",
              "Two weeks on the islands of the Southwest Indian Ocean",
            ]
          },
          RU: {
            topTitle: "кулинария ЮАР",
            bottomTitle: "с Гжесеком Заверухой",
            middleText: "Кулинарное приключение, которое вы запомните на всю жизнь",
            keypoints: [
              "Готовим вместе с победителем 8-го выпуска МастерШеф",
              "Две недели на островах юго-запада Индийского океана",
            ]
          }
      }
    ],
    topBar: {
      PL: 'Sprawdź nasze informacje o koronawirusie dla podróżnych',
      EN: 'Check out our Coronavirus information for travelers',
      RU: 'Ознакомьтесь с нашей информацией о коронавирусе для путешественников',
    }
  },
  reducers: {},
});

export const sliderActions = sliderSlice.actions;
export default sliderSlice