exports.create = (data, Event) => new Promise((resolve, reject) => {
    return Event.create(data, (err, response) => {
    if (err) {
        return reject({
            ok: false,
            message: 'Error: incorrect data',
        });
    }
    return resolve({
        ok: true,
        code: "CREATED",
        data: response,
        workgroup: response.workgroup
    });
});
});

exports.getAll = (data, Event) => new Promise((resolve, reject) =>{
    console.log('escucho data desde getAll');
    if (data.ok) {
        return Event.find({workgroup:data.workgroup}).exec((err, db) => {
            if (err) {
                return reject({
                    ok: false,
                    err,
                });
            }
            return resolve({
                ok: true,
                db,
            });
        })
    }
    return reject({
        ok:false
    })
});