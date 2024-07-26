import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex h-screen flex-col items-center justify-center">
            <nav>
            <Link href={"/account/login"}>Login</Link>
            </nav>
        </main>
    );
}
