export default function SmallArticle({ id, img, name, desc, price, id_category, name_category, id_subcategory, name_subcategory }) {
    let smalldesc = desc;
    if (desc.length > 77) {
        smalldesc = desc.slice(0, 77);
        smalldesc = smalldesc + '...';
    }

    return (
        <div className={"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg text-left xl:aspect-h-8 xl:aspect-w-7"}>
            <a className={"small-article-link"} href={`${id_category}/${id_subcategory}/${id}/${name}`}>
                <img src={img} alt={name} className={""} />
                <h1 className={"text-xl font-bold mt-2 hover:decoration-0"}>{name}</h1>
                <h2 className={"font-semibold text-lg flex gap-2 text-[#f553c7] items-baseline"}>{name_category}<p className={"text-black font-medium text-sm"}>{name_subcategory}</p></h2>
                <p className={"text-md font-light"}>{smalldesc}</p>
                <h3 className={"text-xl font-semibold mt-2 hover:decoration-0"}>{price.toFixed(2)} €</h3>
            </a>
        </div>
    );
}
