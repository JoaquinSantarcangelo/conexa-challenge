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
  //Hooks - Redux
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);

  //Hooks - useState
  const [photoModal, setPhotoModal] = useState({
    photo: null,
    state: false,
  });
  const [offset, setOffset] = useState(0);

  //Hooks - useEffect
  useEffect(() => {
    dispatch(fetchPhotos(offset));
  }, []);

  return (
    <div id="photos-screen" className="screen">

      {/* Individual Photo Modal */}
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

      {/* Pagination Interface */}
      <PaginationButtons
        offset={offset}
        setOffset={setOffset}
        fetchData={fetchPhotos}
      />
    </div>
  );
};

export default PhotosScreen;
