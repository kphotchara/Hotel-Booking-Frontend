import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookState = {
    bookItems: BookingItem[]
}
const initialState:BookState = {bookItems: []}

export const bookSlice = createSlice({
    name : "book",
    initialState,
    reducers :{
        addBooking: (state, action:PayloadAction<BookingItem>)=>{
            const remain = state.bookItems.filter((obj) => {
                return obj.hotel !== action.payload.hotel;
            });
            state.bookItems = remain ;
            state.bookItems.push(action.payload);

            // if (sameItem.length === 0){
            //     state.bookItems.push(action.payload);
            // }
            
        },
        removeBooking: (state, action:PayloadAction<string>)=>{
            const remainItems = state.bookItems.filter(obj => {
                return ((obj.id !== action.payload))
            })
            state.bookItems = remainItems
        }
    }
})

export const {addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer