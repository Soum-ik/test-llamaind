interface BoxProps {
    text: string;
    style?: string
}
function Box({ text, style }: BoxProps) {
    return <div className={`${style}  text-white text-[16px] md:text-[20px] backdrop-blur-sm font-normal md:font-light border-x-[#4E93F0]/40 border-x-2 bg-[#06FFDF]/10 flex items-center justify-center font-Roboto rounded-md w-[320px] px-[30px] py-[30px] xs:w-[340px] sm:w-[360px] md:w-[390px] xl:w-[340px] 13inch:w-[400px]  h-[52px] md:h-[86px] text-center `}>
        {text}
    </div>;
}

export default Box;
