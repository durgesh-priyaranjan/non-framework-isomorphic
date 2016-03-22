export default function(page){
    return `
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Simple Isomorphic</title>
          </head>
          <body>
            ${page.header}
            ${page.content}
            ${page.footer}
          </body>
          <script src="/dist/bundle.js"></script>
        </html>
    `;
};