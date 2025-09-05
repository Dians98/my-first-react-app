function Button_test ({bg_color = "blue", color="white", btn_text="default"}) {
    const buttonStyle = {
        backgroundColor: bg_color,
        color: color
    };

    return (
        <button style={buttonStyle}>{btn_text}</button>
    )
}

export default function Button()
{
    return (
        <>
        <Button_test bg_color="black" color="white" btn_text="Black&White"/>
        <Button_test bg_color="red" color="yellow" btn_text="Red&Yellow"/>
        <Button_test />
        </>
    );
}

