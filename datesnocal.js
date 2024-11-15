async function loadDates(soloavail,tandemavail) {
	
	await datesPopulated == true;

	var table = document.getElementById('firstdates');
	var rowNode = document.createElement('tr');
	var tanCell = document.createElement('th');
	var soloCell = document.createElement('th');
	var tanDate = new Date(tandemavail[0]);
	var tanNode = document.createTextNode(tanDate.toLocaleDateString('en-GB'));	
	var soloDate = new Date(soloavail[0]);
	var soloNode = document.createTextNode(soloDate.toLocaleDateString('en-GB'));

	tanCell.appendChild(tanNode);
	rowNode.appendChild(tanCell);	
	soloCell.appendChild(soloNode);
	rowNode.appendChild(soloCell);
	table.appendChild(rowNode);
};
