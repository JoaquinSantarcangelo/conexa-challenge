import React from "react";
import { Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

const PaginationButtons = ({ offset, setOffset, fetchData }) => {
  const dispatch = useDispatch();

  //Pagination Functions
  const handleNextPage = () => {
    console.log("Handleing");
    dispatch(fetchData(offset + 10));
    setOffset(offset + 10);
  };

  const handlePrevPage = () => {
    if (offset - 10 >= 0) {
      dispatch(fetchData(offset - 10));
      setOffset(offset - 10);
    }
  };

  return (
    <div className="buttons">
      {offset > 0 && (
        <Button
          onClick={() => handlePrevPage()}
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
  );
};

export default PaginationButtons;
