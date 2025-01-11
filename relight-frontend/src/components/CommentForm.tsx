import { useState } from "react";
import useFetch from "../hooks/useFetch";

interface Prop {
    commentURL: string
}

const CommentForm = ({commentURL}: Prop) => {
    const [content, setContent] = useState<string>();
    const {data, isLoading, error, postData} = useFetch();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await postData(commentURL, {'content': content});
    };

    return (
    <form onSubmit={handleSubmit}>
        <textarea name="content" placeholder="Comment..." onChange={(e) => setContent(e.target.value)}
        value={content}></textarea> <br />
        <button>Upload Comment</button>
    </form>
  );
};

export default CommentForm;