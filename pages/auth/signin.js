import { getProviders, signIn as SignIntoProvider } from "next-auth/react"

export default function signIn({ providers }) {

    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button className=""
                        onClick={() => SignIntoProvider(provider.id)}
                    >
                        Sign in with {provider.name}
                    </button>
                </div>
            ))
            }
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