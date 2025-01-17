document.querySelector("form").addEventListener("submit", function (event) {
	event.preventDefault();
	const url = document.getElementById("url").value;
	if (url) {
		fetch(url)
			.then((response) => response.text())
			.then((html) => {
				const element = document.createElement("div");
				element.innerHTML = html;
				html2pdf().from(element).save();
			})
			.catch((error) => console.error("Error fetching blog content:", error));
	}
});
