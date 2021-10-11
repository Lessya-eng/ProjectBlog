import { BaseService } from "./BaseService";

class PostsAPIService extends BaseService {
    //для приватных url
    public async getMyPosts() {
        return this.get("my_posts/");
    }
}

export const PostsService = new PostsAPIService();