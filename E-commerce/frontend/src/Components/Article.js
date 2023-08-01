import React, {useEffect, useState} from "react";
import Kompozant from "../Kompozant.png";
import SmallArticle from "./SmallArticle";
import {axiosArticles} from "../apiCall";
import Loading from "./Loading";
import Header from "./Header";
import Footer from "./Footer";

export default function Article() {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const isPreviousPageDisabled = currentPage === 1;
    const [isNextPageDisabled, setIsNextPageDisabled] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const response = await axiosArticles(currentPage);
                setArticles(response);

                const responseNextPage = await axiosArticles(currentPage + 1);
                setIsNextPageDisabled(responseNextPage.length === 0);

                setLoading(false);
            } catch (error) {
                console.log('Erreur lors de la récupération des articles:', error);
                setLoading(false);
            }
        };
        getArticles();
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
        setLoading(true);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
            setLoading(true);
        }
    };

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <Header/>
            <div className="min-h-screen mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {currentPage === 1 ? (
                    <h1 className="text-4xl font-bold mb-20">Les plus populaires</h1>
                ) : null}
                <div
                    className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {articles.map(article => (
                        <div className={"relative rounded-2xl flex basis-1/5 md:basis-1/6 flex-col"} key={article.id}>
                            <SmallArticle
                                key={article.id}
                                id={article.id}
                                img={Kompozant}
                                name={article.name}
                                desc={article.description}
                                price={article.price}
                                id_category={article.category.id}
                                name_category={article.category.name}
                                id_subcategory={article.subCategory.id}
                                name_subcategory={article.subCategory.name}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center mt-8 gap-20">
                    <button
                        className="text-[#f553c7] disabled:text-neutral-500 w-max flex items-center justify-center gap-4 px-4 py-2 hover:text-black"
                        onClick={handlePreviousPage}
                        disabled={isPreviousPageDisabled}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="m4.431 12.822l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"
                            />
                        </svg>
                    </button>
                    <p className={"text-2xl font-bold"}>{currentPage}</p>
                    <button
                        className="text-[#f553c7] disabled:text-neutral-500 w-max flex items-center justify-center gap-4 px-4 py-2 hover:text-black"
                        onClick={handleNextPage}
                        disabled={isNextPageDisabled}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}
