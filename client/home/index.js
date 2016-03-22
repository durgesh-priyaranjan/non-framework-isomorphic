import template from "./template";

import Layout from "../layout";
import Header from "../header";
import Footer from "../footer";

const getMarkup = function () {
    const header = Header.template();
    const content = template();
    const footer = Footer.template();

    return Layout.template({header, content, footer});
};


export default {
    send: function () {
        this.res.writeHead(200, {'Content-Type': 'text/html'});
        this.res.end(getMarkup());
    },
    render: function () {

    }
};