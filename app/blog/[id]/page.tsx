import React from "react";
import { readFile } from "fs/promises";
import Markdown from "react-markdown";
import RemarkFrontmatter from "remark-frontmatter";

export default async function BlogPage({ params }: { params: { id: string } }) {
	let markDown = await readFile(`app/blog/pages/${params.id}.md`);
	return (
		<Markdown remarkPlugins={[RemarkFrontmatter]}>
			{markDown.toString()}
		</Markdown>
	);
}
