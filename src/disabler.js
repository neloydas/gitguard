var mergeButtons = document.getElementsByClassName('BtnGroup btn-group-merge');

if(mergeButtons.length == 3) {
	var mergeButton = mergeButtons[0];
	mergeButtons[0].disabled = true;
	mergeButtons[1].disabled = true;
	mergeButtons[2].disabled = true;
}
