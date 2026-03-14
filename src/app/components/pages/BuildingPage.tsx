import { ImageWithFallback } from '../figma/ImageWithFallback';
import { DiamondShape } from '../design-system/DiamondShape';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

function ServiceCard({ title, description, imageUrl }: ServiceCardProps) {
  return (
    <div className="border border-[#822C1E] relative">
      {/* Title Bar */}
      <div className="bg-[#822C1E] px-4 py-2">
        <h3 
          className="text-white uppercase"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '18px',
          }}
        >
          {title}
        </h3>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
        {/* Image */}
        <div className="w-full md:w-[142px] h-[200px] md:h-auto bg-black overflow-hidden">
          <ImageWithFallback 
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="p-6">
          <p 
            className="text-black"
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '9px',
              fontWeight: 400,
              lineHeight: '13px',
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function BuildingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Container - A4 proportions */}
      <div className="max-w-[595px] mx-auto bg-white relative overflow-hidden">
        {/* Top Left Image */}
        <div className="absolute top-0 left-0 w-[171px] h-[301px] bg-black overflow-hidden">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1723367194881-fe2e53534170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzIwMDM2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Right Diamond */}
        <div className="absolute top-4 right-0 w-[140px] h-[140px] bg-[#822C1E]" />

        {/* Main Content */}
        <div className="relative pt-10 px-8 md:px-14">
          {/* Page Title */}
          <div className="mt-6 md:mt-8">
            <h1 
              className="text-[#822C1E] uppercase"
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: '29.9px',
                fontWeight: 400,
                lineHeight: '45px',
              }}
            >
              BUILDING
            </h1>

            {/* Divider */}
            <div className="w-full max-w-[311px] h-[1.8px] bg-[#822C1E] mt-2" />

            {/* Introduction Text */}
            <div className="mt-8 space-y-4 max-w-[490px]">
              <p 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px',
                  fontWeight: 500,
                  lineHeight: '13px',
                  letterSpacing: '0.14px',
                  color: 'black',
                }}
              >
                Over the years we have successfully completed building
              </p>
              <p 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px',
                  fontWeight: 500,
                  lineHeight: '14px',
                  letterSpacing: '0.14px',
                  color: 'black',
                }}
              >
                construction projects for public and private sector clients.
                Our expertise is Project management, Architectural Design
                and Sub-contractor Management. We have constructed
              </p>
              <p 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px',
                  fontWeight: 500,
                  lineHeight: '13px',
                  letterSpacing: '0.20px',
                  color: 'black',
                }}
              >
                residential, commercial and industrial, service buildings as
              </p>
              <p 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px',
                  fontWeight: 500,
                  lineHeight: '14px',
                  letterSpacing: '0.20px',
                  color: 'black',
                }}
              >
                well as public buildings for the Mining, Industrial,
                Commercial, Education, Power, Health, Water, Retail, and
                Real Estate sectors, establishing a wide variety of function
              </p>
              <p 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px',
                  fontWeight: 500,
                  lineHeight: '13px',
                  letterSpacing: '0.04px',
                  color: 'black',
                }}
              >
                specific as well as mixed use buildings.
              </p>
            </div>

            {/* Service Cards */}
            <div className="mt-12 space-y-6 max-w-[490px]">
              {/* Residential */}
              <ServiceCard 
                title="RESIDENTIAL"
                description="The quality of our work in the construction of residential buildings has ensured our work is recognised at a national level. We have built communities and contributed to provincial and state housing infrastructure initiatives by successfully completing Low-Cost Reconstruction and Development Programme (RDP) housing projects and Walk-up houses"
                imageUrl="https://images.unsplash.com/photo-1759104050206-e5ea8dc7ee83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5ncyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzIwMjYwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              />

              {/* Commercial & Industrial */}
              <ServiceCard 
                title="COMMERCIAL & INDUSTRIAL"
                description="Vharanani Properties continues to raise the standard in the development of commercial/industrial infrastructure development. We have successfully constructed office blocks, factories, shopping malls, warehouses and steel structures in different provinces in South Africa. We build world-class buildings on diverse topographies for mixed uses to client specifications."
                imageUrl="https://images.unsplash.com/photo-1769513389418-13ecbaab55e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBmYWNhZGV8ZW58MXx8fHwxNzcxOTk5NjYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              />

              {/* Services & Public */}
              <ServiceCard 
                title="SERVICES & PUBLIC"
                description="While our work is vast, we always ensure that our public building projects which include Schools, Technical and Vocational Education and Training (TVET) Colleges, Government Buildings, Hospitals and Clinics are all facilities of the highest structural, functional and aesthetic standard."
                imageUrl="https://images.unsplash.com/photo-1760581253539-95605962474b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcyMDI2MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
            </div>
          </div>
        </div>

        {/* Bottom Banner Image */}
        <div className="w-full h-[511px] bg-black mt-12 overflow-hidden">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1723367194881-fe2e53534170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzIwMDM2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Construction banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Footer */}
        <div className="relative bg-white">
          {/* Page Number Box */}
          <div className="absolute bottom-0 left-8 bg-[#822C1E] px-6 py-3">
            <span 
              className="text-white"
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: '9px',
                fontWeight: 400,
                lineHeight: '14px',
              }}
            >
              08
            </span>
          </div>

          {/* Footer Content */}
          <div className="flex items-center justify-center gap-4 px-20 py-6">
            <div className="flex items-center gap-2">
              <span 
                className="text-black"
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '9px',
                  fontWeight: 400,
                  lineHeight: '14px',
                  letterSpacing: '0.04px',
                }}
              >
                WWW.VHARANANI.COM
              </span>

              <div className="w-[1px] h-[10px] bg-[#822C1E]" />

              <span 
                className="text-black"
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '9px',
                  fontWeight: 400,
                  lineHeight: '14px',
                  letterSpacing: '0.02px',
                }}
              >
                INFRASTRUCTURE PROVIDER OF DISTINCTION
              </span>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="w-full h-[2.35px] bg-[#822C1E]" />
        </div>
      </div>
    </div>
  );
}