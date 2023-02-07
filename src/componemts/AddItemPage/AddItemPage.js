import React from "react";
import {StyledHeader, PageContainer} from './styled'
import Form from '../Form/Form'

export const AddItemPage = () => {
    return (
        <PageContainer>
            <StyledHeader>
                Welcome to our app!
            </StyledHeader>
        <Form/>
        </PageContainer>
    )
}