"use client";

import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileAvatar = ({
	...props
}: {
	picURL: string;
	className?: string;
  children?: React.ReactNode;
}) => {
	return (
		<div onPointerOver={() => console.log("hovered")}>
			<Avatar className={props.className}>
				<AvatarImage src={props.picURL} alt="profile image" />
				<AvatarFallback>CC</AvatarFallback>
			</Avatar>
      {props.children}
		</div>
	);
};

export default ProfileAvatar;
