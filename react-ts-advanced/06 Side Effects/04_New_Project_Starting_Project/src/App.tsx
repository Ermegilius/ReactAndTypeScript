import BlogPosts, { BlogPost } from "./components/BlogPosts";
import { get } from "./util/http";
import { type ReactNode, useEffect, useState } from "react";
import fetchingImage from "./assets/data-fetching.png";
import { z } from "zod";
import ErrorMessage from "./components/ErrorMessage";

const rawDataBlogPostSchema = z.object({
	id: z.number(),
	userId: z.number(),
	title: z.string(),
	body: z.string(),
});

const expectedResponseDataSchema = z.array(rawDataBlogPostSchema);

function App() {
	const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState<string>();

	useEffect(() => {
		async function fetchPosts() {
			setIsFetching(true);
			try {
				const data = await get("https://jsonplaceholder.typicode.com/posts");
				const parsedData = expectedResponseDataSchema.parse(data);
				const blogPosts: BlogPost[] = parsedData.map((rawPost) => {
					return {
						id: rawPost.id,
						title: rawPost.title,
						text: rawPost.body,
					};
				});
				setFetchedPosts(blogPosts);
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				}
			}
			setIsFetching(false);
		}
		fetchPosts();
	}, []);

	let content: ReactNode;
	if (fetchedPosts) {
		content = <BlogPosts posts={fetchedPosts} />;
	}

	if (error) {
		content = <ErrorMessage text={error} />;
	}

	if (isFetching) {
		content = <p id="loading-fallback">Fetching posts...</p>;
	}

	return (
		<main>
			<h1>Blog Posts</h1>
			<img src={fetchingImage} alt="An abstract image depicting a data fetching" />
			{content}
		</main>
	);
}

export default App;
