type ButtonPropsType = {
    nickName: string;
    callback: () => void;
};

export const Button = (props: ButtonPropsType) => {
    function onClickButtonHandler() {
        props.callback();
    }

    return <button onClick={onClickButtonHandler}>{props.nickName}</button>;
};
