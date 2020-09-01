import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl, StylesProvider} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {countries} from '../../API'; 

const CountryPicker=()=>{
    useEffect(()=>{
        const [fechedCountries, setFetchedCountries]=useState([]);
        const fetchCounties=async()=>{
            setFetchedCountries(await countries);
        }
        fetchCounties();
    },[setFetchedCountries]);
    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect>
                <option value='global'>Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;