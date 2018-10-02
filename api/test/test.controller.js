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
        getAll({ ok: true, title: response.title });
        return res.json({
            ok: true,
            data: response,
        });
    });
}
const getAll = (data) => {
    console.log('escucho data desde getAll');
    if (data.ok) {
        Test.find({}).exec((err, db) => {
            if (err) {
                return console.log('error')
            }
            return event.emit('getAll', db);
        })
    }
}

exports.getAllFirs = (req, res) => {
        console.log('escucho data desde');
            return Test.find({}).exec((err, db) => {
                if (err) {
                    return console.log('error')
                }
                return res.json(db)
            })
}