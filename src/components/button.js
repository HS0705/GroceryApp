import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
&:cart{
    background:Beige;
    color:Black;
}
background:transparent;
border:0.1rem solid Black;
color:var(--lightBlue);
border-radius:0.5rem;
padding:0.2 rem 0.5 rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0rem;
transition:all 0.5s ease-in-out;
&:hover{
    background:Green;
    color:Black;
}
&:focus{
    outline:none;
}
`