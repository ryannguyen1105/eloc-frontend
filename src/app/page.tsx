import { ArrowRight, Star } from "lucide-react";

// Tự tạo một danh sách dữ liệu sản phẩm giả (Mock Data) để hiển thị lên giao diện
const MOCK_PRODUCTS = [
    {
        id: 1,
        name: "Áo Khoác Bomber Nhung Tăm Unisex",
        price: "450.000đ",
        oldPrice: "600.000đ",
        image: "https://unsplash.com",
        rating: 5
    },
    {
        id: 2,
        name: "Giày Sneaker Thể Thao Bản Giới Hạn",
        price: "1.200.000đ",
        oldPrice: "1.500.000đ",
        image: "https://unsplash.com",
        rating: 4
    },
    {
        id: 3,
        name: "Balo Đi Học Chống Nước Phối Màu",
        price: "320.000đ",
        oldPrice: "320.000đ",
        image: "https://unsplash.com",
        rating: 5
    },
    {
        id: 4,
        name: "Mũ Lưỡi Trai Cotton Thêu Chữ Nổi",
        price: "150.000đ",
        oldPrice: "220.000đ",
        image: "https://unsplash.com",
        rating: 4
    }
];

export default function HomePage() {
    return (
        <div className="pb-10">
            {/* 1. HERO BANNER - Phần quảng cáo chính đầu trang */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 px-4 mb-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <span className="text-amber-600 font-bold tracking-wider text-sm bg-amber-100 px-3 py-1 rounded-full">BỘ SƯU TẬP MỚI 2026</span>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                            Nâng Tầm Phong Cách <br /> Thời Trang Của Bạn
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Khám phá hàng ngàn ưu đãi hấp dẫn giảm giá lên đến 50% cho tất cả các mặt hàng quần áo và phụ kiện cao cấp tuần này.
                        </p>
                        <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold flex items-center group transition shadow-lg">
                            Mua sắm ngay
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <img
                            src="https://unsplash.com"
                            alt="Banner mua sắm thời trang"
                            className="rounded-2xl shadow-2xl object-cover w-full h-[450px]"
                        />
                    </div>
                </div>
            </section>

            {/* 2. PRODUCT GRID - Danh sách sản phẩm thịnh hành */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Sản phẩm bán chạy</h2>
                        <p className="text-gray-500 text-sm mt-1">Những mẫu thiết kế được khách hàng săn đón nhiều nhất</p>
                    </div>
                    <span className="text-primary hover:underline font-semibold text-sm cursor-pointer flex items-center">
                        Xem tất cả <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                </div>

                {/* Lưới hiển thị danh sách sản phẩm sử dụng Tailwind Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {MOCK_PRODUCTS.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                            {/* Khung chứa ảnh sản phẩm */}
                            <div className="relative overflow-hidden h-64 bg-gray-50">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {product.price !== product.oldPrice && (
                                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        GIẢM GIÁ
                                    </span>
                                )}
                            </div>

                            {/* Thông tin sản phẩm */}
                            <div className="p-4 space-y-2">
                                <div className="flex text-amber-400">
                                    {Array.from({ length: product.rating }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <h3 className="font-semibold text-gray-800 line-clamp-2 min-h-[48px] group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                                <div className="flex items-baseline space-x-2">
                                    <span className="text-red-600 font-bold">{product.price}</span>
                                    {product.price !== product.oldPrice && (
                                        <span className="text-gray-400 text-xs line-through">{product.oldPrice}</span>
                                    )}
                                </div>

                                {/* Nút bấm mua nhanh */}
                                <button className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors mt-2">
                                    Thêm vào giỏ
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
