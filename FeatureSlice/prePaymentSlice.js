import { createSlice } from '@reduxjs/toolkit'

const prePaymentSlice = createSlice({
    name: 'account',
    initialState: [
        {
            paymentId: 1234,
            categoryEmun: 'INTERNET',
            labelText: 'Internet',
            amount: 40,
            currencySymbol: '₹',
            triggerDate: '3', // show the day of the month to trigger this  
        },
    ],
    reducers: {
        addNewPrePayment: (state, action) => {
            const paymentObj = action?.payload?.value;

            if (paymentObj) {
                const newId = state.length > 0 ? state[state.length - 1] + 1 : 100;
                state.push({ ...paymentObj, paymentId: newId, currencySymbol: '₹' });
            }

        },
        removePrePayment: (state, action) => {
            const idToBeRemoved = action?.payload?.paymentId;

            if (Number(idToBeRemoved) >= 0) state.filter((id) => id != idToBeRemoved);

        },
        modifyPrePayment: (state, action) => {
            const paymentObj = action?.payload?.value;

            if (paymentObj) {
                const valueToBeUpdated = state.find((id) => id === paymentObj.paymentId);
                valueToBeUpdated = { ...paymentObj, paymentId: paymentObj.paymentId }; // guardrail to never accidently edit paymentId
            }
        },
    }
});


export const { addNewPrePayment, removePrePayment, modifyPrePayment } = prePaymentSlice.actions;
export default prePaymentSlice.reducer;