import {useState, ChangeEvent, FormEvent, FC} from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import css from './SearchBar.module.css'

interface SearchBarProps {
    onSearch: (term: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className={css.SearchBar}>
            <TextField
                label="Search"
                variant="outlined"
                value={searchTerm}
                onChange={handleChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type="submit">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </form>
    );
};

export  {SearchBar}