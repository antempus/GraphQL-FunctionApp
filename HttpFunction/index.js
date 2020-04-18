module.exports = async function (context, req) {

    context.log('this is a context log');
    console.log('this is a console log');

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "how long did this take???"
        };
    }
