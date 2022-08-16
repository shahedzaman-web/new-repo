import React, {createContext, useEffect, useState} from "react";

// const DataContext = createContext({});
export const DataContext = React.createContext({});
 const DataProvider = ({children}) => {
const [user,setUser] = React.useState("");
const [logged,setLogged] = React.useState(false);
const [userInfo,setUserInfo] = React.useState({});



    return (
        <DataContext.Provider
            value={{user,setUser,logged,setLogged,userInfo,setUserInfo}}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
