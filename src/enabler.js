var mergeButtons = document.getElementsByClassName('btn btn-primary BtnGroup-item js-details-target');

//if(mergeButtons.length != 1) {
//	mergeButtons = document.getElementsByClassName('btn btn-danger js-merge-branch-action');
//}

if (mergeButtons.length == 3) {
	mergeButtons[0].disabled = false;
	mergeButtons[1].disabled = false;
	mergeButtons[2].disabled = false;
}
