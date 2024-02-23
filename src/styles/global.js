import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
    body {
        
        font-family: 'Open Sans', sans-serif;
        color: #6b9bd1;
        background-color: #cedef0;
    }
`;

export default Global;