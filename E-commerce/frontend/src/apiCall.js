import axios from "axios";

const url = process.env.REACT_APP_URL;

export const axiosArticles = (page) => {
    return axios.get(`${url}/product/api?page=${page}`)
        .then(response => {
            const articles = response.data;
            articles.sort((a, b) => b.views - a.views);
            return articles;
        })
        .catch(error => {
            console.error("Une erreur s'est produite lors de la récupération des articles :", error);
            throw error;
        });
}

export const axiosArticlesbyCategory = (id_category, page) => {
    return axios.get(`${url}/product/api?page=${page}&category_id=${id_category}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error("Une erreur s'est produite lors de la récupération des articles :", error);
            throw error;
        });
}

export const axiosArticleInfos = (id) => {
    return axios.get(`${url}/product/api/${id}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error("Une erreur s'est produite lors de la récupération des articles :", error);
            throw error;
        });
}

export const axiosCategories = () => {
    return axios.get(`${url}/category/api`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error("Une erreur s'est produite lors de la récupération des catégories :", error);
            throw error;
        });
}

export const axiosSubCategories = (id) => {
    return axios.get(`${url}/category/api/${id}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error("Une erreur s'est produite lors de la récupération des catégories :", error);
            throw error;
        });
}

export const axiosLogin = (email, password) => {
    return axios.post(`${url}/connect`, {
        email,
        password,
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error("Erreur de connexion :", error);
        throw error;
      });
  }

  export const axiosRegister = (values) => {
    return axios.post(`${url}/signin`, values)
      .then(response => {
        console.log(response);
        return response;
      })
      .catch(error => {
        console.error("Erreur de connexion :", error);
        throw error;
      });
  }