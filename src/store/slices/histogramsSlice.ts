// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { SearchOptions } from "../../types";
// import { instance } from "../../api/api.config";
// import { BASE_URL } from "../../constants/api";


// export const search = createAsyncThunk<null, SearchOptions>(
//   "search/histogramSearch",
//   async (params) => {
//     try {
//       console.log("json", JSON.stringify(params));

//       const { data } = await instance.post(
//         `${BASE_URL}/api/v1/objectsearch/histograms`,
//         JSON.stringify(params),
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log("data", data);

//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );


// const initialState = {
//   status: "idle",
//   data: null,
// };

// const histogramSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(search.fulfilled, (state, action) => {
//       state.status = "succeeded";
//       state.data = action.payload;
//     });
//     builder.addCase(search.rejected, (state) => {
//       state.status = "failed";
//     });
//   },
// });

// export default histogramSlice.reducer;





import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SearchOptions } from "../../types";
import { instance } from "../../api/api.config";
import { BASE_URL } from "../../constants/api";


export const search = createAsyncThunk<null, SearchOptions>(
  "search/histogramSearch",
  async (params) => {
    try {
      console.log("json", JSON.stringify(params));

      const { data } = await instance.post(
        `${BASE_URL}/api/v1/objectsearch/histograms`,
        JSON.stringify(params),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log("data", data);

      return data;
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error); // Логируем ошибку
      throw new Error("Не удалось выполнить запрос к API"); // Пробрасываем ошибку с сообщением
    }
  }
);


const initialState = {
  status: "idle",
  data: null,
};

const histogramSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(search.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(search.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default histogramSlice.reducer;