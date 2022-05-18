import React,{useState} from 'react'
import { Col, Card,Row } from 'react-bootstrap'
import { sideElement as element } from './SidebarElements'
import MainPage from '../mainPage/MainPage'
import '../mainPage/main.css'

const Sidebar = () => {
  const [data,setData] = useState(null)
  return (
    <>
    <Row className="mx-0" style={{height:'100vh'}}>
      <Col sm={3} style={{height: '92vh', borderRight: '1px solid gray'}} className="px-0">
        <div>
          {
            element.map((item, idx) => {
              return (
                <Card style={{cursor:'pointer'}} className="mt-2" key={idx} >
                  <h3 className="mx-3" onClick={() => setData(item.value)}>{item.value.length > 10 ? item.value.slice(1,10)+"...": item.value}</h3>
                </Card>
              )
            })
          }
        </div>
      </Col>
      <Col sm={9} className="px-0" style={{height:'92vh'}}>
        <div className="custom-container">
          <MainPage mainData={data}/>
        </div>
      </Col>
      </Row>
    </>
  )
}

export default Sidebar