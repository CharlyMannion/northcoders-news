import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fe-nc-news-api.herokuapp.com/api'
})

export const getArticleComments = (article_id) => {
    return instance
        .get(`/articles/${article_id}/comments`)
}

export const getArticleByID = (article_id) => {
    return instance
        .get(`/articles/${article_id}`)
}

export const getRoute = (inp) => {
    return instance
        .get(`/${inp}`)
}

export const getArticleByTopicSlug = (inp, slug) => {
    return instance
        .get(`${inp}`, { params: { topic: slug } })
}

export const increaseArticleVotesByValue = (article_id, val) => {
    return instance
        .patch(`/articles/${article_id}`, { inc_votes: val })
}

export const increaseCommentVotesByValue = (comment_id, val) => {
    return instance
        .patch(`/comments/${comment_id}`, { inc_votes: val })
}