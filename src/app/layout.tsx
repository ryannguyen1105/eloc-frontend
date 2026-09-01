import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { ShoppingBag, Search, User, Heart } from "lucide-react";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
    title: "cửa hàng thương mại điện tử DienMayLoc",
    description: "Trang thương mại điện tử mua sắm hiện đại",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="vi">
            <body className={inter.className}>
                {/* HEADER - Thanh điều hướng dùng chung */}
                <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                        {/* Logo */}
                        <div className="text-2xl font-bold text-primary tracking-wider cursor-pointer">
                            DienMayLoc<span className="text-amber-500">.</span>
                        </div>

                        {/* Thanh tìm kiếm */}
                        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
                            <Search className="w-4 h-4 text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm sản phẩm..."
                                className="bg-transparent border-none outline-none text-sm w-full"
                            />
                        </div>

                        {/* Nhóm icon chức năng */}
                        <div className="flex items-center space-x-6 text-gray-600">
                            <div className="cursor-pointer hover:text-primary transition"><User className="w-6 h-6" /></div>
                            <div className="cursor-pointer hover:text-primary transition"><Heart className="w-6 h-6" /></div>
                            {/* Icon Giỏ hàng kèm số lượng giả lập */}
                            <div className="cursor-pointer hover:text-primary transition relative">
                                <ShoppingBag className="w-6 h-6" />
                                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                                    2
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* NỘI DUNG CHÍNH CỦA TỪNG TRANG */}
                <main className="min-h-screen">
                    {children}
                </main>

                {/* FOOTER - Chân trang dùng chung */}
                <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">ELOC SHOP</h3>
                            <p className="text-sm leading-relaxed">Chuyên cung cấp các mặt hàng thời trang và xu hướng mới nhất với chất lượng cao cấp.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Chính sách</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-white cursor-pointer">Chính sách đổi trả</li>
                                <li className="hover:text-white cursor-pointer">Chính sách bảo mật</li>
                                <li className="hover:text-white cursor-pointer">Điều khoản dịch vụ</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Hỗ trợ khách hàng</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-white cursor-pointer">Hotline: 1900 xxxx</li>
                                <li className="hover:text-white cursor-pointer">Email: cskh@eloc.com</li>
                                <li className="hover:text-white cursor-pointer">Trung tâm bảo hành</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Đăng ký nhận tin</h4>
                            <div className="flex rounded-md overflow-hidden">
                                <input type="email" placeholder="Email của bạn" className="px-3 py-2 text-sm text-gray-900 outline-none w-full" />
                                <button className="bg-amber-500 text-white px-4 text-sm font-semibold hover:bg-amber-600">Gửi</button>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
