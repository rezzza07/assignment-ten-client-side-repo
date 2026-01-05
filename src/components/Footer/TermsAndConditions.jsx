import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
            Terms & Conditions
          </h1>
          <p className="text-base-content/70 text-lg mb-4">
            Please read these terms carefully before using Artopia
          </p>
        </div>

        {/* Content Card */}
        <div
          className="relative w-full max-w-[1000px] mx-auto rounded-xl overflow-hidden cursor-pointer group"
          style={{
            padding: "2px",
            background: "linear-gradient(to right, #f97316, #ec4899, #8b5cf6)",
          }}
        >
          <div className="bg-base-100 dark:bg-gray-900 rounded-lg w-full h-full flex flex-col p-8 overflow-auto shadow-md group-hover:shadow-lg transition-shadow duration-300">

            {/* Introduction */}
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Introduction
            </h2>
            <p className="mb-6 text-base-content/70 leading-relaxed text-lg">
              Welcome to Artopia. By accessing or using our platform, you agree to comply with
              and be bound by these Terms & Conditions. These terms apply to all users of our
              website and services.
            </p>

            {/* User Responsibilities */}
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-3 mb-6 text-base-content/70 text-lg">
              <li>Provide accurate and up-to-date personal information.</li>
              <li>Maintain the confidentiality of your account and password.</li>
              <li>Use the platform only for lawful purposes.</li>
              <li>Respect intellectual property rights of artists and others.</li>
            </ul>

            {/* Artwork Submissions */}
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Artwork Submissions
            </h2>
            <p className="mb-6 text-base-content/70 leading-relaxed text-lg">
              Artists retain ownership of their artwork. By submitting, you grant Artopia
              a non-exclusive license to display, promote, and distribute your work on
              the platform.
            </p>

            {/* Purchases & Payments */}
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Purchases & Payments
            </h2>
            <p className="mb-6 text-base-content/70 leading-relaxed text-lg">
              Payments made through Artopia are processed securely. Artopia is not responsible
              for payment failures outside our platform or third-party payment providers.
            </p>

            {/* Termination */}
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Termination
            </h2>
            <p className="mb-6 text-base-content/70 leading-relaxed text-lg">
              We reserve the right to suspend or terminate accounts for violation of these
              terms. Users may terminate their account at any time through the platform.
            </p>

            {/* Limitation of Liability */}
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Limitation of Liability
            </h2>
            <p className="mb-6 text-base-content/70 leading-relaxed text-lg">
              Artopia is not liable for any direct, indirect, incidental, or consequential
              damages arising from the use of our services.
            </p>

            {/* Changes to Terms */}
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Changes to Terms
            </h2>
            <p className="mb-6 text-base-content/70 leading-relaxed text-lg">
              Artopia may update these terms from time to time. Users will be notified of
              significant changes, and continued use constitutes acceptance of updated terms.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
