import axios from 'axios';
import { useEffect, useState } from 'react'
import { Select, Flex } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { changeCountry } from '../../store/slices/dataSlice';

const Dropdown = () => {

    const dispatch = useDispatch();
    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
        const { data } = await axios.get('https://covid19.mathdro.id/api/countries');
        setCountries(data.countries);
    }

    useEffect(() => {
        getCountries();
    }, []);

    const handleChange = (e) => {
        dispatch(changeCountry(e.target.value));
    }

    return (
        <Flex justifyContent={'center'} my={10}>
            <Select width={200} defaultValue={''} onChange={handleChange}>
                <option value=''>Global</option>
                {countries.map(country => (
                    <option key={country.name} value={country.name}>{country.name}</option>
                ))}
            </Select>
        </Flex>
    )
}

export default Dropdown
