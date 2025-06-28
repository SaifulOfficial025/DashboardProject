import React from 'react';
import { Pen, FileText, MoreHorizontal } from 'lucide-react';
import { Trash2, Edit, Calendar, ArrowDown, ArrowUp, AlertCircle } from 'lucide-react';
import { AiFillFilePdf } from 'react-icons/ai'; 

const Billing = () => {
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
            <h4 className="font-semibold text-lg">Invoices</h4>
            <button className="text-sm px-4 py-1 bg-blue-500 hover:bg-blue-600 rounded-full">VIEW ALL</button>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { date: "March, 01, 2020", id: "#MS-415646", amount: "$180" },
              { date: "February, 10, 2021", id: "#RV-126749", amount: "$250" },
              { date: "April, 05, 2020", id: "#FB-212562", amount: "$560" },
              { date: "June, 25, 2019", id: "#QW-103578", amount: "$120" },
              { date: "March, 01, 2019", id: "#AR-803481", amount: "$300" }
            ].map((invoice, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                <div>
                  <p className="text-sm font-medium">{invoice.date}</p>
                  <p className="text-xs text-gray-400">{invoice.id}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-semibold">{invoice.amount}</p>
                  <span className='flex items-center'>PDF <AiFillFilePdf size={18} className="text-white-500 cursor-pointer" /></span>
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

        {/* Transactions (40%) */}
        <div className="w-full md:w-[40%]">
          <div className="rounded-2xl p-6 h-full" style={{ background: "linear-gradient(330deg, #052e75 50%, #05255c 100%)" }}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-xl font-semibold">Your Transactions</h2>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={16} className="mr-2" />
                23 - 30 March 2020
              </div>
            </div>
            {/* Transactions */}
            <div className="mb-6">
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-4">NEWEST</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                      <ArrowDown size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Netflix</p>
                      <p className="text-gray-400 text-sm">27 March 2020, at 12:30 PM</p>
                    </div>
                  </div>
                  <span className="text-red-400 font-medium">-$2500</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                      <ArrowUp size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Apple</p>
                      <p className="text-gray-400 text-sm">27 March 2020, at 12:30 PM</p>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-medium">+$2500</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-4">YESTERDAY</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                      <ArrowUp size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Stripe</p>
                      <p className="text-gray-400 text-sm">26 March 2020, at 13:45 PM</p>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-medium">+$800</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                      <ArrowUp size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">HubSpot</p>
                      <p className="text-gray-400 text-sm">26 March 2020, at 12:30 PM</p>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-medium">+$1700</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center mr-3">
                      <AlertCircle size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Webflow</p>
                      <p className="text-gray-400 text-sm">26 March 2020, at 05:00 AM</p>
                    </div>
                  </div>
                  <span className="text-blue-400 font-medium">Pending</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                      <ArrowDown size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Microsoft</p>
                      <p className="text-gray-400 text-sm">25 March 2020, at 16:30 PM</p>
                    </div>
                  </div>
                  <span className="text-red-400 font-medium">-$987</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
