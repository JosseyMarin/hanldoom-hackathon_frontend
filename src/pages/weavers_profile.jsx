import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFan, faSearch, faMapMarkerAlt, faEnvelope, faPhone, faHistory,
    faStar as solidStar, faChartPie
} from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './weaverProfiles.css';

// Register Chart.js components
Chart.register(...registerables);

const WeaverProfiles = () => {
    // Weaver data
    const weavers = [
        {
            name: "Lakshmi N.",
            location: "Varanasi, Uttar Pradesh",
            company: "Varanasi Silk Collective",
            country: "India",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            email: "lakshmi@varanasi.com",
            phone: "+91 98765 43210",
            whatsapp: "+91 98765 43210",
            sms: "+91 98765 43210",
            profitPercent: 75,
            lossPercent: 10,
            ordersSold: 120,
            experience: "22 years",
            specializes: "Banarasi Silk Sarees",  // New field
            maxOrder: 3000,                      // New field
            region: "Varanasi",                  // New field
            bio: "Master weaver specializing in Banarasi silk sarees with intricate zari work. Trained under renowned weavers of Varanasi.",
            reviews: [
                { author: "Aarti B.", rating: 5, comment: "Lakshmi's silk sarees are absolutely stunning! The craftsmanship is exceptional and the attention to detail is remarkable. I received so many compliments at the wedding I attended." },
                { author: "Neha S.", rating: 4, comment: "Beautiful designs and patterns. The silk quality is top-notch. Delivery took a bit longer than expected but the product was worth the wait." },
                { author: "Rajiv M.", rating: 5, comment: "As a collector of traditional Indian weaves, I must say Lakshmi's work stands out. The gold zari work is authentic and the colors are vibrant. Highly recommended!" }
            ]
        },
        {
            name: "Rajesh K.",
            location: "Kanchipuram, Tamil Nadu",
            company: "Kanchipuram Weavers",
            country: "India",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            email: "rajesh@kanchipuram.com",
            phone: "+91 87654 32109",
            whatsapp: "+91 87654 32109",
            sms: "+91 87654 32109",
            profitPercent: 80,
            lossPercent: 5,
            ordersSold: 150,
            experience: "18 years",
            specializes: "Kanjivaram Silk",      // New field
            maxOrder: 3000,                      // New field
            region: "Kanchipuram",               // New field
            bio: "Expert in traditional Kanjivaram silk sarees with temple border designs passed down through generations.",
            reviews: [
                // ... add reviews if needed
            ]
        },
        // Add other weavers similarly
    ];

    const [selectedWeaver, setSelectedWeaver] = useState(weavers[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const chartRef = useRef(null);

    // Filter weavers based on search term
    const filteredWeavers = weavers.filter(weaver => {
        const term = searchTerm.toLowerCase();
        return (
            weaver.name.toLowerCase().includes(term) ||
            weaver.location.toLowerCase().includes(term) ||
            weaver.company.toLowerCase().includes(term)
        );
    });

    // Initialize chart when selected weaver changes
    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            // Destroy previous chart instance if it exists
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }

            chartRef.current.chart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Profit %', 'Loss %', 'Other %'],
                    datasets: [{
                        data: [
                            selectedWeaver.profitPercent,
                            selectedWeaver.lossPercent,
                            100 - selectedWeaver.profitPercent - selectedWeaver.lossPercent
                        ],
                        backgroundColor: ['#4caf50', '#f44336', '#9e9e9e'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: {
                                    size: 14
                                },
                                padding: 20
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    return context.label + ': ' + context.raw + '%';
                                }
                            }
                        }
                    },
                    cutout: '60%'
                }
            });
        }
    }, [selectedWeaver]);

    return (
        <div className="container">
            <header>
                <div className="logo">
                    <FontAwesomeIcon icon={faFan} className="spin" />
                    <div>
                        <h1>Master Weaver Profiles</h1>
                        <p className="tagline">Celebrating India's textile artisans</p>
                    </div>
                </div>
                <div className="header-stats">
                    <div className="stat">
                        <span>{weavers.length}</span> Master Weavers
                    </div>
                </div>
            </header>

            <div className="content">
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h2>Our Master Weavers</h2>
                        <div className="count">{weavers.length}</div>
                    </div>

                    <div className="search-box">
                        <FontAwesomeIcon icon={faSearch} />
                        <input
                            type="text"
                            placeholder="Search weavers..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <ul className="weaver-list">
                        {filteredWeavers.map((weaver, index) => (
                            <li
                                key={index}
                                className={selectedWeaver.name === weaver.name ? 'active' : ''}
                                onClick={() => setSelectedWeaver(weaver)}
                            >
                                <img src={weaver.image} alt={weaver.name} className="weaver-avatar" />
                                <div className="weaver-summary">
                                    <h3>{weaver.name}</h3>
                                    <p>{weaver.location}</p>
                                    <p>{weaver.company}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="details">
                    <div className="profile-header">
                        <img src={selectedWeaver.image} alt={selectedWeaver.name} className="profile-img" />
                        <div className="profile-info">
                            <h1>{selectedWeaver.name}</h1>
                            <p>{selectedWeaver.company}, {selectedWeaver.location}</p>
                            <p>{selectedWeaver.bio}</p>

                            <div className="contact-info">
                                <div className="contact-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <span>{selectedWeaver.location}, {selectedWeaver.country}</span>
                                </div>
                                <div className="contact-item">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span>{selectedWeaver.email}</span>
                                </div>
                                <div className="contact-item">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <span>{selectedWeaver.phone}</span>
                                </div>
                                <div className="contact-item">
                                    <FontAwesomeIcon icon={faHistory} />
                                    <span>{selectedWeaver.experience} experience</span>
                                </div>
                            </div>

                            <div className="contact-buttons">
                                <button className="contact-btn whatsapp-btn">
                                    <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                                </button>
                                <button className="contact-btn sms-btn">
                                    <FontAwesomeIcon icon={faEnvelope} /> SMS
                                </button>
                                <button className="contact-btn email-btn">
                                    <FontAwesomeIcon icon={faEnvelope} /> Email
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Add this right after the contact-buttons div */}
                    <div className="weaver-specialization">
                        <h3>Specialization & Order Details</h3>
                        <div className="specialization-details">
                            <div className="detail-item">
                                <strong>Specializes in:</strong> {selectedWeaver.specializes}
                            </div>
                            <div className="detail-item">
                                <strong>Max Order Value:</strong> {selectedWeaver.maxOrder.toLocaleString()}
                            </div>
                            <div className="detail-item">
                                <strong>Region:</strong> {selectedWeaver.region}
                            </div>
                        </div>
                    </div>

                    <div className="stats">
                        <div className="stat-card">
                            <h3>Orders Sold</h3>
                            <div className="stat-value">{selectedWeaver.ordersSold}</div>
                        </div>
                        <div className="stat-card">
                            <h3>Profit Percentage</h3>
                            <div className="stat-value">{selectedWeaver.profitPercent}%</div>
                        </div>
                        <div className="stat-card">
                            <h3>Loss Percentage</h3>
                            <div className="stat-value">{selectedWeaver.lossPercent}%</div>
                        </div>
                    </div>

                    <div className="chart-container">
                        <h2><FontAwesomeIcon icon={faChartPie} /> Profit & Loss Analysis</h2>
                        <div className="chart-wrapper">
                            <canvas ref={chartRef} id="profitLossChart"></canvas>
                        </div>
                    </div>

                    <div className="reviews-container">
                        <h2><FontAwesomeIcon icon={solidStar} /> Customer Reviews ({selectedWeaver.reviews.length})</h2>
                        {selectedWeaver.reviews.map((review, index) => (
                            <div className="review" key={index}>
                                <img
                                    src={`https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'women' : 'men'}/${Math.floor(Math.random() * 50)}.jpg`}
                                    className="review-avatar"
                                    alt={review.author}
                                />
                                <div className="review-content">
                                    <div className="review-header">
                                        <div className="review-author">{review.author}</div>
                                        <div className="rating">
                                            {[...Array(5)].map((_, i) => (
                                                <FontAwesomeIcon
                                                    key={i}
                                                    icon={i < review.rating ? solidStar : regularStar}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="review-comment">{review.comment}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <footer>
                <p>&copy; 2023 Weaver Profiles. Celebrating the artisans of India.</p>
            </footer>
        </div>
    );
};

export default WeaverProfiles;