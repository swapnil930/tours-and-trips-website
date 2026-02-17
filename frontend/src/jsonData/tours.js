const tours = [
  {
    id: "manali-kasol-dharamshala",
    title: "Manali - Kasol - Dharamshala",
    description: " Explore the serene beauty of the Himalayas with our Manali-Kasol-Dharamshala tour.",
    pickUp: "Delhi",
    drop: "Delhi",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
    oldPrice: 16000,
    price: 14499,
    duration: "10D/9N",
    dates: "3rd Oct, 11th Oct",
    batches: 12,
    type: "Group Tour",

    upcomingDates: {
      February: [
        "11 Feb/26 - 19 Feb/26",
        "21 Feb/26 - 28 Feb/26"
      ],
      March: []
    },

    itinerary: [
      "Delhi to Manali Overnight Journey",
      "Manali Local Sightseeing",
      "Manali to Kasol",
      "Kasol to Kheerganga Trek",
      "Kasol to Dharamshala",
      "McLeodganj Sightseeing",
      "Dharamshala to Delhi Return"
    ],

    costing: [
      { type: "Double Sharing", price: "Rs. 14500/-" },
      { type: "Triple Sharing", price: "Rs. 13500/-" }
    ],

    inclusions: [
      "Accommodation",
      "Daily Breakfast & Dinner",
      "Volvo Transfers",
      "Local Sightseeing"
    ],

    exclusions: [
      "Personal Expenses",
      "Adventure Activities",
      "Anything not mentioned in inclusions"
    ],

    gallery: ["/images/manali1.jpg", "/images/manali2.jpg", "/images/manali3.jpg"]
  },

  {
    id: "kashmir",
    title: "Kashmir",
    description: "Where Every View Feels Like a Dream",
    pickUp: "Mumbai",
    drop: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1585506942812-e72b29cef752?auto=format&fit=crop&w=1000&q=80",
    oldPrice: 20000,
    price: 18500,
    duration: "8D/7N",
    dates: "1st Jan, 12th Feb",
    batches: 6,
    type: "Group Tour",

    upcomingDates: {
      February: [
        "11 Feb/26 - 19 Feb/26",
        "21 Feb/26 - 28 Feb/26"
      ],
      March: []
    },


    itinerary: [
      "Arrival in Srinagar",
      "Dal Lake Shikara Ride",
      "Gulmarg Sightseeing",
      "Pahalgam Visit",
      "Sonmarg Excursion",
      "Shopping & Departure"
    ],

    costing: [
      { type: "Double Sharing", price: "Rs. 18500/-" },
      { type: "Triple Sharing", price: "Rs. 17000/-" }
    ],

    inclusions: [
      "Hotel Stay",
      "Breakfast & Dinner",
      "Private Cab",
      "Shikara Ride"
    ],

    exclusions: [
      "Airfare",
      "Gondola Tickets",
      "Personal Expenses"
    ],

    gallery: ["/images/kashmir1.jpg", "/images/kashmir2.jpg"]
  },

  {
    id: "kerala",
    title: "Kerala",
    description: "Where Every View Feels Like a Dream",
    pickUp: "Cochin",
    drop: "Trivandrum",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
    oldPrice: 18000,
    price: 16500,
    duration: "7D/6N",
    dates: "15th Nov, 10th Dec",
    batches: 10,
    type: "Group Tour",

    upcomingDates: {
      February: [
        "11 Feb/26 - 19 Feb/26",
        "21 Feb/26 - 28 Feb/26"
      ],
      March: []
    },


    itinerary: [
      "Arrival at Cochin",
      "Munnar Sightseeing",
      "Thekkady Wildlife Visit",
      "Alleppey Houseboat",
      "Kovalam Beach",
      "Departure"
    ],

    costing: [
      { type: "Double Sharing", price: "Rs. 16500/-" }
    ],

    inclusions: [
      "Houseboat Stay",
      "Breakfast",
      "Private Transfers"
    ],

    exclusions: [
      "Flight Tickets",
      "Entry Fees"
    ],

    gallery: ["/images/kerala1.jpg", "/images/kerala2.jpg"]
  },

  {
    id: "thailand",
    title: "Thailand",
    description: "Experience the vibrant culture and stunning beaches of Thailand with our exclusive tour package.",
    pickUp: "Delhi",
    drop: "Delhi",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    oldPrice: 22000,
    price: 19999,
    duration: "8D/7N",
    dates: "5th Dec, 18th Dec",
    batches: 8,
    type: "Group Tour",

    upcomingDates: {
      February: [
        "11 Feb/26 - 19 Feb/26",
        "21 Feb/26 - 28 Feb/26"
      ],
      March: []
    },


    itinerary: [
      "Arrival in Bangkok",
      "Pattaya City Tour",
      "Coral Island Tour",
      "Bangkok City Tour",
      "Shopping & Departure"
    ],

    costing: [
      { type: "Double Sharing", price: "Rs. 19999/-" }
    ],

    inclusions: [
      "Hotel Stay",
      "Breakfast",
      "Airport Transfers"
    ],

    exclusions: [
      "Visa Fees",
      "Personal Expenses"
    ],

    gallery: ["/images/thailand1.jpg", "/images/thailand2.jpg"]
  },

  {
    id: "goa",
    title: "Goa",
    description: "Experience the vibrant culture and stunning beaches of Goa with our exclusive tour package.",
    pickUp: "Goa",
    drop: "Trivandrum",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    oldPrice: 14000,
    price: 12500,
    duration: "5D/4N",
    dates: "20th Oct, 5th Nov",
    batches: 15,
    type: "Group Tour",

    upcomingDates: {
      February: [
        "11 Feb/26 - 19 Feb/26",
        "21 Feb/26 - 28 Feb/26"
      ],
      March: []
    },


    itinerary: [
      "Arrival in Goa",
      "North Goa Sightseeing",
      "South Goa Sightseeing",
      "Beach Leisure",
      "Departure"
    ],

    costing: [
      { type: "Double Sharing", price: "Rs. 12500/-" }
    ],

    inclusions: [
      "Hotel Stay",
      "Breakfast",
      "Local Transfers"
    ],

    exclusions: [
      "Water Sports",
      "Personal Expenses"
    ],

    gallery: ["/images/goa1.jpg", "/images/goa2.jpg"]
  }
];

export default tours;
