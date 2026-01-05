import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
            Privacy Policy
          </h1>
          <p className="text-base-content/70 text-lg mb-4">
            Learn how we handle your personal information
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

            {/* Data Collection */}
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Data Collection
            </h2>
            <p className="mb-6 text-base-content/70 leading-relaxed text-lg">
              Artopia collects personal information such as name, email, payment details,
              and usage data to provide a better user experience and secure transactions.
            </p>

            {/* Use of Data */}
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Use of Data
            </h2>
            <ul className="list-disc list-inside space-y-3 mb-6 text-base-content/70 text-lg">
              <li>Provide and improve services offered on the platform</li>
              <li>Communicate with users about updates or promotions</li>
              <li>Ensure security of accounts and transactions</li>
              <li>Comply with legal obligations</li>
            </ul>

            {/* Cookies & Tracking */}
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Cookies & Tracking
            </h2>
            <p className="mb-6 text-base-content/70 leading-relaxed text-lg">
              We may use cookies and analytics tools to monitor platform usage and enhance
              user experience. Users may opt out through browser settings.
            </p>

            {/* Data Sharing */}
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Data Sharing
            </h2>
            <p className="mb-6 text-base-content/70 leading-relaxed text-lg">
              Personal information is not sold to third parties. Data may be shared with
              service providers for payment processing, delivery, or legal compliance.
            </p>

            {/* Security */}
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Security
            </h2>
            <p className="mb-6 text-base-content/70 leading-relaxed text-lg">
              We implement reasonable measures to protect user data, but no method is
              100% secure. Users should take care with passwords and personal information.
            </p>

            {/* Changes to Policy */}
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700">
              Changes to Privacy Policy
            </h2>
            <p className="mb-6 text-base-content/70 leading-relaxed text-lg">
              We may update this policy periodically. Users will be notified of significant
              changes, and continued use indicates acceptance of the updated policy.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
