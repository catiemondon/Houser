module.exports={
    getAllHouses: (req, res)=>{
        const dbInstance= req.app.get('db')

        dbInstance.get_all_homes()
        .then(homes =>{
            res.status(200).send(homes)
        })
        .catch(error =>{
            if(error) throw error
        })
    },

    addHouse: (req, res)=>{
        const dbInstance =req.app.get('db')

        const {name, address, city, state, zip, img, mortgage, rent}= req.body

        dbInstance.add_house({name, address, city, state, zip, img, mortgage, rent})
        .then(()=>{
            res.sendStatus(200)
        })
        .catch(error =>{
            if(error) throw error
        })
    },

    deleteHouse:(req, res)=>{
        const dbInstance=req.app.get('db')
        const {id}= req.params

        dbInstance.delete_house({id})
        .then(()=> res.sendStatus(200))
        .catch(err =>{
            if(err) throw err;
        })
    }
}