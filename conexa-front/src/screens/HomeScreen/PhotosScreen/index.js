import React, { useEffect, useState } from "react";
import "./index.sass";
import { Divider } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "../../../services/user.service";

//Components
import Photo from "./Photo";
import Loading from "../../../components/Loading";
import PaginationButtons from "../../../components/PaginationButtons";

const PhotosScreen = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchPhotos(offset));
  }, []);

  return (
    <div id="photos-screen">
      <div className="screen-title">Photos</div>
      <Divider />
      {photos.loading ? (
        <Loading />
      ) : (
        <div className="photos">
          {photos.photos.map((photo) => (
            <Photo key={photo.id} data={photo} />
          ))}
        </div>
      )}
      <PaginationButtons offset={offset} setOffset={setOffset} />
    </div>
  );
};

export default PhotosScreen;
