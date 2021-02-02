import styled from 'styled-components'


export const RulesSelect = styled.div`
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
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    box-shadow: 1px 2px 31px 10px rgba(0, 0, 255, .3);

    @media(max-width:450px){
        width: 100vw;
        height: 100vh;
        margin: 0px;
    border-radius: 0px;

    }
    h1 {
        color: rgba(0, 0, 255, .6);
    }
    button{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 10px;
        align-items: center;
        border: 1px solid rgba(0, 0, 255, .5);
        border-radius: 10px;
        color: rgba(0, 0, 255, .9);
        cursor: pointer;
        background-color: white;
        outline: none;
        transition: .4s;
    }
    button:hover{
        > img {
            animation: rotate infinite .5s alternate;
        }
        border: 1px solid rgba(0, 0, 255, .9);
        background-color: rgba(0, 110, 255, .1);

    }
    @keyframes rotate {
        from {
            transform: rotate(5deg);
        }
    }
    img {
        width: 100%;
    }
    }
`