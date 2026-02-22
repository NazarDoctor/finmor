import { test, expect } from '@playwright/test';
import { PostsAPI } from '../pages/APIService';

test.describe.serial('WordPress Posts API - CRUD', () => {
  let createdPostId: number;

  test('CREATE post', async ({ request }) => {
    const postsAPI = new PostsAPI(request);

    const newPost = await postsAPI.createPost({
      title: 'Test Post from Playwright',
      content: 'Automation content',
      status: 'publish',
      excerpt: 'Test excerpt'
    });

    createdPostId = newPost.id;

    expect(newPost.title.rendered).toBe('Test Post from Playwright');
    expect(newPost.status).toBe('publish');
    expect(typeof newPost.content.protected).toBe('boolean');
  });

  test('READ all posts', async ({ request }) => {
    const postsAPI = new PostsAPI(request);

    const posts = await postsAPI.getAllPosts();

    expect(Array.isArray(posts)).toBeTruthy();
    expect(posts.length).toBeGreaterThan(0);
  });

  test('READ post by ID', async ({ request }) => {
    const postsAPI = new PostsAPI(request);

    const post = await postsAPI.getPostById(createdPostId);

    expect(post.id).toBe(createdPostId);
    expect(Array.isArray(post.categories)).toBeTruthy();
    expect(post.tags).toEqual([]);
  });

  test('UPDATE post', async ({ request }) => {
    const postsAPI = new PostsAPI(request);

    const updated = await postsAPI.updatePost(createdPostId, {
      title: 'Updated Title'
    });

    expect(updated.title.rendered).toBe('Updated Title');
  });

  test('PATCH post', async ({ request }) => {
    const postsAPI = new PostsAPI(request);

    const patched = await postsAPI.patchPost(createdPostId, {
      excerpt: 'Patched excerpt'
    });

    expect(patched.excerpt.rendered).toContain('Patched');
  });
});