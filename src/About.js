import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About</h1>
          <p className="text-gray-700 mb-4">
            Welcome to AGRI E-Commerce, your trusted partner in agricultural e-commerce. Our mission is to revolutionize the agricultural marketplace by connecting farmers directly with consumers, providing access to fresh produce, and promoting sustainable farming practices.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At AGRI E-Commerce, our mission is to empower farmers by giving them a platform to sell their products directly to consumers. We believe in the power of technology to transform the agricultural sector and make fresh, locally-sourced produce accessible to everyone.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li className="mb-2">
              <span className="font-semibold">Sustainability:</span> We are committed to promoting sustainable farming practices that protect the environment and ensure the long-term health of our planet.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Quality:</span> We strive to provide the highest quality products to our customers, sourced directly from trusted farmers.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Community:</span> We believe in the power of community and work to support local farmers and foster a sense of connection between producers and consumers.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Innovation:</span> We leverage the latest technology to create an efficient and user-friendly platform for buying and selling agricultural products.
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Services</h2>
          <p className="text-gray-700 mb-4">
            AGRI E-Commerce offers a wide range of services designed to meet the needs of both farmers and consumers:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li className="mb-2">Online marketplace for fresh produce and agricultural products</li>
            <li className="mb-2">Direct-to-consumer delivery services</li>
            <li className="mb-2">Educational resources on sustainable farming practices</li>
            <li className="mb-2">Support for local farmers and small-scale producers</li>
            <li className="mb-2">User-friendly mobile app for convenient shopping</li>
          </ul>
          <p className="text-gray-700 mt-8">
            Thank you for choosing AGRI E-Commerce. We are dedicated to supporting farmers and providing our customers with the freshest, highest quality products. Together, we can build a more sustainable and connected agricultural community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
