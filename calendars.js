var cal_1,cal_2,cal_3,cal_4,cal_5,cal_6,cal_7,cal_8,cal_9,cal_10,cal_11,cal_12; 
var tandem_date = '2021-10-20 00:00:00';
var solo_date = '2021-12-04 00:00:00';
var table = document.getElementById('firstdates');
var rowNode = document.createElement('tr');
var tanCell = document.createElement('td');
var soloCell = document.createElement('td');
var tanNode = document.createTextNode(tandem_date);
var soloNode = document.createTextNode(solo_date);

window.onload = function () {
	cal_1  = new Epoch('epoch_popup','popup',document.getElementById('popup_container1'),tandem_date,'tandem');
	cal_2  = new Epoch('epoch_popup','popup',document.getElementById('popup_container2'),tandem_date,'tandem');
	cal_3  = new Epoch('epoch_popup','popup',document.getElementById('popup_container3'),tandem_date,'tandem');
	cal_4  = new Epoch('epoch_popup','popup',document.getElementById('popup_container4'),solo_date,'solo');
	cal_5  = new Epoch('epoch_popup','popup',document.getElementById('popup_container5'),solo_date,'solo');
	cal_6  = new Epoch('epoch_popup','popup',document.getElementById('popup_container6'),solo_date,'solo');
	cal_7  = new Epoch('epoch_popup','popup',document.getElementById('popup_container7'),solo_date,'solo');
	cal_8  = new Epoch('epoch_popup','popup',document.getElementById('popup_container8'),solo_date,'solo');
	cal_9  = new Epoch('epoch_popup','popup',document.getElementById('popup_container9'),solo_date,'solo');
	cal_10  = new Epoch('epoch_popup','popup',document.getElementById('popup_container10'),solo_date,'solo');
	cal_11  = new Epoch('epoch_popup','popup',document.getElementById('popup_container11'),solo_date,'solo');
	cal_12  = new Epoch('epoch_popup','popup',document.getElementById('popup_container12'),solo_date,'solo');

	tanCell.appendChild(tanNode);
	rowNode.appendChild(tanNode);	
	soloCell.appendChild(soloNode);
	rowNode.appendChild(soloNode);
	table.appendChild(rowNode);	
};
