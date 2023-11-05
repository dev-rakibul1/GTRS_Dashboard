import React from "react";

const Demo2 = () => {
  const items = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "(123) 456-7890",
      date: "Oct 28, 2023",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "(987) 654-3210",
      date: "Oct 27, 2023",
    },
    // Add more items as needed
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-100 p-4">
        <h2 className="text-lg font-semibold">Dashboard List View</h2>
      </div>

      {/* Table Header */}
      <div className="p-4 flex flex-col sm:flex-row font-semibold">
        <div className="w-full sm:w-16">Sl No</div>
        <div className="w-full sm:flex-1">Name</div>
        <div className="w-full sm:flex-1">Email</div>
        <div className="w-full sm:flex-1">Phone</div>
        <div className="w-full sm:flex-1">Date</div>
      </div>

      {/* List Items (Table-Like) */}
      {items.map((item, index) => (
        <div
          key={item.id}
          className="p-4 flex flex-col sm:flex-row border-b border-gray-200"
        >
          <div className="w-full sm:w-16 text-gray-600">#{index + 1}</div>
          <div className="w-full sm:flex-1 text-gray-900 font-semibold">
            {item.name}
          </div>
          <div className="w-full sm:flex-1 text-gray-600">{item.email}</div>
          <div className="w-full sm:flex-1 text-gray-600">{item.phone}</div>
          <div className="w-full sm:flex-1 text-gray-600">{item.date}</div>
        </div>
      ))}
    </div>
  );
};

export default Demo2;
