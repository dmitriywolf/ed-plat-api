exports.register = async (req, res, next) => {
	console.log('register');
	next();
};

exports.login = async (req, res, next) => {
	console.log('login');
	next();
};
