const event = require('../../server/socket/event');
// const {EventEmitter} = require('events');
// const event = new EventEmitter();
const service = require('./events.service');
const Test = require('./events.model');
exports.saveUser = async(req, res) => {
    console.log(req.body)
    let ok = true
    if(Array.isArray(req.body)){
        req.body.forEach(async (element) => {
            //Devices
            //token se desaparece, token llega en la cabecera Authorization
            const data = await service.create(element, Test).catch(err => console.log(err))
            const get = await service.getAll(data, Test).catch(err => console.log(err))
            (get.ok)? event.emit('getAll', get.db) : ok = false;
        });
    }else{
        const data = await service.create(req.body, Test);
        const get = await service.getAll(data, Test);
        console.log('get ', get);
        (get.ok)? event.emit('getAll', get.db) : ok = false;
    }
    return res.json({
        ok: true,
        saved: true,
    })

}

exports.getAllFirs = (req, res) => {
        const { id } = req.params;
        console.log(id);
        console.log('escucho data desde');
            return Test.find({workgroup: id}).exec((err, db) => {
                if (err) {
                    return console.log('error')
                }
                return res.json(db)
            })
}