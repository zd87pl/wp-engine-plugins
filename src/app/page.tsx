import Link from "next/link";
import Image from "next/image";

const plugins = [
  { name: "Faust.js", description: "Faust.js is a framework for building front-end applications using WordPress as a headless CMS.", logo: "/faust-logo.svg" },
  { name: "Plugin 2", description: "Description for Plugin 2" },
  { name: "Plugin 3", description: "Description for Plugin 3" },
  { name: "Plugin 4", description: "Description for Plugin 4" },
  { name: "Plugin 5", description: "Description for Plugin 5" },
  { name: "Plugin 6", description: "Description for Plugin 6" },
  { name: "Plugin 7", description: "Description for Plugin 7" },
  { name: "Plugin 8", description: "Description for Plugin 8" },
  { name: "Plugin 9", description: "Description for Plugin 9" },
  { name: "Plugin 10", description: "Description for Plugin 10" },
  { name: "Plugin 11", description: "Description for Plugin 11" },
  { name: "Plugin 12", description: "Description for Plugin 12" },
  { name: "Plugin 13", description: "Description for Plugin 13" },
];

const PluginCard = ({ name, description, logo }: { name: string; description: string; logo?: string }) => (
  <Link href={`/plugins/${name.toLowerCase().replace(/\s+/g, '-')}`} className="plugin-card flex flex-col items-center">
    {logo && <Image src={logo} alt={`${name} logo`} width={64} height={64} className="mb-4" />}
    <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </Link>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="header">
        <div className="container">
          <h1 className="text-4xl">WP Engine Plugin Directory</h1>
          <p className="mt-2 text-xl">Discover and download plugins created and maintained by WP Engine</p>
        </div>
      </header>
      <main className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plugins.map((plugin, index) => (
            <PluginCard key={index} name={plugin.name} description={plugin.description} logo={plugin.logo} />
          ))}
        </div>
      </main>
      <footer className="footer">
        <div className="container text-center">
          <p>&copy; 2024 WP Engine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
