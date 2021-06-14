import {
    Container,
    ImageLink,
    ImageContainer,
    TextContainer,
    TextContent,
} from "../../shared/styles/recipePreview";
import styled from "styled-components";
import { Button } from "../../shared/styles/buttons";

const Preview = styled.div`
    margin-bottom: 70px;
    height: 370px;
    min-width: 300px;
`;

const ChoosenImageContainer = styled(ImageContainer)`
    cursor: auto;
`;

const ChoosenRecipeTextContainer = styled(TextContainer)`
    display: flex;
`;

const ChooseButton = styled(Button)`
    background-color: white;
    border: #111;
    border: 1px solid #111;
    color: #111;

    &:hover {
        background-color: var(--color-primary);
        border: none;
        color: white;
    }
`;

const ChooseRecipePreview = ({
    id,
    name,
    imageLink
}) => {
    return (
        <Preview>
            <Container>
                <ChoosenImageContainer
                    src={`https://easymealplanner.s3-us-west-1.amazonaws.com/${id}/${imageLink}`}
                    alt={name}
                />
                <ChoosenRecipeTextContainer>
                    <TextContent>
                        {name}
                    </TextContent>
                </ChoosenRecipeTextContainer>
            </Container>
            <ChooseButton>Choose</ChooseButton>
        </Preview>
    );
}

export default ChooseRecipePreview;