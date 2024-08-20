<script lang="ts">
	const posts = [
		{
			title: 'Thiết kế nội thất chung cư Vinhomes D’capital phong cách hiện đại – MV.NT.CC 2205',
			cover: 'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/port-gallery-01.jpg'
		},
		{
			title: 'Thiết kế nội thất chung cư An Bình City phong cách hiện đại – MV.NT.CC 2204',
			cover: 'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/port-gallery-02.jpg'
		},
		{
			title: 'Thiết kế nội thất gỗ óc chó nhà phố lệch tầng – MV.NT.BT 2202',
			cover:
				'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/h8-port-gallery-img-11.jpg'
		},
		{
			title: 'Phong cách hiện đại cho nội thất chung cư The Kpark Văn Phú – MV.NT.CC 2203',
			cover:
				'https://archicon.qodeinteractive.com/wp-content/uploads/2022/04/h2-portfolio-img-04-650x650.jpg'
		},
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
</script>

<div class="fixed bottom-10 right-4 flex flex-col z-10">
	<!-- Mobile filter button -->
	<button
		class="lg:hidden inline-flex flex-col items-center bg-blue-700 text-white px-2 py-3 rounded-full"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			class="w-6 h-6 fill-current"
			><path
				d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"
			></path></svg
		>
		<span class="text-xs">Lọc</span>
	</button>
</div>

<!-- Post -->
<section class="pb-16">
	<div class="w-full max-w-screen-fhd mx-auto my-10 px-4 md:px-16 screen-fhd:px-6">
		<div class="flex gap-x-20">
			<!-- Filter -->
			<div class="h-full lg:h-screen sticky top-36 shrink-0 hidden lg:flex flex-col w-64">
				<div class="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="w-6 h-6 fill-current mr-2"
						><path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path></svg
					>
					<h2 class="text-lg font-semibold uppercase">Bộ lọc tìm kiếm</h2>
				</div>
				<hr class="border-base my-6" />
				<div class="h-full flex flex-col gap-y-6 mb-36 overflow-y-auto">
					<fieldset class="flex flex-col gap-y-3">
						<legend class="mb-4 font-semibold">Phong cách kiến trúc</legend>

						<div class="flex items-center">
							<input
								id="default-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="default-checkbox" class="ms-4 text-gray-700">Kiến trúc hiện đại</label>
						</div>
						<div class="flex items-center">
							<input
								checked
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="checked-checkbox" class="ms-4 text-gray-700">Kiến trúc tân cổ điển</label>
						</div>
						<div class="flex items-center">
							<input
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="checked-checkbox" class="ms-4 text-gray-700">Kiến trúc cổ điển</label>
						</div>
						<div class="flex items-center">
							<input
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="checked-checkbox" class="ms-4 text-gray-700"
								>Kiến trúc Đông Dương - Indochine</label
							>
						</div>
					</fieldset>
					<hr class="border-base" />
					<fieldset class="flex flex-col gap-y-3">
						<legend class="mb-4 font-semibold">Loại hình kiến trúc</legend>

						<div class="flex items-center">
							<input
								id="default-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="default-checkbox" class="ms-4 text-gray-700">Lâu đài - Dinh thự</label>
						</div>
						<div class="flex items-center">
							<input
								checked
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="checked-checkbox" class="ms-4 text-gray-700">Biệt thự</label>
						</div>
						<div class="flex items-center">
							<input
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="checked-checkbox" class="ms-4 text-gray-700"
								>Nhà phố - Liền kề - Shophouse</label
							>
						</div>
						<div class="flex items-center">
							<input
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="checked-checkbox" class="ms-4 text-gray-700">Khách sạn</label>
						</div>
						<div class="flex items-center">
							<input
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="checked-checkbox" class="ms-4 text-gray-700">Nhà hàng</label>
						</div>
					</fieldset>
					<hr class="border-base" />
					<fieldset class="flex flex-col gap-y-3">
						<legend class="mb-4 font-semibold">Số lượng tầng</legend>

						<div class="flex items-center">
							<input
								id="default-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="default-checkbox" class="ms-4 text-gray-700">Một tầng</label>
						</div>
						<div class="flex items-center">
							<input
								checked
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="checked-checkbox" class="ms-4 text-gray-700">Hai tầng</label>
						</div>
						<div class="flex items-center">
							<input
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="checked-checkbox" class="ms-4 text-gray-700">Ba tầng</label>
						</div>
						<div class="flex items-center">
							<input
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="checked-checkbox" class="ms-4 text-gray-700">Bốn tầng</label>
						</div>
					</fieldset>
					<hr class="border-base" />
					<fieldset class="flex flex-col gap-y-3">
						<legend class="mb-4 font-semibold">Khu vực</legend>

						<div class="flex items-center">
							<input
								id="default-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="default-checkbox" class="ms-4 text-gray-700">Hà Nội</label>
						</div>
						<div class="flex items-center">
							<input
								checked
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="checked-checkbox" class="ms-4 text-gray-700">TP. Hồ Chí Minh</label>
						</div>
						<div class="flex items-center">
							<input
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="checked-checkbox" class="ms-4 text-gray-700">Thái Nguyên</label>
						</div>
						<div class="flex items-center">
							<input
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="checked-checkbox" class="ms-4 text-gray-700">Vĩnh Phúc</label>
						</div>
						<div class="flex items-center">
							<input
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label for="checked-checkbox" class="ms-4 text-gray-700">Bắc Ninh</label>
						</div>
					</fieldset>
				</div>
			</div>
			<!-- List post -->
			<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 screen-fhd:grid-cols-4 gap-8">
				{#each posts as post}
					<div class="">
						<div class="w-full aspect-1">
							<img class="h-full object-cover object-center rounded-lg" src={post.cover} alt="" />
						</div>
						<div class="pt-4">
							<a href="/">
								<h5 class="mb-2 text-xl font-lora font-semibold text-gray-900">
									{post.title}
								</h5>
							</a>
							<!-- <p class="mb-3 font-normal text-gray-700">
							Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
							chronological order.
						</p> -->
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
