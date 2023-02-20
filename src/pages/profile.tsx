import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { api } from "../utils/api";

const UserProfile: NextPage = () => {
    return (
        <>
            <Head>
                <title>Title</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center">
                <div className="absolute w-full h-72 -z-10">
                    <Image src="/profile/banner.jpg" alt="profile-picture" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="container flex flex-row items-center justify-center gap-12 px-4 py-16 md:px-8 lg:px-16">
                    <div className="flex flex-row gap-x-8">
                        <div className="w-[350px]">
                            <Profile />
                        </div>
                        <div className="flex flex-col mt-64 w-full gap-y-8">
                            <Article title={"Article One"} image={"/profile/Article One.jpg"} description="A brief description" />
                            <Article title={"Article Two"} image={"/profile/Article Two.png"} description="A brief description" />
                            <Article title={"Article One"} image={"/profile/Article One.jpg"} description="A brief description" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default UserProfile;

const Profile: React.FC = () => {
    const { data: sessionData } = useSession();

    return (
        <div className="drop-shadow-xl scale-up w-full flex flex-col overflow-hidden">
            <div className="relative w-full h-96 overflow-hidden">
                <Image src="/profile/profile.jpg" alt="profile-picture" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="bg-slate-700 w-full text-white p-6 h-auto">
                <h3 className="text-2xl text-white">
                    {sessionData && <h2>{sessionData.user?.name}</h2>}
                </h3>
                <h4 className="text-xl pt-2 pb-3">About</h4>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
        /*
            {sessionData && (<Image src={sessionData.user?.image} alt="icon" fill style={{ objectFit: "cover" }} />)}
            <button
                className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
                onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
                {sessionData ? "Sign out" : "Sign in"}
            </button>
        */
    );
};


type ArticleProps = {
    title: string;
    image: string;
    description: string;
};

const Article = ({ title, image, description }: ArticleProps) => {
    return (
        <div className="w-full drop-shadow-2xl bg-slate-300 overflow-hidden">
            <div className="flex flex-col w-full items-center">
                <div className="relative w-full h-52 overflow-hidden">
                    <Image src={image} alt="profile-picture" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="bg-slate-700 w-full text-white p-3 h-auto overflow-hidden">
                    <h3 className="text-2xl text-white">
                        {title}
                    </h3>
                    <div className="flex flex-row mb-2">
                        <p className="text-medium">by Evan Scully, <span>16th Jan</span></p>
                    </div>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                </div>
            </div>
        </div>
    );
};