import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postImage } from "../myRedux/imagedetailsSlice";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import "./input.css";

const Heading = styled.h5`
  width: 100%;
  margin: auto;
  text-align: center;
  color: rgb(23, 36, 42);
  margin: 30px 0 30px 0;
  font-weight: 800;
  font-size: 25px;
`;

const Input = styled.input`
  width: 400px;
  height: 25px;
  margin: auto;
  color: black;
  font-size: 12px;
  font-weight: 600;
`;

const Box = styled.div`
  width: 600px;
  margin: auto;
  background: rgb(202, 161, 220);
  text-align: center;
  box-shadow: 0 15px 10px rgb(23, 36, 42);
  border-radius: 2px;
  padding: 5px;
  margin-top: 20px;
  height: 280px;
`;

const ImageBox = styled.div`
  width: 500px;
  margin: auto;
`;

const Para = styled.p`
  text-align: center;
  align-items: center;
  font-size: 21px;
  font-weight: 600;
  color: black;
  margin-top: 30px;
`;
const ParaSuccess = styled.p`
  text-align: center;
  align-items: center;
  font-size: 21px;
  font-weight: 800;
  color: Green;
  margin-top: 30px;
`;

export const MyInput = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const titleRef = useRef(null);

  const myImage = useSelector((store) => store.image_urls);

  const myTitle = useSelector((store) => store.title);

  const myDescription = useSelector((store) => store.description);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("productImages", file);
    formData.append("title", title);
    formData.append("description", description);

    // console.log("formDatajans:", formData)

    dispatch(postImage(formData));

    setLoading(true);
  };

  //style

  return (
    <>
      <Box>
        <Heading>My Image Uploader</Heading>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <Input
              className="form-control"
              type="text"
              ref={titleRef}
              name="title"
              placeholder="Add title of the image"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <Input
              className="form-control"
              type="text"
              name="description"
              placeholder=" Add description of the image"
              onChange={(e) => {
                // console.log("description:", e.target.value)
                setDescription(e.target.value);
              }}
            />
          </div>

          <div class="mb-3">
            {/* <label for="formFileMultiple" class="form-label"></label> */}
            <input
              className="form-control, fileInput"
              type="file"
              name="productImages"
              id="formFileMultiple"
              multiple
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <Button
            style={{ background: "purple" }}
            onClick={() => {
              setLoading(true);
              // titleRef.current.placeholder = "Add"
            }}
            variant="contained"
            type="submit"
          >
            Save
          </Button>
        </form>
      </Box>
      <ImageBox>
        {isLoading ? (
          <>
            <ParaSuccess>
              <DownloadDoneIcon /> Image Uploaded
            </ParaSuccess>
            <img src={myImage} className="uploadedImage" />
          </>
        ) : (
          <Para>Please Upload an Image...</Para>
        )}
      </ImageBox>
    </>
  );
};
