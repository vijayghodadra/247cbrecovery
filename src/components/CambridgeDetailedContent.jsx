import React, { useContext } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  ShieldCheck, 
  MapPin, 
  Compass, 
  Info, 
  Clock, 
  Coins, 
  Gem
} from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';
import './CambridgePage.css';

const CambridgeDetailedContent = ({ onNavigate }) => {
  const { settings } = useContext(SettingsContext);

  const handleAreaClick = (e, path) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div className="cambridge-detailed-container">
      {/* Services List Section */}
      <section className="services-section">
        <h2 className="section-title">Our Premium Roadside & Recovery Services</h2>
        <div className="services-list-grid">
          {/* Service 1 */}
          <div className="service-detail-card glass-panel">
            <div className="service-badge">🚗 Premium Recovery</div>
            <h3>Vehicle Recovery from <span className="price-tag-text">£80</span></h3>
            <p>Professional vehicle recovery anywhere across Cambridge city and county. Science Park, Addenbrooke's, all university colleges, business parks and residential areas covered 24/7. Specialist care for prestige vehicles.</p>
            <ul className="service-bullet-list">
              <li>Cambridge Science Park & Business Park</li>
              <li>Addenbrooke's Hospital & Biomedical Campus</li>
              <li>All Cambridge University colleges</li>
              <li>Marshall Airport & business area</li>
              <li>All Park & Ride sites (Trumpington, Babraham, Milton, Madingley, Newmarket Rd)</li>
              <li>ARM Holdings, AstraZeneca, tech quarter</li>
              <li>Low-profile vehicle safe loading</li>
              <li>Photo documentation at handover</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="service-detail-card glass-panel">
            <div className="service-badge">⚡ Battery Boost</div>
            <h3>Vehicle Jump Start from <span className="price-tag-text">£60 (12V)</span></h3>
            <p>Professional battery boost and testing across Cambridge. Premium 12V service with advanced battery diagnostics for cars. 24V commercial available £100.</p>
            <ul className="service-bullet-list">
              <li>Professional-grade battery boosters & testers</li>
              <li>Science Park & Business Park coverage</li>
              <li>Addenbrooke's Hospital car parks</li>
              <li>Cambridge station & Park & Ride sites</li>
              <li>University college car parks</li>
              <li>Residential streets (Cherry Hinton, Chesterton, Newnham)</li>
              <li>24V commercial vehicle boost available</li>
              <li>Battery replacement recommendations</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="service-detail-card glass-panel">
            <div className="service-badge">🚛 Towing Service</div>
            <h3>Car & Van Towing from <span className="price-tag-text">£140</span></h3>
            <p>Premium towing for all vehicle types across Cambridgeshire. Modern flatbed trucks with specialized equipment for safe, secure transport to your chosen destination.</p>
            <ul className="service-bullet-list">
              <li>EV-safe loading for electric vehicles</li>
              <li>Prestige & luxury vehicle specialists</li>
              <li>Dealer & auction transport available</li>
              <li>Business account setup for Cambridge companies</li>
              <li>Long-distance moves across UK</li>
              <li>Secure strapping & winch recovery</li>
              <li>VAT invoices for business customers</li>
              <li>M11, A14, A10 motorway recovery</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="service-detail-card glass-panel">
            <div className="service-badge">⛽ Fuel Delivery</div>
            <h3>Fuel Delivery & Wrong Fuel</h3>
            <p>Emergency petrol/diesel delivery (5-10L) across Cambridge or recovery to fuel-drain specialists if you've misfuelled your vehicle.</p>
            <ul className="service-bullet-list">
              <li>Cambridge city centre delivery</li>
              <li>M11/A14/A10 motorway safe fuel service</li>
              <li>Science Park & Business Park coverage</li>
              <li>Park & Ride site deliveries</li>
              <li>Wrong fuel recovery & specialist drain</li>
              <li>Fen roads & village coverage</li>
              <li>Quick WhatsApp location sharing</li>
              <li>Professional roadside fuel handling</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="service-detail-card glass-panel">
            <div className="service-badge">🛞 Tyre Assistance</div>
            <h3>Tyre Change & Wheel Assistance</h3>
            <p>Puncture assistance, space-saver fitting, and recovery to premium tyre specialists. Expert help with wheel-nuts and locking nut issues.</p>
            <ul className="service-bullet-list">
              <li>Alloy-safe tools & precision torque finish</li>
              <li>Residential driveway service</li>
              <li>Business park assistance</li>
              <li>Hospital car park service</li>
              <li>Locking wheel nut specialist extraction</li>
              <li>Run-flat tyre expertise</li>
              <li>Recovery to trusted Cambridge tyre fitters</li>
              <li>Evening & weekend fully covered</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="service-detail-card glass-panel">
            <div className="service-badge">🚨 Accident Recovery</div>
            <h3>Accident & Emergency from <span className="price-tag-text">£120</span></h3>
            <p>Professional accident recovery with comprehensive scene safety protocols. Experienced with Cambridge's busy junctions and motorway access points.</p>
            <ul className="service-bullet-list">
              <li>M11 & A14 junction clearance experts</li>
              <li>A10 Cambridge Northern Bypass coordination</li>
              <li>Hills Road & Trumpington Road protocols</li>
              <li>Emergency services liaison</li>
              <li>Comprehensive photo documentation</li>
              <li>Controlled safe removal</li>
              <li>Insurance company coordination</li>
              <li>Secure transport to chosen location</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Local Area Specialists */}
      <section className="areas-specialist-section">
        <h2 className="section-title">📍 Local Cambridge Area Specialists – Expert Knowledge</h2>
        <div className="areas-grid">
          <div className="area-info-card glass-panel">
            <h3>🎓 Cambridge City Centre (CB1 & CB2)</h3>
            <div className="tag-row">
              <span className="area-tag">University Colleges</span>
              <span className="area-tag">Historic Centre</span>
              <span className="area-tag">Railway Station</span>
            </div>
            <p>World-famous university city home to 31 colleges including King's, Trinity, St John's, and Queens'. The magnificent city centre features the iconic King's College Chapel (1446), mathematical Bridge, and the historic Market Square (founded 1201). Cambridge Railway Station serves 12+ million passengers annually with excellent London connections. We cover every college, the entire city centre, Mill Road international quarter, Cherry Hinton residential areas, Brookgate retail park, and the growing CB1 district. Hills Road (A1307) connects to Addenbrooke's Hospital. Perfect knowledge of one-way systems, college parking restrictions, and access protocols.</p>
          </div>

          <div className="area-info-card glass-panel">
            <h3>🏥 Addenbrooke's & Biomedical Campus (CB2)</h3>
            <div className="tag-row">
              <span className="area-tag">Major Hospital</span>
              <span className="area-tag">Research Hub</span>
              <span className="area-tag">AstraZeneca</span>
            </div>
            <p>One of UK's most important biomedical clusters. Addenbrooke's Hospital (Cambridge University Hospitals NHS Foundation Trust) serves 2+ million people across East Anglia. The Cambridge Biomedical Campus includes Royal Papworth Hospital, MRC Laboratory of Molecular Biology (5 Nobel Prizes), AstraZeneca's global R&D headquarters (2,000+ staff), and pharmaceutical research facilities. Excellent access via Hills Road (A1134) and Trumpington Road. Multiple Park & Ride connections (Trumpington, Babraham Road). We provide priority service to medical professionals, researchers, and visitors throughout this critical 380-acre campus.</p>
          </div>

          <div className="area-info-card glass-panel">
            <h3>🔬 Cambridge Science Park & North Cambridge (CB4)</h3>
            <div className="tag-row">
              <span className="area-tag">Tech Quarter</span>
              <span className="area-tag">ARM Holdings</span>
              <span className="area-tag">Innovation</span>
            </div>
            <p>Europe's oldest and most successful science park (established 1970). Home to 150+ companies including ARM Holdings (global chip design leader), Amazon Development Centre, and cutting-edge startups. Total employment 7,000+ in technology, life sciences, and research. Nearby Cambridge Business Park houses Microsoft Research and other tech giants. We also serve Chesterton, King's Hedges, Arbury residential areas, Milton Road (A1309) corridor, and Cambridge North Station. Expert with Milton Interchange (A14), Histon Road approaches, and all business park access protocols. Regular service to professionals working irregular hours across Cambridge's innovation quarter.</p>
          </div>

          <div className="area-info-card glass-panel">
            <h3>🛫 Marshall Airport & East Cambridge (CB5)</h3>
            <div className="tag-row">
              <span className="area-tag">Regional Airport</span>
              <span className="area-tag">Business Aviation</span>
              <span className="area-tag">Retail Parks</span>
            </div>
            <p>Cambridge Airport (Marshall) provides business aviation, flight training, and aerospace engineering (Marshall Aerospace and Defence Group - 1,800+ employees). The CB5 area includes Riverside, Abbey, Barnwell, and Fen Ditton villages. Newmarket Road (A1303) features major retail parks (Beehive Centre, Riverside Retail Park). Excellent coverage of Cambridge North Station, Ditton Lane, and A14 Milton Interchange. We navigate every residential street, business location, and access road throughout East Cambridge with precision.</p>
          </div>

          <div className="area-info-card glass-panel">
            <h3>🌳 West Cambridge & Eddington (CB3)</h3>
            <div className="tag-row">
              <span className="area-tag">University West</span>
              <span className="area-tag">New Quarter</span>
              <span className="area-tag">Colleges</span>
            </div>
            <p>Major university expansion area with world-class research facilities. West Cambridge Site houses physics, engineering, and material science laboratories. Eddington - Cambridge's newest sustainable urban quarter with 3,000+ homes, primary school, supermarket, and health centre. We serve Newnham College, Wolfson College, Churchill College, Girton College, and historic Grantchester village. Madingley Road (A1303) provides M11 access. Perfect knowledge of Coton, Hardwick, and surrounding villages.</p>
          </div>

          <div className="area-info-card glass-panel">
            <h3>♻️ All Cambridge Park & Ride Sites</h3>
            <div className="tag-row">
              <span className="area-tag">Trumpington P&R</span>
              <span className="area-tag">Babraham P&R</span>
              <span className="area-tag">Milton P&R</span>
            </div>
            <p>Complete coverage of all five Cambridge Park & Ride locations: <strong>Trumpington</strong> (1,600 spaces, Guided Busway access, M11 J11), <strong>Babraham Road</strong> (1,458 spaces, closest to Addenbrooke's), <strong>Milton</strong> (950 spaces, A14 access), <strong>Madingley Road</strong> (930 spaces, M11 access), <strong>Newmarket Road</strong> (850 spaces, A14 access). We regularly attend all sites for battery issues, breakdowns, and accident recovery. Expert with busway routes, site access, and security protocols. Free parking at all sites makes them popular breakdown locations - we're there fast.</p>
          </div>
        </div>

        <div className="areas-footer-pills">
          <span className="info-badge">Cambridge Area Specialists</span>
          <span className="info-badge">M11/A14/A10 Motorway Experts</span>
          <span className="info-badge">Science Park Coverage</span>
          <span className="info-badge">University Professional Service</span>
        </div>
      </section>

      {/* Steps to Follow */}
      <section className="steps-section glass-panel">
        <h2>🆘 Broken Down Right Now in Cambridge? Follow These Steps</h2>
        <div className="steps-container">
          <div className="step-row">
            <span className="step-num">1</span>
            <div>
              <h4>Safety First</h4>
              <p>Pull over safely if possible. Hazards on, hi-viz if available. M11/A14/A10 motorway: get to hard shoulder immediately. Science Park: note which building or car park. City centre: specify which college or street.</p>
            </div>
          </div>

          <div className="step-row">
            <span className="step-num">2</span>
            <div>
              <h4>Contact Us Immediately</h4>
              <p>Call <strong>{settings.phone}</strong> or WhatsApp us. Share: exact location (postcode or landmark), nearest cross-street, issue description, vehicle make/model, your callback number. The more detail, the faster we locate you.</p>
            </div>
          </div>

          <div className="step-row">
            <span className="step-num">3</span>
            <div>
              <h4>Share Your Location</h4>
              <p>WhatsApp live location is ideal for Cambridge. Alternatively give us: nearest landmark (Science Park, Addenbrooke's, specific college), street name with postcode, or Park & Ride site. We know every corner of the city and county.</p>
            </div>
          </div>

          <div className="step-row">
            <span className="step-num">4</span>
            <div>
              <h4>What Happens Next</h4>
              <p>
                ✓ Nearest truck dispatched to your Cambridge location<br />
                ✓ ETA confirmed by call/WhatsApp (typically 20-40 mins)<br />
                ✓ Professional driver arrives and assesses situation<br />
                ✓ Recovery or roadside repair attempted<br />
                ✓ Safe transport to your chosen destination<br />
                ✓ Photo documentation provided
              </p>
            </div>
          </div>

          <div className="step-row">
            <span className="step-num">5</span>
            <div>
              <h4>Cambridge Landmarks That Help</h4>
              <p>
                <strong>Tech:</strong> Science Park, Business Park, ARM, AstraZeneca<br />
                <strong>Medical:</strong> Addenbrooke's, Royal Papworth, Biomedical Campus<br />
                <strong>Shopping:</strong> Grafton Centre, Grand Arcade, Lion Yard<br />
                <strong>Transport:</strong> Railway Station, all Park & Ride sites, Cambridge North<br />
                <strong>Roads:</strong> Hills Road, Trumpington Road, Milton Road, Newmarket Road
              </p>
            </div>
          </div>

          <div className="step-row">
            <span className="step-num">6</span>
            <div>
              <h4>Special Cambridge Situations</h4>
              <p>
                <strong>Science Park:</strong> which building or car park number?<br />
                <strong>University:</strong> which college and which entrance?<br />
                <strong>M11 motorway:</strong> which junction (11-14) or mile marker?<br />
                <strong>Park & Ride:</strong> which site (Trumpington, Babraham, Milton, Madingley, Newmarket)?<br />
                <strong>Hospital:</strong> which car park or entrance at Addenbrooke's?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="tables-section">
        <h2 className="section-title">🔧 Common Cambridge Problems & Our Solutions</h2>
        <div className="table-responsive glass-panel">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Problem</th>
                <th>Our Solution</th>
                <th>Typical Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-red">Flat battery at Cambridge Science Park</td>
                <td>12V jump start & battery test</td>
                <td className="text-green">✓ Fixed in 10-20 mins, drive home</td>
              </tr>
              <tr>
                <td className="font-semibold text-red">Won't start at Addenbrooke's car park</td>
                <td>Professional 12V boost, diagnostics</td>
                <td className="text-green">✓ Usually gets you moving immediately</td>
              </tr>
              <tr>
                <td className="font-semibold text-red">Ran out of fuel in Cherry Hinton</td>
                <td>Emergency fuel delivery 5-10L</td>
                <td className="text-green">✓ Enough to reach nearest station</td>
              </tr>
              <tr>
                <td className="font-semibold text-red">Wrong fuel near Park & Ride</td>
                <td>Recovery to specialist drain service</td>
                <td className="text-green">✓ Prevents expensive engine damage</td>
              </tr>
              <tr>
                <td className="font-semibold text-red">Puncture on Hills Road</td>
                <td>On-site wheel change or recovery</td>
                <td className="text-green">✓ Space-saver fitted, drive safely</td>
              </tr>
              <tr>
                <td className="font-semibold text-red">Breakdown in Newnham</td>
                <td>Premium area recovery specialist</td>
                <td className="text-green">✓ Discreet professional collection</td>
              </tr>
              <tr>
                <td className="font-semibold text-red">Commercial van won't start at Business Park</td>
                <td>24V boost for larger vehicles</td>
                <td className="text-green">✓ Back on schedule quickly</td>
              </tr>
              <tr>
                <td className="font-semibold text-red">Accident on A14 Milton Interchange</td>
                <td>Emergency scene safety & recovery</td>
                <td className="text-green">✓ Safe removal, junction cleared</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="tables-section">
        <h2 className="section-title">💷 Transparent Premium Pricing Guide - Cambridge</h2>
        <div className="table-responsive glass-panel">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>From Price</th>
                <th>What's Included</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">Local Vehicle Recovery Cambridge</td>
                <td className="price-emphasis">£80</td>
                <td>Professional loading, secure transport within area, photo proof</td>
              </tr>
              <tr>
                <td className="font-semibold">12V Jump Start & Test</td>
                <td className="price-emphasis">£60</td>
                <td>Battery boost, health check, replacement advice if needed</td>
              </tr>
              <tr>
                <td className="font-semibold">24V Commercial Boost</td>
                <td className="price-emphasis">£100</td>
                <td>Heavy vehicle/van 24V jump start with safety protocol</td>
              </tr>
              <tr>
                <td className="font-semibold">Emergency Fuel Delivery</td>
                <td className="price-emphasis">£75 + Fuel</td>
                <td>5-10L petrol/diesel delivered; wrong-fuel recovery arranged</td>
              </tr>
              <tr>
                <td className="font-semibold">Tyre Change / Wheel Help</td>
                <td className="price-emphasis">£65</td>
                <td>Wheel assistance, locknut help, precision torque-checked fitting</td>
              </tr>
              <tr>
                <td className="font-semibold">Van Recovery Cambridge</td>
                <td className="price-emphasis">£140</td>
                <td>Commercial vehicle recovery, secure loading, professional transport</td>
              </tr>
              <tr>
                <td className="font-semibold">Accident Recovery</td>
                <td className="price-emphasis">£120</td>
                <td>Scene safety, emergency services coordination, safe removal</td>
              </tr>
              <tr>
                <td className="font-semibold">Long Distance UK</td>
                <td className="price-emphasis">Quote</td>
                <td>Dealer/auction delivery, nationwide moves, fixed price given</td>
              </tr>
              <tr>
                <td className="font-semibold">EV Safe Recovery</td>
                <td className="price-emphasis">£120</td>
                <td>Low-clearance ramps, battery protection, specialist handling</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us-section">
        <h2 className="section-title">🏛️ Why Cambridge Drivers Choose Us</h2>
        <div className="choose-us-grid">
          <div className="choose-us-card glass-panel">
            <div className="card-header-icon"><MapPin size={24} /></div>
            <h4>📍 Cambridge Area Specialists</h4>
            <p>We've served Cambridge and Cambridgeshire for over a decade. Every street, every college entrance, every Science Park building, every motorway junction committed to memory. From historic city centre to innovation quarter to fen villages - we know them all comprehensively.</p>
          </div>

          <div className="choose-us-card glass-panel">
            <div className="card-header-icon"><Clock size={24} /></div>
            <h4>⚡ 20-40 Minute Response Cambridge</h4>
            <p>Average ETA across Cambridge: City centre & Science Park 20-30 mins, Ely & Newmarket 30-50 mins, villages 25-45 mins depending on location. We're strategically positioned to serve all Cambridge locations efficiently. Real-time ETA updates via call/WhatsApp keep you informed throughout.</p>
          </div>

          <div className="choose-us-card glass-panel">
            <div className="card-header-icon"><ShieldCheck size={24} /></div>
            <h4>🛡️ Fully Insured & Licensed</h4>
            <p>Comprehensive insurance coverage, £50k goods-in-transit cover, £5m public liability protection. All drivers licensed and background-checked for your security. Professional equipment maintained to highest standards. Your vehicle is in safe hands from collection to delivery across Cambridge.</p>
          </div>

          <div className="choose-us-card glass-panel">
            <div className="card-header-icon"><Coins size={24} /></div>
            <h4>💷 Transparent Cambridge Pricing</h4>
            <p>Clear upfront quotes with no hidden fees. Local Cambridge recovery from £80, jump start from £60. Price confirmed before work begins. VAT invoices for Cambridge business accounts. No surprise charges - what we quote is exactly what you pay.</p>
          </div>

          <div className="choose-us-card glass-panel">
            <div className="card-header-icon"><Gem size={24} /></div>
            <h4>🚗 Prestige Vehicle Specialists</h4>
            <p>Modern flatbed trucks with low-clearance ramps perfect for prestige and electric vehicles popular in Cambridge. Protect expensive battery packs, sports car ground clearance, and sensitive components. Popular with Tesla, Range Rover, BMW, Mercedes, and Porsche owners across the city.</p>
          </div>

          <div className="choose-us-card glass-panel">
            <div className="card-header-icon"><MessageCircle size={24} /></div>
            <h4>📞 Professional Communication</h4>
            <p>Call, WhatsApp, or text - your choice. Real-time updates from dispatch to completion. Photo proof at collection and delivery. Discreet, professional Cambridge drivers who explain everything clearly. No jargon, no confusion throughout the entire process.</p>
          </div>

          <div className="choose-us-card glass-panel">
            <div className="card-header-icon"><Compass size={24} /></div>
            <h4>🔬 Tech Quarter & Science Park Expertise</h4>
            <p>We understand Cambridge's unique innovation ecosystem. Expert with Science Park security, Business Park access protocols, and tech company requirements. Regular service to professionals at ARM, Amazon, Microsoft Research, pharmaceutical companies, and startups.</p>
          </div>

          <div className="choose-us-card glass-panel">
            <div className="card-header-icon"><Info size={24} /></div>
            <h4>🏢 Cambridge Business Support</h4>
            <p>Commercial accounts for local businesses including Science Park companies, Biomedical Campus organizations, university departments: priority response, account payment terms, VAT invoices, fleet support. Perfect for tech businesses, research facilities, commercial operations and fleet managers.</p>
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="postcodes-section glass-panel">
        <h2>🗺️ Complete Cambridge Coverage Map - All CB Postcodes</h2>
        
        <div className="postcode-subgrid">
          <div>
            <h3>📮 Cambridge City Postcodes (CB1-CB5)</h3>
            <p><strong>CB1:</strong> City centre, Railway Station, Mill Road, Cherry Hinton, Queen Edith's, Hills Road, Brookgate</p>
            <p><strong>CB2:</strong> Historic centre, Market Square, Trumpington, Addenbrooke's Hospital, Biomedical Campus, AstraZeneca, Royal Papworth</p>
            <p><strong>CB3:</strong> Newnham, West Cambridge, Eddington, Madingley, Coton, Grantchester, university colleges (Churchill, Girton, Wolfson)</p>
            <p><strong>CB4:</strong> Chesterton, King's Hedges, Arbury, Science Park, Business Park, Milton Road, Cambridge North Station</p>
            <p><strong>CB5:</strong> Riverside, Abbey, Fen Ditton, Barnwell, Marshall Airport, Newmarket Road retail parks, Cambridge North</p>
          </div>

          <div>
            <h3>📮 Extended Cambridgeshire Postcodes</h3>
            <p><strong>CB6-CB7:</strong> Ely, Littleport, Witchford, Soham, Fordham, A10/A142 corridors</p>
            <p><strong>CB8:</strong> Newmarket (racing town), Exning, Red Lodge, Moulton, A14/A1304</p>
            <p><strong>CB9:</strong> Haverhill, Kedington, Withersfield, A1307 corridor</p>
            <p><strong>CB10-CB11:</strong> Saffron Walden, Chesterford, Littlebury, Audley End, M11 J8-10</p>
            <p><strong>CB21-CB25:</strong> Fulbourn, Linton, Sawston, Whittlesford, Duxford, Milton, Waterbeach, Histon, Impington, Cambourne, Bar Hill, Bottisham, Burwell</p>
          </div>
        </div>

        <div className="roads-trains-box">
          <div>
            <h4>🛣️ Major Cambridge Roads</h4>
            <p><strong>M11:</strong> Junctions 11-14 - London to Cambridge motorway</p>
            <p><strong>A14:</strong> Girton to Newmarket - Cambridge Northern Bypass</p>
            <p><strong>A10:</strong> Ely Road - Cambridge Northern Bypass to London</p>
            <p><strong>A1307:</strong> Hills Road & Babraham Road - Addenbrooke's route</p>
            <p><strong>A1134:</strong> Trumpington Road - Biomedical Campus access</p>
            <p><strong>A1303:</strong> Madingley Road & Newmarket Road</p>
            <p><strong>A428:</strong> Cambourne to Bedford route</p>
          </div>

          <div>
            <h4>🚊 Cambridge Transport Hubs</h4>
            <p><strong>Park & Ride:</strong> Trumpington (1,600 spaces), Babraham (1,458), Milton (950), Madingley (930), Newmarket Rd (850)</p>
            <p><strong>Cambridge Station:</strong> 12m+ passengers/year, London 50 mins</p>
            <p><strong>Cambridge North:</strong> Science Park & Business Park access</p>
            <p><strong>Marshall Airport:</strong> Business aviation & aerospace</p>
            <p><strong>Guided Busway:</strong> Trumpington to St Ives via station</p>
          </div>
        </div>
      </section>

      {/* About Cambridge */}
      <section className="about-cambridge-section">
        <h2 className="section-title">📚 About Cambridge & Cambridgeshire</h2>
        <div className="about-subgrid">
          <div className="about-card glass-panel">
            <h3>🎓 World-Famous University City</h3>
            <p>Cambridge is one of the world's great university cities. Founded in 1209, the University of Cambridge is the second-oldest university in the English-speaking world. 31 colleges including King's (1441), Trinity (1546), St John's (1511), and Queens' (1448) create the unique collegiate system. 92 Nobel Laureates associated with Cambridge including Newton, Darwin, Hawking, Watson & Crick. Current student population 24,000+. The magnificent King's College Chapel (1446-1515) is one of Britain's finest examples of late Gothic architecture. The city combines medieval streets, world-class research, and cutting-edge innovation in a compact, walkable centre bisected by the River Cam.</p>
          </div>

          <div className="about-card glass-panel">
            <h3>🔬 Cambridge Innovation Ecosystem</h3>
            <p>Cambridge Science Park (established 1970) is Europe's oldest and most successful science park with 150+ companies employing 7,000+ people. ARM Holdings - headquartered in Cambridge - designs chips that power 95%+ of smartphones globally. Amazon Development Centre, Microsoft Research Cambridge, and hundreds of tech startups create one of Europe's most important innovation clusters. The Cambridge Cluster (Silicon Fen) includes 5,000+ high-tech companies with combined employment 60,000+. Sectors include: software, electronics, biotechnology, and research. The 'Cambridge Phenomenon' has generated more than £2.9 billion in annual revenue.</p>
          </div>

          <div className="about-card glass-panel">
            <h3>🏥 Cambridge Biomedical Campus Excellence</h3>
            <p>The Cambridge Biomedical Campus is the largest centre for medical research and health science in Europe. Addenbrooke's Hospital (Cambridge University Hospitals NHS Foundation Trust) serves 2+ million people across East Anglia with 1,000+ beds and outstanding specialist care. Royal Papworth Hospital is the UK's leading heart and lung hospital. The MRC Laboratory of Molecular Biology has been awarded 13 Nobel Prizes including Watson & Crick's DNA double helix discovery (1962). AstraZeneca's global R&D headquarters employs 2,000+ pharmaceutical researchers. This 380-acre campus represents concentration of research, teaching, clinical excellence, and pharmaceutical development unmatched in the UK.</p>
          </div>

          <div className="about-card glass-panel">
            <h3>🌊 Cambridgeshire Fens Heritage</h3>
            <p>Cambridge sits at the southern edge of the Cambridgeshire Fens - one of England's most distinctive landscapes. Historic fenland drainage projects (17th-19th centuries) created extremely fertile agricultural land. The Cathedral city of Ely (CB6) sits on raised ground 15 miles north - known as the 'Ship of the Fens' with magnificent Norman cathedral (1083). Newmarket (CB8) is global capital of horse racing with historic racecourse and world-famous training grounds. The fens were historically waterlogged and inaccessible - now crossed by straight roads following ancient drainage channels. Market towns like Wisbech, March, and Chatteris serve the agricultural communities.</p>
          </div>

          <div className="about-card glass-panel">
            <h3>🚗 Cambridge Transport Excellence</h3>
            <p>Cambridge is exceptionally well-connected. M11 motorway (opened 1980) provides direct access to London (50 miles, 1 hour). A14 Cambridge Northern Bypass links M1/M6 to ports (Felixstowe). A10 connects to London and King's Lynn. Cambridge Railway Station serves 12+ million passengers annually - London King's Cross 50 minutes, Stansted Airport 30 minutes. Cambridge North Station (opened 2017) serves Science Park area. The revolutionary Cambridgeshire Guided Busway (opened 2011) - one of world's longest - runs 25km from St Ives to Trumpington via Cambridge Station. Five Park & Ride sites with 5,800+ spaces reduce city centre congestion.</p>
          </div>

          <div className="about-card glass-panel">
            <h3>🌳 Quality of Life & Future Growth</h3>
            <p>Cambridge ranks among UK's most desirable cities with excellent schools, green spaces (including Jesus Green, Parker's Piece, The Backs), and superb transport links. Population 145,700+ growing rapidly. Major developments: Eddington (3,000+ homes, sustainable quarter), North East Cambridge (8,000+ homes on brownfield site), Cambridge South Station (opening 2025 serving Biomedical Campus). House prices reflect demand - Cambridge is one of UK's most expensive cities outside London. The unique combination of world-class university, leading-edge technology sector, medical excellence, beautiful historic environment, and transport connections creates exceptional quality of life.</p>
          </div>
        </div>
      </section>

      {/* Links Footer Section */}
      <section className="related-links-section glass-panel">
        <h3>🔗 Related Services & Nearby Areas</h3>
        
        <div className="links-subgrid">
          <div>
            <h4>🗺️ Nearby Cambridgeshire & Suffolk Areas</h4>
            <div className="links-row">
              <a href="/ely-recovery" onClick={(e) => handleAreaClick(e, '/ely-recovery')}>Ely</a>
              <span className="bullet-sep">•</span>
              <a href="/newmarket-recovery" onClick={(e) => handleAreaClick(e, '/newmarket-recovery')}>Newmarket</a>
              <span className="bullet-sep">•</span>
              <a href="/haverhill-recovery" onClick={(e) => handleAreaClick(e, '/haverhill-recovery')}>Haverhill</a>
              <span className="bullet-sep">•</span>
              <a href="/saffron-walden" onClick={(e) => handleAreaClick(e, '/saffron-walden')}>Saffron Walden</a>
              <span className="bullet-sep">•</span>
              <a href="/huntingdon-recovery" onClick={(e) => handleAreaClick(e, '/huntingdon-recovery')}>Huntingdon</a>
            </div>
          </div>

          <div>
            <h4>🏙️ Cambridge City Areas</h4>
            <div className="links-row">
              <a href="/" onClick={(e) => handleAreaClick(e, '/')}>Science Park</a>
              <span className="bullet-sep">•</span>
              <a href="/" onClick={(e) => handleAreaClick(e, '/')}>Addenbrooke's</a>
              <span className="bullet-sep">•</span>
              <a href="/" onClick={(e) => handleAreaClick(e, '/')}>City Centre</a>
              <span className="bullet-sep">•</span>
              <a href="/" onClick={(e) => handleAreaClick(e, '/')}>Cherry Hinton</a>
            </div>
          </div>

          <div>
            <h4>🛠️ All Our Services</h4>
            <div className="links-row">
              <a href="/" onClick={(e) => handleAreaClick(e, '/')}>Breakdown Recovery</a>
              <span className="bullet-sep">•</span>
              <a href="/" onClick={(e) => handleAreaClick(e, '/')}>Vehicle Towing</a>
              <span className="bullet-sep">•</span>
              <a href="/" onClick={(e) => handleAreaClick(e, '/')}>Jump Start Service</a>
            </div>
          </div>

          <div>
            <h4>🛣️ Major Routes</h4>
            <div className="links-row">
              <a href="/" onClick={(e) => handleAreaClick(e, '/')}>M11 Motorway</a>
              <span className="bullet-sep">•</span>
              <a href="/" onClick={(e) => handleAreaClick(e, '/')}>A14 Motorway</a>
              <span className="bullet-sep">•</span>
              <a href="/" onClick={(e) => handleAreaClick(e, '/')}>A10 Motorway</a>
              <span className="bullet-sep">•</span>
              <a href="/" onClick={(e) => handleAreaClick(e, '/')}>Homepage</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CambridgeDetailedContent;
