import { writable } from "svelte/store";

export const DataKota = writable({ id: "1003", lokasi: "LAMPUNG SELATAN" });

let day = new Date();
let dateNow;
let monthNow;
let yearNow;
dateNow = day.getDate();
monthNow = day.getMonth() + 1;
yearNow = day.getFullYear();
if (monthNow < 10) {
	monthNow = `0${monthNow}`;
}
if (dateNow < 10) {
	dateNow = `0${dateNow}`;
}

export const tanggal = writable(dateNow);
export const bulan = writable(monthNow);
export const tahun = writable(yearNow);
