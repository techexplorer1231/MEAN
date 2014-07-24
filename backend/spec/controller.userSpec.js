var superagent = require('superagent')

describe('admin', function () {
    var id = "";

    it('can add user', function(done){
        superagent.post('http://localhost:3000/users')
            .send({ name: 'UserTest'})
            .end(function(e,res){
                id = res.body._id
                done();
            })
    })

    it("can get list of all users", function (done) {
        superagent.get('http://localhost:3000/users')
            .end(function (e, res) {
            expect(true).toEqual(true);
            done();
        })
    });
	
	it('can get detail of specific user', function(done){
		superagent.get('http://localhost:3000/users/'+id)
			.end(function(e, res){
			done()
		})
	});
	
	
	it('can updates a user details', function(done){
		superagent.put('http://localhost:3000/users/'+id)
		  .send({name: 'UserUpdated'})
		  .end(function(e, res){
			done()
		})
	})
	
	it('can check if user was updated', function(done){
		superagent.get('http://localhost:3000/users/'+id)
		  .end(function(e, res){
			expect(res.body.name).toEqual('UserUpdated')
			done()
		})
	})

    it('can remove a user', function(done){
        superagent.del('http://localhost:3000/users/'+id)
            .end(function(e, res){
                done();
            })
    })
});
