import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";
import styled from "styled-components";
import usersData from "./users.json";

const Wrapper = styled(Box)`
  gap: 1rem;
  height: 80vh;
  align-items: center;
  justify-content: center;
`;

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setUsers(usersData);
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Active") {
      return user.Status === true;
    } else if (filter === "Inactive") {
      return user.Status === false;
    }
    return true;
  });

  return (
    <Wrapper>
      <Grid
        container
        spacing={3}
        sx={{ marginTop: "20px", marginBottom: "15px" }}
      >
        <Grid item xs={12} sx={{ textAlign: "left" }}>
          <Typography variant="h5" gutterBottom>
            Filter by Status:
          </Typography>
          <Select value={filter} onChange={handleFilterChange}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </Grid>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Color</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <img
                      src={user.Avatar}
                      alt="Avatar"
                      width="50"
                      height="50"
                    />
                  </TableCell>
                  <TableCell align="right">{user.first_name}</TableCell>
                  <TableCell align="right">{user.last_name}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.gender}</TableCell>
                  <TableCell align="right">{user.color}</TableCell>
                  <TableCell align="right">
                    {user.Status ? "Active" : "Inactive"}
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Wrapper>
  );
};

export default ListUser;
