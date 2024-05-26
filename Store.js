import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './FeatureSlice/accountSlice';
import prePaymentSlice from './FeatureSlice/prePaymentSlice';

const store = configureStore({
  reducer: {
    account: accountReducer,
    prePayment: prePaymentSlice
  }
});

export default store;

/* 
rough state

state = {
  availableBalance: 1234567.00,
  plannedPayments: [
    {
      paymentId: 1234,
      categoryEmun: 'INTERNET',
      labelText: 'Internet',
      amount: 40,
      currencySymbol: '₹',
      triggerDate: '3', // show the day of the month to trigger this  
    }
  ],
  caraosalContent: [{
    contentId: 2345,
    headingText: 'Set your Budget',
    subHeadingText: 'Take control of your finance'
  }]
}

*/