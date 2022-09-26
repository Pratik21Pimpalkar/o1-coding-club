import React from 'react'
import styled from 'styled-components'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const Card = ({ data }) => {
    return (
        <CardWrapper>
            <div className='card-wrapper'>
                <div className="layer"></div>
                <div className="content">
                    <div className='details'>
                        <FormatQuoteIcon />
                        {data.content}
                        <FormatQuoteIcon />
                    </div>

                    <div className='imageDiv'>
                        <img src={data.img} alt="" />
                    </div>
                    <div className="nameBox">
                        <p className='name'>{data.name}</p>
                        <p className='role'> {data.role}</p>
                    </div>

                </div>
            </div>
        </CardWrapper>
    )
}
const CardWrapper = styled.div`
width: 35rem;
min-height:35rem ;
border:1px solid black;
color:white;
height: fit-content;
text-align: center;
overflow: hidden;
/* padding: 2rem; */
position: relative;
display: flex;
margin:0 auto;
justify-content: center;
background-color: #252525;
@media screen and (max-width:400px){
    width: 25rem;
}
.card-wrapper{
position: relative;
gap: 2rem;
display: flex;
align-items: center;
justify-content: center;
    &:hover{
        .layer{
            top:0;
        }
        .name,.role{
            color:white;
            font-size: calc(initial * 1.1);
                    }
    }
}
.layer{
    top:calc(100% - 2px);
    left: 0;
    position:absolute ;
    background: linear-gradient(#03a9f4,#e91ee3);
    height: 100%;
    width: 100%;
    z-index: 1;
    transition: 0.45s all ease-in-out;
}
.content{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    padding: 2rem;
    z-index: 2;
}
.imageDiv{
    margin: 0 auto;
    width: 6rem;
    height: 6rem;
    border: 0.12rem solid white;
    border: 0.22rem solid white;
    border-radius: 50%;
    img{
    border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.nameBox{
    .name{
       font-size: 1.8rem;
    color: #c56bff;
        font-weight: 500;
        transition: 0.1s;
     }
     .role{
        font-size: 1.1rem;
        color: #2876bf;
        font-weight:400;
        transition: 0.1s;
     }
}
`
export default Card