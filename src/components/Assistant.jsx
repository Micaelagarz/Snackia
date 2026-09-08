const Assistant = (props) => {
    return(
        <div>
            {props.assistant.map((assistant) => (
                <div key={assistant.name}>
                    <h3>{assistant.name}</h3>
                    <p>
                        {assistant.task} {assistant.emoji}
                    </p>
                </div>
            ))}
        </div>  
    );
  };
  

export default Assistant;