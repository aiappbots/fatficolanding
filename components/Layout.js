import React from "react";
import Content from "./Content";

import Footer from "./Footer";
import Header from "./Header";
import Notify from "./Notify";

export default function Layout(children) {
	return (
		<div>
			<Notify />
			<Header />
			<Footer />
		</div>
	);
}
