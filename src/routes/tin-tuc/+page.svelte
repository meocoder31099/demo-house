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

<!-- Post -->
<section class="pb-16">
	<div class="w-full max-w-screen-fhd mx-auto my-10 px-4 md:px-16 screen-fhd:px-6">
		<!-- Breadcrumb -->
		<!-- <nav class="flex justify-between pb-8" aria-label="Breadcrumb">
			<ol class="inline-flex items-center mb-3 sm:mb-0">
				<li aria-current="page">
					<div class="flex items-center">
						<a
							href="/"
							class="inline-flex items-center pr-3 py-2 text-sm font-normal text-center text-gray-600"
						>
							Trang chủ
						</a>
					</div>
				</li>
				<span class="text-gray-400">/</span>
				<li aria-current="page">
					<div class="flex items-center">
						<a
							href="/"
							class="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-600"
						>
							1000+ Mẫu kiến trúc đẹp
						</a>
					</div>
				</li>
			</ol>
		</nav> -->

		<!-- Tag select -->
		<div class="flex items-center">
			<ul class="flex gap-3">
				<li>
					<input
						type="radio"
						id="tin-tuc-cong-ty"
						name="hosting"
						value="tin-tuc-cong-ty"
						class="hidden peer"
						required
					/>
					<label
						for="tin-tuc-cong-ty"
						class="inline-flex items-center justify-between w-full py-2 px-3 border border-gray-200 rounded-full cursor-pointer peer-checked:border-gray-700"
					>
						<div class="block">
							<div class="w-full">Tin tức công ty</div>
					</label>
				</li>
				<li>
					<input
						type="radio"
						id="tin-tuc-kien-truc"
						name="hosting"
						value="tin-tuc-kien-truc"
						class="hidden peer"
						required
					/>
					<label
						for="tin-tuc-kien-truc"
						class="inline-flex items-center justify-between w-full py-2 px-3 border border-gray-200 rounded-full cursor-pointer peer-checked:border-gray-700"
					>
						<div class="block">
							<div class="w-full">Tin tức kiến trúc</div>
					</label>
				</li>
				<li>
					<input
						type="radio"
						id="tin-tuc-phong-thuy"
						name="hosting"
						value="tin-tuc-phong-thuy"
						class="hidden peer"
						required
					/>
					<label
						for="tin-tuc-phong-thuy"
						class="inline-flex items-center justify-between w-full py-2 px-3 border border-gray-200 rounded-full cursor-pointer peer-checked:border-gray-700"
					>
						<div class="block">
							<div class="w-full">Tin tức phong thuỷ</div>
					</label>
				</li>
			</ul>
		</div>

		<!-- List post -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8">
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
