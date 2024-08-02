'use client';
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const ClientContext = createContext();

export const ClientProvider = ({children}) => {
    const [scroll, setScroll] = useState(0);
    const [clientWidth, setClientWidth] = useState(0);
    const [isDesktop, setDesktop] = useState(null);
    const pathname = usePathname();

    useEffect(()=>{
        if(window.innerWidth >= 1000) {
            setDesktop(true);
        } else {
            setDesktop(false);
        }
    }, [clientWidth]);

    useEffect(()=>{
        setScroll(window.scrollY);
        setClientWidth(window.innerWidth);
        const handleScroll = () =>{
            setScroll(window.scrollY);
        };
        const handleResize = () =>{
            setClientWidth(window.innerWidth);
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {window.removeEventListener('scroll', handleScroll); window.removeEventListener('resize', handleResize); }
    }, []);

    return (
        <ClientContext.Provider
            value={{
                scroll,
                clientWidth,
                isDesktop
            }}>
            {children}
        </ClientContext.Provider>
    )
}

export default ClientContext;