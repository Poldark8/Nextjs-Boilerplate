import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
            </Head>
            <main className='flex h-screen w-screen items-center justify-center'>
                <h1 className='rounded-3xl bg-amber-400 p-6 text-3xl font-bold text-white'>
                    Which would be worse - to live as a monster, or to die as a
                    good man?
                </h1>
            </main>
        </>
    );
}
