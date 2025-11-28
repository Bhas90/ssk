import React, { useState } from "react";

const StudyAbroad = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-100 py-10 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About <span style={{ color: '#fea611' }}>Developer</span>
        </h2>

        {/* Main Content */}
        <p className="text-gray-700 mt-4">
          <strong>Bhavya & Aspire Spaces</strong> stand as two of Hyderabad’s most trusted names in premium real estate development. With a legacy of creating distinguished residential and commercial landmarks, the group continues to set new benchmarks in design excellence, construction quality, and customer satisfaction.
          <br /><br />

          The vision behind <strong>Aspire Spaces Evora</strong> is rooted in crafting vibrant, modern neighborhoods that enhance everyday living. Every project is thoughtfully planned with an emphasis on architectural finesse, long-term sustainability, and community-centered amenities—ensuring residents enjoy a lifestyle that is both elevated and enduring.
          <br /><br />

          Driven by a commitment to transparency, innovation, and timely delivery, <strong>Bhavya–Aspire Spaces</strong> consistently transforms spaces into inspiring environments where families can grow, connect, and thrive.
        </p>

      </div>
    </div>
  );
};

export default StudyAbroad;
