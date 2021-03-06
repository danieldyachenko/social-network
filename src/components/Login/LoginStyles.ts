import styled from "styled-components"

const padding = '16px';

export const LoginTitle = styled.span`
    font-size: 1.5em;
`;

export const LoginForm = styled.form.attrs( () => ({
    novalidate: true,
    autocomplete: 'on'
}))`
    height: 400px;
    width: 300px;
    background-color: white;
    padding: ${padding};
    border-radius: 5px;
    box-shadow: 0 0 4px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const CheckBoxContainer = styled.div`
    align-self: flex-start;
`;