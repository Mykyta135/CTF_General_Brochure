import { configureStore } from '@reduxjs/toolkit';

import sponsorshipReducer from './sponsorshipSlice';
import optionalPacketsReducer from './optionalSlice';
import modalReducer from './modalSlice';
import selectedCheckboxesReducer from './flexibleSlice';
import isWorldCafeSelectedReducer from './worldCafeSlice'
import isAdditionalWorldCafeSelected from './worldCafeFlexibleSlice'

const store = configureStore({
    reducer: {
        sponsorship: sponsorshipReducer,
        optionalPackets: optionalPacketsReducer,
        modal: modalReducer,
        selectedCheckboxes: selectedCheckboxesReducer,
        isWorldCafeSelected: isWorldCafeSelectedReducer,
        isAdditionalWorldCafeSelected: isAdditionalWorldCafeSelected
    },
    
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
