import React, { useEffect } from "react";
import "./index.sass";
import { Divider } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "../../../services/user.service";

//Components
import Photo from "./Photo";

const PhotosScreen = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return (
    <div id="photos-screen">
      <div className="screen-title">Photos</div>
      <Divider />
      <div className="photos">
        {photos.photos.map((photo) => (
          <Photo data={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotosScreen;
