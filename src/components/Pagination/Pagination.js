import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {


    return (
        <ReactPaginate
            className="pagination justify-content-center my-4 gap-4"
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            nextLabel="Next"
            previousLabel="Prev"
            previousClassName="btn btn-dark"
            nextClassName="btn btn-dark"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
            onPageChange={(data) => {
                setPageNumber(data.selected + 1)
            }}
            pageCount={info?.pages}
        />
    );
};

export default Pagination;