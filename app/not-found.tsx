import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-[#0a0a0a] text-white">
            <div className="text-center space-y-6">
                <h1 className="text-9xl font-bold text-[#148E96] opacity-20 select-none">
                    404
                </h1>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-wider">PAGE NOT FOUND</h2>
                    <p className="text-gray-400">
                        お探しのページは、デジタル空間の彼方へ消えたようです。
                    </p>
                </div>

                <div className="pt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-full bg-[#148E96]/10 px-8 py-3 text-sm font-medium text-[#148E96] ring-1 ring-[#148E96]/50 transition-all hover:bg-[#148E96] hover:text-white hover:ring-[#148E96]"
                    >
                        トップページに戻る
                    </Link>
                </div>
            </div>
        </div>
    )
}