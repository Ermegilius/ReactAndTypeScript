import BlogPosts, { BlogPost } from "./components/BlogPosts";
import { get } from "./util/http";
import { type ReactNode, useEffect, useState } from "react";
import fetchingImage from "./assets/data-fetching.png";

type RawDataBlogPost = {
	id: number;
	useId: number;
	title: string;
	body: string;
};

function App() {
	const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

	useEffect(() => {
		async function fetchPosts() {
			const data = (await get("https://jsonplaceholder.typicode.com/posts")) as RawDataBlogPost[];

			const blogPosts: BlogPost[] = data.map((rawPost) => {
				return {
					id: rawPost.id,
					title: rawPost.title,
					text: rawPost.body,
				};
			});
			setFetchedPosts(blogPosts);
		}
		fetchPosts();
	}, []);

	let content: ReactNode;
	if (fetchedPosts) {
		content = <BlogPosts posts={fetchedPosts} />;
	}

	return (
		<main>
			<img src={fetchingImage} alt="An abstract image depicting a data fetching" />
			{content}
		</main>
	);
}

export default App;
