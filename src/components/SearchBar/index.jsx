import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';

const SearchBar = ({ options, searchHandle }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([])
  const loading = open && items.length === 0;

  useEffect(() => {
    if (!options.length) {
      setOpen(false);
    }
    setItems(options)
  }, [options])

  return (
    <div className='flex justify-center'>
      <Autocomplete
        id="asynchronous"
        sx={{ width: '85%' }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title}
        options={options}
        loading={loading}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            setOpen(true);
            searchHandle(event)
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </div>
  );
}

export default SearchBar