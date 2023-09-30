//your JS code here. If required.
function handleRemove(){

    const colorSelector = document.getElementById('colorSelect');
    const selectedIndex = colorSelector.selectedIndex;  // selected Index

    if(selectedIndex !== -1){

        colorSelector.remove(selectedIndex);

        selectedIndex = 0; // reset
    }
}