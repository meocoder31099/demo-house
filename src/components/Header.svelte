<script lang="ts">
	let menu = [
		'Trang chủ',
		'Dịch vụ',
		'Thiết kế kiến trúc',
		'Thiết kế nội thất',
		'Dự án thi công',
		'Tin tức'
	];
</script>

<header class="sticky left-0 top-0 right-0 bg-white border-b border-base z-10">
	<nav class="max-w-screen-fhd mx-auto">
		<!-- Header -->
		<div class="grid grid-cols-3 items-center px-6 py-4 md:pt-2 md:pb-0">
			<!-- Left segment -->
			<div class="flex">
				<!-- Mobile menu toggle -->
				<button
					data-collapse-toggle="navbar-cta"
					type="button"
					class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
					aria-controls="navbar-cta"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<!-- Search -->
				<form class="hidden md:block max-w-md">
					<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only"
						>Tìm kiếm</label
					>
					<div class="relative">
						<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<svg
								class="w-4 h-4 text-gray-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>
						<input
							type="search"
							id="default-search"
							class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
							placeholder="Tìm kiếm"
							required
						/>
					</div>
				</form>
				<!-- Mobile search -->
				<div class="md:hidden">
					<button
						data-collapse-toggle="navbar-cta"
						type="button"
						class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
						aria-controls="navbar-cta"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="w-5 h-5 text-gray-500"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</button>
				</div>
			</div>
			<!-- Center segment -->
			<div class="flex justify-center">
				<a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
					<!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> -->
					<span class="self-center text-2xl font-semibold whitespace-nowrap">Logo Here</span>
				</a>
			</div>
			<!-- Right segment -->
			<div class="flex justify-end">
				<button
					class="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="w-5 h-5 fill-current"
						><path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"
						></path><path
							d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"
						></path></svg
					>
					<span class="ml-2">0969.461.890</span>
				</button>
			</div>
		</div>
		<div
			class="absolute md:relative w-full hidden md:flex flex-col md:flex-row flex-wrap items-center justify-center mx-auto md:px-6 md:pt-2 md:pb-0"
		>
			<ul
				class="w-full flex flex-col md:flex-row flex-wrap justify-center font-medium p-6 md:p-0 bg-white md:space-x-8 border-y md:border-0"
			>
				{#each menu as item}
					<li class="first:text-blue-700 text-gray-500 first:border-b-2 border-blue-600 md:pb-2">
						<a
							href="/"
							class="block py-3 md:py-2 px-3 md:p-0 text-lg md:text-base md:hover:text-blue-700"
							>{item}</a
						>
					</li>
					<!-- <li>
							<a
								href="/"
								class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700"
								aria-current="page">{item}</a
							>
						</li> -->
				{/each}
			</ul>
		</div>
	</nav>
</header>
