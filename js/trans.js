var latin = ['Y', 'C', 'S', 'y', 'c', 's', 'A', 'Á', 'B', 'D', 'E', 'F', 'G', 'Ǵ', 'H', 'X', 'Í', 'I', 'J', 'K', 'Q', 'L', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'R', 'T', 'U', 'Ú', 'V', 'W', 'Z', 'Ya', 'Yu', 'Yo', 'Sh', 'Ch', 'Sh', 'a', 'á', 'b', 'd', 'e', 'f', 'g', 'ǵ', 'h', 'x', 'ı', 'i', 'j', 'k', 'q', 'l', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 't', 'u', 'ú', 'v', 'w', 'z', 'ya', 'yu', 'yo', 'sh', 'ch', 'sh'];
var kirill = ['Й', 'Ц', 'С','й', 'ц', 'с', 'А', 'Ә', 'Б', 'Д', 'Е', 'Ф', 'Г', 'Ғ', 'Ҳ', 'Х', 'Ы', 'И', 'Ж', 'К', 'Қ', 'Л', 'М', 'Н', 'Ң', 'О', 'Ө', 'П', 'Р', 'Т', 'У', 'Ү', 'В', 'Ў', 'З', 'Я', 'Ю', 'Ё', 'Ш', 'Ч', 'Щ', 'а', 'ә', 'б', 'д', 'е', 'ф', 'г', 'ғ', 'ҳ', 'х', 'ы', 'и', 'ж', 'к', 'қ', 'л', 'м', 'н', 'ң', 'о', 'ө', 'п', 'р', 'т', 'у', 'ү', 'в', 'ў', 'з', 'я', 'ю', 'ё', 'ш', 'ч', 'щ'];


var select = document.getElementById("select");

$("button").click(function(){
			
	var option = select.options[select.selectedIndex].value;
	var received = $('#received').val();
	received = received.split('');
	var n = received.length;

	if(option == 1) {
		for(var i = 0; i < n; i++) {
			if (received[i] === 'ь' || received[i] === 'ъ') received[i] = '';
			for(var j = 0; j < kirill.length; j++) {
					if(received[i] == kirill[j]) {
						received[i] = latin[j];
						break;
					}
			}
		}

	} 
	else {
		
		for(var i = 0; i < n; i++) {
			if(received[i] == 'Y' || received[i] == 'y') {
				if(received[i+1] == 'a' || received[i+1] == 'u' || received[i+1] == 'o') {
					received[i] = received[i]+received[i+1];
					delete received[i+1];
					for(var j = latin.length-6; j < latin.length; j++) {
						if(received[i] == latin[j]) {
							received[i] = kirill[j];
							break;
						}
					}
				}
				else {
					for(var j = 0; j < 7; j++) {
						if(received[i] == latin[j]) {
							received[i] = kirill[j];
							break;
						}
					}
				}
			} 
			if(received[i] == 'S' || received[i] == 'C' || received[i] == 's' || received[i] == 'c') {
				if(received[i+1] == 'h') {
					received[i] = received[i]+received[i+1];
					delete received[i+1];
					for(var j = latin.length-6; j < latin.length; j++) {
						if(received[i] == latin[j]) {
							received[i] = kirill[j];
							break;
						}
					}
				}
				else {
					for(var j = 0; j < 7; j++) {
						if(received[i] == latin[j]) {
							received[i] = kirill[j];
							break;
						}
					}
				}
			} 

			for(var j = 0; j < latin.length; j++) {
					if(received[i] == latin[j]) {
						received[i] = kirill[j];
						break;
					}
			}
		}
	}

	var sended = received.join('');
	$('#sended').val(sended);
		
});