import React, { useContext } from 'react';
import { PhoneCall, MessageCircle, ArrowLeft, MapPin } from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';
import AreasCover from './AreasCover';
import ServicesGrid from './ServicesGrid';
import './AreasWeCoverPage.css';

const AreasWeCoverPage = ({ onNavigateHome, onNavigate }) => {
  const { settings } = useContext(SettingsContext);

  return (
    <div className="areas-we-cover-page animate-fade-in">
      {/* Breadcrumb Navigation */}
      <div className="container breadcrumb-container">
        <button className="back-btn" onClick={onNavigateHome}>
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>
        <span className="breadcrumb-divider">/</span>
        <span className="breadcrumb-current">Areas We Cover Across Cambridge, Cambridgeshire &amp; Huntingdon</span>
      </div>

      <main className="container areas-we-cover-content">
        {/* Hero Section */}
        <section className="areas-hero-card glass-panel">
          <div className="areas-hero-badge">
            <span className="pulse-dot"></span>
            <span>24/7 REGIONAL &amp; NATIONWIDE VEHICLE RECOVERY</span>
          </div>
          <h1 className="areas-hero-title">
            Areas We Cover Across <span className="accent-red">Cambridge &amp; Cambridgeshire &amp; Huntingdon</span>
          </h1>
          <p className="areas-hero-subtitle">
            Fast, reliable emergency roadside recovery, breakdown towing, jump start, flat battery assistance, and vehicle transport 24 hours a day.
          </p>
          <div className="areas-hero-actions">
            <a href={`tel:${settings.phoneRaw}`} className="btn btn-primary btn-lg">
              <PhoneCall size={20} />
              <span>Call Emergency Recovery: {settings.phone}</span>
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${settings.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </section>

        {/* Section 1: Detailed Regional Coverage Content */}
        <section className="glass-panel coverage-text-section">
          <div className="section-title-wrapper">
            <MapPin size={28} className="accent-red" />
            <h2>Areas We Cover Across Cambridgeshire</h2>
          </div>

          <div className="coverage-body-text">
            <p>
              247 CB Vehicle Recovery provides fast, reliable 24/7 vehicle recovery, car recovery,
              van recovery, breakdown recovery, roadside assistance, jump start, flat battery
              assistance, accident recovery and long distance vehicle transport throughout
              Cambridgeshire and surrounding counties.
            </p>

            <p>
              We regularly provide recovery services in Cambridge, Huntingdon, St Ives,
              St Neots, Peterborough, Ely, Wisbech, March, Chatteris, Whittlesey,
              Ramsey, Sawtry, Yaxley, Godmanchester and Soham.
            </p>

            <p>
              Our recovery operators also cover Alconbury, Alconbury Weston, Brampton,
              Buckden, Grafham, Kimbolton, Ellington, Spaldwick, Catworth,
              Great Stukeley, Little Stukeley, Hemingford Grey, Hemingford Abbots,
              Fenstanton, Hilton, Holywell, Bluntisham, Earith, Somersham,
              Warboys, Bury, Upwood, Abbots Ripton, Woodhurst, Old Hurst,
              Pidley, Wyton, Houghton, Hartford, Offord Cluny, Offord D'Arcy,
              Papworth Everard, Cambourne, Bar Hill, Longstanton, Histon,
              Impington, Milton, Waterbeach, Cottenham, Willingham, Swavesey,
              Hardwick, Comberton, Sawston, Fulbourn, Bottisham, Burwell,
              Fordham, Littleport, Witchford, Manea, Doddington, Benwick and Wimblington.
            </p>

            <p>
              Whether you have broken down on the M11, A14, A1, A1(M), A10, A11,
              A47, A428, A421, A141, A1123, A1307, A142, A605, A603,
              A1198 or A505, our recovery team is available 24 hours a day.
              We also attend breakdowns around M11 Junctions 9, 10, 11, 12, 13 and 14.
            </p>

            <p>
              We also provide vehicle recovery services across Bedfordshire,
              Northamptonshire, Lincolnshire, Norfolk, Suffolk, Essex and Hertfordshire.
              Call 247 CB Vehicle Recovery anytime for fast emergency roadside assistance.
            </p>
          </div>
        </section>

        {/* Section 2: Cambridge & Surrounding Villages Coverage */}
        <section className="glass-panel coverage-text-section areas-we-cover">
          <div className="section-title-wrapper">
            <MapPin size={28} className="accent-red" />
            <h2>24/7 Vehicle Recovery Across Cambridge &amp; Surrounding Villages</h2>
          </div>

          <div className="coverage-body-text">
            <p>
              247 CB Vehicle Recovery provides fast, professional and reliable 24/7 car recovery,
              van recovery, breakdown recovery, roadside assistance, jump starts, flat battery
              assistance, accident recovery and long-distance vehicle transport across Cambridge
              and the surrounding areas. Our recovery operators are available day and night to
              help drivers get back on the road quickly and safely.
            </p>

            <p>
              We regularly attend vehicle breakdowns in Cambridge City Centre, Chesterton,
              Arbury, King's Hedges, Orchard Park, Newnham, Trumpington, Romsey,
              Petersfield, Abbey, Cherry Hinton, Coleridge and Queen Edith's.
            </p>

            <p>
              Our recovery services also cover Histon, Impington, Milton, Waterbeach,
              Landbeach, Horningsea, Fen Ditton, Stow Cum Quy, Bottisham, Lode,
              Swaffham Bulbeck, Swaffham Prior, Burwell and Reach.
            </p>

            <p>
              We also provide emergency roadside assistance in Great Shelford,
              Little Shelford, Stapleford, Sawston, Whittlesford, Duxford,
              Ickleton, Pampisford, Babraham, Harston, Haslingfield,
              Hauxton, Newton, Foxton, Fowlmere, Thriplow,
              Great Abington, Little Abington and Hildersham.
            </p>

            <p>
              Our recovery operators regularly attend breakdowns in Coton,
              Madingley, Hardwick, Comberton, Toft, Barton,
              Grantchester, Bourn, Caldecote, Dry Drayton,
              Girton, Oakington, Westwick, Longstanton,
              Northstowe, Bar Hill, Lolworth and Elsworth.
            </p>

            <p>
              We also serve Teversham, Fulbourn, Quy, Fordham,
              Soham, Cottenham, Rampton, Willingham, Over,
              Swavesey, Fen Drayton, Fenstanton, Hilton,
              Papworth Everard, Cambourne, St Ives,
              Huntingdon, St Neots, Ely, Royston,
              Newmarket, Haverhill, Bury St Edmunds and
              Thetford.
            </p>

            <p>
              Whether you need emergency roadside recovery, car recovery, van recovery,
              vehicle transport or breakdown assistance anywhere around Cambridge,
              247 CB Vehicle Recovery is available 24 hours a day, 7 days a week.
              Call us now for fast and reliable assistance.
            </p>
          </div>
        </section>

        {/* Interactive Coverage Component */}
        <AreasCover onNavigate={onNavigate} />

        {/* Services Grid */}
        <ServicesGrid />
      </main>
    </div>
  );
};

export default AreasWeCoverPage;
