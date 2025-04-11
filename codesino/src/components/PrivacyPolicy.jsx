import React from 'react';

const PrivacyPolicy = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <button onClick={handleBack} className="mb-4 text-white hover:underline cursor-pointer">
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-4 text-red-700">Privacy Policy</h1>

      <p className="mb-4 text-sm text-gray-500">Last updated: April 11, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. We are committed to protecting your
          personal information and your right to privacy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <p>
          Lorem ipsum dolor sit amet. We may collect personal information that you voluntarily provide
          to us when you use our services, including:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Name and contact information</li>
          <li>Usage data and analytics</li>
          <li>API access logs</li>
          <li>Advertising identifiers</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p>
          We use the collected information for various purposes, such as:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>To provide, maintain, and improve our services and products</li>
          <li>To develop new solutions and APIs</li>
          <li>To analyze user behavior and optimize our ad campaigns</li>
          <li>To communicate with you regarding updates or offers</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Sharing Your Information</h2>
        <p>
          We do not sell your personal information. We may share data with third-party vendors,
          service providers, or affiliates who help us provide our services. All such parties are
          bound to keep your information secure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Cookies and Tracking Technologies</h2>
        <p>
          Lorem ipsum dolor sit amet. We use cookies and similar technologies to track user activity
          and improve experiences. You may control cookies through your browser settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal
          information from unauthorized access, disclosure, or destruction.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Your Privacy Rights</h2>
        <p>
          Depending on your location, you may have rights such as accessing, updating, or deleting
          your data. Please contact us to exercise your rights.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Children's Privacy</h2>
        <p>
          Our services are not directed to children under 13. We do not knowingly collect personal
          data from children. If we discover such data has been collected, we will delete it.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. We encourage you to review it periodically.
          Changes take effect once posted on this page.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          <strong>Email:</strong>{' '}
          <a
            href="mailto:info@codesino.com"
            className="underline hover:text-white"
          >
            info@codesino.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
