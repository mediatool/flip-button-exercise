interface Props {
    numButtons: number;
}

const FlipButton: React.FC<Props> = ({ numButtons }) => {
    const buttons = []
    for (let i = 1; i <= numButtons; i++) {
        buttons.push(<button key={i} className="flip-button">Button {i}</button>);
    }
    return (
        <div className="flip-button-wrapper">
            {buttons}
        </div>
    )
};

export default FlipButton