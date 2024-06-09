/* Component Imports */

import { SpeedInsights } from "@vercel/speed-insights/next"
import Layout from "/components/layout-components/Layout";
import Welcome from "../components/page-sections/index/Welcome";

import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return ( <
        html lang = "en" >
        <
        head >
        <
        title > Next.js < /title> < /
        head > <
        body > { children } <
        SpeedInsights / >
        <
        /body> < /
        html >
    );
}


export default function Home() {
    return ( <
        Layout noLayoutHeader >
        <
        Welcome / >
        <
        /Layout>
    );
}