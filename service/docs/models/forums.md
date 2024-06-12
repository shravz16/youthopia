# Forum Model

```mermaid

---
Class Diagram for Forum
---

classDiagram
    class Forum{
        + list Post 
        
    }


    class Post{
        +String Title
        +Date Date 
        +String description
        +int Likes
        +int PostId
        +int youthId
        +list Comments
    }

    class Comment{
        +String comment
        +Date Date
        +int youthId
        +int CommentId
    }

    class PostService{
        +createPost(Post Object)
        +getPost(int PostId)
        +deletePost(int PostId)
        +updatePost(Post Object)
    }


    class CommentServices{
        +createComment(Comment Object)
        +updateComment(Comment Object)
        +deleteComment(int CommentId)
        +getComment(int CommentId)
    }


    PostService *-- Post
    PostService *-- Youth
    CommentServices *-- Comment
    CommentServices *-- Youth
    Forum *-- Post
    Forum *-- Comment
