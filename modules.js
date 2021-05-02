module.exports.getDate = function(){
	var date = new Date();
	var options = {
		weekday: "long",
        year: "numeric",
        month: "2-digit",
        day: "numeric"
	}
	return date.toLocaleDateString("en", options)
}