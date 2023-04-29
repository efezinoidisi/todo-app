import { createGlobalStyle } from 'styled-components';
//import { Theme } from './theme';

export default createGlobalStyle`
    *{
        margin:  0;
        padding:0;
        outline: none;
        box-sizing: border-box;
        
    }
    
    #root{
        margin: 0 auto;
    }
    
    body {
        background-color :${({ theme }) => theme.colors.body};
        color : ${({ theme }) => theme.colors.text};
        height: 100dvh;
        
        
       
    }
`;
