import React, { useState } from 'react';
import { Heart, CreditCard, PiggyBank, Users, Check, Star } from 'lucide-react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [donationType, setDonationType] = useState('one-time');

  const donationAmounts = [25, 50, 100, 250, 500];

  const impactLevels = [
    {
      amount: 25,
      title: "Cultural Supporter",
      description: "Helps sponsor cultural exchange materials",
      icon: Star
    },
    {
      amount: 100,
      title: "Business Catalyst",
      description: "Funds networking event for 5 businesses",
      icon: Users
    },
    {
      amount: 250,
      title: "Education Champion",
      description: "Sponsors one student exchange program",
      icon: PiggyBank
    },
    {
      amount: 500,
      title: "Partnership Pioneer",
      description: "Supports major trade mission initiative",
      icon: Heart
    }
  ];

  const getCurrentImpact = () => {
    return impactLevels.find(level => level.amount <= selectedAmount) || impactLevels[0];
  };

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Support Our <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your contribution helps us build stronger bridges between Austria and Mongolia, fostering partnerships that create lasting economic and cultural impact.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Donation Form */}
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h3>
                
                {/* Donation Type */}
                <div className="mb-6">
                  <div className="flex rounded-lg border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => setDonationType('one-time')}
                      className={`flex-1 py-3 px-4 text-center font-semibold transition-colors ${
                        donationType === 'one-time' 
                          ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      One Time
                    </button>
                    <button
                      onClick={() => setDonationType('monthly')}
                      className={`flex-1 py-3 px-4 text-center font-semibold transition-colors ${
                        donationType === 'monthly' 
                          ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Select Amount (EUR)</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-3 px-4 rounded-lg font-semibold transition-colors ${
                          selectedAmount === amount
                            ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white'
                            : 'border border-gray-200 text-gray-700 hover:border-red-600'
                        }`}
                      >
                        €{amount}
                      </button>
                    ))}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Custom Amount</label>
                    <input
                      type="number"
                      value={selectedAmount}
                      onChange={(e) => setSelectedAmount(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-red-600 cursor-pointer">
                      <input type="radio" name="payment" defaultChecked className="text-red-600" />
                      <CreditCard className="w-5 h-5" />
                      <span>Credit/Debit Card</span>
                    </label>
                    <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-red-600 cursor-pointer">
                      <input type="radio" name="payment" className="text-red-600" />
                      <PiggyBank className="w-5 h-5" />
                      <span>Bank Transfer</span>
                    </label>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Donate €{selectedAmount} {donationType === 'monthly' ? '/month' : ''}</span>
                </button>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  Your donation is secure and helps build stronger Austria-Mongolia partnerships
                </p>
              </div>

              {/* Impact Information */}
              <div className="bg-gradient-to-br from-red-50 to-blue-50 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h3>
                
                {/* Current Impact Level */}
                <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
                  {(() => {
                    const impact = getCurrentImpact();
                    const IconComponent = impact.icon;
                    return (
                      <>
                        <div className="flex items-center space-x-3 mb-4">
                          <IconComponent className="w-8 h-8 text-red-600" />
                          <h4 className="text-lg font-bold text-gray-900">{impact.title}</h4>
                        </div>
                        <p className="text-gray-600">{impact.description}</p>
                      </>
                    );
                  })()}
                </div>

                {/* What Your Donation Does */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">What your donation achieves:</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Facilitates business matchmaking events</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Supports cultural exchange programs</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Funds academic partnerships</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Maintains operational excellence</span>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>🔒 Secure Donation</span>
                    <span>📋 Tax Deductible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;