import kompozant from "../Kompozant.png";
import Category from "./Category";
import React, {useEffect, useState} from "react";
import {axiosCategories, axiosSubCategories} from "../apiCall";
import Sidebar from "./Sidebar";
import {useParams} from "react-router-dom";
import Loading from "./Loading";

export default function Header() {
    const [categories, setCategories] = useState([]);
    const [sidebar, setSidebar] = useState(false);
    const {id_category} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCategories = async () => {
            try {
                let response;
                if (id_category) {
                    response = await axiosSubCategories(id_category);
                } else {
                    response = await axiosCategories();
                }
                setCategories(response);
                setLoading(false);
            } catch (error) {
                console.log("Erreur lors de la récupération des articles:", error);
                setLoading(false);
            }
        };
        getCategories();
    }, [id_category]);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };
    const untoggleSidebar = () => {
        if (sidebar) {
            setSidebar(false);
        }
    };

    if (loading) {
        return <Loading/>
    }
    return (
        <>
            <header onClick={untoggleSidebar}
                    className={"flex flex-col items-center justify-center md:flex-row bg-[#393939]"}>
                <a href={"/"} className={"pl-4"}>
                    <img src={kompozant} className={"w-[250px] h-[150px] object-cover"} alt="logo"/>
                </a>
                <div className={"flex w-full flex-col self-center text-white gap-4 p-4"}>
                    <div className={"flex flex-col md:flex-row w-full gap-4 px-8"}>
                        <form className={"flex bg-[#4b4b4b] rounded-full w-full items-center"}>
                            <input
                                className={"bg-transparent w-full text-white px-8 focus:outline-0"}
                                type="text"
                                placeholder="recherche ..."
                            />
                            <button className={"bg-transparent text-white px-8"} type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33"
                                     fill="none">
                                    <path
                                        d="M30.825 28.75L22.1625 20.0875C21.475 20.6375 20.6844 21.0729 19.7906 21.3937C18.8969 21.7146 17.9458 21.875 16.9375 21.875C14.4396 21.875 12.3257 21.0097 10.596 19.279C8.86625 17.5483 8.00092 15.4345 8 12.9375C8 10.4396 8.86533 8.32575 10.596 6.596C12.3267 4.86625 14.4405 4.00092 16.9375 4C19.4354 4 21.5493 4.86533 23.279 6.596C25.0088 8.32667 25.8741 10.4405 25.875 12.9375C25.875 13.9458 25.7146 14.8969 25.3937 15.7906C25.0729 16.6844 24.6375 17.475 24.0875 18.1625L32.75 26.825L30.825 28.75ZM16.9375 19.125C18.6562 19.125 20.1174 18.5232 21.321 17.3196C22.5246 16.116 23.1259 14.6553 23.125 12.9375C23.125 11.2188 22.5232 9.75758 21.3196 8.554C20.116 7.35042 18.6553 6.74908 16.9375 6.75C15.2188 6.75 13.7576 7.35179 12.554 8.55538C11.3504 9.75896 10.7491 11.2197 10.75 12.9375C10.75 14.6562 11.3518 16.1174 12.5554 17.321C13.759 18.5246 15.2197 19.1259 16.9375 19.125Z"
                                        fill="white"/>
                                </svg>
                            </button>
                        </form>
                        <div className={"flex justify-between gap-4"}>
                            <a
                                className="flex text-lg items-center gap-2 md:w-max"
                                href="/connect"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 72 72"
                                     fill="none">
                                    <path
                                        d="M36 12C39.1826 12 42.2348 13.2643 44.4853 15.5147C46.7357 17.7652 48 20.8174 48 24C48 27.1826 46.7357 30.2348 44.4853 32.4853C42.2348 34.7357 39.1826 36 36 36C32.8174 36 29.7652 34.7357 27.5147 32.4853C25.2643 30.2348 24 27.1826 24 24C24 20.8174 25.2643 17.7652 27.5147 15.5147C29.7652 13.2643 32.8174 12 36 12ZM36 42C49.26 42 60 47.37 60 54V60H12V54C12 47.37 22.74 42 36 42Z"
                                        fill="white"/>
                                </svg>
                                <p className={"hidden lg:flex"}>Connexion / Inscription</p>
                            </a>
                            <a
                                className="flex text-lg items-center gap-2"
                                href="https://reactjs.org"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 72 72"
                                     fill="none">
                                    <path
                                        d="M60.75 16.875H50.5772C50.2803 13.2128 48.6159 9.79645 45.9149 7.30553C43.2139 4.81462 39.6742 3.43162 36 3.43162C32.3258 3.43162 28.7861 4.81462 26.0851 7.30553C23.3841 9.79645 21.7197 13.2128 21.4228 16.875H11.25C9.75816 16.875 8.32742 17.4676 7.27252 18.5225C6.21763 19.5774 5.625 21.0082 5.625 22.5V56.25C5.625 57.7418 6.21763 59.1726 7.27252 60.2275C8.32742 61.2824 9.75816 61.875 11.25 61.875H60.75C62.2418 61.875 63.6726 61.2824 64.7275 60.2275C65.7824 59.1726 66.375 57.7418 66.375 56.25V22.5C66.375 21.0082 65.7824 19.5774 64.7275 18.5225C63.6726 17.4676 62.2418 16.875 60.75 16.875ZM36 10.125C37.8935 10.1252 39.7236 10.8076 41.1549 12.0473C42.5862 13.287 43.5229 15.0009 43.7934 16.875H28.2066C28.4771 15.0009 29.4138 13.287 30.8451 12.0473C32.2764 10.8076 34.1065 10.1252 36 10.125ZM59.625 55.125H12.375V23.625H21.375V27C21.375 27.8951 21.7306 28.7535 22.3635 29.3865C22.9964 30.0194 23.8549 30.375 24.75 30.375C25.6451 30.375 26.5036 30.0194 27.1365 29.3865C27.7694 28.7535 28.125 27.8951 28.125 27V23.625H43.875V27C43.875 27.8951 44.2306 28.7535 44.8635 29.3865C45.4965 30.0194 46.3549 30.375 47.25 30.375C48.1451 30.375 49.0035 30.0194 49.6365 29.3865C50.2694 28.7535 50.625 27.8951 50.625 27V23.625H59.625V55.125Z"
                                        fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className={"flex items-center text-sm w-full flex-wrap gap-4 px-8"}>
                        <button
                            className="flex bg-[#1E1E1E] rounded-full items-center px-8 py-2 gap-2"
                            onClick={toggleSidebar}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                 fill="none">
                                <g clipPath="url(#clip0_11_28)">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M0 3.75C0 3.55109 0.0790176 3.36032 0.21967 3.21967C0.360322 3.07902 0.551088 3 0.75 3H15.25C15.4489 3 15.6397 3.07902 15.7803 3.21967C15.921 3.36032 16 3.55109 16 3.75C16 3.94891 15.921 4.13968 15.7803 4.28033C15.6397 4.42098 15.4489 4.5 15.25 4.5H0.75C0.551088 4.5 0.360322 4.42098 0.21967 4.28033C0.0790176 4.13968 0 3.94891 0 3.75ZM0 8C0 7.80109 0.0790176 7.61032 0.21967 7.46967C0.360322 7.32902 0.551088 7.25 0.75 7.25H15.25C15.4489 7.25 15.6397 7.32902 15.7803 7.46967C15.921 7.61032 16 7.80109 16 8C16 8.19891 15.921 8.38968 15.7803 8.53033C15.6397 8.67098 15.4489 8.75 15.25 8.75H0.75C0.551088 8.75 0.360322 8.67098 0.21967 8.53033C0.0790176 8.38968 0 8.19891 0 8ZM0.75 11.5C0.551088 11.5 0.360322 11.579 0.21967 11.7197C0.0790176 11.8603 0 12.0511 0 12.25C0 12.4489 0.0790176 12.6397 0.21967 12.7803C0.360322 12.921 0.551088 13 0.75 13H15.25C15.4489 13 15.6397 12.921 15.7803 12.7803C15.921 12.6397 16 12.4489 16 12.25C16 12.0511 15.921 11.8603 15.7803 11.7197C15.6397 11.579 15.4489 11.5 15.25 11.5H0.75Z"
                                          fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_11_28">
                                        <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            Menu
                        </button>
                        <a
                            className="text-[#f553c7]"
                            href="https://reactjs.org"
                        >
                            Bons plans
                        </a>
                        {categories && id_category
                            ? categories.subCategories.map((sub) => (
                                <div className={"hidden md:flex"} key={sub.id}>
                                    <Category key={sub.id} id={sub.id} name={sub.name}/>
                                </div>
                            ))
                            : categories && categories.map((category) => (
                            <div className={"hidden md:flex"} key={category.id}>
                                <Category key={category.id} id={category.id} name={category.name}/>
                            </div>
                        ))}
                    </div>
                </div>
            </header>
            <Sidebar id_category={id_category} sidebar={sidebar} categories={categories}/>
        </>
    )
}