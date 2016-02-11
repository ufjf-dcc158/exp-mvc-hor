var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	nome: String,
	sobreNome: String,
	email: {
		type: String,
		index: {unique: true},
		match: /.+@.+\..+/
	},
	username: {
		type: String,
		trim: true, 
		index: {unique: true},
		required: true
	}, 
	password: String,
	idade: Number,
	created: {type: Date, default: Date.now},
	website: {
		type: String,
		set: function(url){
			if(
				url &&
				(url.indexOf("https://") !== 0)
				&& (url.indexOf("http://") !== 0) ){
					return "http://"+url;
			}
			
			return url;
		},
		default: "none"
	}
});

UserSchema.virtual('nomeCompleto')
	.get(function() {
		return this.nome+" "+this.sobreNome;
	})
	.set(function (nomeCompleto) {
		var partes = nomeCompleto.split(" ");
		this.nome = partes[0]||'';
		this.sobreNome  = nomeCompleto.replace(partes[0]+' ', '');
	});

UserSchema.set('toJSON', {virtuals: true});
mongoose.model('User', UserSchema);