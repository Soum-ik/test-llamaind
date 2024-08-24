import ReactMarkdown from "react-markdown";

export default function Markdown({ children }) {
    return (
        <ReactMarkdown
            className="space-y-4"
            components={{
                ul: (props) => (
                    <ul className="list-inside list-disc space-y-2" {...props} />
                ),
                ol: (props) => (
                    <ol
                        className="list-inside list-decimal"
                        style={{ paddingLeft: "1.5rem", maxWidth: "550px" }}
                    >
                        {props.children.map((child, index) => (
                            <li
                                key={index}
                                style={{
                                    paddingLeft: "1.5rem",
                                    textIndent: "-1.5rem",
                                    marginBottom: "0.5rem", // Adds consistent spacing between items
                                }}
                            >
                                {child}
                            </li>
                        ))}
                    </ol>
                ),
                a: (props) => (
                    <a className="text-green-500 underline" target="_blank" {...props} />
                ),
            }}
        >
            {children}
        </ReactMarkdown>
    );
}
