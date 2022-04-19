import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: {},
    country: '',
    loading: true,
    error: ''
}

export const fetchAsyncData = createAsyncThunk('dataSlice/fetchAsyncData', async (value = 0, { getState }) => {
    const { country } = getState().data;
    try {
        let fetchURL = await country ? `https://covid19.mathdro.id/api/countries/${country}` : 'https://covid19.mathdro.id/api';
        const { data } = await axios.get(fetchURL);
        return data;
    } catch (err) {
        return err.message;
    }
});

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        changeCountry: (state, action) => {
            state.country = action.payload
        }
    },
    extraReducers: {
        [fetchAsyncData.pending]: (state) => {
            state.loading = true;
        },
        [fetchAsyncData.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        [fetchAsyncData.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
    }
});

export const { changeCountry } = dataSlice.actions;

export default dataSlice.reducer;