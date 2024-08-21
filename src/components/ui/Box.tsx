interface BoxProps {
    text: string;
}
function Box({ text }: BoxProps) {
    return <div className="text-white text-[16px] md:text-[20px] backdrop-blur-sm font-normal md:font-light border-x-[#4E93F0]/40 border-x-2 bg-[#06FFDF]/10 flex items-center justify-center font-Roboto rounded-md w-[320px] py-[30px] md:w-[400px] h-[52px] md:h-[86px] text-center">
        {text}
    </div>;
}

export default Box;
