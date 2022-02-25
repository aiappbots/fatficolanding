import Head from "next/head";
import Image from "next/image";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Notify from "../components/Notify";
import Stats from "../components/Stats";
import MoneyBack from "../components/MoneyBack";

export default function Index() {
	return (
		<>
			<Notify />
			<Header />
			<CTA />
			<Stats />
			<MoneyBack />
			<Footer />
		</>
	);
}
