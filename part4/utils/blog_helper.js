const Blog = require('../models/blog')

const initialBlogs = [
    {
        title: 'React patterns',
        author: 'Michael Chan',
        url: 'https://reactpatterns.com/',
        likes: 7,
    },
    {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
    }
]

const allBlogs = async () => {
    const response = Blog.find({})
    return response.map(x => JSON.parse(JSON.stringify(x)))
}


module.exports =  {
    initialBlogs,
    allBlogs
}