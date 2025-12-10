import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, TrendingUp, Target, BarChart3, Database, FileSpreadsheet, CheckCircle, AlertCircle, ArrowRight, DollarSign, Package, MapPin, Route, Award, Zap, Clock } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const slides = [
    // Slide 1: Title
    {
      title: "Target Distribution System",
      subtitle: "Intelligent Sales Target Allocation Across Your Distribution Network",
      type: "title",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-center space-y-4">
            <Target className="w-32 h-32 mx-auto text-blue-600" />
            <h1 className="text-6xl font-bold text-gray-900">Target Distribution System</h1>
            <p className="text-3xl text-gray-600">Intelligent Sales Target Allocation</p>
            <p className="text-2xl text-gray-500">Powered by Historical Sales Performance</p>
          </div>
          <div className="mt-12 flex items-center space-x-4 text-gray-700">
            <div className="flex items-center space-x-2">
              <Users className="w-8 h-8 text-blue-500" />
              <span className="text-xl">87,000+ Customers</span>
            </div>
            <span className="text-2xl">•</span>
            <div className="flex items-center space-x-2">
              <Package className="w-8 h-8 text-green-500" />
              <span className="text-xl">125 SKUs</span>
            </div>
            <span className="text-2xl">•</span>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-8 h-8 text-purple-500" />
              <span className="text-xl">938M EGP Target</span>
            </div>
          </div>
        </div>
      )
    },

    // Slide 2: The Business Challenge
    {
      title: "The Business Challenge",
      type: "content",
      content: (
        <div className="space-y-8">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r">
            <h3 className="text-2xl font-bold text-red-900 mb-4">Current Pain Points</h3>
            <div className="space-y-3 text-lg text-red-800">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><strong>Manual Target Setting:</strong> Time-consuming and prone to human error</p>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><strong>Unfair Distribution:</strong> Top performers and underperformers treated equally</p>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><strong>No Historical Context:</strong> Past performance not factored into future targets</p>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><strong>Limited Visibility:</strong> Difficult to track and adjust targets mid-cycle</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Our Solution</h3>
            <div className="space-y-3 text-lg text-green-800">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><strong>Automated Intelligence:</strong> System processes 2M+ sales records in minutes</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><strong>Performance-Based:</strong> Targets reflect each customer's actual sales contribution</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><strong>Data-Driven:</strong> Historical trends and patterns guide target allocation</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><strong>Complete Transparency:</strong> View targets at any level - customer, site, route, or channel</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: System Overview
    {
      title: "How The System Works",
      subtitle: "From Company Targets to Individual Customer Goals",
      type: "content",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-5 gap-4 items-center">
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <Database className="w-12 h-12 mx-auto text-blue-600 mb-3" />
              <h4 className="font-bold text-lg">Company Targets</h4>
              <p className="text-sm text-gray-600 mt-2">Strategic goals per product</p>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400 mx-auto" />
            <div className="bg-purple-100 p-6 rounded-lg text-center">
              <BarChart3 className="w-12 h-12 mx-auto text-purple-600 mb-3" />
              <h4 className="font-bold text-lg">Sales Analysis</h4>
              <p className="text-sm text-gray-600 mt-2">Historical performance review</p>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400 mx-auto" />
            <div className="bg-green-100 p-6 rounded-lg text-center">
              <Target className="w-12 h-12 mx-auto text-green-600 mb-3" />
              <h4 className="font-bold text-lg">Smart Distribution</h4>
              <p className="text-sm text-gray-600 mt-2">Allocated by contribution</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Distribution Hierarchy</h3>
            <div className="flex justify-center items-start space-x-4">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-white px-6 py-4 rounded-lg shadow-md border-2 border-blue-500 w-48">
                  <p className="font-bold text-center text-lg">Superchannel</p>
                  <p className="text-sm text-gray-600 text-center mt-1">e.g., Wholesale, Retail</p>
                </div>
                <ArrowRight className="w-6 h-6 rotate-90 text-blue-500" />
                <div className="bg-white px-6 py-4 rounded-lg shadow-md border-2 border-purple-500 w-48">
                  <p className="font-bold text-center text-lg">Channel</p>
                  <p className="text-sm text-gray-600 text-center mt-1">e.g., Traditional, Modern</p>
                </div>
                <ArrowRight className="w-6 h-6 rotate-90 text-purple-500" />
                <div className="bg-white px-6 py-4 rounded-lg shadow-md border-2 border-green-500 w-48">
                  <p className="font-bold text-center text-lg">Site</p>
                  <p className="text-sm text-gray-600 text-center mt-1">e.g., Cairo East, Alex</p>
                </div>
                <ArrowRight className="w-6 h-6 rotate-90 text-green-500" />
                <div className="bg-white px-6 py-4 rounded-lg shadow-md border-2 border-orange-500 w-48">
                  <p className="font-bold text-center text-lg">Customer</p>
                  <p className="text-sm text-gray-600 text-center mt-1">Individual outlets</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300 max-w-md">
                <h4 className="font-bold text-lg mb-3 text-gray-800">At Each Level:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>System calculates each entity's historical contribution</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>Applies that percentage to parent target</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>Ensures total matches exactly (no losses)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>New customers get fixed baseline targets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Input Requirements
    {
      title: "What Goes In",
      subtitle: "Simple Inputs, Powerful Results",
      type: "content",
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <FileSpreadsheet className="w-10 h-10 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-900">Historical Sales Data</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-1">📊</span>
                <div>
                  <p className="font-semibold">Past Performance</p>
                  <p className="text-sm">6-12 months of sales records</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-1">🏪</span>
                <div>
                  <p className="font-semibold">Customer Details</p>
                  <p className="text-sm">ID, name, location, channel</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-1">📦</span>
                <div>
                  <p className="font-semibold">Product Information</p>
                  <p className="text-sm">SKU codes, brands, categories</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-1">💰</span>
                <div>
                  <p className="font-semibold">Sales Values</p>
                  <p className="text-sm">Revenue and units sold</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="w-10 h-10 text-green-600" />
              <h3 className="text-2xl font-bold text-green-900">Company Targets</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold mt-1">🎯</span>
                <div>
                  <p className="font-semibold">Strategic Goals</p>
                  <p className="text-sm">Top-level targets per product</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold mt-1">📈</span>
                <div>
                  <p className="font-semibold">Channel Breakdown</p>
                  <p className="text-sm">Targets by wholesale, retail, etc.</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold mt-1">🏷️</span>
                <div>
                  <p className="font-semibold">Product Pricing</p>
                  <p className="text-sm">Current price list per channel</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold mt-1">✅</span>
                <div>
                  <p className="font-semibold">Must-Sell List</p>
                  <p className="text-sm">Critical products for new customers</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-span-2 bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <div className="flex items-center space-x-3 mb-4">
              <Route className="w-10 h-10 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-900">Route & Customer Master</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-lg mb-2">Customer Locations</p>
                <p className="text-sm text-gray-600">Which site, route, and channel each customer belongs to</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-lg mb-2">Customer Types</p>
                <p className="text-sm text-gray-600">Retailer, wholesaler, distributor classification</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-lg mb-2">Active Status</p>
                <p className="text-sm text-gray-600">Current customers vs. new prospects</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: The Intelligence Engine
    {
      title: "The Intelligence Behind Distribution",
      subtitle: "How We Ensure Fair & Accurate Target Allocation",
      type: "content",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Contribution-Based Distribution
              </h3>
              <div className="bg-white p-4 rounded-lg mb-3">
                <p className="text-sm font-semibold text-gray-700 mb-2">Example:</p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">Product X Target: <span className="font-bold text-blue-700">10,000 units</span></p>
                  <div className="border-l-4 border-blue-500 pl-3 space-y-1">
                    <p>Customer A sold 700 units last year → <span className="font-bold text-green-700">70%</span></p>
                    <p>Customer B sold 200 units last year → <span className="font-bold text-green-700">20%</span></p>
                    <p>Customer C sold 100 units last year → <span className="font-bold text-green-700">10%</span></p>
                  </div>
                  <div className="mt-3 pt-3 border-t-2 border-blue-300">
                    <p className="font-bold">Targets Assigned:</p>
                    <p>Customer A: <span className="text-blue-700 font-bold">7,000 units</span></p>
                    <p>Customer B: <span className="text-blue-700 font-bold">2,000 units</span></p>
                    <p>Customer C: <span className="text-blue-700 font-bold">1,000 units</span></p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">✓ High performers get higher targets - rewarding success!</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                New Customer Integration
              </h3>
              <div className="bg-white p-4 rounded-lg mb-3">
                <p className="text-sm font-semibold text-gray-700 mb-2">Smart Baseline Assignment:</p>
                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-green-500 pl-3">
                    <p className="font-semibold">Must-Sell List (MSL)</p>
                    <p className="text-gray-600">New customers get <span className="font-bold text-green-700">1 unit</span> of each critical product</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-3">
                    <p className="font-semibold">Strategic Products</p>
                    <p className="text-gray-600">Ensures market penetration for key items</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-3">
                    <p className="font-semibold">Automatic Adjustment</p>
                    <p className="text-gray-600">Deducted from existing customers fairly</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">✓ Grow your network without unfair impact!</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg shadow-lg border-2 border-purple-200">
            <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2" />
              Zero-Loss Mathematics
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-purple-600">938M EGP</p>
                <p className="text-sm text-gray-600 mt-2">Company Target Input</p>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-purple-500" />
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-green-600">938M EGP</p>
                <p className="text-sm text-gray-600 mt-2">Sum of All Customer Targets</p>
              </div>
            </div>
            <p className="text-center mt-4 text-gray-700 font-semibold">Every pound is accounted for - no rounding errors, no losses!</p>
          </div>
        </div>
      )
    },

    // Slide 6: Process Flow
    {
      title: "The 7-Step Process",
      subtitle: "From Upload to Actionable Insights in Minutes",
      type: "content",
      content: (
        <div className="space-y-4">
          {[
            {
              num: "1",
              title: "Data Upload",
              desc: "Upload sales history, customer routes, and company targets",
              icon: "📤",
              time: "30 seconds"
            },
            {
              num: "2",
              title: "Data Validation",
              desc: "System checks for missing customers, products, or inconsistencies",
              icon: "✅",
              time: "10 seconds"
            },
            {
              num: "3",
              title: "Product Matching",
              desc: "New products are linked to similar historical performers",
              icon: "🔗",
              time: "User input"
            },
            {
              num: "4",
              title: "Smart Distribution",
              desc: "Targets flow from company level → channels → sites → customers",
              icon: "🎯",
              time: "2-3 minutes"
            },
            {
              num: "5",
              title: "Quality Check",
              desc: "Automated validation ensures all targets match exactly",
              icon: "🔍",
              time: "5 seconds"
            },
            {
              num: "6",
              title: "Results Preview",
              desc: "Review targets across all levels before finalizing",
              icon: "👁️",
              time: "User review"
            },
            {
              num: "7",
              title: "Export & Share",
              desc: "Download reports for sales teams, management, and field staff",
              icon: "📊",
              time: "Instant"
            }
          ].map((step, idx) => (
            <div key={idx} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                {step.num}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-lg font-bold text-gray-900 flex items-center">
                    <span className="mr-2">{step.icon}</span>
                    {step.title}
                  </h4>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                    {step.time}
                  </span>
                </div>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            </div>
          ))}
          
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg text-center mt-6">
            <p className="text-2xl font-bold text-gray-900">
              ⏱️ Total Process Time: <span className="text-green-600">Less than 5 minutes</span>
            </p>
            <p className="text-gray-600 mt-2">vs. days or weeks with manual methods</p>
          </div>
        </div>
      )
    },

    // Slide 7: Conclusion
    {
      title: "Transform Your Sales Strategy Today",
      subtitle: "Revolutionize Your Sales Targeting",
      type: "content",
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-center">Key Benefits</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="w-16 h-16 mx-auto mb-3" />
                <h4 className="text-xl font-bold mb-2">95% Time Savings</h4>
                <p className="text-blue-100">From days to minutes</p>
              </div>
              <div className="text-center">
                <Award className="w-16 h-16 mx-auto mb-3" />
                <h4 className="text-xl font-bold mb-2">100% Accuracy</h4>
                <p className="text-blue-100">Zero mathematical errors</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-16 h-16 mx-auto mb-3" />
                <h4 className="text-xl font-bold mb-2">Fair Distribution</h4>
                <p className="text-blue-100">Performance-based allocation</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                What You Get
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Automated target distribution</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Historical performance analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Multi-level reporting (Customer, Site, Route)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Real-time validation and error checking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Export-ready reports for your team</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                Implementation Timeline
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span className="font-semibold">Setup & Training:</span>
                  <span className="text-blue-700">1 day</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">First Target Run:</span>
                  <span className="text-blue-700">5 minutes</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">ROI Achieved:</span>
                  <span className="text-blue-700">Immediately</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-center text-sm font-semibold text-blue-900">
                  Start saving time and improving accuracy today!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-lg text-center border-2 border-purple-300">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Ready to Transform Your Sales Process?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Join leading organizations using data-driven target allocation
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white text-purple-600 font-bold rounded-lg shadow-lg border-2 border-purple-600 hover:bg-purple-50 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Target className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-xl font-bold text-gray-900">Target Distribution System</h2>
            <p className="text-sm text-gray-600">Presentation Mode</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-600">
            Slide {currentSlide + 1} of {slides.length}
          </span>
          <div className="flex space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlide 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-8">
        <div className="bg-white rounded-lg shadow-xl flex-1 flex flex-col overflow-hidden">
          {/* Slide Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h2 className="text-4xl font-bold mb-2">{currentSlideData.title}</h2>
            {currentSlideData.subtitle && (
              <p className="text-xl text-blue-100">{currentSlideData.subtitle}</p>
            )}
          </div>

          {/* Slide Content */}
          <div className="flex-1 p-8 overflow-y-auto">
            {currentSlideData.content}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="bg-white border-t border-gray-200 p-4 flex justify-between items-center">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
            currentSlide === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Use arrow keys to navigate</p>
          <p className="text-xs text-gray-500">← Previous | Next →</p>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
            currentSlide === slides.length - 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Presentation;