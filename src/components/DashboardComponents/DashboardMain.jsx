import React, { useContext, useRef, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { MoreHorizontal } from 'lucide-react';

import { useSales, DataProvider, DataContext  } from '../../context/DataContext';

const DashboardMainFunction = () => {
  const { user } = useContext(AuthContext);
  const chartCanvasRef = useRef(null);
  const { totalSales, fetchTotalSales } = useSales();
  const { todayMoney, fetchTodayMoney, orders, fetchOrders } = useContext(DataContext);

  // Define background colors and icons for orders
  const bgColors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500"
  ];

  const icons = ["💰", "🛒", "📦", "🎁", "💳", "🛍️"];
  
  // Function to format date and time
  const formatDateTime = (dateString) => {
    if (!dateString) return "Date not available";
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  useEffect(() => {
    fetchTotalSales();
  }, [fetchTotalSales]);

  const stats = [
    {
      title: "Today's Money",
      value: todayMoney !== null ? `$${parseFloat(todayMoney).toLocaleString()}` : "Loading...",
      change: "+55%",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Today's Users",
      value: "2,300",
      change: "+3%",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      )
    },
    {
      title: "New Clients",
      value: "+3,052",
      change: "-2%",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
        </svg>
      )
    },
    {
      title: "Total Sales",
      value: totalSales !== null ? `$${parseFloat(totalSales).toLocaleString()}` : "Loading...",
      change: "+8%",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      )
    }
  ];

  const projects = [
    {
      id: 1,
      company: "Chakra Soft UI Version",
      icon: "🎯",
      iconBg: "bg-red-500",
      members: [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=24&h=24&fit=crop&crop=face",
      ],
      budget: "$14,000",
      completion: 60,
    },
    {
      id: 2,
      company: "Add Progress Track",
      icon: "📊",
      iconBg: "bg-blue-500",
      members: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=24&h=24&fit=crop&crop=face"
      ],
      budget: "$3,000",
      completion: 10,
    },
    {
      id: 3,
      company: "Fix Platform Errors",
      icon: "🔧",
      iconBg: "bg-gray-600",
      members: [
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=24&h=24&fit=crop&crop=face"
      ],
      budget: "Not set",
      completion: 100,
    },
    {
      id: 4,
      company: "Launch our Mobile App",
      icon: "🚀",
      iconBg: "bg-green-500",
      members: [
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=24&h=24&fit=crop&crop=face",
      ],
      budget: "$32,000",
      completion: 100,
    },
    {
      id: 5,
      company: "Add the New Pricing Page",
      icon: "💎",
      iconBg: "bg-blue-600",
      members: [
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=24&h=24&fit=crop&crop=face",
      ],
      budget: "$400",
      completion: 25,
    },
    {
      id: 6,
      company: "Redesign New Online Shop",
      icon: "🛍️",
      iconBg: "bg-pink-500",
      members: [
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=24&h=24&fit=crop&crop=face"
      ],
      budget: "$7,600",
      completion: 40,
    },
  ];

  const { salesData, loading } = useSales();

  // Monthly sales aggregation with fallback
  const staticMonthlyData = [0, 7000, 3000, 9000, 4000, 8000, 2000, 6000, 10000, 11000, 8500, 9500];
  let monthlyData = Array(12).fill(0);
  let useStaticData = true;

  // --- START DEBUGGING BLOCK ---
  console.log("--- Sales Data Processing Start ---");
  console.log("Loading state:", loading);
  console.log("Raw salesData from context:", salesData);

  if (!loading && salesData) {
    console.log("salesData is loaded and not null/undefined.");

    const hasInvoices = salesData.invoices && Array.isArray(salesData.invoices) && salesData.invoices.length > 0;
    const hasTransactions = salesData.transactions && Array.isArray(salesData.transactions) && salesData.transactions.length > 0;

    if (hasInvoices || hasTransactions) {
      useStaticData = false;
      console.log("Backend data (invoices or transactions) is present. Attempting to process...");

      if (hasInvoices) {
        console.log("Processing Invoices. Count:", salesData.invoices.length);
        salesData.invoices.forEach((invoice, idx) => {
          try {
            const createdAt = invoice.created_at;
            const total = invoice.total;
            console.log(`Invoice ${idx}: created_at="${createdAt}", total="${total}"`);

            if (!createdAt) {
                console.warn(`Invoice ${idx} missing 'created_at'. Skipping.`);
                return;
            }
            if (!total) {
                console.warn(`Invoice ${idx} missing 'total'. Skipping.`);
                return;
            }

            const parts = createdAt.split('/');
            console.log(`Invoice ${idx} created_at parts:`, parts);

            if (parts.length >= 2) {
              const month = parseInt(parts[1], 10) - 1; // Assuming DD/MM/YYYY
              const parsedValue = parseFloat(total);

              console.log(`Invoice ${idx} - Parsed Month: ${month}, Parsed Value: ${parsedValue}`);

              if (isNaN(parsedValue)) {
                  console.warn(`Invoice ${idx}: total "${total}" is not a valid number.`);
                  return;
              }

              if (month >= 0 && month < 12) {
                monthlyData[month] += parsedValue;
                console.log(`Invoice ${idx} - Added ${parsedValue} to month ${month}. Current total for month: ${monthlyData[month]}`);
              } else {
                console.warn(`Invoice ${idx}: Invalid month calculated (${month}). Original created_at: "${createdAt}"`);
              }
            } else {
              console.warn(`Invoice ${idx}: created_at "${createdAt}" does not match DD/MM/YYYY format.`);
            }
          } catch (error) {
            console.error(`Error processing invoice ${idx}:`, error);
          }
        });
      } else {
        console.log("No invoices found or invoices is not an array.");
      }

      if (hasTransactions) {
        console.log("Processing Transactions. Count:", salesData.transactions.length);
        salesData.transactions.forEach((txn, idx) => {
          try {
            const createdAt = txn.created_at;
            const amount = txn.amount;
            console.log(`Transaction ${idx}: created_at="${createdAt}", amount="${amount}"`);

            if (!createdAt) {
                console.warn(`Transaction ${idx} missing 'created_at'. Skipping.`);
                return;
            }
            if (!amount) {
                console.warn(`Transaction ${idx} missing 'amount'. Skipping.`);
                return;
            }

            const parts = createdAt.split('/');
            console.log(`Transaction ${idx} created_at parts:`, parts);

            if (parts.length >= 2) {
              const month = parseInt(parts[1], 10) - 1; // Assuming DD/MM/YYYY
              const parsedValue = parseFloat(amount);

              console.log(`Transaction ${idx} - Parsed Month: ${month}, Parsed Value: ${parsedValue}`);

              if (isNaN(parsedValue)) {
                  console.warn(`Transaction ${idx}: amount "${amount}" is not a valid number.`);
                  return;
              }

              if (month >= 0 && month < 12) {
                monthlyData[month] += parsedValue;
                console.log(`Transaction ${idx} - Added ${parsedValue} to month ${month}. Current total for month: ${monthlyData[month]}`);
              } else {
                console.warn(`Transaction ${idx}: Invalid month calculated (${month}). Original created_at: "${createdAt}"`);
              }
            } else {
              console.warn(`Transaction ${idx}: created_at "${createdAt}" does not match DD/MM/YYYY format.`);
            }
          } catch (error) {
            console.error(`Error processing transaction ${idx}:`, error);
          }
        });
      } else {
        console.log("No transactions found or transactions is not an array.");
      }

      const hasRealDataAfterProcessing = monthlyData.some(value => value > 0);
      console.log('Aggregated monthlyData after processing:', [...monthlyData]); // Spread to avoid reference issues
      console.log('Does aggregated data contain any non-zero values (hasRealDataAfterProcessing)?', hasRealDataAfterProcessing);

      if (!hasRealDataAfterProcessing) {
        useStaticData = true;
        console.log('Decision: Falling back to static data because no real data was successfully processed into monthlyData.');
      } else {
        console.log('Decision: Using real data!');
      }
    } else {
        console.log("salesData.invoices and salesData.transactions are both empty or not arrays. Using static data.");
    }
  } else if (loading) {
      console.log("Still loading sales data...");
  } else {
      console.log("salesData is null/undefined initially. Using static data.");
  }

  if (useStaticData) {
    monthlyData = staticMonthlyData;
    console.log("Final monthlyData used (STATIC):", [...monthlyData]);
  } else {
    console.log("Final monthlyData used (DYNAMIC):", [...monthlyData]);
  }
  console.log("--- Sales Data Processing End ---");
  // --- END DEBUGGING BLOCK ---

  

  // Canvas drawing logic
  useEffect(() => {
    const canvas = chartCanvasRef.current;
    if (!canvas) {
      console.log("Canvas ref is null. Skipping drawing.");
      return;
    }

    const ctx = canvas.getContext('2d');
    const chartWidth = canvas.width;
    const chartHeight = canvas.height;
    const padding = 20;

    // Clear canvas before drawing
    ctx.clearRect(0, 0, chartWidth, chartHeight);

    const maxY = Math.max(...monthlyData, 1000);
    const minY = Math.min(...monthlyData, 0);
    const range = maxY - minY || 1000;

    // Console log the data being used by the chart
    console.log("Chart rendering with monthlyData:", [...monthlyData]);
    console.log(`Chart bounds: minY=${minY}, maxY=${maxY}, range=${range}`);


    const points = monthlyData.map((value, index) => {
      const x = padding + (index / 11) * (chartWidth - 2 * padding);
      const y = chartHeight - padding - ((value - minY) / range) * (chartHeight - 2 * padding);
      return { x, y, value };
    });

    if (points.length < 2 || monthlyData.every(val => val === 0)) { // Added check for all zeros
      ctx.fillStyle = '#06B6D4';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('No chart data available or all zeros', chartWidth / 2, chartHeight / 2);
      console.log("No chart data or all zeros, showing fallback text on canvas.");
      return;
    }

    // Draw area fill
    ctx.beginPath();
    ctx.moveTo(points[0].x, chartHeight - padding); // Start from bottom of first point
    ctx.lineTo(points[0].x, points[0].y); // Move to first point on the line

    // Generate smooth curve for area
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];

      // Control points for cubic bezier
      const cp1x = prev.x + (curr.x - prev.x) * 0.3;
      const cp1y = prev.y;
      const cp2x = curr.x - (curr.x - prev.x) * 0.3;
      const cp2y = curr.y;
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, curr.x, curr.y);
    }

    ctx.lineTo(points[points.length - 1].x, chartHeight - padding); // Line down to bottom of last point
    ctx.closePath();

    // Create gradient for area
    const areaGradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
    areaGradient.addColorStop(0, 'rgba(6, 182, 212, 0.6)'); // #06B6D4
    areaGradient.addColorStop(0.5, 'rgba(8, 145, 178, 0.3)'); // #0891B2
    areaGradient.addColorStop(1, 'rgba(8, 145, 178, 0.1)'); // #0891B2
    ctx.fillStyle = areaGradient;
    ctx.fill();

    // Draw line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    // Generate smooth curve for line
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];

      const cp1x = prev.x + (curr.x - prev.x) * 0.3;
      const cp1y = prev.y;
      const cp2x = curr.x - (curr.x - prev.x) * 0.3;
      const cp2y = curr.y;
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, curr.x, curr.y);
    }

    // Create gradient for line
    const lineGradient = ctx.createLinearGradient(0, 0, chartWidth, 0);
    lineGradient.addColorStop(0, '#06B6D4'); // #06B6D4
    lineGradient.addColorStop(0.5, '#0EA5E9'); // #0EA5E9
    lineGradient.addColorStop(1, '#06B6D4'); // #06B6D4
    ctx.strokeStyle = lineGradient;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = 'rgba(6, 182, 212, 0.3)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 2;
    ctx.stroke();

    // Reset shadow for subsequent drawings
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // Draw data points
    points.forEach(point => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2, false);
      ctx.fillStyle = '#06B6D4';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 2;
      ctx.fill();
      ctx.stroke();
    });

  }, [monthlyData]); // Re-draw chart when monthlyData changes

  return (
    <main className="flex-1 p-6">
      <div className="relative z-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 text-white relative overflow-hidden"
              style={{
                background: 'linear-gradient(to right, #050f2c, #0d204a)'
              }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="space-y-2">
                  <p className="text-blue-200 text-sm font-medium">{stat.title}</p>
                  <div className="flex items-end gap-2">
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <span className={`text-sm font-semibold mb-1 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="bg-blue-500 rounded-xl p-3">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Welcome Section and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 items-stretch">
          {/* Left Segment - Welcome Card with Image */}
          <div
            className="lg:col-span-1 rounded-2xl overflow-hidden relative p-6 text-white flex flex-col justify-between h-full"
            style={{
              backgroundImage: "url('/src/assets/DashboardIntroBg.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bg-black/30 absolute inset-0 z-0" />
            <div className="relative z-10">
              <p className="text-white/70 text-sm mb-1">Welcome back,</p>
              <h2 className="text-white text-3xl font-bold mb-2">
                {user && user.full_name ? user.full_name : 'Guest'}
              </h2>
              <p className="text-white/70 text-sm mb-1">Glad to see you again!</p>
              <p className="text-white/70 text-sm mb-4">Ask me anything.</p>
              <button className="mt-4 flex items-center gap-2 text-sm font-medium bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition">
                Tap to record <span>→</span>
              </button>
            </div>
          </div>

          <div
            className="rounded-2xl p-6 text-white relative flex flex-col justify-between"
            style={{
              background: 'linear-gradient(to bottom, #041131, #081d48)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-lg font-semibold">Referral Tracking</h3>
              <button className="text-white/50 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="5" cy="12" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="19" cy="12" r="2" />
                </svg>
              </button>
            </div>

            <div className="flex justify-between items-center gap-6">
              {/* Left: Metrics */}
              <div className="space-y-4 w-1/2">
                <div className="bg-white/5 px-4 py-3 rounded-xl">
                  <p className="text-white/60 text-sm mb-1">Invited</p>
                  <p className="text-white text-lg font-bold">145 people</p>
                </div>
                <div className="bg-white/5 px-4 py-3 rounded-xl">
                  <p className="text-white/60 text-sm mb-1">Bonus</p>
                  <p className="text-white text-lg font-bold">1,465</p>
                </div>
              </div>

              {/* Right: Circular Progress */}
              <div className="w-60 h-60 relative">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#1e293b"
                    strokeWidth="5"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#10b981"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={`${(2 * Math.PI * 40) * 0.93} ${(2 * Math.PI * 40) * (1 - 0.93)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-white/60 text-sm">Safety</span>
                  <span className="text-white text-3xl font-bold">9.3</span>
                  <span className="text-white/60 text-sm">Total Score</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Sales Overview Chart (now using Canvas) */}
        <div className="p-6 rounded-2xl relative overflow-hidden mb-8" style={{ backgroundImage: 'linear-gradient(to top, #051641, #05255c)' }}>
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full border-t border-blue-300"
                style={{ top: `${20 + i * 13.33}%` }}
              />
            ))}
          </div>

          {/* Header */}
          <div className="relative z-10 mb-6">
            <h2 className="text-white text-lg font-medium mb-2">Sales overview</h2>
            <p className="text-sm">
              <span className="text-green-400">(+5) more</span>
              <span className="text-gray-400"> in 2025</span>
            </p>
          </div>

          {/* Y-axis labels */}
          <div className="absolute left-2 top-20 bottom-20 flex flex-col justify-between text-white text-xs opacity-60 z-10">
            {[...Array(6)].map((_, i) => (
              <span key={i}>{Math.round(Math.max(...monthlyData, 1000) - (Math.max(...monthlyData, 1000) - Math.min(...monthlyData, 0) || 1000) / 5 * i)}</span>
            ))}
          </div>

          {/* Canvas Container */}
          <div className="relative ml-8 mr-4" style={{ height: '250px' }}>
            <canvas
              ref={chartCanvasRef}
              width={800}
              height={200}
              className="absolute inset-0 w-full h-full"
              style={{ overflow: 'visible' }}
            />
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between text-white text-xs opacity-60 mt-4 ml-8 mr-4">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        {/* Projects and Orders */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Projects Section */}
          <div
            className="xl:col-span-2 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            style={{
              background: "linear-gradient(135deg, #051641 0%, #05255c 100%)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-white text-xl font-semibold mb-1">Projects</h2>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">30 done this month</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-white">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1">
              {/* Header */}
              <div className="grid grid-cols-12 gap-4 px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                <div className="col-span-5">Companies</div>
                <div className="col-span-2">Members</div>
                <div className="col-span-2">Budget</div>
                <div className="col-span-3">Completion</div>
              </div>

              {/* Project Rows */}
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="grid grid-cols-12 gap-4 px-4 py-4 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <div className="col-span-5 flex items-center gap-3">
                    <div
                      className={`w-8 h-8 ${project.iconBg} rounded-lg flex items-center justify-center text-white text-sm`}
                    >
                      {project.icon}
                    </div>
                    <span className="text-white font-medium text-sm">{project.company}</span>
                  </div>

                  <div className="col-span-2 flex items-center">
                    <div className="flex -space-x-2">
                      {project.members.map((member, index) => (
                        <img
                          key={index}
                          src={member}
                          alt="Member"
                          className="w-6 h-6 rounded-full border-2 border-blue-800 object-cover"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center">
                    <span className="text-white font-medium text-sm">{project.budget}</span>
                  </div>

                  <div className="col-span-3 flex items-center gap-3">
                    <span className="text-white font-medium text-sm">{project.completion}%</span>
                    <div className="flex-1 bg-black/20 rounded-full h-2">
                      <div
                        className="bg-blue-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Orders Overview Section */}
           <div
      className="backdrop-blur-sm rounded-2xl p-6 border border-white/10"
      style={{
        background: "linear-gradient(135deg, #051641 0%, #05255c 100%)",
      }}
    >
      <div className="mb-6">
        <h2 className="text-white text-xl font-semibold mb-1">Orders overview</h2>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-gray-300 text-sm">+30% this month</span>
        </div>
      </div>

      <div className="space-y-4">
        {orders.slice(0, 6).map((order, i) => (
          <div key={order.id} className="flex items-start gap-3">
            <div
              className={`w-8 h-8 ${bgColors[i % bgColors.length]} rounded-lg flex items-center justify-center text-white text-sm flex-shrink-0`}
            >
              {icons[i % icons.length]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm leading-tight">
                ${order.amount}, {order.description || "New Order"}
              </p>
              <p className="text-gray-400 text-xs mt-1">{formatDateTime(order.created_at)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
      </div>
    </main>
  );
};

const DashboardMain = () => (
  <DataProvider>
    <DashboardMainFunction />
  </DataProvider>
);

export default DashboardMain;
