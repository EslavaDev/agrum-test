const event = require('../../server/socket/event');
// const {EventEmitter} = require('events');
// const event = new EventEmitter();
const Test = require('./test.model');
exports.saveUser = (req, res) => {
    console.log(req.body)
    Test.create(req.body, (err, response) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                message: 'data Incorrecta',
            });
        }
        getAll({ ok: true, workgroup: response.workgroup });
        return res.json({
            ok: true,
            data: response,
        });
    });
}
const getAll = (data) => {
    console.log('escucho data desde getAll');
    if (data.ok) {
        Test.find({workgroup:data.workgroup}).exec((err, db) => {
            if (err) {
                return console.log('error')
            }
            return event.emit('getAll', db);
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