const MyMessage = ({ message }) => {
    if(message?.attachments?.length > 0){
        return(
            <img
                src = {message.attachments[0].file}
                alt = "message-attachment"
                className ="message-image"
                style={{ float: 'right', cursor: "pointer"}}
                onClick= {() => window.open(message.attachments[0].file, "_blank")
                }
            />
        );
    }

    console.log(message);

    return(
        <div className = "message" style = {{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3b2a50'}}>
            {message.text.replace(/<\/?[^>]+(>|$)/g, "")}
        </div>
    );
};

export default MyMessage;