const React = require('react');
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map (c => {
            return (
                <div className='border'>
                    <div className='border'>
                    <h3 className='rant'>{c.rant ? 'Rant! 😡 ' : 'Veloved! 💚 '}</h3>
                    </div>
                    <h5>{c.content}</h5>
                    <h5>
                        <stong>- {c.author}</stong>
                    </h5>
                    <h5>Rating: {c.stars}</h5>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <img src={data.place.pic} alt={data.place.name}/>
                <h4>Serving {data.place.cuisines}</h4>
                <div className='container'>
                    <div className='center'>
                    <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                        <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                            <button type='submit' className='btn btn-danger'>
                                Delete
                            </button>
                        </form>
                    </div>
                    </div>
                <h4>{data.place.showEstablished()}</h4>
                <h2>Rating</h2>
                <p>Not Rated</p>
                <hr />
                <h2>Comments</h2>
                {comments}
                <hr />
                <div className='container'>
                    <div className='center'>
                        <a href={data.place.site}>
                        <button className='btn-primary'>Website</button>
                        </a>
                    </div>
                </div>
                
            </main>
        </Def>
    )
}

module.exports = show 