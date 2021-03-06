import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import Header from "../../Components/Header"

export default function signIn({ providers }) {

    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
                <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
                <div className="mt-40">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button className="p-3 bg-blue-500 rounded-full hover:scale-110 transition transform duration-200 ease-out text-white"
                                onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })}
                            >
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}