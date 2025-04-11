import React from 'react';

const TermsConditions = () => {

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-white ">
      <button onClick={handleBack} className="mb-4 text-white hover:underline cursor-pointer">
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-4 text-red-700">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-4">Last updated: April 11, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to our platform. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Services Offered</h2>
        <p>
          We provide software development services including but not limited to product development, custom APIs, advertising solutions, and digital tools. All services are provided as-is and may be updated or modified at our discretion.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
        <p>
          All content, code, logos, and designs are the intellectual property of our company unless stated otherwise. You may not copy, distribute, or reuse content without permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. User Responsibilities</h2>
        <p>
          By using our services, you agree not to use them for any unlawful or prohibited activities. You are responsible for ensuring that your use complies with all applicable laws and regulations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
        <p>
          We are not liable for any damages resulting from the use or inability to use our services, including but not limited to direct, indirect, incidental, or consequential damages.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Third-Party Services</h2>
        <p>
          Our site or services may link to third-party tools or services. We are not responsible for the content or practices of these external platforms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
        <p>
          We reserve the right to terminate or suspend access to our services at any time without notice for any reason, including violation of these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws of the jurisdiction in which our company is registered, without regard to conflict of law principles.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
        <p>
          We may revise these Terms and Conditions from time to time. We will post any updates here. Your continued use of our services after changes constitutes acceptance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms and Conditions, feel free to contact us at:
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

export default TermsConditions;
