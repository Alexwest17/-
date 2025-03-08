import Head from 'next/head';
import Search from '../components/Search';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Movie Search</title>
            </Head>
            <main>
                <h1>Поиск фильмов</h1>
                <Search />
            </main>
        </div>
    );
}