import Home from '@/views/Home';
import About from '@/views/About';
import Article from '@/views/Article';
import Project from '@/views/Project/index';
import ArticleDetail from '@/views/ArticleDetail';


export default [{
        name: "Home",
        path: '/',
        component: Home
    },
    {
        name: "About",
        path: '/about',
        component: About
    },
    {
        name: "Article",
        path: '/article',
        component: Article
    },
    {
        name: "Project",
        path: '/project',
        component: Project,
    },
    {
        name: "ArticleCate",
        path: '/article/cate/:categoryId',
        component: Article,
    },
    {
        name: "ArticleDetail",
        path: "/article/:articleId",
        component: ArticleDetail,
    }

]