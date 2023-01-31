interface Props {
    numButtons: number;
    buttonTexts: string[];
}

const FlipButton: React.FC<Props> = ({ numButtons, buttonTexts }) => {
    const buttons = []
    const buttonWidth = Math.floor((568 - numButtons * 4) / numButtons) + 'px';

    const selectFlipButton = ({ flipButtonId }: { flipButtonId: string }) => {
        const element = document.getElementById(flipButtonId)

        if (element) {
            if (element.classList.contains('selected-flip-button')) {
                element.classList.remove('selected-flip-button')
            }
            else {
                element.classList.add('selected-flip-button');
            }
        }
    }

    for (let i = 0; i < numButtons; i++) {
        buttons.push(<button id={`flipButton${i}`} className="flip-button" style={{ width: buttonWidth }} onClick={() => selectFlipButton({ flipButtonId: `flipButton${i}` })}>
            <div className="test"></div>
            {buttonTexts[i] === undefined ? "missing text" : buttonTexts[i]}
        </button>);
    }
    return (
        <div className="flip-button-wrapper">
            {buttons}
        </div>
    )
};

export default FlipButton