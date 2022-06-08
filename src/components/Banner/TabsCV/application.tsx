import React from "react";
import {
  Box,
  FormControl,
  OutlinedInput,
  Input,
  Button,
  Stack,
  InputLabel,
} from "@mui/material";

const Application = () => {
  return (
    <Box component="form" paddingTop={5}>
      <label htmlFor="contained-button-file">
        <Input
          //accept="image/*"
          id="contained-button-file"
          type="file"
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <Stack
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        paddingTop={8}
      >
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel htmlFor="first-name" sx={{ paddingBottom: 5 }}>
            First Name
          </InputLabel>
          <OutlinedInput value="name" id="first-name" name="name" fullWidth />
        </FormControl>

        <label>Last Name</label>
        <FormControl sx={{ width: "100%", marginLeft: 2 }}>
          <OutlinedInput
            fullWidth
            value="name"
            id="last-name"
            name="name"
            sx={{ marginLeft: 2 }}
          />
        </FormControl>
      </Stack>
    </Box>
  );
};

export default Application;
