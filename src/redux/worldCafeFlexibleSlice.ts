import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = true;

const isWorldCafeAdditionalSelectedReducer = createSlice({
    name: 'selectedAdditionalWorldCafe',
    initialState,
    reducers: {
        selectedWorldCafeAdditional: (state) => {
            return !state; // Toggling the state value
        },
    },
});

export const { selectedWorldCafeAdditional } = isWorldCafeAdditionalSelectedReducer.actions;
export default isWorldCafeAdditionalSelectedReducer.reducer;