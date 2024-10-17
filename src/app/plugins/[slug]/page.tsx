import Link from 'next/link';
import Image from 'next/image';

const plugins = [
  {
    name: "Faust.js",
    description: "Faust.js is a framework for building front-end applications using WordPress as a headless CMS.",
    logo: "/faust-logo.svg",
    longDescription: `Faust.js is a framework for building front-end applications using WordPress as a headless CMS. It provides a set of tools and libraries that make it easy to create fast, scalable, and secure web applications using modern web technologies.

Key features:
• Headless WordPress: Use WordPress as a headless CMS, separating your content management from your front-end presentation.
• React-based: Build your front-end using React, taking advantage of its component-based architecture and vast ecosystem.
• Server-side rendering: Improve performance and SEO with server-side rendering out of the box.
• GraphQL API: Interact with your WordPress data using GraphQL, allowing for efficient and flexible data fetching.
• Authentication: Secure authentication system integrated with WordPress users and roles.
• SEO optimization: Built-in SEO features to ensure your headless WordPress site is search engine friendly.
• Developer experience: Enjoy a modern development experience with hot reloading, debugging tools, and more.

Faust.js is perfect for developers who want to leverage the power of WordPress as a content management system while building modern, performant web applications using the latest front-end technologies.`,
    version: "1.0.0",
    lastUpdated: "2024-03-15",
    downloadLink: "https://wordpress.org/plugins/faustwp/"
  },
  // ... other plugins
];

export default function PluginPage({ params }: { params: { slug: string } }) {
  const plugin = plugins.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === params.slug);

  if (!plugin) {
    return <div>Plugin not found</div>;
  }

  return (
    <div className="min-h-screen">
      <header className="header">
        <div className="container">
          <Link href="/" className="text-white hover:underline">← Back to Directory</Link>
          <h1 className="text-4xl mt-4">{plugin.name}</h1>
        </div>
      </header>
      <main className="container py-12">
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="flex items-center mb-6">
            {plugin.logo && (
              <Image src={plugin.logo} alt={`${plugin.name} logo`} width={96} height={96} className="mr-6" />
            )}
            <div>
              <h2 className="text-2xl font-bold">{plugin.name}</h2>
              <p className="text-gray-600">{plugin.description}</p>
            </div>
          </div>
          <a href={plugin.downloadLink} className="btn-primary inline-block mb-8">
            Download Plugin
          </a>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">About {plugin.name}</h3>
            <p className="whitespace-pre-wrap">{plugin.longDescription}</p>
          </div>
          <div className="mt-8">
            <p><strong>Version:</strong> {plugin.version}</p>
            <p><strong>Last Updated:</strong> {plugin.lastUpdated}</p>
          </div>
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
