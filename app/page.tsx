"use client";
import prisma from "./providers/prisma";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";

async function getUsers(): Promise<User[]> {
	prisma.user.create({
		data: {
			username: "floof",
			email: "floof@floof.floof",
			password: "floof",
		},
	});
	return await prisma.user.findMany();
}

export default function Home() {
	const [users, setUsers] = useState<User[]>([]);
	useEffect(() => {
		getUsers().then((users) => setUsers(users));
	}, []);

	return (
		<div>
			{users.map((item) => {
				return <div key={item.id}>{item.username}</div>;
			})}
		</div>
	);
}
