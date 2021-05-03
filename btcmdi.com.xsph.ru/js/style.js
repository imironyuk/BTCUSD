// Селектор кнопки 
const btn = document.querySelector("#switchMode");

// Селектор таблицы стилей <link>
const theme = document.querySelector("#theme");

const theme_light = document.querySelector("#btc_light");
const theme_dark = document.querySelector("#btc_dark");

// Хранение переменной "dark.css" для нового пользователя
if (!localStorage.theme) localStorage.theme = "css/dark.css"

// сменим "herf" на значение сохраненного значени е переменной в "localStorage.theme"
theme.href = localStorage.theme

	// Клик по кнопке
	document.getElementById("switchMode").onclick = function () {

		// Если текущий урл содержит "dark.css"
		if (theme.getAttribute("href") == "css/dark.css") {

			// тогда переключим его на "light.css"
			theme.href = "css/light.css";
			theme_light.classList.toggle("tview-chart1");
			theme_dark.classList.toggle("tview-chart1");
			
			// сохраним значение стиля в переменную "theme_cookie"
			var theme_cookie = "css/light.css";

		} else {

			// переключаем его на "dark.css"
			theme.href = "css/dark.css";
			theme_light.classList.toggle("tview-chart");
			theme_dark.classList.toggle("tview-chart");

                        // сохраним значение стиля в переменну "theme_cookie"
			var theme_cookie = "css/dark.css";
		}

		// Пример использования:
		localStorage.setItem('theme', theme_cookie);

	};
