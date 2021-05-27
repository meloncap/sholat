<script>
	import DaftarKota from "./DaftarKota";
	import { DataKota } from "./Data";
	let input = "";
	let allResults;
	let results = [];

	$: {
		if (input.length) {
			allResults = DaftarKota.results.filter((item, i) =>
				item.lokasi.toLowerCase().includes(input.toLowerCase())
			);
			if (allResults.length > 10) {
				results = allResults.splice(0, 10);
			} else {
				results = allResults;
			}
		} else if (input.length == 0) {
			results = [];
		}
	}

	const handleResult = (result) => {
		input = "";
		DataKota.update(() => result);
	};
</script>

<div class="">
	<div class=" flex flex-col justify-center relative text-gray-500">
		<div class="relative">
			<input
				bind:value={input}
				type="text"
				class="p-2 pl-8 w-full rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
				placeholder="Cari kota/kabupaten"
			/>
			<svg
				class="w-4 h-4 absolute left-2.5 top-3.5"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		</div>
		<ul class="bg-white  absolute top-[36px] border-gray-100 w-full mt-2">
			{#if results}
				{#each results as result}
					<li
						on:click={() => handleResult(result)}
						class="pl-8 pr-2 py-1 border-b-2 border-l-2 border-r-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
					>
						<svg
							class="absolute w-4 h-4 left-2 top-2"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
						{result.lokasi}
					</li>
				{/each}
			{/if}
		</ul>
	</div>
</div>

<style windi:global windi:preflights:global windi:safelist:global>
</style>
