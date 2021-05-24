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

const photo = {
  albumId: 1,
  id: 3,
  title: "officia porro iure quia iusto qui ipsa ut modi",
  url: "https://via.placeholder.com/600/24f355",
  thumbnailUrl: "https://via.placeholder.com/150/24f355",
};

const PhotosScreen = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const [photoModal, setPhotoModal] = useState({
    photo: photo,
    state: true,
  });
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchPhotos(offset));
  }, []);

  return (
    <div id="photos-screen">
      {photoModal.state === true && <PhotoModal photo={photoModal.photo} />}
      <div className="screen-title">Photos</div>
      <Divider />
      {photos.loading ? (
        <Loading />
      ) : (
        <div className="photos">
          {photos.photos.map((photo, i) => (
            <Photo i={i} key={photo.id} data={photo} />
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
