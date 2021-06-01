import { useState, useEffect } from "react";
import Head from 'next/head';
import Router from "next/router";
import styled from "styled-components";
import {
    FormHeadline,
    FormSubheadline,
    AuthForm,
    FormControl,
    Label,
    Input
} from "../shared/styles/forms";
import { Button } from "../shared/styles/buttons";
import { register, setUserErrorMessage} from "../store/user/user.actions";
import { selectUserToken, selectUserErrorMessage } from "../store/user/user.selectors";
import { useDispatch, useSelector } from "react-redux";

const Center = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 200px);
    justify-content: center;
    width: 100%;
`;

const ErrorText = styled.h2`
    color: maroon;
    font-size: 2.6rem;
    font-style: italic;
    margin: 10px;
`;

const SignUp = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });
    const dispatch = useDispatch();
    const token = useSelector(selectUserToken);
    const errorMessage = useSelector(selectUserErrorMessage);

    useEffect(() => {
        dispatch(setUserErrorMessage(''));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const isValidFormSubmission = () => {
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        dispatch(register(form));

        if (errorMessage === '' && token != '') {
            Router.push("/recipes-index");
        }
    }

    const { username, email, password } = form;
    return (
        <>
            <Head>
                <title>EasyMealPlanner | Sign up</title>
            </Head>
            <Center>
                <FormHeadline>Sign Up</FormHeadline>
                <FormSubheadline>Find delicious recipes and reach your health goals.</FormSubheadline>
                {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
                <AuthForm onSubmit={handleSubmit}>
                    <FormControl>
                        <Label htmlFor="username">User name</Label>
                        <Input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleChange}
                            id="username"
                        />
                    </FormControl>
                    <FormControl>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            id="email"
                        />
                    </FormControl>
                    <FormControl>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            id="password"
                        />
                    </FormControl>
                    <Button type="submit">Let's Eat!</Button>
                </AuthForm>
            </Center>
        </>
    );
};

export default SignUp;