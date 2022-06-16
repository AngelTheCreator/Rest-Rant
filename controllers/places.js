const { application } = require('express')

const router = require('express').Router()


router.get('/', (req, res) => {
    let places = [{
      id: 1,
      name: 'Vihn loi Tofu',
      city: 'Cerritos',
      state: 'CA',
      cuisines: 'Vietnamese, Vegan',
      pic: 'https://www.presstelegram.com/wp-content/uploads/2019/07/LPT-L-DINE-VINHLOI-1-1.jpg?w=1024'
    }, {
      id: 2,
      name: 'Nice Guys',
      city: 'Stanton',
      state: 'CA',
      cuisines: 'American, Vegan',
      pic: 'https://static.wixstatic.com/media/dadd24_175bbfb9106b4386b9d22609053d5386~mv2.jpg/v1/fill/w_2500,h_1875,al_c/dadd24_175bbfb9106b4386b9d22609053d5386~mv2.jpg'  
    }, {
      id: 3,
      name: 'Tocaya',
      city: 'Long Beach',
      state: 'CA',
      cuisines: 'Mexican, Vegan',
      pic: 'https://images.getbento.com/accounts/d7955fbecf5892a7c71ad78974658f55/media/images/41389Patio.jpg?w=1800&fit=max&auto=compress,format&h=1800'
    }]
      res.render('places/index', {places})
  });

module.exports = router
