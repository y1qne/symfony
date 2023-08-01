import Header from "./Header";
import '../App.css';
import BigArticle from "./BigArticle"
import React, {useEffect, useState} from "react";
import {axiosArticleInfos} from "../apiCall";
import {useParams} from "react-router-dom";
import Loading from "./Loading";

export default function ArticleInfos() {
    const { id} = useParams();
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getArticleInfos = async () => {
            try {
                const response = await axiosArticleInfos(id);
                setArticle(response);
                console.log(response);
                setLoading(false);
            } catch (error) {
                console.log('Erreur lors de la récupération des articles:', error);
                setLoading(false);
            }
        };
        getArticleInfos();
    }, [id]);

    if (loading) {
        return <Loading />
    }

    return (
        <BigArticle id={article.id} name={article.name} desc={article.description} price={article.price} category={article.category.name} sub={article.subCategory.name} features={article.features} weight={article.weight} stock={article.stock} />
    );
}