import { createSlice } from "@reduxjs/toolkit";

const footerSlice = createSlice({
  name: "footer",
  initialState: {
    PL: {
      title: "Chcesz przeżyć niepowtarzalne chwile?",
      firstTab: {title:'NuLuxury', names:["Hotele", "Safari", "Rejsy", "Wellbeing", "Specjalne"]},
      secondTab: {title:'NuPower', names:["Wyprawy"]},
      thirdTab: {title: 'Sprawdź też', names:["O nas", "Inspiracje", "Blog", "Kontakt"]},
      fourthTab: {title:'Skontaktuj się', names:["000 000 000", "biuro@nupowerhouse.pl"]},
    },
    EN: {
      title: "Do you want to experience unique moments?",
      firstTab: {title:'NuLuxury', names:["Hotels", "Safari", "Cruises", "Wellbeing", "Special"]},
      secondTab: {title: 'NuPower', names:["Expeditions"]},
      thirdTab: {title: 'Check it out', names:["About us", "Inspirations", "Blog", "Contact"]},
      fourthTab: {title: 'Contact', names:["000 000 000", "biuro@nupowerhouse.pl"]},
    },
    RU: {
        title: "Хотите пережить уникальные моменты?",
        firstTab: {title:'NuLuxury', names:["отели", "Сафари", "Круизы", "Благополучие", "Особое"]},
        secondTab: {title: 'NuPower', names:["Экспедиции"]},
        thirdTab: {title: 'Проверьте это тоже', names:["О нас", "Вдохновение", "Блог", "Контакты"]},
        fourthTab: {title: 'контакт', names:["000 000 000", "biuro@nupowerhouse.pl"]},
      }
  },
  reducers: {
    change(state, action) {
      state.language = action.payload;
    },
  },
});

export const languageActions = footerSlice.actions;

export default footerSlice;
