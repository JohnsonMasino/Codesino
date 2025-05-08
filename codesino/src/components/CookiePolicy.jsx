import React from 'react';

const CookiePolicy = () => {

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <button onClick={handleBack} className="mb-4 text-white hover:underline cursor-pointer">
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-4 text-red-700">Cookie Policy</h1>

      <p className="text-sm text-gray-500 mb-4">Last updated: May 8, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help us understand how users interact with our services, remember preferences, and improve user experience.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Cookies</h2>
        <p>We use cookies for the following purposes:</p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Essential Cookies:</strong> These are required for core functionality of our website or web apps.</li>
          <li><strong>Analytics Cookies:</strong> We use tools like Google Analytics to understand usage patterns and improve the user experience.</li>
          <li><strong>Advertising Cookies:</strong> These cookies help us deliver relevant ads and measure ad campaign performance.</li>
          <li><strong>Preference Cookies:</strong> These remember user choices like theme settings or language preferences.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Third-Party Cookies</h2>
        <p>
          We may allow trusted third-party services to place cookies on your device for analytics, marketing, or performance tracking. These third parties are responsible for their own privacy policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Your Choices</h2>
        <p>
          You can accept or decline cookies through the banner on our website. You may also control cookies through your browser settings.
          Please note that disabling some cookies may impact the functionality of our site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. How to Manage Cookies</h2>
        <p>
          Most browsers allow you to manage cookie preferences. You can usually find these settings in the “Options” or “Preferences” menu.
        </p>
        <p className="mt-2">
          To opt-out of Google Analytics tracking, you can install the browser add-on from Google: <br />
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Google Analytics Opt-out Add-on
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Changes to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. All changes will be posted on this page with an updated effective date.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p>
          If you have any questions about this Cookie Policy, please reach out to us:
          <br />
          <strong>Email:</strong>{' '}
          <a
            href="mailto:support@codesinodev.com"
            className="underline hover:text-white"
          >
            support@codesinodev.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default CookiePolicy;
