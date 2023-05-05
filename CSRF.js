const xhr = new XMLHttpRequest();

xhr.open("GET", "https://studio.code.org/projects/applab/T2lP5SlhXFvnkAdqFMFDCyjW96qdKNY_l5YipoZ8hFk/edit");
xhr.send();

xhr.responseType = "json";
xhr.onLoad = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
