const Posts = [
    {title : 'Post 1 Başlık', detail : 'Post 1 Detail'},
    {title : 'Post 2 Başlık', detail : 'Post 2 Detail'},
    {title : 'Post 3 Başlık', detail : 'Post 3 Detail'}
]


const addPost = (newPost) => {
    return promise = new Promise((resolve, reject) => {
        Posts.push(newPost)
        resolve('Post başarıyla eklendi')
    })
}

const listPost = () => {
    return promise = new Promise((resolve, reject) => {
        Posts.map(post => {
            console.log(post.title)
        })
        resolve('Postlar listenlendi')
    })
}

const showPost = async () => {
    
    try {
        await addPost({title : 'Post 4 başlık', detail : 'Post 4 detay'})
        listPost();
    } catch (error) {
        console.log(error);
    }
    
}

showPost()


