const event = require('../../server/socket/event');
// const {EventEmitter} = require('events');
// const event = new EventEmitter();
const service = require('./events.service');
const Event = require('./events.model');
exports.created = async(req, res) => {
    if(Array.isArray(req.body)) {
        async function processArray(array) {
            let response = [];
            for (element of array) {
                const data = await service.create(element, Event).catch(err => console.log(err))
                console.log(data);
                response.push(data.data)
            }
            console.log("Done!!");    
            return response;
        }
        const data = await processArray(req.body);
        return res.json({
            code: "CREATED",
            message: "The request has resulted in a new resource being created",
            data: data
        })
    } else {
        const data = await service.create(req.body, Event);
        const get = await service.getAll(data, Event);
        console.log('get ', get);
        (get.ok)? event.emit('getAll', get.db) : ok = false;
        return res.json({
            code: "CREATED",
            message: "The request has resulted in a new resource being created",
            data: data.data
        })
    }
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