import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import './main.css'
import { Button } from 'react-bootstrap'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const MainPage = (props) => {

    const [numPage, setNumPage] = useState(null);
    const [pageNum, setPageNum] = useState(1);


    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPage(numPages);
        setPageNum(1);
    }
    console.log(numPage)

    const changePage =(offset) =>{
        setPageNum(prevPageNumber => prevPageNumber+offset)
    }

    const changeBackPage =() =>{
        changePage(-1);
    }

    const changeNextPage =() =>{
        changePage(+1);
    }

    return (
        <>
            {props === null ? (
                <h1>you have nothing to show</h1>
            ) : (
                <div className="d-flex justify-content-center flex-column align-items-center pt-3">
                    <div>
                        <Document file={props.mainData} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page height="600" pageNumber={pageNum} />  
                        </Document>
                    </div>
                    <div className="d-flex align-items-center">
                        {pageNum > 1 ? (
                            <Button onClick={changeBackPage}><IoIosArrowBack></IoIosArrowBack></Button>
                        ) : (
                            <Button disabled><IoIosArrowBack></IoIosArrowBack></Button>
                        )}
                        <p className="custom-num px-2"> {pageNum} of {numPage}</p>
                        {pageNum < numPage ? (
                            <Button onClick={changeNextPage}><IoIosArrowForward></IoIosArrowForward></Button>
                        ):(
                            <Button disabled><IoIosArrowForward></IoIosArrowForward></Button>
                        )}
                    </div>
                </div>
            )}
        </>


    )
}

export default MainPage