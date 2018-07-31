var S = require('string');


module.exports = async function(context) {
    return {
        status: 200,
        body: S('<a>foo</a>').between('<a>', '</a>').s 
    };
}
