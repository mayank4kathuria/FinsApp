import { createSlice } from '@reduxjs/toolkit';


const cardsSlice = createSlice({
    name: 'allCards',
    initialState: {
        availableBalance: 1234567.50, // net avaiable balance across all the cards
        currencySymbol: '₹',
        cards: [
            {
                cardId: 1991,
                cardNo: 1122334455667788,
                cardNoInText: "1122 3344 5566 7788",
                cardNetwork: 'Visa',
                cardNetworkEnum: 'VISA',
                nameOnCard: 'Test 12',
                cardExpiry: 1720872264, // epooch value
                cardExpiryInText: '09/2024',
                cardColor: 'bg-indigo-500',
                totalIncomeAmount: 10000,
                totalOutgoneAmount: 7000,
                transactions: [
                    {
                        id: 101,
                        name: "Airbnb - hostel",
                        category: 'Housing',
                        typeEnum: 'CREDIT',
                        amount: 4999,
                        date: 1720872264,
                        dateString: '24 Feb, 2024',
                    },
                    {
                        id: 102,
                        name: "Uber - Ride",
                        category: 'Transportation',
                        typeEnum: 'CREDIT',
                        amount: 357,
                        date: 1720872264,
                        dateString: '23 Feb, 2024',
                    },
                    {
                        id: 101,
                        name: "Airbnb - hostel",
                        category: 'Housing',
                        typeEnum: 'CREDIT',
                        amount: 4999,
                        date: 1720872264,
                        dateString: '24 Feb, 2024',
                    },
                    {
                        id: 102,
                        name: "Uber - Ride",
                        category: 'Transportation',
                        typeEnum: 'CREDIT',
                        amount: 357,
                        date: 1720872264,
                        dateString: '23 Feb, 2024',
                    },
                    {
                        id: 101,
                        name: "Airbnb - hostel",
                        category: 'Housing',
                        typeEnum: 'CREDIT',
                        amount: 4999,
                        date: 1720872264,
                        dateString: '24 Feb, 2024',
                    },
                    {
                        id: 102,
                        name: "Uber - Ride",
                        category: 'Transportation',
                        typeEnum: 'CREDIT',
                        amount: 357,
                        date: 1720872264,
                        dateString: '23 Feb, 2024',
                    },
                    {
                        id: 101,
                        name: "Airbnb - hostel",
                        category: 'Housing',
                        typeEnum: 'CREDIT',
                        amount: 4999,
                        date: 1720872264,
                        dateString: '24 Feb, 2024',
                    },
                    {
                        id: 102,
                        name: "Uber - Ride",
                        category: 'Transportation',
                        typeEnum: 'CREDIT',
                        amount: 357,
                        date: 1720872264,
                        dateString: '23 Feb, 2024',
                    }
                ]
            },
            {
                cardId: 2001,
                cardNo: 1122334455667700,
                cardNoInText: "1122 3344 5566 7700",
                cardNetwork: 'Rupay',
                cardNetworkEnum: 'RUPAY',
                nameOnCard: 'Test 22',
                cardExpiry: 1720872264, // epooch value
                cardExpiryInText: '03/2026',
                cardColor: 'bg-sky-500',
                totalIncomeAmount: 34000,
                totalOutgoneAmount: 21000,
                transactions: [
                    {
                        id: 1011,
                        name: "Airbnb - hostel",
                        category: 'Housing',
                        typeEnum: 'CREDIT',
                        amount: 4999,
                        date: 1720872264,
                        dateString: '24 Feb, 2024',
                    },
                    {
                        id: 1021,
                        name: "Uber - Ride",
                        category: 'Transportation',
                        typeEnum: 'CREDIT',
                        amount: 357,
                        date: 1720872264,
                        dateString: '23 Feb, 2024',
                    },
                    {
                        id: 1022,
                        name: "Uber - Ride",
                        category: 'Transportation',
                        typeEnum: 'CREDIT',
                        amount: 357,
                        date: 1720872264,
                        dateString: '23 Feb, 2024',
                    }
                ]
            }
        ]
    },
    reducers: {
        addNewCard: (state, action) => {
            // const value = action?.payload;
            // if (value && Number(value) > 0) state.availableBalance += Number(value);

        },
        removeCard: (state, action) => {
            // const value = action?.payload;
            // if (value && Number(value) > 0) state.availableBalance += Number(value);

        },
        addNewTransaction: (state, action) => {
            // const value = action?.payload;
            // if (value && Number(value) > 0) state.availableBalance += Number(value);
        },
        removeTransaction: (state, action) => {
            // const value = action?.payload;
            // if (value && Number(value) > 0) state.availableBalance += Number(value);
        },
        getAllTransactionsList: (state, action) => {
            // const value = action?.payload;
            // if (value && Number(value) > 0) state.availableBalance -= Number(value);
        },
    }
});


export const { addNewCard, removeCard, addNewTransaction, removeTransaction, getAllTransactionsList } = cardsSlice.actions;
export default cardsSlice.reducer;