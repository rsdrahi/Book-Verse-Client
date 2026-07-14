import { Button } from "@heroui/react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const ContactPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h1 className="text-4xl font-bold">
          Contact Us
        </h1>

        <p className="text-default-500 mt-4">
          Have questions about BookVerse? We'd love to hear from you.
          Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Left */}
        <div className="space-y-6">

          <div className="border rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <Mail className="text-primary" />

              <div>
                <h3 className="font-semibold">
                  Email
                </h3>

                <p className="text-default-500">
                  support@bookverse.com
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <Phone className="text-primary" />

              <div>
                <h3 className="font-semibold">
                  Phone
                </h3>

                <p className="text-default-500">
                  +880 1700-000000
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <MapPin className="text-primary" />

              <div>
                <h3 className="font-semibold">
                  Address
                </h3>

                <p className="text-default-500">
                  Sylhet, Bangladesh
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <Clock className="text-primary" />

              <div>
                <h3 className="font-semibold">
                  Office Hours
                </h3>

                <p className="text-default-500">
                  Sat - Thu | 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Right */}
        <div className="border rounded-2xl p-8 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Send us a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl h-12 px-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl h-12 px-4 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-xl h-12 px-4 outline-none"
            />

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="w-full border rounded-xl p-4 outline-none resize-none"
            />

            <Button
              className="w-full"
            >
              Send Message
            </Button>

          </form>

        </div>

      </div>

      {/* Map */}
      <div className="mt-14 border rounded-2xl overflow-hidden">

        <iframe
          src="https://www.google.com/maps?q=Sylhet,Bangladesh&output=embed"
          width="100%"
          height="350"
          loading="lazy"
        />

      </div>

    </section>
  );
};

export default ContactPage;