const Account = require('../Models/Account');
const {mutipleMongooseToObject} = require('../utils/mongoose');
const Course = require('../Models/Course');
class SiteController{
    index(req,res,next){
        res.render('home');
    }

    login(req,res,next){
        res.render('login');
    }
    checklogin(req,res,next){
        
        Account.findOne({email: req.body.email , password: req.body.password})
            .then(account =>{
                    if(account==null){
                        const checklogin = 'Email or Password is not correct!';
                        res.render('login',{checklogin});
                    }else{
                        res.json(account);
                    }
                   
                    
                })
            .catch(next);    
            
    }
    register(req,res,next){
        res.render('register');
    }
    signup(req,res,next){
        if(req.body.password == req.body.confirm){
            const account  = new Account(req.body);
            account.save()
            .then(()=> res.redirect('/login'))
            .catch(()=> {
                const checkresgister = 'Email is Already Exist!';
                res.render('register',{checkresgister});
            })
        }else{
            const checkresgister = 'Password not match Confirm!';
            res.render('register',{checkresgister});
        }
       
    }
}

module.exports = new SiteController();