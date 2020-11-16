import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import {InputAdornment} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";


const InputLocation: React.FC<{ setLocations: any, locations: Array<string | number> }> = ({setLocations, locations}) => {
  const [input, setInput] = useState<string>('')
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.currentTarget.value)
  const updateLocations = (input: String) => setLocations([...locations, input])

  const keyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      updateLocations(input)
      // setInput('')
      e.preventDefault()
    }
  }

  return (
    <TextField
      onChange={handleInput}
      onKeyDown={keyPress}
      placeholder={"Type your favorite location. Use city name or postal code"}
      value={input || ''}
      variant={"outlined"}
      fullWidth
      InputLabelProps={{focused: true}}
      InputProps={{
        endAdornment: <InputAdornment position={"end"}>
          <IconButton onClick={() => updateLocations(input)}>
            <AddIcon/>
          </IconButton>
        </InputAdornment>
      }}
    />
  )
}

export default InputLocation