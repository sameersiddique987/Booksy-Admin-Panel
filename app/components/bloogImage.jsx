'use client';
import Image from 'next/image';

const BlogImage = () => (
  <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
    <Image
      src="https://www.cockroachlabs.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F00voh0j35590%2F3N7x904Rz3Ba79z33XCPna%2F6b32f42f48919c4419cba2a55c57114a%2FBooksy_customer_thumbnail.jpg&w=3840&q=75"
      alt="Button Blog"
      fill
      className="object-contain"
      priority
     placeholder="blur"
  blurDataURL="/placeholder.png"
    />
  </div>
);

export default BlogImage;

