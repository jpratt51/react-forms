import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const INITIAL_STATE = [
        { id: uuid(), backgroundColor: "red", width: "200", height: "300" },
        { id: uuid(), backgroundColor: "black", width: "100", height: "200" },
    ];
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        console.log(boxes);
        setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
        console.log(boxes);
    };
    function deleteBox(id) {
        setBoxes((boxes) => boxes.filter((box) => box.id !== id));
    }
    return (
        <div>
            <h3>Boxes</h3>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({ id, backgroundColor, width, height }) => (
                    <Box
                        id={id}
                        backgroundColor={backgroundColor}
                        width={width}
                        height={height}
                        deleteBox={deleteBox}
                        key={id}
                    />
                ))}
            </div>
        </div>
    );
};

export default BoxList;
