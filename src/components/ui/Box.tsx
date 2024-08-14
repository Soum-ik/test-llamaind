interface BoxProps {
    text: string;
}
function Box({ text }: BoxProps) {
    return <div className="text-white text-[20px] backdrop-blur-sm font-light border-x-[#4E93F0]/40 border-x bg-[#06FFDF]/10 flex items-center justify-center font-Roboto rounded-md w-[400px] h-[86px] text-center">
        {text}
    </div>;
}

export default Box;
