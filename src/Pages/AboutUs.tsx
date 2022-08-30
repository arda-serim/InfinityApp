import React from 'react';
import { Col, Row, Layout, Card } from 'antd';
import Navbar from '../Components/Navbar';
import { ML } from '../App';
import test2 from '../images/target.png';



const pageStyle = {
    background: 'linear-gradient(to bottom, #0A368B,#3B82A0)',
    // full page
    minHeight: '100vh',
    minWidth: '100vw',
 
 };

 const navbarStyle = {
    zIndex : 2
 };

 const contentStyle = {
    width: '100%',
    height: '100%',
    marginLeft : '26%',
    marginTop : '5%'
    
 };

 const pStyle = {
    color : 'white',
    fontSize : '30px',
    marginLeft : '19%',
    paddingBottom :'3%'
 };

 const colStyle1={
    marginLeft : '15%'  ,
    marginTop : '5%'
 };

 const pStyle1 = {
    marginTop : '5%' , 
    color : '#FE980E' ,  
    fontSize : '20px' , 
    textAlign : 'center'
 }as React.CSSProperties;

 const pStyle2 = {
   marginTop : '5%' , 
   color : 'white' ,  
   fontSize : '20px' , 
   textAlign : 'center'
}as React.CSSProperties;

 const imgStyle ={
    width : '300px' , 
    height : '300px' , 
    borderRadius: '150px' , 
    background: 'linear-gradient(180deg, #EFAA45 0%, rgba(217, 217, 217, 0) 100%)',
    zIndex : 1 , 
    marginLeft : '20%' , 
    marginTop: '20%'
 };

 const imgStyle2 = {
    width: '200px' , height : '200px' , marginLeft: '10%' , marginTop : '10%' , zIndex :2
 }

 const { Meta } = Card;

const AboutUs = () => {
    return(
        <Layout style={pageStyle}>
             <div style={navbarStyle}>
            <Navbar />
         </div>
         <Row gutter={[12,12]}>
        <Col style={colStyle1} span={4}>
            <div style={{marginRight : '25%'}}>
            <p style={pStyle1}> {ML('ourvision')} </p>
                  
             <p style={pStyle2} > {ML('vizyon')}  </p>  
            </div>
       
         <Col span={4}>
        </Col>
        </Col>
        <Col  style={{marginLeft : '6%' , marginTop: '3%' }} span={4}>
        <div style={imgStyle}>
                  <img src={test2} style={imgStyle2}/>
                  </div>
        </Col>
        <Col style={{marginLeft : '15%'  , marginTop : '5%'}} span={4}>
            <div style={{textAlign : 'center'}}>
            <p style={pStyle1}>
                 {ML('ourmission')}
                  </p>
              <p style={pStyle2}>
            {ML('misyon')}
              </p >
            </div>
       
        </Col>
        </Row>

         <div style={contentStyle}>

  
            <p style={pStyle}> {ML('team')}</p>
        <Row style={{ marginLeft : '9%'}} gutter={[12, 12]}>
        <Col span={4} >
        <Card
         hoverable
         style={{ width: 200}}
         cover={< a target="_blank" href='https://www.linkedin.com/in/bilalmuratnazli/' > <img style={{width : '200px' , height : '250.16px'} }    src="https://cdn.discordapp.com/attachments/776504233063088178/1013845115665657996/BilalHocaHazir.png" /></a>} >
         <Meta title="Bilal Murat Nazlı" description={ML('po')}  />
       </Card>
       </Col>
        <Col span={4} >
        <Card
         hoverable
         style={{ width: 200}}
         cover={< a target="_blank" href='https://www.linkedin.com/in/dilhun-dani%C5%9F-a7390043/' > <img style={{width : '200px' , height : '250.16px'} }   src="https://cdn.discordapp.com/attachments/776504233063088178/1013845116223488060/DilhunHocaHazir.png" /></a>} >
         <Meta title="Dilhun Danış" description={ML('agile')}  />
       </Card>
      
     </Col>
        
        
        
        </Row>
         <Row style={{marginTop : '5%'}} gutter={[12, 12]}>
        <Col span={4} >
        <Card
         hoverable
         style={{ width: 200}}
         cover={< a target="_blank" href='https://www.linkedin.com/in/kardelen-sari-/' > <img style={{width : '200px' , height : '250.16px'} }  src="https://cdn.discordapp.com/attachments/776504233063088178/1013843096355749928/KardelenHazir.png"/></a>} >
         <Meta title="Kardelen Sarı" description={ML('analist')}  />
       </Card>
       </Col>
        <Col span={4} >
        <Card
         hoverable
         style={{ width: 200}}
         cover={< a target="_blank" href='https://www.linkedin.com/in/beyza-%C3%A7elik-681819214/' > <img style={{width : '200px' , height : '250.16px'} }  src="https://cdn.discordapp.com/attachments/776504233063088178/1013843095919534080/BeyzaHazir.png"/></a>} >
         <Meta title="Beyza Çelik" description={ML('analist')}  />
       </Card>
       </Col>
        <Col span={4} >
        <Card
         hoverable
         style={{ width: 200}}
         cover={< a target="_blank" href='https://www.linkedin.com/in/alpayozer/' > <img style={{width : '200px' , height : '250.16px'} }     src="https://cdn.discordapp.com/attachments/776504233063088178/1013843093444898996/AlpayHazir.png" /></a>} >
         <Meta title="Alpay Özer" description={ML('bcteam')}  />
       </Card>
       </Col>
         </Row>
        <Row style={{marginTop : '5%'}} gutter={[12, 12]}>
        <Col span={4} >
        <Card
         hoverable
         style={{ width: 200}}
         cover={< a target="_blank" href='https://www.linkedin.com/in/veysiocal/' > <img style={{width : '200px' , height : '250.16px'} }     src="https://cdn.discordapp.com/attachments/776504233063088178/1013843097404317706/VeysiHazir.png" /></a>} >
         <Meta title="Veysi Öcal" description={ML('bcteam')}  />
       </Card>
       </Col>
        <Col span={4} >
        <Card
         hoverable
         style={{ width: 200}}
         cover={< a target="_blank" href='https://www.linkedin.com/in/melisa-durmu%C5%9F/' > <img style={{width : '200px' , height : '250.16px'} }   src="https://cdn.discordapp.com/attachments/776504233063088178/1013843096703868948/MelisaHazir.png" /></a>} >
         <Meta title="Melisa Durmuş" description={ML('onyuz')}  />
      </Card>
      </Col>
        
        <Col span={4} >
        <Card
         hoverable
         style={{ width: 200}}
         cover={< a target="_blank" href='https://www.linkedin.com/in/p%C4%B1nar-inemek-a466b5228/' > <img style={{width : '200px' , height : '250.16px'} }     src="https://cdn.discordapp.com/attachments/776504233063088178/1013843097064575066/PnarHazir.png" /></a>} >
         <Meta title="Pınar İnemek" description={ML('onyuz')}   />
       </Card>
       </Col>
        
       

        </Row>
        <Row style={{marginTop : '5%'}} gutter={[12, 12]}>
        <Col span={4} >
        <Card
         hoverable
         style={{ width: 200}}
         cover={< a target="_blank" href='https://www.linkedin.com/in/arda-serim' > <img style={{width : '200px' , height : '250.16px'} }     src="https://cdn.discordapp.com/attachments/776504233063088178/1013843093923037245/ArdaHazir.png" /></a>} >
         <Meta title="Arda Serim" description={ML('onyuz')}   />
       </Card>
       </Col>
        <Col span={4} >
        <Card
         hoverable
         style={{ width: 200}}
         cover={< a target="_blank" href='https://www.linkedin.com/in/nur-sude-var-6a9550196/' > <img style={{width : '200px' , height : '250.16px'} }    src="https://cdn.discordapp.com/attachments/776504233063088178/1013848991563268116/NursudeHazir.png" /></a>} >
         <Meta title="Nur Sude Var" description={ML('onyuz')}   />
       </Card>
     </Col>
        
        <Col span={4} >
        <Card
         hoverable
         style={{ width: 200}}
         cover={< a target="_blank" href='https://www.linkedin.com/in/ahmet-ilkbey-demirkoc/' > <img style={{width : '200px' , height : '250.16px'} }     src="https://cdn.discordapp.com/attachments/776504233063088178/1013843093084192858/AhmetHazir.png" /></a>} >
         <Meta title="Ahmet İlkbey" description={ML('onyuz')}   />
       </Card>
     </Col>
        
        </Row>
     
         </div>
        </Layout>
    )
}

export default AboutUs;