'use client';
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const ClientContext = createContext();

export const ClientProvider = ({children}) => {
    const [modalForm, setModalForm] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [clientWidth, setClientWidth] = useState(0);
    const [headerInvert, setHeaderInvert] = useState(false);
    const [notification, setNotification] = useState({message: false, status: true, closing: false });
    const [isDesktop, setDesktop] = useState(null);
    const pathname = usePathname();
    useEffect(()=>{
        if(modalForm === true) setModalForm("setClose");
        if(mobileMenu === true) setMobileMenu("close");
    }, [pathname]);

    useEffect(()=>{
        if(window.innerWidth >= 1000) {
            setDesktop(true);
        } else {
            setDesktop(false);
        }
    }, [clientWidth]);

    useEffect(()=>{
        if(modalForm === true || mobileMenu === true) {
            if(document.body.clientWidth < window.innerWidth) {
                document.body.style.paddingRight = `${window.innerWidth - document.body.clientWidth}px`;
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "hidden";
            }
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
        if(modalForm == 'setClose') {
            setModalForm('close');
            setTimeout(()=>setModalForm(false), 800);
        }
        if(mobileMenu == 'close') {
            setTimeout(()=>setMobileMenu(false), 1000);
        }
    }, [modalForm, mobileMenu]);

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

    useEffect(()=>{
        if(notification.message && !notification.closing) {
            setNotification((current)=>({...current, closing: true}));
            setTimeout(()=>setNotification({message: false, status: true, closing: false}), 4000);
        }
    }, [notification]);

    return (
        <ClientContext.Provider
            value={{
                scroll,
                clientWidth,
                headerInvert,
                setHeaderInvert,
                modalForm,
                setModalForm,
                notification,
                setNotification,
                mobileMenu,
                setMobileMenu,
                isDesktop
            }}
        >
            {children}
        </ClientContext.Provider>
    )
}

export default ClientContext;