import { CheckIcon } from "@chakra-ui/icons"
import React, { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'

interface Props {
    buttonTexts: (string | JSX.Element)[];
    size: string[];
}

const FlipButton = ({ ...props }: Props) => {
    const [selectedButtons, setSelectedButtons] = useState<number[]>([]);

    const handleClick = (index: number) => {
        setSelectedButtons(prevSelectedButtons => {
            if (prevSelectedButtons.includes(index)) {
                return prevSelectedButtons.filter(i => i !== index);
            }
            return [...prevSelectedButtons, index];
        });
    };

    const buttonWidth = Math.floor(100 / props.buttonTexts.length) + "%";

    props.buttonTexts = props.buttonTexts.map(text => {
        const index = props.buttonTexts.indexOf(text);
        const isActive = selectedButtons.includes(index);
        return (
            <Button
                key={index}
                className="flip-button"
                backgroundColor={isActive ? "#2a8bfb" : "#eaf3ff"}
                color={isActive ? "white" : "black"}
                width={buttonWidth}
                height="100%"
                _hover={{ background: "#7fb9fd", color: "white" }}
                _focus={{ outline: "none" }} //Remove border after clicking button
                leftIcon={isActive ? <CheckIcon mr="7px" /> : undefined}
                onClick={() => handleClick(index)}>
                {text}
            </Button>
        );
    });

    return (
        <ButtonGroup width={props.size[0]} height={props.size[1]} className="flip-button-wrapper">
            {props.buttonTexts}
        </ButtonGroup>
    )
};

export default FlipButton