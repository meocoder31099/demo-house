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
	<!-- About header -->
	<div
		class="hidden md:block bg-gray-800 py-2"
	>
		<div class="max-w-screen-fhd mx-auto flex justify-between text-sm text-[#d9d9d9] px-4 md:px-16 screen-fhd:px-6">
			<!-- Left segment -->
			<div class="flex gap-x-6">
				<div class="inline-flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="w-4 h-4 fill-current me-1"
						><path
							d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"
						></path><path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path></svg
					>
					<a href="tel:+0917194237">0917194237</a>
				</div>
				<div class="inline-flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="w-4 h-4 fill-current me-1"
						><path
							d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"
						></path></svg
					>
					<a href="mailto:info@example.com">info@example.com</a>
				</div>
			</div>
			<!-- Right segment -->
			<div class="flex items-center divide-x divide-gray-700">
				<a href="/" class="px-3">
					<svg
						class="w-4 h-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 8 19"
					>
						<path
							fill-rule="evenodd"
							d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="sr-only">Facebook page</span>
				</a>
				<a href="/" class="px-3">
					<svg
						class="w-4 h-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 21 16"
					>
						<path
							d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
						/>
					</svg>
					<span class="sr-only">Discord community</span>
				</a>
				<a href="/" class="px-3">
					<svg
						class="w-4 h-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 17"
					>
						<path
							fill-rule="evenodd"
							d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="sr-only">Twitter page</span>
				</a>
				<a href="/" class="px-3">
					<span>Zalo</span>
				</a>
				<a href="/" class="px-3">
					<svg
						class="w-4 h-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="sr-only">Dribbble account</span>
				</a>
			</div>
		</div>
	</div>
	<nav class="max-w-screen-fhd mx-auto">
		<!-- Header -->
		<div class="flex items-center justify-between px-4 md:px-16 screen-fhd:px-6 py-3">
			<!-- Left segment -->
			<div class="w-full flex gap-x-4 items-center">
				<!-- Mobile menu toggle -->
				<button
					data-collapse-toggle="navbar-cta"
					type="button"
					class="inline-flex items-center p-0 w-10 h-10 justify-center text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
				<!-- Logo -->
				<div class="h-10">
					<img
						class="h-full"
						src="https://archicon.qodeinteractive.com/wp-content/themes/archicon/assets/img/logo-dark.svg"
						alt="logo"
					/>
				</div>
				<div
					class="fixed inset-0 max-w-xs lg:max-w-full lg:relative bg-white hidden lg:flex flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center"
				>
					<ul
						class="w-full flex flex-col lg:flex-row flex-wrap justify-center font-medium p-6 lg:p-0 bg-white lg:space-x-6"
					>
						{#each menu as item}
							<li class="first:text-blue-700">
								<a href="/" class="block p-3 lg:p-0 text-lg lg:text-base md:hover:text-blue-700"
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
			</div>
			<!-- Right segment -->
			<div>
				<!-- Search -->
				<form class="hidden xl:block max-w-md">
					<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">
						Tìm kiếm
					</label>
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
				<div class="xl:hidden">
					<button
						data-collapse-toggle="navbar-cta"
						type="button"
						class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
		</div>
	</nav>
</header>
