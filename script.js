const checkboxes = document.querySelectorAll('[type="checkbox"]');
const inputArray = [];
const str = '12,9,7,5,0,4';

checkboxes.forEach((checkbox, index) => {
  checkbox.checked = false;

  checkbox.addEventListener('change', () => {
    const label = checkbox.parentNode.querySelector('.label').textContent;
    if (checkbox.checked) {
      inputArray.push(label);
    } else {
      const labelIndex = inputArray.indexOf(label);
      if (labelIndex !== -1) {
        inputArray.splice(labelIndex, 1);
      }
    }

    if (inputArray.join(',') === str) {
      downloadFile('/file.txt');
      inputArray.length = 0;
      checkboxes.forEach(box => {
        box.checked = false;
      });
    }
  });
});

function downloadFile(fileUrl) {
  const anchor = document.createElement('a');
  anchor.href = fileUrl;
  anchor.download = 'downloaded-file.txt'; 
  
  anchor.click();
}