import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {CheckBoxContainer, FullScreenBox, LoginForm, LoginTitle} from "./LoginStyles";
import {Button} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

export const Login = () => {

    const [email, setEmail] = useState<string | null>(null)

    const [password, setPassword] = useState<string | null>(null)

    const [checked, setChecked] = useState<boolean>(true)

    // const [captcha, setCaptcha] = useState<boolean>(false)

    return (
        <FullScreenBox>
            <LoginForm>
                <LoginTitle>Log In</LoginTitle>
                <TextField
                    onChange={event => {setEmail(event.target.value)}}
                    value={email}
                    id='textFieldEmail'
                    label='Email'
                    fullWidth
                />
                <TextField
                    onChange={event => {setPassword(event.target.value)}}
                    value={password}
                    id='textFieldPassword'
                    label='Password'
                    type='password'
                    fullWidth
                />
                <CheckBoxContainer>
                    <Checkbox
                        checked={checked}
                        onChange={event => {setChecked(event.target.checked)}}
                        color='primary'
                    />
                    <span>remember me</span>
                </CheckBoxContainer>
                <Button variant="contained" color="primary" size="large">LOGIN</Button>
            </LoginForm>
        </FullScreenBox>
    );
}