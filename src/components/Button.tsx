import React from "react";

type ButtonPropsType = {
    nickName: string;
    callback: () => void;
};

export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callback();
    };

    return <button onClick={onClickButtonHandler}>{props.nickName}</button>;
};
