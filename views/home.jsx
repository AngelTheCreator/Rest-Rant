const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Vegone</h1>
                <h2>Your hub for all things Plant-Based</h2>
                    <div className="container"> 
                        <div className="center"> 
                <a href="/places">
                    <button className="btn-primary">Vegin Your Journey</button>
                </a>
                        </div>  
                    </div>
                <div>
                    <img src="/images/green.jpeg" alt="Green neon sign surrounded by plants"/>
                </div>
                <div className="link">
                 <a href="https://www.pexels.com/photo/illuminated-green-sign-3626733/">Photo</a> by <a href="https://www.pexels.com/@daria/">Daria Shevtsova</a> on <a href="https://www.pexels.com/">Pexels</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = home
