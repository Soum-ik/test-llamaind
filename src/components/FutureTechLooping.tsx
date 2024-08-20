import Box from "./ui/Box";

type FutureTechLoopingProps = {
    array: string[];
};

function FutureTechLooping({ array }: FutureTechLoopingProps) {
    return (
        <div className="mt-10 z-30 space-y-4 ">
            {array.map((item, idx) => (
                <Box text={item} key={idx} />
            ))}
        </div>
    );
}

export default FutureTechLooping;
