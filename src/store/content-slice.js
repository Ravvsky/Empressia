import { createSlice } from "@reduxjs/toolkit";
import travel1 from "../img/image-travel-01.png";
import travel2 from "../img/image-travel-02.png";

const contentSlice = createSlice({
  name: "content",
  initialState: {
    images: [travel1, travel2],
    PL: {
      title: "Podróże - wychodzące poza nawias",
      description:
        "Poznaj naszą ofertę wypraw oraz niepowtarzalnych, szytych na miarę doświadczeń",
    },
    EN: {
      title: "JOURNEYS - AROUND THE BRIDGE",
      description:
        "Get to know our offer of trips and unique, tailor-made experiences",
    },
    RU: {
      title: "ПУТЕШЕСТВИЯ - ВОКРУГ МОСТА",
      description:
        "Познакомьтесь с нашим предложением поездок и уникальных, индивидуальных впечатлений",
    },
  },
  reducers: {},
});

export const contentActions = contentSlice.actions;

export default contentSlice;
