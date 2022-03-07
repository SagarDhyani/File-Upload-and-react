import { CollectionsOutlined } from "@mui/icons-material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postImage = createAsyncThunk(
  "imagedetails/postImage",

  async (formData) => {
    console.log("formdatajaska:", formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const response = await axios.post(
      "http://localhost:2345/image/upload",
      formData,
      config
    );
    console.log("response:", response.data);

    return response;
  }
);


export const getAllFeeds = createAsyncThunk(
  "image_details/getAllFeeds",
  async() => {

    const response = await axios.get("http://localhost:2345/image/feeds")

    console.log("imageresponse:", response)

    return response
  }
)

const imagedetailsSlice = createSlice({
  name: "image_details",

  initialState: {
    title: "",
    description: "",
    image_urls: "",
  },

  extraReducers: {
    [postImage.pending]: () => {
      console.log("pending");
    },

    [postImage.fulfilled]: (state, action) => {
      console.log("state:", state.description);

      state.description = action.payload.data.description;
      //   state.title = action.payload.data.title;

      state.image_urls = action.payload.data.image_urls;
      //   state.image_urls = action.payload.image_urls
    },

    [postImage.rejected]: (state, action) => {
      CollectionsOutlined.log("rejected");
    },
  },
});

export default imagedetailsSlice.reducer;
