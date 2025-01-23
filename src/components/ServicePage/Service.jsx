import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, BookOpen, BarChart3, Building2, Globe2, X } from 'lucide-react';
import NavBar from '../NavBar/NavBar'
const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Tax Services",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      description: "Comprehensive tax solutions for businesses and individuals",
      items: [
        "GST Return Filing - Monthly/Quarterly returns",
        "Annual GST Returns & Compliance",
        "ITR Filing & Tax Planning",
        "International Tax Advisory"
      ],
      details: {
        sections: [
          {
            title: "GST Services",
            content: [
              "Monthly/Quarterly GSTR-1 and GSTR-3B Filing",
              "Annual GST Return Filing (GSTR-9)",
              "GST Registration and Cancellation",
              "Input Tax Credit Reconciliation",
              "GST Audit Assistance",
              "E-way Bill Generation"
            ]
          },
          {
            title: "Income Tax Services",
            content: [
              "Individual and Business Tax Returns",
              "Tax Planning and Consultation",
              "International Tax Advisory",
              "Transfer Pricing Documentation",
              "Tax Audit Support",
              "Advance Tax Calculation"
            ]
          }
        ]
      }
    },
    {
      title: "Business Services",
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      description: "End-to-end business registration and accounting solutions",
      items: [
        "Company Registration - All Types",
        "Professional Accounting Services",
        "Financial Statements & Reporting",
        "Business Compliance Management"
      ],
      details: {
        sections: [
          {
            title: "Company Registration",
            content: [
              "Private Limited Company Registration",
              "Limited Liability Partnership (LLP)",
              "One Person Company Registration",
              "Partnership Firm Registration",
              "MSME Registration",
              "Foreign Company Registration"
            ]
          },
          {
            title: "Accounting Services",
            content: [
              "Bookkeeping and Accounting",
              "Financial Statement Preparation",
              "Bank Reconciliation",
              "MIS Reporting",
              "Payroll Processing",
              "Internal Audits"
            ]
          }
        ]
      }
    },
    {
      title: "Digital Solutions",
      icon: <Globe2 className="w-8 h-8 text-blue-600" />,
      description: "Modern digital and branding solutions for growth",
      items: [
        "Brand Creation & Strategy",
        "Digital Marketing Services",
        "Online Presence Development",
        "Social Media Management"
      ],
      details: {
        sections: [
          {
            title: "Brand Creation",
            content: [
              "Brand Strategy Development",
              "Visual Identity Design",
              "Brand Guidelines Creation",
              "Brand Voice Development",
              "Trademark Registration",
              "Brand Protection Services"
            ]
          },
          {
            title: "Digital Marketing",
            content: [
              "Social Media Marketing",
              "Content Strategy",
              "SEO Optimization",
              "Email Marketing",
              "PPC Advertising",
              "Analytics and Reporting"
            ]
          }
        ]
      }
    },
    {
      title: "Career Services",
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      description: "Professional career development opportunities",
      items: [
        "Job Portal Access",
        "Career Guidance",
        "Industry Opportunities",
        "Professional Development"
      ],
      details: {
        sections: [
          {
            title: "Career Development",
            content: [
              "Resume Building Services",
              "Interview Preparation",
              "Skill Assessment",
              "Career Path Planning",
              "Industry Networking",
              "Professional Certifications"
            ]
          },
          {
            title: "Job Portal",
            content: [
              "Job Listings and Alerts",
              "Company Profile Access",
              "Application Tracking",
              "Employer Connections",
              "Career Resources Library",
              "Professional Development Workshops"
            ]
          }
        ]
      }
    }
  ];

  const ServiceDetails = ({ service, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              {service.icon}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 ml-4 font-smooch-sans">
                {service.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {service.details.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4 font-inter-tight">
                {section.title}
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-jost">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <button
            onClick={onClose}
            className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 font-inter-tight"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
  <>
  <NavBar/>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center font-inter-tight mb-4">
            Our Professional Services
          </h1>
          <p className="text-xl text-gray-600 text-center font-jost mb-12">
            Comprehensive financial and business solutions for your success
          </p>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-4 font-smooch-sans">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 font-jost">
                  {service.description}
                </p>
                
                <ul className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-inter-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => setSelectedService(service)}
                  className="mt-8 flex items-center text-blue-600 hover:text-blue-700 font-semibold font-jost group"
                >
                  Know More 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-smooch-sans">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-8 text-lg font-jost">
            Contact us today for a free consultation about your business needs
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 font-inter-tight">
            Schedule Consultation
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <ServiceDetails
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
    </>
  );
};

export default ServicesPage;