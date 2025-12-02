import { signOut } from "@/auth";

export default function SignOut() {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
        >
            <button
                type="submit"
                className="w-full rounded-lg bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 transition"
            >
                Sign Out
            </button>
        </form>
    );
}