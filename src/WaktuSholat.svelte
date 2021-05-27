<script>
	import { DataKota, tanggal, bulan, tahun } from "./Data";
	import Spinner from "./Spinner.svelte";
	let promise;
	$: promise = getKota($DataKota.id, $tanggal, $bulan, $tahun);

	async function getKota(id, tanggal, bulan, tahun) {
		const result = await fetch(
			`https://api.myquran.com/v1/sholat/jadwal/${id}/${tahun}/${bulan}/${tanggal}`
		);
		const data = await result.json();
		if (data.status) {
			return data;
		} else {
			throw new Error();
		}
	}
</script>

{#await promise}
	<div class="flex justify-center items-center h-[525px]">
		<Spinner />
	</div>
{:then data}
	<div class="my-5">
		<h1 class="text-xl font-semibold text-center">{data.data.lokasi}</h1>
		<h1 class="text-lg font-medium text-center">{data.data.daerah}</h1>
		<h1 class="text-md font-regular text-center">
			{data.data.jadwal.tanggal}
		</h1>
	</div>
	<div class="space-y-3 mb-[4px]">
		<div
			class="rounded-full h-10 border-2 border-green-300 flex justify-between py-2 px-5 "
		>
			<p>Imsak</p>
			<p>{data.data.jadwal.imsak}</p>
		</div>
		<div
			class="rounded-full h-10 border-2 border-green-300 flex justify-between py-2 px-5 "
		>
			<p>Subuh</p>
			<p>{data.data.jadwal.subuh}</p>
		</div>
		<div
			class="rounded-full h-10 border-2 border-green-300 flex justify-between py-2 px-5 "
		>
			<p>Terbit</p>
			<p>{data.data.jadwal.terbit}</p>
		</div>
		<div
			class="rounded-full h-10 border-2 border-green-300 flex justify-between py-2 px-5 "
		>
			<p>Dhuha</p>
			<p>{data.data.jadwal.dhuha}</p>
		</div>
		<div
			class="rounded-full h-10 border-2 border-green-300 flex justify-between py-2 px-5 "
		>
			<p>Dzuhur</p>
			<p>{data.data.jadwal.dzuhur}</p>
		</div>
		<div
			class="rounded-full h-10 border-2 border-green-300 flex justify-between py-2 px-5 "
		>
			<p>Ashar</p>
			<p>{data.data.jadwal.ashar}</p>
		</div>
		<div
			class="rounded-full h-10 border-2 border-green-300 flex justify-between py-2 px-5 "
		>
			<p>Maghrib</p>
			<p>{data.data.jadwal.maghrib}</p>
		</div>
		<div
			class="rounded-full h-10 border-2 border-green-300 flex justify-between py-2 px-5 "
		>
			<p>Isya</p>
			<p>{data.data.jadwal.isya}</p>
		</div>
	</div>
{:catch error}
	<div class="flex justify-center items-center h-[525px] text-center">
		<p>Mohon maaf, terjadi kesalahan dalam pengambilan data.</p>
	</div>
{/await}

<style windi:global windi:preflights:global windi:safelist:global>
</style>
