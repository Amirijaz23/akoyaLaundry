import { createContext, useEffect, useState } from "react";
export const MyContext = createContext()

const GlobalData = ({ children }) => {
    const [profile, setProfile] = useState(
        {
            language: "eng",
            cardCategory: 0,
            serviceType: null,
            servicePage: 1,
            selectedOption: false,
            steamFinishing: false,
            Incense: false,
            Fragrance: false,
            SelectedFragrance: null,
            packagingType: null,
            packagingPrice: 0,
            fromPerson: null,
            toPerson: null,
            showModal:false,
        }
    )
    const [totalBill, setTotalBill] = useState(0)

    const [clothes, setClothes] = useState(
        []
    )
return (
    <MyContext.Provider value={{ profile, setProfile, clothes, setClothes, totalBill, setTotalBill }}>
        {children}
    </MyContext.Provider>
)
}
export default GlobalData
