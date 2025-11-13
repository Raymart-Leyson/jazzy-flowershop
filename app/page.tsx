import Image from "next/image";
import { Cinzel_Decorative } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className="bg-[#f7f6f1] min-h-screen flex flex-col text-[#607502]">
      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col items-center justify-center h-screen w-screen text-center relative">
        {/* Background for desktop/tablet */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover hidden md:block"
          style={{
            backgroundImage: "url('/Home.jpg')",
          }}
        />
        {/* Solid background for mobile */}
        <div className="absolute inset-0 bg-[#f7f6f1] md:hidden" />

        <div className="relative z-10 px-4">
          <h1
            className={`${cinzelDecorative.className} text-6xl sm:text-8xl md:text-[150px] leading-none`}
          >
            JAZZY
          </h1>
          <h2
            className={`${cinzelDecorative.className} text-xl sm:text-3xl md:text-[40px] tracking-[0.5em]`}
          >
            FLOWER SHOP
          </h2>
          <p className="mt-4 italic sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            we do flower arrangement and supply
          </p>
        </div>
      </section>

      {/* ===== WELCOME SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-center h-auto md:h-screen py-20 px-6 md:px-20 text-center md:text-left relative">
        {/* Background for desktop */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover hidden md:block"
          style={{
            backgroundImage: "url('/Welcome.jpg')",
          }}
        />
        {/* Solid background for mobile */}
        <div className="absolute inset-0 bg-[#f7f6f1] md:hidden" />

        <div className="relative z-10 flex flex-col md:flex-row items-center w-full">
          {/* Left image (hidden on mobile) */}
          <div className="flex-1"></div>

          {/* Right text */}
          <div className="flex-1">
            <h2
              className={`${cinzelDecorative.className} text-4xl sm:text-5xl md:text-[70px] leading-tight text-center md:text-left`}
            >
              WELCOME TO<br />OUR STORE
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-md text-center md:text-left mx-auto md:mx-0">
              Discover the beauty of nature at Jazzy Flower Shop, where every
              bloom tells a story. Whether you're celebrating a special
              occasion or simply brightening your day, our exquisite floral
              arrangements are crafted to bring joy and elegance to your life.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ABOUT US SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-center h-auto md:h-screen py-20 px-6 md:px-20 relative text-center md:text-left">
        {/* Background for desktop */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover hidden md:block"
          style={{
            backgroundImage: "url('/AboutUs.jpg')",
          }}
        />
        {/* Solid background for mobile */}
        <div className="absolute inset-0 bg-[#f7f6f1] md:hidden" />

        <div className="relative z-10 flex flex-col md:flex-row items-center w-full">
          <div className="flex-1"></div>
          <div className="flex-1">
            <h2
              className={`${cinzelDecorative.className} text-4xl sm:text-5xl md:text-[70px] leading-tight text-center md:text-left`}
            >
              ABOUT US
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-md text-center md:text-left mx-auto md:mx-0">
              At Jazzy Flower Shop, we believe in the power of flowers to
              transform moments into cherished memories. Founded on a passion
              for floral artistry, our shop is dedicated to providing
              exceptional arrangements that capture the essence of every
              occasion. With a commitment to quality and customer satisfaction,
              we strive to bring joy and elegance to your life through the
              beauty of flowers.
            </p>
          </div>
          <div className="flex-1 hidden md:flex justify-center mb-10 md:mb-0"></div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-center h-auto md:h-screen py-20 px-6 md:px-50 relative text-center md:text-left">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover hidden md:block"
          style={{
            backgroundImage: "url('/OurService.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-[#f7f6f1] md:hidden" />

        <div className="relative z-10 flex flex-col md:flex-row items-center w-full">
          <div className="flex-1 justify-center items-center">
            <h2
              className={`${cinzelDecorative.className} text-4xl sm:text-5xl md:text-[70px] leading-tight text-center md:text-left`}
            >
              OUR SERVICE
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-md text-center md:text-left mx-auto md:mx-0">
              At Jazzy Flower Shop, we pride ourselves on delivering more than
              just flowers; we deliver experiences. Our dedicated team is
              committed to providing exceptional customer service, ensuring that
              every interaction is as delightful as our floral arrangements.
              Whether you're selecting the perfect bouquet or arranging for a
              special delivery, we're here to make your floral journey seamless
              and enjoyable.
            </p>
          </div>
          <div className="flex-1 hidden md:flex justify-center mb-10 md:mb-0"></div>
        </div>
      </section>

      {/* ===== CONTACT US SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-center h-auto md:h-screen py-20 px-6 md:px-50 relative text-center md:text-left">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover hidden md:block"
          style={{
            backgroundImage: "url('/ContactUs.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-[#f7f6f1] md:hidden" />

        <div className="relative z-10 flex flex-col md:flex-row items-center w-full">
          <div className="flex-1 hidden md:flex justify-center mb-10 md:mb-0"></div>
          <div className="flex-1 justify-center items-center">
            <h2
              className={`${cinzelDecorative.className} text-4xl sm:text-5xl md:text-[70px] leading-tight text-center md:text-left`}
            >
              CONTACT US
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-md text-center md:text-left mx-auto md:mx-0">
              We'd love to hear from you! Whether you have questions about
              our floral arrangements, need assistance with an order, or
              simply want to share your experience, feel free to reach out.
              Our friendly team is here to help you bloom with elegance.
            </p>
            <div className="mt-6 text-base sm:text-lg leading-relaxed max-w-md text-center md:text-left mx-auto md:mx-0">
              <span>Email: </span>
              <span>info@jazzflowershop.com</span>
              <br />
              <span>Phone: </span>
              <span>+1 (123) 456-7890</span>
              <br />
              <span>Address: </span>
              <span>123 Blossom Lane, Floral City, FL 12345</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-700 text-white text-center py-6">
        <p className="text-base sm:text-lg">
          © 2025 Jazzy Flower Shop — Bloom with elegance 🌸
        </p>
      </footer>
    </div>
  );
}
