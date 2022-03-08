import { createSlice } from "@reduxjs/toolkit";
import background from "../img/quote-background.png"
const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        background: background,
        text: {
            PL: 'Nie marnuj czasu na planowanie i rezerwację — zostaw to nam',
            EN: "Don't waste time planning and booking — leave it to us",
            RU: "Не тратьте время на планирование и бронирование — оставьте это нам"
        }
    },
    reducers: {}

});

export const quoteActions = quoteSlice.actions;

export default quoteSlice