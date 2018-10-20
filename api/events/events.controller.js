const request = require('request');
const eventSocket = require('../../server/socket/event');
const service = require('./events.service');
const Event = require('./events.model');

async function addWorkgroup (auth, data) {
   return new Promise((resolve, reject) => {
       request('http://agrum-api.herokuapp.com/api/v1.0/devices?Authorization=bd6f8ce7-683e-4aa5-920d-cb927893f7b9&where={"token": "' + auth + '"}&populate', (err, res, body) => {
            if (err) { return reject(err); }
            const device = JSON.parse(body)
            if(Array.isArray(data)) {
                for (let i = 0; i < data.length; i++) {
                    data[i].workgroup = device[0].workgroup
                }
            } else {
                data.workgroup = device[0].workgroup
            }
            return resolve(data);
        });
    });
}

exports.created = async(req, res) => {
    if (req.query['compress'] == 'true' && req.body) {
        const descompress = zlib.inflateSync(new Buffer(req.body.data, 'base64')).toString();
        req.body = JSON.parse(JSON.parse(descompress));
    }
    // If Authorization is a parameter then is added to headers and is deleted of the parameters
	if(!req.headers.authorization && req.query['Authorization']) {
		req.headers.authorization = req.query['Authorization'];
		delete req.query['Authorization'];
	}
    const auth = req.headers.authorization;
    const events = await addWorkgroup(auth, req.body);
    if(Array.isArray(events)) {
        async function processArray(array) {
            let response = [];
            for (element of array) {
                const data = await service.create(element, Event).catch(err => console.log(err))
                // const get = await service.getAll(data, Event).catch(err => console.log(err))
                // (get.ok)? eventSocket.emit('getAll', get.db) : ok = false;
                console.log(data);
                response.push(data.data)
            }
            console.log("Done!!");    
            return response;
        }
        const data = await processArray(events);
        return res.json({
            code: "CREATED",
            message: "The request has resulted in a new resource being created",
            data: req.query['compress'] == 'true' ? zlib.deflateSync(JSON.stringify(data)).toString('base64'): data || {}
        })
    } else {
        const data = await service.create(events, Event);
        const get = await service.getAll(data, Event);
        //console.log('get ', get);
        (get.ok)? eventSocket.emit('getAll', get.db) : ok = false;
        return res.json({
            code: "CREATED",
            message: "The request has resulted in a new resource being created",
            data: req.query['compress'] == 'true' ? zlib.deflateSync(JSON.stringify(data.data)).toString('base64'): data.data || {}
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