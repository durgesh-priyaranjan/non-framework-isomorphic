import Views from "./client/index";

export default {
    //client: {
    //    "/": Views.getHomePageContent.render,
    //    "/movies": Views.getMovieListPage.render
    //},
    server: {
        "/": {
            get: Views.getHomePageContent.send
        },
        "/movies": {
            get: Views.getMovieListPage.send
        }
    }
};

