import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from 'react';
import Header from "./Components/Header";
import Connect from "./Components/Connect";
import Article from "./Components/Article";
import Register from "./Components/RegisterPage";
import './App.css';
import Footer from "./Components/Footer";
import ArticleInfos from "./Components/ArticleInfos";
import Categories from "./Components/Categories";

function App() {
    return (
        <div>
            <Router>
                {/*<Header/>*/}
                <Routes>
                    <Route path="/" element={<Article/>}/>
                    <Route path="/connect" element={<Connect/>}/>
                    <Route path="/:id_category" element={<Categories/>}/>
                    {/*<Route path="/:id_category/:id_subcategory" element={<SubCategories />} />*/}
                    <Route path="/:id_category/:id_subcategory/:id/:name" element={<ArticleInfos/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
                {/*<Footer/>*/}
            </Router>
        </div>
    );
}

export default App;
