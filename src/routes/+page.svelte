<script lang="ts">
	const posts = [
		{
			title: 'Thiết kế nội thất chung cư Vinhomes D’capital phong cách hiện đại – MV.NT.CC 2205',
			cover:
				'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/h2-portfolio-img-01-650x650.jpg'
		},
		{
			title: 'Thiết kế nội thất chung cư An Bình City phong cách hiện đại – MV.NT.CC 2204',
			cover:
				'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/h2-portfolio-img-02-650x650.jpg'
		},
		{
			title: 'Thiết kế nội thất gỗ óc chó nhà phố lệch tầng – MV.NT.BT 2202',
			cover:
				'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/h2-portfolio-img-03-650x650.jpg'
		},
		{
			title: 'Phong cách hiện đại cho nội thất chung cư The Kpark Văn Phú – MV.NT.CC 2203',
			cover:
				'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/h2-portfolio-img-04-650x650.jpg'
		},
		{
			title: 'Thiết kế nội thất KĐT Gamuda Garden-Yên Sở-Hoàng Mai-Hà Nội – MV.NT.BT 2201',
			cover:
				'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/h2-portfolio-img-05-650x650.jpg'
		},
		{
			title: 'Dịch vụ thiết kế nội thất phòng khách hiện đại chuyên nghiệp',
			cover:
				'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/h2-portfolio-img-07-650x650.jpg'
		},
		{
			title:
				'Thiết kế nội thất chung cư Thăng Long Number One phong cách hiện đại – MV.02NT.CC 2202',
			cover:
				'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/portfolio-img-52-650x650.jpg'
		},
		{
			title: 'Thiết kế nội thất chung cư Mandarin phong cách hiện đại – MV.NT.CC 2201',
			cover:
				'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/portfolio-img-53-650x650.jpg'
		}
	];

	const cardInside = [
		{
			type: 'Thiết kế',
			style: 'kiến trúc',
			cover:
				'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/h2-portfolio-img-01-650x650.jpg'
		},
		{
			type: 'Thiết kế',
			style: 'nội thất',
			cover:
				'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/h2-portfolio-img-02-650x650.jpg'
		},
		{
			type: 'Thi công',
			style: 'xây dựng',
			cover:
				'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/h2-portfolio-img-03-650x650.jpg'
		},
		{
			type: 'Thi công',
			style: 'nội thất',
			cover:
				'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/h2-portfolio-img-04-650x650.jpg'
		}
	];
</script>

<!-- Banner -->
<div class="w-full aspect-w-[21] aspect-h-9">
	<!-- <img src="https://brok.qodeinteractive.com/wp-content/uploads/2021/11/h1-port-list-img-1-3.jpg" alt=""> -->
	<img
		class="w-full object-cover object-center"
		src="https://brok.qodeinteractive.com/wp-content/uploads/2021/11/h1-port-img-2.jpg"
		alt=""
	/>
</div>

<section class="py-28">
	<div class="w-full max-w-screen-fhd mx-auto my-10 px-4 md:px-16 screen-fhd:px-6">
		<div class="flex flex-col items-center">
			<h2
				class="grow break-words font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center uppercase"
			>
				ĐẲNG CẤP DỊCH VỤ
			</h2>
			<p class="text-lg mt-6">
				Hhouse Design Studio cung cấp dịch vụ hàng đầu trong nhiều lĩnh vực khác nhau
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-16 mt-8">
			{#each cardInside as item}
				<div class="relative group w-full aspect-1 rounded-lg overflow-hidden">
					<a href="/">
						<img class="h-full object-cover object-center" src={item.cover} alt="" />
						<div
							class="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500"
						></div>
						<div
							class="absolute inset-0 group-hover:inset-6 group-hover:border border-white transition-all duration-500"
						></div>
						<div
							class="absolute flex flex-col items-center justify-end left-0 right-0 my-auto bottom-6 group-hover:bottom-1/2 group-hover:translate-y-1/2 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transition-all duration-500"
						>
							<span
								class="text-white text-center text-xl md:text-lg group-hover:text-2xl md:group-hover:text-xl pb-2 uppercase transition-all duration-500"
							>
								{item.type}
							</span>
							<span
								class="px-2 text-white text-center text-4xl group-hover:text-5xl md:group-hover:text-4xl 2xl:group-hover:text-5xl font-extrabold group-hover:leading-tight md:group-hover:leading-snug uppercase transition-all duration-500"
							>
								{item.style}
							</span>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Post -->
<section class="bg-section-highlight py-16">
	<div class="w-full max-w-screen-fhd mx-auto my-10 px-4 md:px-16 screen-fhd:px-6">
		<div class="flex items-center">
			<h2 class="grow break-words text-2xl font-semibold">Thiết kế nội thất</h2>
			<button
				class="flex items-center gap-x-2 px-3 py-2 transition-all duration-200 ease-linear hover:bg-gray-100 rounded-md"
			>
				<span>More</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="w-4 h-4 fill-current rotate-180"
					><path
						d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"
					></path></svg
				>
			</button>
		</div>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 mt-8"
		>
			{#each posts as post}
				<div class="">
					<div class="w-full aspect-1">
						<img class="h-full object-cover object-center rounded-lg" src={post.cover} alt="" />
					</div>
					<div class="pt-4">
						<a href="/">
							<h5 class="text-xl font-lora font-semibold text-gray-900 line-clamp-2">
								{post.title}
							</h5>
						</a>
					</div>
					<div class="flex flex-wrap gap-y-0.5 pt-4">
						<!-- <span class="w-2/6 text-gray-700 line-clamp-1">Chủ đầu tư:</span>
						<span class="w-4/6 font-semibold ps-2">Anh Long</span> -->
						<span class="w-2/6 text-gray-700 line-clamp-1">Địa chỉ:</span>
						<span class="w-4/6 font-semibold ps-2">Quảng Ninh</span>
						<span class="w-2/6 text-gray-700 line-clamp-1">Diện tích:</span>
						<span class="w-4/6 font-semibold ps-2">200m</span>
						<span class="w-2/6 text-gray-700 line-clamp-1">Số tầng:</span>
						<span class="w-4/6 font-semibold ps-2">6 (6 tầng + 1 hầm)</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Post -->
<section class="py-16">
	<div class="w-full max-w-screen-fhd mx-auto my-10 px-4 md:px-16 screen-fhd:px-6">
		<div class="flex items-center">
			<h2 class="grow break-words text-2xl font-semibold">Thiết kế kiến trúc</h2>
			<button
				class="flex items-center gap-x-2 px-3 py-2 transition-all duration-200 ease-linear hover:bg-gray-100 rounded-md"
			>
				<span>More</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="w-4 h-4 fill-current rotate-180"
					><path
						d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"
					></path></svg
				>
			</button>
		</div>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 mt-8"
		>
			{#each posts as post}
				<div class="">
					<div class="w-full aspect-1">
						<img class="h-full object-cover object-center rounded-lg" src={post.cover} alt="" />
					</div>
					<div class="pt-4">
						<a href="/">
							<h5 class="text-xl font-lora font-semibold text-gray-900 line-clamp-2">
								{post.title}
							</h5>
						</a>
					</div>
					<div class="flex flex-wrap gap-2 pt-4">
						<span
							class="text-gray-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-base"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								class="w-4 h-4 me-1"
								aria-hidden="true"
								fill="currentColor"
								><path
									d="M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z"
								></path><path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"></path></svg
							>
							Quảng Ninh
						</span>
						<span
							class="text-gray-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-base"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								class="w-4 h-4 me-1"
								aria-hidden="true"
								fill="currentColor"
								><path
									d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm16.002 14H5V5h14l.002 14z"
								></path><path d="M15 12h2V7h-5v2h3zm-3 3H9v-3H7v5h5z"></path></svg
							>

							200m
							<sup class="align-super">2</sup>
						</span>
						<span
							class="text-gray-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded border border-base"
						>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-4 h-4 me-1"
						aria-hidden="true"
						fill="currentColor"><path d="M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z"></path><path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z"></path></svg>
							6 tầng (6 tầng + 1 hầm)
						</span>
						<!-- <span class="w-2/6 text-gray-700 line-clamp-1">Chủ đầu tư:</span>
						<span class="w-4/6 text-right font-semibold ps-2">Anh Long</span>
						<span class="w-2/6 text-gray-700 line-clamp-1">Địa chỉ:</span>
						<span class="w-4/6 text-right font-semibold ps-2">Quảng Ninh</span>
						<span class="w-2/6 text-gray-700 line-clamp-1">Diện tích:</span>
						<span class="w-4/6 text-right font-semibold ps-2">200m</span>
						<span class="w-2/6 text-gray-700 line-clamp-1">Số tầng:</span>
						<span class="w-4/6 text-right font-semibold ps-2">6 (6 tầng + 1 hầm)</span> -->
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Post -->
<section class="py-16">
	<div class="w-full max-w-screen-fhd mx-auto my-10 px-4 md:px-16 screen-fhd:px-6">
		<div class="flex items-center">
			<h2 class="grow break-words text-2xl font-semibold">Thiết kế kiến trúc</h2>
			<button
				class="flex items-center gap-x-2 px-3 py-2 transition-all duration-200 ease-linear hover:bg-gray-100 rounded-md"
			>
				<span>More</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="w-4 h-4 fill-current rotate-180"
					><path
						d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"
					></path></svg
				>
			</button>
		</div>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 mt-8"
		>
			{#each posts as post}
				<div class="">
					<div class="w-full aspect-1">
						<img class="h-full object-cover object-center rounded-lg" src={post.cover} alt="" />
					</div>
					<div class="pt-4">
						<a href="/">
							<h5 class="text-xl font-lora font-semibold text-gray-900 line-clamp-2">
								{post.title}
							</h5>
						</a>
					</div>
					<div class="flex flex-wrap gap-y-0.5 pt-4">
						<span class="w-2/6 text-gray-700 line-clamp-1">Chủ đầu tư:</span>
						<span class="w-4/6 text-right font-semibold ps-2">Anh Long</span>
						<span class="w-2/6 text-gray-700 line-clamp-1">Địa chỉ:</span>
						<span class="w-4/6 text-right font-semibold ps-2">Quảng Ninh</span>
						<span class="w-2/6 text-gray-700 line-clamp-1">Diện tích:</span>
						<span class="w-4/6 text-right font-semibold ps-2">200m</span>
						<span class="w-2/6 text-gray-700 line-clamp-1">Số tầng:</span>
						<span class="w-4/6 text-right font-semibold ps-2">6 (6 tầng + 1 hầm)</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Post -->
<section class="bg-section-highlight py-16">
	<div class="w-full max-w-screen-fhd mx-auto my-10 px-4 md:px-16 screen-fhd:px-6">
		<div class="flex items-center">
			<h2 class="grow break-words text-2xl font-semibold">Tin tức</h2>
			<button
				class="flex items-center gap-x-2 px-3 py-2 transition-all duration-200 ease-linear hover:bg-gray-100 rounded-md"
			>
				<span>More</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="w-4 h-4 fill-current rotate-180"
					><path
						d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"
					></path></svg
				>
			</button>
		</div>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8"
		>
			{#each posts as post}
				<div class="">
					<picture class="w-full block aspect-w-3 aspect-h-2">
						<img class="h-full object-cover object-center rounded-lg" src={post.cover} alt="" />
					</picture>
					<div class="pt-4">
						<!-- Post creater -->
						<div class="flex items-center gap-x-2 text-sm mb-2">
							<div class="w-6 h-6 rounded-full overflow-hidden">
								<img
									src="https://coin98.net/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusrzihar2uey9sjefrz1xtywijisyagp%2Fprofile-pictures%2Ffggd9ofu7867do4ff8wond9omarh9iir%2F288930474_3078241535821095_8640745413739969681_n.jpg&w=3840&q=20"
									alt=""
								/>
							</div>
							<div class="line-clamp-1 text-gray-700">
								<span>hhouse</span>
							</div>
							<div class="h-2 aspect-1 flex items-center justify-center">
								<div
									class="block w-2 aspect-1 scale-50 bg-gray-400 rounded-full overflow-hidden"
								></div>
							</div>
							<div class="text-gray-700">
								<span>một ngày trước</span>
							</div>
						</div>
						<a href="/">
							<h5 class="mb-2 text-xl font-lora font-semibold text-gray-900">
								{post.title}
							</h5>
						</a>
						<p class="mb-3 font-normal text-gray-700">
							Bạn đang tìm kiếm một đơn vị sản xuất nội thất hoàn thiện uy tín, chuyên nghiệp tại
							khu vực...
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
