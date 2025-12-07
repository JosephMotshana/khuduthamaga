import logo from "../assets/logo.png";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-khudu_gray mb-4 leading-tight">
              Building Profitable & Sustainable Farming Businesses
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              Khuduthamaga Consulting provides accredited agricultural training,
              mentorship, and community upliftment solutions to support farmers
              and agricultural businesses across South Africa.
            </p>

            <div className="flex gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-khudu_orange text-white rounded-md font-medium hover:opacity-90 transition"
              >
                Contact Us
              </a>

              <a
                href="/services"
                className="px-6 py-3 border border-khudu_green text-khudu_green rounded-md font-medium hover:bg-khudu_green hover:text-white transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img src={logo} alt="Khuduthamaga Logo" className="max-h-64" />
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-khudu_gray mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are a professional agricultural consulting company offering
            practical training, mentoring, and development programmes designed
            to empower upcoming and established farmers. Our mission is to
            support sustainable food production and economic growth in rural
            and urban communities.
          </p>

          <a
            href="/about"
            className="mt-6 inline-block px-6 py-3 bg-khudu_green text-white rounded-md font-medium hover:opacity-90 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-khudu_gray text-center mb-10">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Agricultural Training</h3>
              <p className="text-gray-600">
                Accredited training programmes tailored for emerging and
                commercial farmers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
              <p className="text-gray-600">
                Hands-on mentorship to guide farmers toward profitable and
                sustainable production.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Community Projects</h3>
              <p className="text-gray-600">
                Upliftment and food security initiatives for schools, NGOs, and
                communities.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <a
              href="/services"
              className="px-6 py-3 bg-khudu_orange text-white rounded-md font-medium hover:opacity-90 transition"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 md:px-12 bg-khudu_green text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Grow Your Agricultural Business?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Partner with us for top-tier training, mentorship, and consulting
          services designed to help you scale and succeed.
        </p>

        <a
          href="/contact"
          className="px-8 py-3 bg-white text-khudu_green font-semibold rounded-md hover:bg-gray-200 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
