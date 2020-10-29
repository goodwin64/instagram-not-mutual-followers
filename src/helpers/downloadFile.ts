export function downloadFile(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/plain' });
  if ('msSaveOrOpenBlob' in window.navigator) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}
