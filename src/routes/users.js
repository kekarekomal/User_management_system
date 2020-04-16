const router=require('express').Router();
const {check,validationResult}=require('express-validator');

const usercontroller=require('../controllers/usercontroller');


router.get('/',usercontroller.list1);
router.get('/open',usercontroller.list);
router.post('/add',usercontroller.save);
router.get('/update/:id',usercontroller.edit);
router.post('/update/:id',usercontroller.update);
router.get('/delete/:id',usercontroller.delete);

module.exports=router;