import React from "react";

const Pagination = (props) => {
    const pageLinks = [];

    for(let i=1; i <= props.pages; i++){
        let active = props.currentPage === i ? 'active' : null;

        pageLinks.push(<li key={i} onClick={() => props.nextPage(i)}><a className={active}>{i}</a></li>)
    }

    return <ul className={'pagination'}>
        {pageLinks}
    </ul>

}

export default Pagination


