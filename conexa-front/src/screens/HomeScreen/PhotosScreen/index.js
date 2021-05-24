import React, { useEffect, useState } from "react";
import "./index.sass";
import { Divider } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "../../../services/user.service";

//Components
import Photo from "./Photo";
import PhotoModal from "./PhotoModal";
import Loading from "../../../components/Loading";
import PaginationButtons from "../../../components/PaginationButtons";

const PhotosScreen = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const [photoModal, setPhotoModal] = useState({
    photo: null,
    state: false,
  });
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchPhotos(offset));
  }, []);

  return (
    <div id="photos-screen">
      {photoModal.state === true && (
        <PhotoModal
          setPhotoModal={setPhotoModal}
          photoModal={photoModal}
          photo={photoModal.photo}
        />
      )}
      <div className="screen-title">Photos</div>
      <Divider />
      {photos.loading ? (
        <Loading />
      ) : (
        <div className="photos">
          {photos.photos.map((photo, i) => (
            <Photo
              i={i}
              key={photo.id}
              data={photo}
              setPhotoModal={setPhotoModal}
            />
          ))}
        </div>
      )}
      <PaginationButtons
        offset={offset}
        setOffset={setOffset}
        fetchData={fetchPhotos}
      />
    </div>
  );
};

export default PhotosScreen;
