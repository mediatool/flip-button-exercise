import { CheckIcon } from "@chakra-ui/icons"
import React, { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'

interface Props {
    numButtons: number;
    buttonTexts: string[];
}

const FlipButton = ({ ...props }: Props) => {
    const [selectedButtons, setSelectedButtons] = useState<number[]>([]);

    const handleClick = (index: number) => {
        setSelectedButtons(prevSelectedButtons => {
            if (prevSelectedButtons.includes(index)) {
                return prevSelectedButtons.filter(i => i !== index);
            } else {
                return [...prevSelectedButtons, index];
            }
        });
    };

    const buttons = []
    const buttonWidth = Math.floor(100 / props.numButtons) + "%";
    for (let i = 0; i < props.numButtons; i++) {
        const isActive = selectedButtons.includes(i);
        buttons.push(<Button
            size="xs"
            key={`flipButton${i}`}
            className="flip-button"
            backgroundColor={isActive ? "#2a8bfb" : "#eaf3ff"}
            color={isActive ? "white" : "black"}
            width={buttonWidth}
            _hover={{ background: "#7fb9fd", color: "white" }}
            _focus={{ outline: "none" }} //Remove border after clicking button
            leftIcon={isActive ? <CheckIcon mr="7px" /> : undefined}
            onClick={() => handleClick(i)}>
            {props.buttonTexts[i] === undefined ? "missing text" : props.buttonTexts[i]}

        </Button>);
    }
    return (
        <ButtonGroup className="flip-button-wrapper">
            {buttons}
        </ButtonGroup>
    )
};

export default FlipButton