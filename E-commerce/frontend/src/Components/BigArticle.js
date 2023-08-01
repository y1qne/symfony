import {useState} from "react";

export default function BigArticle({id, img, name, desc, price, category, sub, features, weight, stock}) {
    const [stockText, setStockText] = useState(stock < 1 ? 'Rupture de stock.' : `Stock : ${stock}`);

    return (
        <div className={"w-full flex flex-col md:flex-row min-h-screen"}>
            <div className={"w-full md:w-1/2"}>
                {/*<img src={img} alt={name} className={"small-article-img"}></img>*/}
            </div>
            <div className={"w-full flex flex-col md:w-1/2 mt-6"}>
                <div className={"flex-col gap-4"}>
                    <h1 className={"text-3xl font-semibold"}>{name}</h1>
                    <div className={"flex gap-4 items-baseline"}>
                    <h2 className={"text-2xl"}>{sub}</h2>
                    <h2 className={"text-lg"}>{category}</h2>
                    </div>
                    <p className={"text-lg font-weight-lighter mt-2"}>{desc}</p>
                    <h3 className={"text-5xl font-semibold mt-4"}>{price.toFixed(2)} €</h3>
                    <h3 className={"text-md mt-4"}>{stockText}</h3>
                    <button
                        className={`bg-[#f553c7] disabled:bg-neutral-500 flex items-center gap-4 px-4 py-2 rounded-2xl text-xl text-white hover:bg-black`}
                        disabled={stock < 1}
                    >Ajouter au panier
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 72 72" fill="none">
                            <path
                                d="M60.75 16.875H50.5772C50.2803 13.2128 48.6159 9.79645 45.9149 7.30553C43.2139 4.81462 39.6742 3.43162 36 3.43162C32.3258 3.43162 28.7861 4.81462 26.0851 7.30553C23.3841 9.79645 21.7197 13.2128 21.4228 16.875H11.25C9.75816 16.875 8.32742 17.4676 7.27252 18.5225C6.21763 19.5774 5.625 21.0082 5.625 22.5V56.25C5.625 57.7418 6.21763 59.1726 7.27252 60.2275C8.32742 61.2824 9.75816 61.875 11.25 61.875H60.75C62.2418 61.875 63.6726 61.2824 64.7275 60.2275C65.7824 59.1726 66.375 57.7418 66.375 56.25V22.5C66.375 21.0082 65.7824 19.5774 64.7275 18.5225C63.6726 17.4676 62.2418 16.875 60.75 16.875ZM36 10.125C37.8935 10.1252 39.7236 10.8076 41.1549 12.0473C42.5862 13.287 43.5229 15.0009 43.7934 16.875H28.2066C28.4771 15.0009 29.4138 13.287 30.8451 12.0473C32.2764 10.8076 34.1065 10.1252 36 10.125ZM59.625 55.125H12.375V23.625H21.375V27C21.375 27.8951 21.7306 28.7535 22.3635 29.3865C22.9964 30.0194 23.8549 30.375 24.75 30.375C25.6451 30.375 26.5036 30.0194 27.1365 29.3865C27.7694 28.7535 28.125 27.8951 28.125 27V23.625H43.875V27C43.875 27.8951 44.2306 28.7535 44.8635 29.3865C45.4965 30.0194 46.3549 30.375 47.25 30.375C48.1451 30.375 49.0035 30.0194 49.6365 29.3865C50.2694 28.7535 50.625 27.8951 50.625 27V23.625H59.625V55.125Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
                <div className={"flex-col gap-4 mt-20"}>
                    <h1 className={"text-xl"}>Caractéristiques :</h1>
                    <p>{features}</p>
                    <h2 className={"text-lg"}>Poids : {weight}kg</h2>
                </div>
            </div>
        </div>
    );
}
