import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:White;
border:0.1rem solid var(--lightYellow);
color:var(--ligtYellow);
border-radius:0.5rem;
padding:0.2 rem 0.5 rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0rem;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--lightYellow);
    color:var(--mainBlue);
}
&:focus{
    outline:none;
}
`