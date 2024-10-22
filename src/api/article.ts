// import { http } from '@/utils/http'
// import { baseURLApi } from './utils'
// type ResultTable = {
//   code?: number
// data?: {
//   /** 列表数据 */
//   list: Array<any>
//   /** 总条目数 */
//   total?: number
//   /** 每页显示条目个数 */
//   pageSize?: number
//   /** 当前页数 */
//   currentPage?: number
// }
// }
// type page = {
//   /** 列表数据 */
//   list: Array<any>
//   /** 总条目数 */
//   total?: number
//   /** 每页显示条目个数 */
//   pageSize?: number
//   /** 当前页数 */
//   currentPage?: number
// }
// export type ArticleResult<T> = {
//   code: number
//   message: string
//   data: T
// }

// // /** 条件分页获取文章 */
// export const getArticleList = (data?: object) => {
//   return http.request<ArticleResult<page>>(
//     'get',
//     baseURLApi('/article/list'),
//     {
//       params: data,
//     },
//   )
// }

// /** 新增文章 */
// export const addArticle = (data?: object) => {
//   return http.request<ArticleResult>("post", baseAdminURLApi("/article/add"), {
//     data
//   });
// };

// /** 修改文章 */
// export const editArticle = (id?: number, data?: object) => {
//   return http.request<ArticleResult>(
//     "put",
//     baseAdminURLApi(`/article/update/${id}`),
//     { data }
//   );
// };

// /** 删除文章  传文章状态 1、2会假删除 3会真删除*/
// export const deleteArticle = (id, status) => {
//   return http.request<ArticleResult>(
//     "delete",
//     baseAdminURLApi(`/article/delete/${id}/${status}`),
//     {}
//   );
// };

// /** 修改文章置顶 */
// export const updateArticleTop = (id, type, value) => {
//   return http.request<ArticleResult>(
//     "put",
//     baseAdminURLApi(`/article/update/${id}/${type}/${value}`),
//     {}
//   );
// };

// /** 恢复文章 */
// export const revertArticle = id => {
//   return http.request<ArticleResult>("put", `/api/article/revert/${id}`, {});
// };

// /** 公开或隐藏文章 1 公开 2 私密 */
// export const isArticlePublic = (id, status) => {
//   return http.request<ArticleResult>(
//     "put",
//     `/api/article/update/${id}/${status}`,
//     {}
//   );
// };

// /** 根据文章id获取文章详细信息 */
// export const getArticleById = id => {
//   return http.request<ArticleResult>(
//     "get",
//     baseAdminURLApi(`/article/list/getArticleById/${id}`),
//     {}
//   );
// };

// /** 根据文章标题 和 id 判断文章标题是否重复了 */
// export const titleExist = data => {
//   return http.request<ArticleResult>(
//     "get",
//     baseAdminURLApi(`/article/list/checkArticleTitle`),
//     {
//       params: data
//     }
//   );
// };
