interface ButtonProps {
    text: string;
}

function Button({ text }: ButtonProps) {
    return <button type="submit" className="z-50 rounded-lg px-[32px] py-[18px]  font-Roboto duration-500  bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF] ">{text}</button>;
}

export default Button;
