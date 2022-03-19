let students = []

//Загрузка информации с сайта
function load_from_site(){
    $.get('http://217.71.129.139:4003/students.php', function(data){
    	students = JSON.parse(data)['response']
    });
}

function load_group() {
	let table = document.getElementById('tbl_all')
	for (let i = 0; i < students.length; i++) {
		let id = students[i].id
		let name = students[i].name
		let surname = students[i].surname
		let group = students[i].group
		let scores = students[i].scores
		

		//создание строки и ячеек
		let tr = document.createElement('tr')
		let td1 = document.createElement('td')
		let td2 = document.createElement('td')
		let td3 = document.createElement('td')
		let td4 = document.createElement('td')
		let td5 = document.createElement('td')
		td1.id = "td1"
		td2.id = "td2"
		td3.id = "td3"
		td4.id = "td4"
		td5.id = "td5"

		//Запись данных в ячейки
		td1.textContent = id
		td2.textContent = name
		td3.textContent = surname
		td4.textContent = group
		td5.textContent = scores
	
		//вствка ячейки в строку
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
	
		//вставка строки в таблицу
		table.appendChild(tr)
		if (students[i].group != students[i+1].group) {
			break;
		}
	}
}
function load_group_next() {
	let table = document.getElementById('tbl_all')
	for (let i = 0; i < students.length; i++) {

		if (students[i].group == students[i+1].group) {
			continue;
		}
		else {
		
		++i
		for (i; i < students.length; i++) {
			let id = students[i].id
			let name = students[i].name
			let surname = students[i].surname
			let group = students[i].group
			let scores = students[i].scores

			//создание строки и ячеек
			let tr = document.createElement('tr')
			let td1 = document.createElement('td')
			let td2 = document.createElement('td')
			let td3 = document.createElement('td')
			let td4 = document.createElement('td')
			let td5 = document.createElement('td')
			td1.id = "td1"
			td2.id = "td2"
			td3.id = "td3"
			td4.id = "td4"
			td5.id = "td5"

			//Запись данных в ячейки
			td1.textContent = id
			td2.textContent = name
			td3.textContent = surname
			td4.textContent = group
			td5.textContent = scores

			//вствка ячейки в строку
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tr.appendChild(td5);

			//вставка строки в таблицу
			table.appendChild(tr)
			}
		}
	}
}
