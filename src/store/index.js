import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "./content-slice";
import footerSlice from "./footer-slice";
import languageSlice from "./language-slice";
import quoteSlice from "./quote-slice";
import sliderSlice from "./slider-slice";
import travelsSlice from "./travels-slice";

const store = configureStore({
  reducer: {
    language: languageSlice.reducer,
    footer: footerSlice.reducer,
    travels: travelsSlice.reducer,
    quote: quoteSlice.reducer,
    content: contentSlice.reducer,
    slider: sliderSlice.reducer
  },
});

export default store;
