interface ButtonProps {
    text: string;
}

function Button({ text }: ButtonProps) {
    return <button onClick={() => alert('d')} type="submit" className="z-40 transform rounded-lg px-[32px] py-[18px] text-[22px]  transition-transform font-Roboto duration-500  bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF] ">{text}</button>;
}

export default Button;
