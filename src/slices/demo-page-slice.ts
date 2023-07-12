import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import CustomerService from 'src/api/customer-service';
import { RootState } from 'src/redux/store';
import { Customer } from 'src/interfaces/customer';
import { MaterialList, Material, initMaterialList } from 'src/interfaces/material';
const _ = require('lodash');

export interface DemoPageState {
  customer: Customer;
  customerData: Customer[];
  loadingCustomerData: boolean;
  materialList: MaterialList;
  materialData: Material[];
  materialSubmitId: string;
  loadingMaterialList: boolean;
  loadingMaterialData: boolean;
}

export const initialState: DemoPageState = {
  customer: {
    company: '',
    address: '',
    city: '',
    postcode: 0,
    state: '',
    name: '',
    phone: '',
    fax: '',
    email: '',
    purchase_order: 0,
    reference: '',
    sales_rep_id: 0,
  },
  customerData: [],
  loadingCustomerData: false,
  materialList: _.cloneDeep(initMaterialList),
  materialData: [],
  materialSubmitId: '',
  loadingMaterialList: false,
  loadingMaterialData: false,
};

export const setInitCustomerData = createAsyncThunk('demo-page/setInitCustomerData', async () => {
  const response = await CustomerService.get();
  return response.data as Array<Customer>;
});

export const newCustomer = createAsyncThunk('demo-page/newCustomer', async (customer, apiThunk) => {
  const state = apiThunk.getState() as RootState;
  const customerPost = state.demoPage.customer;
  const response = await CustomerService.add(customerPost);
  if (response) {
    alert('Successfully!!!');
  }
  return response.data as Customer;
});

export const DemoPageSlice = createSlice({
  name: 'demoPage',
  initialState,
  reducers: {
    setCustomer: (state, action: PayloadAction<Customer>) => {
      state.customer = action.payload;
    },
    setCustomerData: (state, action: PayloadAction<Customer[]>) => {
      state.customerData = action.payload;
    },
    setMaterialData: (state, action: PayloadAction<Material[]>) => {
      state.materialData = action.payload;
    },
    setMaterialSubmitId: (state, action: PayloadAction<string>) => {
      state.materialSubmitId = action.payload;
    },
    setMaterialList: (state, action: PayloadAction<MaterialList>) => {
      state.materialList = action.payload;
    },
    updateMaterialList: (state, action: PayloadAction<MaterialList>) => {
      state.materialList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setInitCustomerData.pending, (state) => {
        state.loadingCustomerData = true;
      })
      .addCase(setInitCustomerData.fulfilled, (state, action) => {
        state.loadingCustomerData = false;
        state.customerData = action.payload;
      })
      .addCase(setInitCustomerData.rejected, (state, action) => {
        state.loadingCustomerData = false;
      });
  },
});

export const selectDemoPageState$ = (state: RootState) => state.demoPage;

export const {
  setCustomer,
  setCustomerData,
  setMaterialData,
  setMaterialList,
  updateMaterialList,
  setMaterialSubmitId,
} = DemoPageSlice.actions;
export default DemoPageSlice.reducer;
