
import { createContext } from "react";
import gitData from "./json/gitData.json";
import headerSkills from "./json/headerSkills.json";
import prizeSkills from "./json/prizeSkills.json";
import technicalSkills from "./json/technicalSkills.json";
import iconType from "./json/iconType.json";


const skills = {
    header : headerSkills,
    prize : prizeSkills,
    technical: technicalSkills  
}


const DataContext = createContext();

function DataProvider({ children }) {
  return (
    <DataContext.Provider value={{ gitData, skills , iconType }}>
      {children}
    </DataContext.Provider>
  );
}


export { DataContext, DataProvider };