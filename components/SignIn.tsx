import { signIn } from "@/auth";

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("github");
            }}
        >
            <button
                type="submit"
                className="rounded-lg bg-gray-900 px-6 py-3 text-white font-semibold hover:bg-gray-700 transition"
            >
                Sign in with GitHub
            </button>
        </form>
    );
}