import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React ,{useState}from 'react';
import './style.css'
import styled from '@emotion/styled';
import { sliderItems } from '../../assists/Data/Data';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow =styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left:${props=>props.direction==="left" && "10px"};
right:${props=>props.direction==="right" && "10px"};
margin: auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`
const Wrapper=styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=>props.SlideIndex * -100}vw);
`
const Slide=styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
`
const Slider = () => {
    const [SlideIndex, setSlideIndex] = useState();
    const handleClick =(direction)=>{
        if(direction==='left'){
            setSlideIndex(SlideIndex > 0 ? SlideIndex - 1 : 1)
        }else{
            setSlideIndex(SlideIndex < 1 ? SlideIndex + 1 : 0)
        }
    }
    return (
        <Container>
            
            <Arrow direction="left" onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper SlideIndex={SlideIndex}>
                {
                    sliderItems.map(item=>(
                        <Slide bg={item.bg} key={item.id}>
                            <div className="sl-img" >
                                <img src={item.img} alt={item.title}/>
                            </div>
                            <div className="sl-info">
                                <div className="sl-title">
                                    <h1>{item.title}</h1>
                                </div>
                                <div className="sl-desc">
                                    <p>{item.desc}</p>
                                </div>
                                <div className="sl-button">
                                    <button>Show now</button>
                                </div>
                            </div>
                        </Slide>
                    ))
                }
                
                {/* <Slide bg='fbf0f4'>
                    <div className="sl-img">
                        <img src={clothes}/>
                    </div>
                    <div className="sl-info">
                        <div className="sl-title">
                            <h1>Catogries</h1>
                        </div>
                        <div className="sl-desc">
                            <p>All clothes...</p>
                        </div>
                        <div className="sl-button">
                            <button>Show now</button>
                        </div>
                    </div>
                </Slide> */}
                
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick('right')}>
            <ArrowRightOutlined/>
            </Arrow>
        </Container>
    );
}

export default Slider;
