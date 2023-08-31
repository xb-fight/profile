import axios from 'axios'
import Message from "@/utils/Message.js"


const ins = axios.create();

ins.interceptors.response.use(res => {
    if (res.data.code !== 0) {
        Message({
            type: 'error',
            message: res.data.msg,
            duration: 2000
        })
    }
    return res.data.data;
})

// 获取文章分类
export async function getArticleType() {
    const res = await ins.get('/api/articleType');
    return res;
}

// 获取文章列表
export async function getArticleList(page = 1, limit = 10, categoryId = -1) {
    return await ins.get('/api/article', {
        params: {
            page,
            limit,
            categoryId
        }
    });
}

// 获取文章详情
export async function getArticleDetail(articleId) {
    return await ins.get('/api/article/' + articleId);
}


// 发表评论
// path: /api/comment
// method: POST
// body: {
// 	nickname: "昵称",
// 	content: "评论内容，纯文本",
// 	articlId: <id>	#评论的博客id
// }
export async function postComment(commentInfo) {
    return await ins.post('/api/comment', commentInfo);
}



export async function getComment(page = 1, limit = 10, articleId = -1) {
    return await ins.get('/api/comment', {
        params: {
            page,
            limit,
            articleId
        }
    })
}