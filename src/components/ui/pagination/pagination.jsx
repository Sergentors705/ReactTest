import React, {useState, useEffect} from "react";
import Button from "../button/button";
import { getPagesArray } from "../../../utils/pages";
import "./style.css";

function Pagination({totalPages, page, changePage}) {

  let pagesArray = getPagesArray(totalPages);

  return (<>
    {pagesArray.map(
      pageNumber =>
      <Button
        onClick={() => changePage(pageNumber)}
        key={pageNumber}
        className={page === pageNumber ? "page-button page-button__current" : "page-button"}
        style={{marginRight: "5px"}}
      >
        {pageNumber}
      </Button>
    )}
  </>)
}

export default Pagination;
