import React from "react";

// props
/*
props {
    elements: [
        {
            id: 1,
            boardId: 2,
            type: label,
            value: text
       },
       {
            id: 2,
            boardId: 2,
            type: image,
            value: "Hello.jpg"
       }
    ]
}

*/

const SelectedMoodboard = (props) => {
    return (
        <div>
            {
                props.elements.map(element => {
                    if (element.type === "label") {
                        return <p key={element.id}>{element.value}</p>
                    } else {
                        return <img key={element.id} src={element.value}/>
                    }
                })
            }
        </div>
    );
}

export default SelectedMoodboard;