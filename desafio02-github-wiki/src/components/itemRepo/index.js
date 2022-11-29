import React from "react";

import { ItemContainer } from './style'

function ItemRepo( { repo }) {
    return(
        <ItemContainer>
            <h3>{ repo.name }</h3>
            <p>{ repo.full_name }</p>
            <a href={ repo.html_url } target="_blank" >Ver repositorio <br /></a>
            <a className="remove" href="">Remover</a>
            <hr />
        </ItemContainer>   
    )

}

export default ItemRepo;



