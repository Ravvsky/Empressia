import { createSlice } from "@reduxjs/toolkit";
import slide1 from "../img/slider-images/slider1.png";
import slide2 from "../img/slider-images/2.webp";
import slide3 from "../img/slider-images/3.webp";
import slide4 from "../img/slider-images/4.webp";
import slide5 from "../img/slider-images/5.webp";
import slide6 from "../img/slider-images/6.webp";

const travelsSlice = createSlice({
  name: "travels",
  initialState: {
    slides: [
      {
        number: "01",
        PL: {
          title: "FINO ALLA FINE Włoska robota",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        EN: {
          title: "FINO ALLA FINE The Italian job",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        RU: {
          title: "FINO ALLA FINE итальянская работа",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        image: slide1,
      },
      {
        number: "02",
        PL: {
          title: "Festiwal Pasola na wyspie Sumba",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        EN: {
          title: "Pasola festival on the island of Sumba",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        RU: {
          title: "Фестиваль пасола на острове Сумба",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        image: slide2,
      },
      {
        number: "03",
        PL: {
          title: "Juktańskie cenoty - bramy do nieba",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        EN: {
          title: "Juktanian cenotes - gates to heaven",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        RU: {
          title: "Юктанские сеноты - врата в рай",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        image: slide3,
      },
      {
        number: "04",
        PL: {
          title: "Meksyk - nie złość zmarłego",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        EN: {
          title: "Mexico - do not anger the deceased",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        RU: {
          title: "Мексика - не гневите покойника",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        image: slide4,
      },
      {
        number: "05",
        PL: {
          title: "Morscy nomadzi - Bajau",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        EN: {
          title: "Sea nomads - Bajau",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        RU: {
          title: "Морские кочевники - Баджау",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        image: slide5,
      },
      {
        number: "06",
        PL: {
          title: "Sen na Jawie",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        EN: {
          title: "Daydream",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        RU: {
          title: "мечта",
          description:
            "Zajawka lub krótki opis. When people talk about Tuscany's rolling hills, they're probably picturing Val d'Orcia, a World Heritage Site which offers miles and miles of barely-touched landscape, dotted with photogenic villages and ancient castles and fortresses.",
        },
        image: slide6,
      },
    ],
  },
  reducers: {},
});

export const travelsActions = travelsSlice.actions;

export default travelsSlice;
