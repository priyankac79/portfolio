import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<main className="relative bg-black-100 h-full w-full overflow-clip">
			<div className="flex flex-col gap-20">
				<Hero />
				<Skills />
				<RecentProjects />
				<Contact />
			</div>
		</main>
	);
}
