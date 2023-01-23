var cal_1,cal_2;
var tandem_date = '2023-02-11';
var solo_date = '2023-02-17';


window.onload function () {
	
	await datesPopulated = true;
	
	cal_1  = new Epoch('epoch_popup','popup',document.getElementById('popup_container1'),tandem_date,'tandem');
	cal_2  = new Epoch('epoch_popup','popup',document.getElementById('popup_container2'),solo_date,'solo');


	var table = document.getElementById('firstdates');
	var rowNode = document.createElement('tr');
	var tanCell = document.createElement('th');
	var soloCell = document.createElement('th');
	var tanDate = new Date(tandem_date);
	tanDate.setDate(tanDate.getDate()+1);
	var tanNode = document.createTextNode(tanDate.toLocaleDateString('en-GB'));	
	var soloDate = new Date(solo_date);
	soloDate.setDate(soloDate.getDate()+1);
	var soloNode = document.createTextNode(soloDate.toLocaleDateString('en-GB'));
	var row2Node = document.createElement('tr');
	var futureCell = document.createElement('td');
	var futureNode = document.createTextNode('Click on the date boxes below to see further available dates');
	var availabilityNode = document.createElement('iframe');
      
	availabilityNode.src= "https://calendar.google.com/calendar/embed?height=600&wkst=7&bgcolor=%23039BE5&ctz=Europe%2FLondon&mode=AGENDA&showTabs=0&showCalendars=0&showTz=0&showPrint=0&showDate=0&showNav=0&src=OWE2OGFjNGRhM2MzMzc0OTUxMDFjYWQ0Njk3MjJkOTY5ZjM4OTk1MmJmYzQ5ODM2MmVlMDU4YTRhNTA4YTUxOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23C0CA33";
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
