import { FC, useState, useEffect } from "react";
import { Box, Button, useTheme } from "@mui/material";
import { getClasses } from "./style";
import axios from "axios";

interface PersonData {
  results: any[];
}

export const LoginPage: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  const [counter, setCounter] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [personData, setPersonData] = useState<PersonData | null>(null);

  useEffect(() => {
    fetchUsersData(currentPage);
  }, []);

  const fetchUsersData = (page: number) => {
    axios.get(`https://randomuser.me/api?page=${page}`)
      .then((response) => {
        setPersonData(response.data);
        setCurrentPage(page);
      })
      .catch(() => {
        setPersonData(null);
      });
  };

  const handleNextPage = () => {
    fetchUsersData(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      fetchUsersData(currentPage - 1);
    }
  };

  return (
    <>
      {/* counter code */}
      <Box className={classes.container}>
        <p>{counter}</p>
        <Button onClick={() => setCounter(counter + 1)}>Add To Counter</Button>
      </Box>
      {/* fetch code */}
      <Box className={classes.container}>
        <p>Current Page: {currentPage}</p>
        <p>
          {personData && JSON.stringify(personData.results)}
        </p>
        <Button onClick={handlePrevPage} disabled={currentPage <= 1}>Previous Page</Button>
        <Button onClick={handleNextPage}>Next Page</Button>
      </Box>
    </>
  );
};
