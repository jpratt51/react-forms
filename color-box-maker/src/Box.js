import React from "react";

function Box({ id, backgroundColor, width, height, deleteBox }) {
    const handleDeleteBox = () => {
        deleteBox(id);
    };
    return (
        <>
            <div
                data-testid={`${backgroundColor} ${height} ${width}`}
                style={{
                    margin: "20px",
                    backgroundColor: backgroundColor,
                    height: height + "px",
                    width: width + "px",
                }}
            ></div>
            <button
                onClick={handleDeleteBox}
                data-testid={`${backgroundColor} ${height} ${width} X`}
            >
                X
            </button>
        </>
    );
}

export default Box;
