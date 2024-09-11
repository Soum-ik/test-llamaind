import Box from "../ui/Box";

type FutureTechLoopingProps = {
    array: string[];
    style?: string
};

function FutureTechLooping({ array, style = 'space-y-4', }: FutureTechLoopingProps) {
    return (
        <div className={`z-30 ${style} `}>
            {array.map((item, idx) => (
                <Box text={item} key={idx} />
            ))}
        </div>
    );
}

export default FutureTechLooping;
