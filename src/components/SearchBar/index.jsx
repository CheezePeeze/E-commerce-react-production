import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchBar = ({ items, searchHandle }) => {


  return (
    <div className='flex justify-center'>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={items}
        sx={{ width: '85%' }}
        renderInput={(params) => <TextField {...params} label="Search" />}
        onInputChange={(e, newInputValue) => searchHandle(newInputValue)}
      />
    </div>
  );
}

export default SearchBar