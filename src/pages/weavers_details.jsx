import React, { useState, useMemo } from 'react';
import { FaTshirt, FaUsers, FaSearch, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const WeaversDeatils = () => {
  // State for filter sections
  const [activeFilters, setActiveFilters] = useState({
    region: true,
    fabric: false,
    range: false
  });

  // State for modal
  const [modalOpen, setModalOpen] = useState(false);
  const [currentWeaver, setCurrentWeaver] = useState(null);
  
  // State for search
  const [searchQuery, setSearchQuery] = useState('');

  // State for active filters
  const [selectedFilters, setSelectedFilters] = useState({
    region: [],
    fabric: [],
    minValue: 0,
    maxValue: 4000
  });

  // Weaver data - memoized to prevent recreation on every render
  const allWeavers = useMemo(() => [
    {
      id: 'weaver1',
      name: 'Varanasi Silk Collective',
      location: 'Varanasi, Uttar Pradesh',
      specialty: 'Banarasi Silk Sarees',
      fabricType: 'Silk',
      maxOrder: 3000,
      logo: 'varanasiSilk',
      image: 'varanasiSilk',
      description: 'The Varanasi Silk Collective is a group of 50 traditional weavers preserving the ancient art of Banarasi silk weaving. With generations of experience, they create exquisite silk sarees using pure gold and silver zari work. Each piece takes 15-30 days to complete, showcasing intricate Mughal-inspired patterns.',
      members: '50+',
      experience: '3 Gen',
      products: '200+'
    },
    {
      id: 'weaver2',
      name: 'Kanchipuram Weavers',
      location: 'Kanchipuram, Tamil Nadu',
      specialty: 'Kanjivaram Silk',
      fabricType: 'Silk',
      maxOrder: 3000,
      logo: 'placeholder/150x100?text=Kanchipuram',
      image: 'placeholder/300x300?text=Kanchipuram+Weavers',
      description: 'The Kanchipuram Weavers group represents 35 families who have been weaving the famous Kanjivaram silk sarees for generations. Known for their durability and rich colors, these sarees feature traditional temple borders and checks patterns woven with pure silk and zari.',
      members: '35+',
      experience: '4 Gen',
      products: '150+'
    },
    {
      id: 'weaver3',
      name: 'Pochampally Ikat Co-op',
      location: 'Pochampally, Telangana',
      specialty: 'Ikat Weaving',
      fabricType: 'Cotton',
      maxOrder: 2000,
      logo: 'placeholder/150x100?text=Pochampally',
      image: 'placeholder/300x300?text=Pochampally+Weavers',
      description: 'This cooperative of 80 weavers specializes in the intricate Ikat dyeing and weaving technique unique to Pochampally. Their geometric patterns and vibrant colors are achieved through a complex process of tying and dyeing the yarn before weaving.',
      members: '80+',
      experience: '2 Gen',
      products: '300+'
    },
    {
      id: 'weaver4',
      name: 'Chanderi Weavers',
      location: 'Chanderi, MP',
      specialty: 'Chanderi Cotton',
      fabricType: 'Cotton',
      maxOrder: 1000,
      logo: 'placeholder/150x100?text=Chanderi',
      image: 'placeholder/300x300?text=Chanderi+Weavers',
      description: 'Chanderi weavers are known for their lightweight, sheer cotton fabrics with delicate zari work. The traditional motifs include peacocks, florals, and geometric designs woven with fine cotton and silk yarns.',
      members: '45+',
      experience: '3 Gen',
      products: '180+'
    },
    {
      id: 'weaver5',
      name: 'Gujarat Khadi Gramodyog',
      location: 'Ahmedabad, Gujarat',
      specialty: 'Handspun Khadi',
      fabricType: 'Khadi',
      maxOrder: 4000,
      logo: 'placeholder/150x100?text=Khadi',
      image: 'placeholder/300x300?text=Khadi+Weavers',
      description: 'This collective promotes the Gandhian ideal of self-reliance through handspun and handwoven khadi. Their products range from rugged workwear to fine muslin, all made with organic cotton and natural dyes.',
      members: '120+',
      experience: '5 Gen',
      products: '250+'
    },
    {
      id: 'weaver6',
      name: 'Kashmir Artisan Collective',
      location: 'Srinagar, Kashmir',
      specialty: 'Pashmina Shawls',
      fabricType: 'Wool',
      maxOrder: 1000,
      logo: 'placeholder/150x100?text=Kashmiri',
      image: 'KashmirArtisan',
      description: 'Specializing in luxurious pashmina and cashmere shawls, this collective maintains centuries-old techniques of hand spinning and weaving. Their products feature intricate kani and sozni embroidery work.',
      members: '60+',
      experience: '4 Gen',
      products: '150+'
    }
  ], []);

  // Handle filter selection
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => {
      const newFilters = {...prev};
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
      } else {
        newFilters[filterType] = [...newFilters[filterType], value];
      }
      return newFilters;
    });
  };

  // Handle range filter change
  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters(prev => ({
      ...prev,
      [name]: parseInt(value)
    }));
  };

  // Filter weavers based on search query and selected filters
  const weavers = useMemo(() => {
    let filteredWeavers = [...allWeavers];
    
    // WeaversDeatilslyly search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredWeavers = filteredWeavers.filter(weaver => 
        weaver.name.toLowerCase().includes(query) ||
        weaver.location.toLowerCase().includes(query) ||
        weaver.specialty.toLowerCase().includes(query)
      );
    }
    
    // WeaversDeatilslyly region filter
    if (selectedFilters.region.length > 0) {
      filteredWeavers = filteredWeavers.filter(weaver => 
        selectedFilters.region.some(region => 
          weaver.location.toLowerCase().includes(region.toLowerCase())
        )
      );
    }
    
    // WeaversDeatilslyly fabric filter
    if (selectedFilters.fabric.length > 0) {
      filteredWeavers = filteredWeavers.filter(weaver => 
        selectedFilters.fabric.includes(weaver.fabricType)
      );
    }
    
    // WeaversDeatilslyly range filter
    filteredWeavers = filteredWeavers.filter(weaver => 
      weaver.maxOrder >= selectedFilters.minValue && 
      weaver.maxOrder <= selectedFilters.maxValue
    );
    
    return filteredWeavers;
  }, [allWeavers, searchQuery, selectedFilters]);

  // Toggle filter section
  const toggleFilter = (filter) => {
    setActiveFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  // Open weaver modal
  const openWeaverModal = (weaverId) => {
    const weaver = weavers.find(w => w.id === weaverId);
    setCurrentWeaver(weaver);
    setModalOpen(true);
  };

  // Close weaver modal
  const closeWeaverModal = () => {
    setModalOpen(false);
    setCurrentWeaver(null);
  };

  return (
    <div className="WeaversDeatilsly">
      {/* CSS Styles */}
      <style>{`
        :root {
          --primary-color: #f1eae3;
          --secondary-color: #166088;
          --accent-color: #4fc3f7;
          --light-color: #f8f9fa;
          --dark-color: #343a40;
          --success-color: #28a745;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
          background-color: #fffcf8;
          color: #333;
          line-height: 1.6;
        }

        /* Navigation Bar */
        .navbar {
          background-color: var(--primary-color);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .logo {
          color: black;
          font-size: 1.8rem;
          font-weight: bold;
          display: flex;
          align-items: center;
        }

        .logo .icon {
          margin-right: 10px;
          font-size: 1.5rem;
        }

        .nav-links {
          display: flex;
          list-style: none;
        }

        .nav-links li {
          margin-left: 2rem;
        }

        .nav-button {
          background: none;
          border: none;
          color: black;
          cursor: pointer;
          font: inherit;
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
        }

        .nav-button:hover {
          color: var(--accent-color);
        }

        .nav-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--accent-color);
          transition: width 0.3s;
        }

        .nav-button:hover::after {
          width: 100%;
        }

        /* Main Content Container */
        .main-container {
          display: flex;
          min-height: calc(100vh - 72px);
        }

        /* Filter Sidebar */
        .filter-sidebar {
          width: 280px;
          padding: 1.5rem;
          background-color: white;
          box-shadow: 2px 0 5px rgba(0,0,0,0.1);
          position: sticky;
          top: 72px;
          height: calc(100vh - 72px);
          overflow-y: auto;
        }

        .filter-group {
          margin-bottom: 1.5rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 1rem;
        }

        .filter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          padding: 0.5rem 0;
        }

        .filter-header h3 {
          font-size: 1rem;
          color: var(--dark-color);
        }

        .filter-options {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }

        .filter-group.active .filter-options {
          max-height: 500px;
          padding-top: 0.5rem;
        }

        .filter-option {
          margin-bottom: 0.5rem;
        }

        .filter-option label {
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .filter-option input {
          margin-right: 0.5rem;
        }

        .range-filter {
          margin-top: 1rem;
        }

        .range-inputs {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .range-inputs input {
          width: 100%;
          padding: 0.3rem;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        /* Content Area */
        .content-area {
          flex: 1;
          padding: 2rem;
        }

        /* Search Bar */
        .search-bar {
          display: flex;
          margin-bottom: 1.5rem;
          height: 40px;
        }

        .search-bar input {
          flex: 1;
          padding: 0.5rem 1rem;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
          font-size: 0.9rem;
          outline: none;
          height: 100%;
        }

        .search-bar button {
          background-color: var(--primary-color);
          color: white;
          border: none;
          padding: 0 1rem;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
          transition: background-color 0.3s;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .search-bar button:hover {
          background-color: red;
        }

        /* Weaver Companies Section */
        .weaver-companies {
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: red;
          display: flex;
          align-items: center;
        }

        .section-title svg {
          margin-right: 10px;
        }

        .companies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .company-card {
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }

        .company-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .company-logo {
          height: 120px;
          background-color: #eee;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .company-logo img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .company-info {
          padding: 1rem;
        }

        .company-name {
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--dark-color);
        }

        .company-location {
          color: var(--secondary-color);
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
        }

        .company-location svg {
          margin-right: 5px;
          font-size: 0.7rem;
        }

        .company-specialty {
          font-size: 0.8rem;
          color: #666;
        }

        /* Weaver Detail Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0.3s;
        }

        .modal-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .modal-container {
          background-color: white;
          border-radius: 8px;
          width: 90%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          transform: translateY(20px);
          transition: transform 0.3s;
        }

        .modal-overlay.active .modal-container {
          transform: translateY(0);
        }

        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-title {
          font-size: 1.5rem;
          color: var(--secondary-color);
        }

        .close-modal {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #999;
        }

        .modal-content {
          padding: 1.5rem;
        }

        .weaver-profile {
          display: flex;
          margin-bottom: 2rem;
        }

        .weaver-image {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 1.5rem;
          flex-shrink: 0;
        }

        .weaver-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .weaver-bio h3 {
          margin-bottom: 0.5rem;
          color: var(--dark-color);
        }

        .weaver-location {
          color: var(--secondary-color);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }

        .weaver-location svg {
          margin-right: 5px;
        }

        .weaver-description {
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .weaver-stats {
          display: flex;
          gap: 1rem;
        }

        .stat-item {
          background-color: var(--light-color);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          text-align: center;
        }

        .stat-value {
          font-weight: bold;
          color: var(--primary-color);
        }

        .stat-label {
          font-size: 0.8rem;
          color: #666;
        }

        /* Responsive adjustments */
        @media (max-width: 992px) {
          .main-container {
            flex-direction: column;
          }
          
          .filter-sidebar {
            width: 100%;
            position: static;
            height: auto;
            margin-bottom: 1rem;
          }
          
          .companies-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            padding: 1rem;
          }
          
          .nav-links {
            margin-top: 1rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .nav-links li {
            margin: 0.5rem;
          }
          
          .weaver-profile {
            flex-direction: column;
          }
          
          .weaver-image {
            margin-right: 0;
            margin-bottom: 1rem;
          }
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <FaTshirt className="icon" />
          Handloom 
        </div>
        <ul className="nav-links">
          <li><button className="nav-button">Home</button></li>
          <li><button className="nav-button">About</button></li>
          <li><button className="nav-button">Weavers</button></li>
          <li><button className="nav-button">Products</button></li>
          <li><button className="nav-button">Orders</button></li>
        </ul>
      </nav>

      <div className="main-container">
        {/* Filter Sidebar */}
        <div className="filter-sidebar">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search weavers..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button><FaSearch /></button>
          </div>
          
          <div className={`filter-group ${activeFilters.region ? 'active' : ''}`}>
            <div className="filter-header" onClick={() => toggleFilter('region')}>
              <h3>Region</h3>
              {activeFilters.region ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className="filter-options">
              <div className="filter-option">
                <label>
                  <input 
                    type="checkbox" 
                    checked={selectedFilters.region.length === 0}
                    onChange={() => setSelectedFilters(prev => ({...prev, region: []}))}
                  /> All Regions
                </label>
              </div>
              <div className="filter-option">
                <label>
                  <input 
                    type="checkbox" 
                    checked={selectedFilters.region.includes('Varanasi')}
                    onChange={() => handleFilterChange('region', 'Varanasi')}
                  /> Varanasi
                </label>
              </div>
              <div className="filter-option">
                <label>
                  <input 
                    type="checkbox" 
                    checked={selectedFilters.region.includes('Kanchipuram')}
                    onChange={() => handleFilterChange('region', 'Kanchipuram')}
                  /> Kanchipuram
                </label>
              </div>
              <div className="filter-option">
                <label>
                  <input 
                    type="checkbox" 
                    checked={selectedFilters.region.includes('Pochampally')}
                    onChange={() => handleFilterChange('region', 'Pochampally')}
                  /> Pochampally
                </label>
              </div>
              <div className="filter-option">
                <label>
                  <input 
                    type="checkbox" 
                    checked={selectedFilters.region.includes('Chanderi')}
                    onChange={() => handleFilterChange('region', 'Chanderi')}
                  /> Chanderi
                </label>
              </div>
            </div>
          </div>
          
          <div className={`filter-group ${activeFilters.fabric ? 'active' : ''}`}>
            <div className="filter-header" onClick={() => toggleFilter('fabric')}>
              <h3>Fabric Type</h3>
              {activeFilters.fabric ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className="filter-options">
              <div className="filter-option">
                <label>
                  <input 
                    type="checkbox" 
                    checked={selectedFilters.fabric.length === 0}
                    onChange={() => setSelectedFilters(prev => ({...prev, fabric: []}))}
                  /> All Fabrics
                </label>
              </div>
              <div className="filter-option">
                <label>
                  <input 
                    type="checkbox" 
                    checked={selectedFilters.fabric.includes('Silk')}
                    onChange={() => handleFilterChange('fabric', 'Silk')}
                  /> Silk
                </label>
              </div>
              <div className="filter-option">
                <label>
                  <input 
                    type="checkbox" 
                    checked={selectedFilters.fabric.includes('Cotton')}
                    onChange={() => handleFilterChange('fabric', 'Cotton')}
                  /> Cotton
                </label>
              </div>
              <div className="filter-option">
                <label>
                  <input 
                    type="checkbox" 
                    checked={selectedFilters.fabric.includes('Wool')}
                    onChange={() => handleFilterChange('fabric', 'Wool')}
                  /> Wool
                </label>
              </div>
              <div className="filter-option">
                <label>
                  <input 
                    type="checkbox" 
                    checked={selectedFilters.fabric.includes('Khadi')}
                    onChange={() => handleFilterChange('fabric', 'Khadi')}
                  /> Khadi
                </label>
              </div>
            </div>
          </div>
          
          <div className={`filter-group ${activeFilters.range ? 'active' : ''}`}>
            <div className="filter-header" onClick={() => toggleFilter('range')}>
              <h3>Max Order Value </h3>
              {activeFilters.range ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className="filter-options">
              <div className="range-filter">
                <div className="range-inputs">
                  <div>
                    <label>Min</label>
                    <input 
                      type="number" 
                      name="minValue"
                      value={selectedFilters.minValue}
                      onChange={handleRangeChange}
                      min="0"
                      max="4000"
                    />
                  </div>
                  <div>
                    <label>Max</label>
                    <input 
                      type="number" 
                      name="maxValue"
                      value={selectedFilters.maxValue}
                      onChange={handleRangeChange}
                      min="0"
                      max="4000"
                    />
                  </div>
                </div>
                <div style={{marginTop: '1rem'}}>
                  Current range: {selectedFilters.minValue} - {selectedFilters.maxValue}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="content-area">
          <div className="weaver-companies">
            <h2 className="section-title">
              <FaUsers />
              Weaver Companies 
              {searchQuery && <span style={{fontSize: '1rem', marginLeft: '1rem'}}>Showing results for "{searchQuery}"</span>}
            </h2>
            <div className="companies-grid">
              {weavers.length > 0 ? (
                weavers.map(weaver => (
                  <div key={weaver.id} className="company-card" onClick={() => openWeaverModal(weaver.id)}>
                    <div className="company-logo">
                      <img src={weaver.logo} alt={weaver.name} />
                    </div>
                    <div className="company-info">
                      <h3 className="company-name">{weaver.name}</h3>
                      <p className="company-location">
                        <FaMapMarkerAlt />
                        {weaver.location.split(',')[0]}
                      </p>
                      <p className="company-specialty">Specializes: {weaver.specialty}</p>
                      <p className="company-max-order">Max Order: {weaver.maxOrder}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No weavers found matching your search.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Weaver Detail Modal */}
      {modalOpen && currentWeaver && (
        <div className="modal-overlay active" onClick={closeWeaverModal}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Weaver Collective Details</h2>
              <button className="close-modal" onClick={closeWeaverModal}>&times;</button>
            </div>
            <div className="modal-content">
              <div className="weaver-profile">
                <div className="weaver-image">
                  <img src={currentWeaver.image} alt={currentWeaver.name} />
                </div>
                <div className="weaver-bio">
                  <h3>{currentWeaver.name}</h3>
                  <p className="weaver-location">
                    <FaMapMarkerAlt />
                    {currentWeaver.location}
                  </p>
                  <p className="weaver-description">{currentWeaver.description}</p>
                  <div className="weaver-stats">
                    <div className="stat-item">
                      <div className="stat-value">{currentWeaver.members}</div>
                      <div className="stat-label">Weavers</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">{currentWeaver.experience}</div>
                      <div className="stat-label">Experience</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">{currentWeaver.products}</div>
                      <div className="stat-label">Designs</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">₹{currentWeaver.maxOrder}</div>
                      <div className="stat-label">Max Order Value</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeaversDeatils;