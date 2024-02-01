import Link from "next/link";
import { ReactNode } from "react";
import { EntryFields } from "contentful";
import { BLOCKS, INLINES, MARKS, Node } from "@contentful/rich-text-types";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const RichText = ({ content }: { content: EntryFields.RichText }) => {
    const options = {
        renderNode: {
            [BLOCKS.QUOTE]: (node: Node, children: ReactNode) => {
                return (
                    <div className="w-full flex justify-center p-4 text-2xl">
                        <div className="p-8 flex flex-col items-center gap-8">
                            <hr className="w-1/3" />
                            <em className={`before:content-['"'] before:text-4xl after:content-['"'] after:text-4xl flex gap-2`}>
                                <blockquote>{children}</blockquote>
                            </em>
                            <hr className="w-1/3" />
                        </div>
                    </div>
                )
            },
            [INLINES.HYPERLINK]: (node: Node, children: ReactNode) => {
                return <Link href={node.data.uri} target="__blank" className="text-primary">{children}</Link>
            },
            [BLOCKS.UL_LIST]: (node: Node, children: ReactNode) => {
                return (
                    <ul className="list-disc px-6 my-2">{children}</ul>
                )
            },
            [BLOCKS.HR]: (node: Node, children: ReactNode) => {
                return (
                    <hr className="my-4" />
                )
            },
            [BLOCKS.TABLE]: (node: Node, children: ReactNode) => {
                return (
                    <table className="my-4 w-full">
                        {children}
                    </table>
                )
            },
            [BLOCKS.TABLE_HEADER_CELL]: (node: Node, children: ReactNode) => {
                return (
                    <th className="bg-light-gray text-white text-left px-2">{children}</th>
                )
            },
            [BLOCKS.TABLE_ROW]: (node: Node, children: ReactNode) => {
                return (
                    <tr className="border">{children}</tr>
                )
            },
            [BLOCKS.TABLE_CELL]: (node: Node, children: ReactNode) => {
                return (
                    <td className="border-r px-2 py-1">{children}</td>
                )
            }
        },
        renderMark: {
            [MARKS.CODE]: (text: ReactNode) => {
                return (
                    <code className="bg-neutral-100 p-1 whitespace-pre">{text}</code>
                )
            }
        }
    }
    return documentToReactComponents(content, options)
}

export default RichText
