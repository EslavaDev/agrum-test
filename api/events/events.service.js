exports.create = (data, Test) => new Promise((resolve, reject) => {
    return Test.create(data, (err, response) => {
    if (err) {
        return reject({
            ok: false,
            message: 'data Incorrecta',
        });
    }
    return resolve({
        ok: true, workgroup: response.workgroup
    });
});
});

exports.getAll = (data, Test) => new Promise((resolve, reject) =>{
    console.log('escucho data desde getAll');
    if (data.ok) {
        return Test.find({workgroup:data.workgroup}).exec((err, db) => {
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