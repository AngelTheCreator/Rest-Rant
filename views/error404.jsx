const React = require('react');
const Def = require('./default');

function error404 () {
    return (
        <Def>
            <main>
                <h1>404 Error: Sorry! Your page is in another castle</h1>
                <img src="/images/supermario.gif" alt="super mario image, princess in another castle"/>
            </main>
        </Def>
    )
}

module.exports = error404;