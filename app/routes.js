//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/new/email-address' , (req,res) => {
res.redirect ('/new/code')


})

router.post('/new/code' , (req,res) => {
    res.redirect ('/new/name')
    
})
router.post('/new/name' , (req,res) => {
        res.redirect ('/new/experience')
        
        
})
        
 router.post('/new/experience' , (req,res) => {



    if(req.body.new.experience == 'None'){
    res.redirect ('/new/not-eligible')


     } else {
           
     res.redirect ('/new/expertise')
     }     
 })

 router.post('/new/expertise' , (req,res) => {
    res.redirect ('/new/skills')
    
    
})

router.post('/new/skills' , (req,res) => {
    res.redirect ('/new/check')
    
    
})