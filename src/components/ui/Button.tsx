interface ButtonProps {
    text: string;
    style?: string;
}

function Button({ text, style }: ButtonProps) {
    return <button type="submit" className={`z-40 transform rounded-lg px-[32px] py-[18px] text-[22px]  transition-transform font-Roboto duration-500  bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF] ${style}`}>{text}</button>;
}

export default Button;
