const API_BASE = "http://52.207.136.196:8080";

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  published: boolean;
}

export async function fetchPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${API_BASE}/api/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost> {
  const res = await fetch(`${API_BASE}/api/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Post not found");
  }

  return res.json();
}
