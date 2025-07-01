import React from 'react';
import { Pen, FileText, MoreHorizontal } from 'lucide-react';
import { Trash2, Edit, Calendar, ArrowDown, ArrowUp, AlertCircle } from 'lucide-react';
import { AiFillFilePdf } from 'react-icons/ai'; 
import { useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";

// Define TransactionItem component WITHIN Billing.jsx but OUTSIDE the main Billing function.
// This allows it to access variables and functions defined in Billing's outer scope
// (like typeStyles and icon) if passed as props.
const TransactionItem = ({ type, title, amount, date, typeStyles, icon }) => {
  return (
    <div className="flex justify-between items-center bg-slate-800/50 rounded-xl p-4 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        {/* Safely access icon and typeStyles using the 'type' prop */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${typeStyles[type]}`}>
          {icon[type]}
        </div>
        <div>
          <p className="text-white font-medium">{title}</p>
          <p className="text-gray-400 text-xs">{date}</p>
        </div>
      </div>
      {/* Apply amount styling based on type */}
      <p className={`font-semibold ${type === "out" ? "text-red-400" : "text-emerald-400"}`}>{amount}</p>
    </div>
  );
};


const Billing = () => {
  const { invoiceData, fetchInvoices, transactions, fetchTransactions } = useContext(DataContext);

  const typeStyles = {
    in: "bg-emerald-500 text-emerald-400",
    out: "bg-red-500 text-red-400",
    pending: "bg-gray-500 text-blue-400",
  };

  const icon = {
    in: <ArrowUp size={14} className="text-white" />,
    out: <ArrowDown size={14} className="text-white" />,
    pending: <AlertCircle size={14} className="text-white" />,
  };

  // Renamed formatDate to formatDateTime to match your usage in TransactionItem
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Kept formatDate for invoice section if needed, or remove if formatDateTime replaces it entirely
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  useEffect(() => {
    fetchInvoices();
    fetchTransactions();
  }, []);

  return (
    <div className="w-full min-h-screen text-white p-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Left Side (60%) */}
        <div className="w-full md:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Credit Card */}
            <div className="w-full lg:w-1/2 p-6 rounded-2xl bg-cover bg-center bg-[url('/src/assets/CreditCard.png')] shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-md font-semibold">Vision UI</h2>
                  <p className="text-2xl mt-6 tracking-widest">7812 2139 0823 XXXX</p>
                  <div className="flex gap-6 mt-4 text-sm">
                    <span className="text-gray-300">VALID THRU<br /><strong>05/24</strong></span>
                    <span className="text-gray-300">CVV<br /><strong>09X</strong></span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm" />
              </div>
            </div>

            {/* Credit Balance */}
            <div
              className="w-full lg:w-1/2 p-6 rounded-2xl relative overflow-hidden shadow-lg"
              style={{ background: "linear-gradient(135deg, #051641 0%, #05255c 100%)" }}
            >
              <div className="absolute top-8 right-10 text-white/100 cursor-pointer">
                <MoreHorizontal size={20} />
              </div>
              <div className="bg-cover bg-center bg-[url('/src/assets/BalanceBg.png')] p-6 rounded-2xl">
                <h4 className="text-sm text-gray-400">Credit Balance</h4>
                <p className="text-3xl font-bold mt-2">$25,215</p>
              </div>
              <div>
                <div className="mt-8 flex justify-between items-center text-sm">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">📅</div>
                      <span>Bill & Taxes</span>
                    </div>
                    <span className="text-gray-400 text-xs">Today, 16:36</span>
                  </div>
                  <p className="text-red-400 font-medium">- $154.50</p>
                </div>
              </div>
            </div>
          </div>

          {/* Add Card Section */}
          <div className="p-6 rounded-2xl shadow-lg" style={{ background: "linear-gradient(225deg, #0f4693 0%, #05255c 100%)" }}>
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-lg">Payment Method</h4>
              <button className="text-xs bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full">ADD A NEW CARD</button>
            </div>
            <div className="flex justify-between items-center gap-3 flex-wrap">
              {[1, 2].map((_, i) => (
                <div key={i} className="basis-[calc(50%-6px)] p-[2px] rounded-[1rem] bg-gradient-to-tl from-white via-gray-500 to-white mb-4">
                  <div className="flex justify-between items-center p-4 bg-[#072d69] rounded-[1rem]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-6 bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 rounded-sm" />
                      <p className="tracking-widest">7812 2139 0823 XXXX</p>
                    </div>
                    <Pen size={16} className="text-gray-400 cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side (40%) */}
        <div className="w-full md:w-[40%] p-6 rounded-2xl shadow-lg flex flex-col" style={{ background: "linear-gradient(135deg, #051641 0%, #05255c 100%)" }}>
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-lg text-white">Invoices</h4>
            <button className="text-sm px-4 py-1 bg-blue-500 hover:bg-blue-600 rounded-full text-white">VIEW ALL</button>
          </div>
          <div className="flex flex-col gap-4">
            {invoiceData.slice(0, 5).map((invoice) => (
              <div key={invoice.id} className="flex justify-between items-center border-b border-white/10 pb-2">
                <div>
                  <p className="text-sm font-medium text-white">{formatDate(invoice.created_at)}</p>
                  <p className="text-xs text-gray-400">#{invoice.invoice_id.slice(0, 8).toUpperCase()}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-semibold text-white">${parseFloat(invoice.total).toFixed(2)}</p>
                  <span className="flex items-center text-white cursor-pointer">
                    PDF <AiFillFilePdf size={18} className="ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Billing Info (60%) */}
        <div className="w-full md:w-[60%]">
          <div className="rounded-2xl p-6 h-full" style={{ background: "linear-gradient(330deg, #052e75 50%, #05255c 100%)" }}>
            <h2 className="text-white text-xl font-semibold mb-6">Billing Information</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 backdrop-blur-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-medium text-lg mb-1">Oliver Liam</h3>
                      <p className="text-gray-300 text-sm mb-1">Company Name: Viking Burrito</p>
                      <p className="text-gray-300 text-sm mb-1">Email Address: oliver@burrito.com</p>
                      <p className="text-gray-300 text-sm">VAT Number: FRB1235476</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="text-red-500 hover:text-red-400 text-sm font-medium flex items-center gap-1">
                        <Trash2 size={14} />
                        DELETE
                      </button>
                      <button className="text-gray-400 hover:text-gray-300 text-sm font-medium flex items-center gap-1">
                        <Edit size={14} />
                        EDIT
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section Transactions */}
        <div className="w-full md:w-[40%]">
          <div
            className="rounded-2xl p-6 h-full"
            style={{ background: "linear-gradient(330deg, #052e75 50%, #05255c 100%)" }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-xl font-semibold">Your Transactions</h2>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={16} className="mr-2" />
                Latest Activity
              </div>
            </div>
            <div className="space-y-3">
              {transactions?.slice(0, 6).map((txn) => (
                <TransactionItem
                  key={txn.transaction_id}
                  // It's good practice to ensure 'type' exists or has a default
                  type={txn.type || 'in'} 
                  title={txn.project_title || "Transaction"}
                  // Format amount with '+' or '-' based on type
                  amount={`${txn.type === "out" ? '-' : '+'}$${parseFloat(txn.amount).toFixed(2)}`}
                  // Use the renamed formatDateTime function
                  date={formatDateTime(txn.created_at)}
                  // Pass the style and icon objects down as props
                  typeStyles={typeStyles} 
                  icon={icon} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;