<script>
	import DatePicker from "svelte-touch-datepicker";
	import { onMount } from "svelte";
	import Dropdown from "./Dropdown.svelte";
	import { tanggal, bulan, tahun } from "./Data";
	import WaktuSholat from "./WaktuSholat.svelte";

	let day;
	let hoursNow;
	let minutesNow;
	let time;
	let date2 = new Date();

	const showTime = () => {
		day = new Date();
		hoursNow = day.getHours();
		minutesNow = day.getMinutes();
		if (minutesNow < 10) {
			minutesNow = `0${minutesNow}`;
		}
		if (hoursNow < 10) {
			hoursNow = `0${hoursNow}`;
		}
		time = `${hoursNow} : ${minutesNow}`;
		setTimeout(showTime, 1000);
	};
	onMount(() => {
		showTime();
	});

	function callback(event) {
		tanggal.update(() => {
			return event.detail.date.getDate();
		});
		bulan.update(() => {
			return event.detail.date.getMonth() + 1;
		});
		tahun.update(() => {
			return event.detail.date.getFullYear();
		});
	}
</script>

<div
	class="flex overflow-x-hidden items-center w-full min-h-screen bg-red bg-gradient-to-br from-green-500 to-blue-500"
>
	<div
		class="bg-white my-5 rounded-lg mx-auto poppins max-w-11/12  sm:max-w-9/12 md:max-w-7/12 lg:max-w-5/12 xl:max-w-3/12 h-auto p-5 container"
	>
		<!-- Header -->
		<div class="flex justify-center items-center mb-5">
			<div
				class="w-22 h-9 flex items-center justify-center rounded bg-gray-200"
			>
				<h1 class="poppins font-semibold text-left inline text-xl text-black">
					{time}
				</h1>
			</div>
		</div>
		<!-- Akhir header -->

		<!-- Awal Dropdown -->
		<Dropdown />
		<h1 class="mt-3">Pilih Tanggal :</h1>
		<div class="my-1 rounded-lg flex h-10">
			<DatePicker
				classes="text-right cursor-pointer  focus:outline-none block h-full w-full text-center bg-gray-200 "
				bind:date={date2}
				on:confirmDate={callback}
			/>
		</div>
		<WaktuSholat />
	</div>
</div>

<style global windi:global windi:preflights:global windi:safelist:global>
	.poppins {
		font-family: "Poppins";
	}
</style>
