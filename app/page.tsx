import { auth } from "@/auth";
import SignIn from "@/components/SignIn";
import SignOut from "@/components/SignOut";

export default async function Home() {
    const session = await auth();

    if (!session?.user) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">OAuth Demo</h1>
                    <p className="text-gray-600">Sign in to view your information</p>
                    <SignIn />
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
            <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
                <h1 className="text-3xl font-bold text-center">Welcome!</h1>

                <div className="space-y-4">
                    {session.user.image && (
                        <div className="flex justify-center">
                            <img
                                src={session.user.image}
                                alt="Profile"
                                className="h-24 w-24 rounded-full"
                            />
                        </div>
                    )}

                    <div className="space-y-2">
                        {session.user.name && (
                            <p>
                                <span className="font-semibold">Name:</span> {session.user.name}
                            </p>
                        )}
                        {session.user.email && (
                            <p>
                                <span className="font-semibold">Email:</span> {session.user.email}
                            </p>
                        )}
                    </div>
                </div>

                <SignOut />
            </div>
        </div>
    );
}