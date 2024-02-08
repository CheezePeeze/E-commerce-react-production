import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchBar = () => {
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ]
  return (
    <div className='flex justify-center'>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: '80%' }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
}

export default SearchBar