/**
 * Created by likaituan on 25/05/2017.
 */

window.onload = function () {
	var isLoaded = {};
	document.body.innerHTML = `
	<table border="1">
		<tr>
			<th>Name</th>
			<th>Cate</th>
			<th>Link</th>
		</tr>
		${Data.map(item => {
			var itemHTML = '';
			if (!isLoaded[item.cate]) {
				isLoaded[item.cate] = true;
				itemHTML = `<tr><td colspan="3">${item.cate}</td></tr>`;
			}
			return `${itemHTML}
			<tr>
				<td><a href="${item.link}" target="_blank">${item.name}</a></td>
				<td>${item.scat}</td>
				<td>${item.link}</td>
			</tr>
		`}).join('')}
	</table>
	`;
};