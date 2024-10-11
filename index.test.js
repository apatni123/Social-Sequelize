const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');




beforeAll(async () => {
    await db.sync({ force: true }); // Create the tables for testing
});

afterAll(async () => {
    await db.close(); // Close the database connection after tests
});

describe("Database Connection", () => {
    it("should connect to the database", async () => {
        expect(db).toBeDefined();
    });
});

describe("User Model", () => {
    it("should create a user", async () => {
        const user = await User.create({ username: "testUser", email: "test@example.com" });
        expect(user.username).toBe("testUser");
        expect(user.email).toBe("test@example.com");
    });
});

describe("Profile Model", () => {
    it("should create a profile", async () => {
        const user = await User.create({ username: "testUser", email: "test@example.com" });
        const profile = await Profile.create({ bio: "Hello World", profilePicture: "pic.jpg", birthday: "29/07/2001" });
        await user.setProfile(profile);
        expect(profile.bio).toBe("Hello World");
        expect(profile.profilePicture).toBe("pic.jpg");
    });
});

describe("Post Model", () => {
    it("should create a post", async () => {
        const user = await User.create({ username: "testUser", email: "test@example.com" });
        const post = await Post.create({ title: "Test Post", body: "This is a test body." });
        await user.addPost(post);
        expect(post.title).toBe("Test Post");
        expect(post.body).toBe("This is a test body.");
    });
});

describe("Comment Model", () => {
    it("should create a comment", async () => {
        const user = await User.create({ username: "testUser", email: "test@example.com" });
        const post = await Post.create({ title: "Test Post", body: "This is a test body." });
        const comment = await Comment.create({ body: "This is a comment." });
        await post.addComment(comment);
        expect(comment.body).toBe("This is a comment.");
    });
});

describe("Like Model", () => {
    it("should create a like", async () => {
        const user = await User.create({ username: "testUser", email: "test@example.com" });
        const like = await Like.create({ reactionType: "like" });
        await user.addLike(like);
        expect(like.reactionType).toBe("like");
    });
});




