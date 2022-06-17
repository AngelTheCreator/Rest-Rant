const React = require('react');
const Def = require('./default');

function error404 () {
    return (
        <Def>
            <main>
                <h1>404 Error: Sorry! Your plant is in another website</h1>
                <img src="images/404.jpeg" alt="Woman hiding begind plants" />
                <div className="link">
                 <a href="Photo by Daria Shevtsova: https://www.pexels.com/photo/person-holding-green-vegetables-3629537/">Photo</a> by <a href="https://www.pexels.com/@daria/">Daria Shevtsova</a> on <a href="https://www.pexels.com/">Pexels</a>
                </div>
                <div className="container"> 
                        <div className="center"> 
                <a href="/">
                    <button className="btn-primary">Go Back</button>
                </a>
                        </div>  
                    </div>
                <div></div>
            </main>
        </Def>
    )
}

module.exports = error404;