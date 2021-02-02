import styled from 'styled-components'

export const RulesContainer = styled.div`

    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgba(0,0,0,0.3);

    > div {
    background-color: white;
    border-radius: 10px;

    position: relative;
    padding: 20px;
    width: 450px;
    height: 500px;
    margin: 100px auto;
    z-index: 10;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-around;

    box-shadow: 1px 2px 31px 10px rgba(0, 0, 255, .3);

    @media(max-width:450px){
        width: 100vw;
        height: 100vh;
        margin: 0px;
    border-radius: 0px;

    }
    }

    h1{
        margin-left: 20px;
    }
    button{
        justify-self: end;
        background-color: transparent;
        border: none;
        outline: none;
        color: #999;
        font-size: 2rem;
        margin-right: 30px;
        cursor: pointer;
        transition: .2s;
    }
    button:hover{
        color: #666;
    }

     img{
        grid-column: span 2;
        justify-self: center;
    }

    
`