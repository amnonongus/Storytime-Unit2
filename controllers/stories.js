const Story = require('../models/story');
var router = require('express').Router();




router.get('/', function(req, res){
    res.render('stories/new', {
     title: 'Storytime'
    })
  })
  


router.get('/index', async function(req, res){
      const stories = await Story.find()
    res.render('stories/index', {
      title: 'stories',
      stories: stories
    })
  })


router.post('/', function (req, res){
  console.log('HELLO HELLO HELLO HELLO')
    Story.create(req.body, function(err, story) {
        res.redirect('stories/index')
      })    
  })



router.get('/:id', async function(req, res){
    const story = await Story.findById(req.params.id)
    console.log(story)
            res.render('stories/show', {
                story: story,
                title: 'Story Details'
        });    
    }); 
    
    




  module.exports = router





