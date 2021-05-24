import React, { useEffect, useState } from "react";
import "./index.sass";
import { Divider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "../../../services/user.service";

//Components
import Photo from "./Photo";
import Loading from "../../../components/Loading";

const PhotosScreen = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchPhotos(offset));
  }, []);

  const handleNextPage = () => {
    dispatch(fetchPhotos(offset + 10));
    setOffset(offset + 10);
  };

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
      <div className="buttons">
        {offset > 0 && (
          <Button
            onClick={() => handleNextPage()}
            id="next-page"
            colorScheme="teal"
            size="lg"
            mr="1em"
          >
            Previous Page
          </Button>
        )}
        <Button
          onClick={() => handleNextPage()}
          id="next-page"
          colorScheme="teal"
          size="lg"
        >
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default PhotosScreen;
