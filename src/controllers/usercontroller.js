const controller={};

//list the users

controller.list1=(req,res)=>{  //list controller
    req.getConnection((err,conn)=>{ //db connecting
            res.render('user')
            });
    
    };

    controller.list=(req,res)=>{
        req.getConnection((err,conn)=>{
            conn.query('SELECT * FROM users1',(err,user)=>{ //database query
                if(err){ // error handling
                    res.json(err); //parse error as json and return
                }
                res.render('home',{ // render users and display
                    data:user
                });
            });
        });
    };
    
//save user to database
controller.save=(req,res)=>{
    const data=req.body;
    console.log(req.body)
    req.getConnection((err,connection)=>{
        const query=connection.query('INSERT INTO users1 set ?',data,(err,users)=>{
            if(err)
            {
                console.log(err);
            }
            else{
            console.log(users)
            }
            res.redirect('/');
        })
    })

};

// Edit users
controller.edit=(req,res)=>{
    const { id }=req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM users1 WHERE id = ?',[id],(err,rows)=>{
            res.render('users_edit',{
                data:rows[0]
            });
        });
    });
};

// Update User
controller.update=(req,res)=>{
    const { id }=req.params;
    const newUser=req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE users1 set ? WHERE id = ?',[newUser,id],(err,rows)=>{
            res.redirect('/');
        });
    });
};

//Delete user 
controller.delete=(req,res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
        conn.query(`DELETE FROM users1 WHERE id = ${id}`,(err,rows)=>{
            console.log(res.affectedRows);
            res.redirect('/open');
        });
    });
};

module.exports=controller;