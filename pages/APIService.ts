import { APIRequestContext, expect } from '@playwright/test';

export class PostsAPI {
  readonly request: APIRequestContext;
  readonly baseUrl: string = 'https://dev.emeli.in.ua/wp-json/wp/v2/posts';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  private getAuthHeaders() {
    return {
      Authorization: `Basic ${Buffer.from('admin:Engineer_123').toString('base64')}`,
      'Content-Type': 'application/json'
    };
  }

  async createPost(data: any) {
    const response = await this.request.post(this.baseUrl, {
      headers: this.getAuthHeaders(),
      data
    });

    expect(response.status()).toBe(201);
    return response.json();
  }

  async getAllPosts() {
    const response = await this.request.get(this.baseUrl);
    expect(response.status()).toBe(200);
    return response.json();
  }

  async getPostById(id: number) {
    const response = await this.request.get(`${this.baseUrl}/${id}`);
    expect(response.status()).toBe(200);
    return response.json();
  }

  async updatePost(id: number, data: any) {
    const response = await this.request.put(`${this.baseUrl}/${id}`, {
      headers: this.getAuthHeaders(),
      data
    });

    expect(response.status()).toBe(200);
    return response.json();
  }

  async patchPost(id: number, data: any) {
    const response = await this.request.patch(`${this.baseUrl}/${id}`, {
      headers: this.getAuthHeaders(),
      data
    });

    expect(response.status()).toBe(200);
    return response.json();
  }

  async deletePost(id: number) {
    const response = await this.request.delete(`${this.baseUrl}/${id}`, {
      headers: this.getAuthHeaders()
    });

    expect(response.status()).toBe(200);
    return response.json();
  }
}
