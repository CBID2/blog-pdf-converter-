document.querySelector("form").addEventListener("submit", function (event) {
	event.preventDefault();
	const url = document.getElementById("url").value;
	if (url) {
		window.location.href = `convert-to-pdf?url=${encodeURIComponent(url)}`;
	}
});
