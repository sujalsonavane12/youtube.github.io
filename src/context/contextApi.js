import React, {createContext, useState, useEffect} from "react";

import {fetchDataFromApi} from "../utilis/api";

export const Context = createContext();

export const AppContext = (props) =>{
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [selectCategories, setSelectCaterogies] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(()=>{
        fetchSelectedCategoryData(selectCategories)
    },[selectCategories]);

    const fetchSelectedCategoryData= (query) =>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setSearchResult(contents);
            setLoading(false)
        })
    }

    return (
        <Context.Provider 
            value={{
                loading,
                setLoading,
                searchResult,
                setSearchResult,
                selectCategories,
                setSelectCaterogies,
                mobileMenu,
                setMobileMenu

        }}>
            {props.children}
        </Context.Provider>
    )
}