const theme = document.querySelector("#theme");
// Значение для переменной "theme" по умолчанию "dark.css"
if (!localStorage.theme) localStorage.theme = "css/dark.css"
// Определяем значение переменной "herf" на значение сохраненное локально в: "localStorage.theme"


	document.getElementById("switchMode").onclick = function () {

	
		
		// Если текущий урл содержит "dark.css"
		if (theme.getAttribute("href") == "css/dark.css") {
			let gr1 = document.querySelector("#btc1");
			let gr2 = document.querySelector("#btc");
				//Смена класса для смены цвета графика
				gr1.className ="tview-chart";
				gr2.className ="tview-chart1";
				//Выбор CSS файла
				theme.href = "css/light.css";
				//Создание переменных
				var theme_cookie = "css/light.css";
				var gt = '"tview-chart"';
				var gt1 = '"tview-chart1"';
				
				
		} else {
			let gr1 = document.querySelector("#btc1");
			let gr2 = document.querySelector("#btc");
				//Смена класса для смены цвета графика
				gr1.className ="tview-chart1";
				gr2.className ="tview-chart";
				//Выбор CSS файла
				theme.href = "css/dark.css";
				//Создание переменных
				var theme_cookie = "css/dark.css";
				var gt = '"tview-chart1"';
				var gt1 = '"tview-chart"';
		}
		//Сохранение переменных в localStorage
		localStorage.setItem('theme', theme_cookie);
		localStorage.setItem('gr1', gt);
		localStorage.setItem('gr2', gt1);
	
	
	};
