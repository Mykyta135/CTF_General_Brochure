import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = true;

const isWorldCafeSelectedReducer = createSlice({
    name: 'selectedWorldCafe',
    initialState,
    reducers: {
        selectedWorldCafe: (state) => {
            return !state; // Toggling the state value
        },
    },
});

export const { selectedWorldCafe } = isWorldCafeSelectedReducer.actions;
export default isWorldCafeSelectedReducer.reducer;