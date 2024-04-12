import React, { useState } from 'react';
import { TextField, Button, Stack, Box, Checkbox } from '@mui/material';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <h1>Todo List</h1>
      <Stack flexDirection="row">
        <TextField
          onChange={(e)=> {setInputValue(e.target.value)}}
          value={inputValue}
          fullWidth
          hiddenLabel
          label="Search field"
          type="search"
          variant="standard"
        />
        <Button
          variant="contained"
          onClick={(e) => {
            setList([...list, inputValue]);
            setInputValue("");
          }}
        >
          Add
        </Button>
      </Stack>
      {list.map((element, index) => {
        return (
          <Stack flexDirection="row" alignItems="center" >
            <Box width="100%">
              <Checkbox />
              {element}
            </Box>
            <Box onClick={(e) => {
              setList(list.filter((element2, index2) => index !== index2));
            }}>
              <DeleteSharpIcon />
            </Box>
          </Stack>
        )
      })}
    </>
  )
}

export default App
