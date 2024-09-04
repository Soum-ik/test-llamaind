import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Supports GitHub flavored markdown (tables, checklists, etc.)

export default function Markdown({
    children,
    listClassName = "ml-4 list-disc space-y-2", // Default styles for the list
    listItemClassName = "pl-1", // Default styles for list items
    linkClassName = "text-blue-500 hover:underline", // Default styles for links
    textIndentValue = '', // Allows you to customize text indentation
    lineHeight = '1.5', // Allows you to customize line height
}) {
    return (
        <ReactMarkdown
            className="space-y-3"
            remarkPlugins={[remarkGfm]} // Allows for more markdown syntax support
            components={{
                ul: ({ node, ...props }) => (
                    <ul
                        className={listClassName}
                        style={{ textIndent: textIndentValue, lineHeight }}
                        {...props}
                    />
                ),
                li: ({ node, ...props }) => (
                    <li
                        className={listItemClassName}
                        style={{ paddingLeft: '0em', lineHeight, ...props.style }}
                        {...props}
                    >
                        {props.children}
                    </li>
                ),
                a: ({ node, ...props }) => (
                    <a className={linkClassName} target="_blank" {...props} />
                ),
            }}
        >
            {children}
        </ReactMarkdown>
    );
}
