import Box from "../ui/Box";

type FutureTechLoopingProps = {
    array: string[];
    style?: string,
    boxStyle?: string,
};

function FutureTechLooping({ array, style = 'space-y-4', boxStyle }: FutureTechLoopingProps) {
    return (
        <div className={`z-30 ${style} `}>
            {array.map((item, idx) => (
                <Box text={item} style={boxStyle} key={idx} />
            ))}
        </div>
    );
}

export default FutureTechLooping;
