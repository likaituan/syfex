/**
 * Created by likaituan on 25/05/2017.
 */

var onPageInit = function () {
	document.body.innerHTML = `
	<table border="1">
		<tr>
			<th>Name</th>
			<th>Cate</th>
			<th>Link</th>
		</tr>
		${Data.map(item=>{return `
		<tr>
			<td><a href="${item.link}" target="_blank">${item.name}</a></td>
			<td>${item.cate}</td>
			<td>${item.link}</td>
		</tr>
		`}).join('')}
	</table>
	`;
};

window.onload = onPageInit;