const db= require('../dataBaseConfig.js')

exports.contactSave=(req,res)=>{
    let Name = req.body.name
    let Email= req.body.email
    let Message=req.body.message

    let value=[[Name,Email,Message]]
    console.log(req.body)
    let sql=`insert into contact(Name,Email,Message) values ?`
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send("contact us details submitted")
        }
    })
}
exports.getContact=(req,res)=>{
    let sql='Select * from contact'
    db.query(sql,(err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.deleteContact = (req, res)=>{
    let id = req.params.id
    let sql = 'delete from contact where id = ?'

    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.send('contact deleted')
        }
    })
}

exports.viewContact = (req,res)=>{
    let id = req.params.id
    let sql = "select * from contact where id = ?"
    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}


exports.updateContact = (req, res)=>{
    let id = req.params.id
    let newData = req.body
    let sql = 'update contact set ? where id = ?'
    db.query(sql, [newData, id], (err, result)=>{
        if(err) throw err
        else{
            res.send('contact updated')
        }
    })
}