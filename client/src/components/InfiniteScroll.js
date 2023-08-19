import React , { useState, useCallback , useRef} from 'react';
import '../styles/scroll.css';
import { useBookSearch } from '../hooks/useBookSearch';

export const InfiniteScroll = () => {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
  
    const {
      books,
      hasMore,
      loading,
      error
    } = useBookSearch(query, pageNumber)
  
    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    }, [loading, hasMore])
  
    function handleSearch(e) {
      setQuery(e.target.value)
      setPageNumber(1)
    }
  
    return (
      <div className='main-infinite-scroll'>
        <input type="text" value={query} onChange={handleSearch}></input>Search Book
        <div className='book-data'>
            {books.map((book, index) => {
                //Attaching a ref to the Last book
                if (books.length === index + 1) {
                    //Wheneve this element is created - calls the function inside of that callback
                    return <div ref={lastBookElementRef} key={index}>{book}</div>
                } else {
                    return <div key={index}>{book}</div>
                }
            })}
        </div>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
      </div>
    )
}

