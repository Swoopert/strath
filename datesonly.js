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
	var row2Node = document.createElement('tr');
	var futureCell = document.createElement('td');
	var availabilityNode = document.createElement('iframe');
      
	availabilityNode.src= "https://calendar.google.com/calendar/embed?height=600&wkst=7&bgcolor=%23039BE5&ctz=Europe%2FLondon&mode=AGENDA&showTabs=0&showCalendars=0&showTz=0&showPrint=0&src=OWE2OGFjNGRhM2MzMzc0OTUxMDFjYWQ0Njk3MjJkOTY5ZjM4OTk1MmJmYzQ5ODM2MmVlMDU4YTRhNTA4YTUxOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23C0CA33"+"&dates="+new Date(Math.min(soloDate,tanDate)).toISOString().substr(0,10).replace(/-/g,'')+"/20991231";
        availabilityNode.width = "400";
        availabilityNode.height = "300";
	availabilityNode.scrolling = "no"
	availabilityNode.frameborder = "0"

	tanCell.appendChild(tanNode);
	rowNode.appendChild(tanCell);	
	soloCell.appendChild(soloNode);
	rowNode.appendChild(soloCell);
	table.appendChild(rowNode);
	futureCell.colSpan = 2;
	futureCell.style.textAlign = 'center';
	futureCell.appendChild(availabilityNode);
	row2Node.appendChild(futureCell);
	table.appendChild(row2Node);
};
