import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="flex flex-col gap-2 sm:flex-row py-6 w-full max-w-screen-xl mx-auto shrink-0 items-center px-4 md:px-6">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 MoodMeal. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4 decoration-[#799122]" href="https://www.instagram.com/akbarknawan" target="_blank" rel="noopener noreferrer">
                        Created with ❤️ by <span className="font-bold">Akbar</span>
                    </Link>
                </nav>
            </div>
        </footer>
    )
}
