"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";

const links: { id: number; title: string; path: string }[] = [
	{ id: 1, title: "Home", path: "/" },
	{ id: 2, title: "Dummy", path: "/dummy" },
];

const HeaderLinks = ({ ...props }: { className?: string }) => {
	const pathname = usePathname();

	return (
		<ol className={`${props.className}`}>
			{links.map((link, index) => (
				<li key={link.id}>
					<Link
						href={link.path}
						className={cn(
							"text-base cursor-pointer capitalize hover:text-blue-500",
							pathname === link.path ? "text-palette-primary-300" : "text-foreground"
						)}
					>
						{link.title}
					</Link>
					{index + 1 !== links.length && <span> | </span>}
				</li>
			))}
		</ol>
	);
};

export default HeaderLinks;
