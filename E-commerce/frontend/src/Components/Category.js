export default function Category({id, name}){
    return(
    <a
        href={`/${id}`}
    >
        {name}
    </a>
    )
}