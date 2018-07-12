export function formatDate(date) {
  let dateStr = "";
  if(date){
    try {
      let dt = new Date(date);
      let month = dt.getMonth() + 1;
      dateStr = (dt.getDate() < 10 ? "0" : "") + dt.getDate() + "/" +
              (month < 10 ? "0" : "") + month + "/" +
              dt.getFullYear();
    } catch (e) { }
  }
  return dateStr;
}
