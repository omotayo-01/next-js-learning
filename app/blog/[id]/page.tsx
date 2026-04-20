import blogs from "@/data/blog.json";

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogs.find((p) => p.id === params.id);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
