interface PaginationProps {
  searchIndex: number,
  setSearchIndex: any
}
// TODO: Melhorar a lógica da paginação
export function Pagination({searchIndex = 1,setSearchIndex}: PaginationProps){
  
  return(
    <nav aria-label="Page navigation" className="my-3">
      <ul className="pagination">
        <li className="page-item"><button disabled={ searchIndex==1} className="page-link" onClick={() => {if(searchIndex>1) setSearchIndex(searchIndex - 1)}}>Previous</button></li>
        { searchIndex>1 && <li className="page-item"><p className="page-link" >...</p></li>}
        <li className="page-item"><button className="page-link">{searchIndex}</button></li>
        <li className="page-item"><button className="page-link" onClick={() => setSearchIndex(searchIndex + 1)}>{searchIndex + 1}</button></li>
        <li className="page-item"><button className="page-link" onClick={() => setSearchIndex(searchIndex + 2)}>{searchIndex + 2}</button></li>
        { searchIndex<100 && <li className="page-item"><p className="page-link" >...</p></li>}
        <li className="page-item"><button className="page-link" onClick={() => setSearchIndex(searchIndex + 1)}>Next</button></li>
      </ul>
    </nav>
  );
}