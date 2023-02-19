import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.contacts.push(payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    remoteContact(state, { payload }) {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
  },
});
const persistConfig = {
  key: 'root',
  storage,
};

// export const contactsReducer = contactsSlice.reducer;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addContact, remoteContact } = contactsSlice.actions;
