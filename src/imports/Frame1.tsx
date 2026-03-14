import svgPaths from "./svg-h7cioo27cp";
import { imgHaranan } from "./svg-ontlr";

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_0.48%_24.95%_0.02%]" data-name="Clip path group">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] inset-[-16.41%_4.51%_28.04%_13.83%] leading-[75px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-29.954px_13.924px] mask-size-[215.7px_63.7px] not-italic text-[#822c1e] text-[69.5px] tracking-[-3.9365px] whitespace-nowrap" style={{ maskImage: `url('${imgHaranan}')` }}>
        HARANAN
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] inset-[72.9%_0_0_23.88%] leading-[23px] not-italic text-[#373435] text-[21px] tracking-[3.1992px] whitespace-nowrap">P r o p e r t i e s</p>
      <ClipPathGroup />
      <div className="absolute flex inset-[0_84.49%_51.68%_0] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[41.013px] w-[33.625px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.625 41.013">
              <path d={svgPaths.p390c7a80} fill="var(--fill-0, #822C1E)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[0_0.46%_29.02%_96.45%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[60.244px] w-[6.69px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69 60.244">
              <path d="M0 0H6.69V60.244H0V0Z" fill="var(--fill-0, #822C1E)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[64.38%_3.37%_29.02%_20.67%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[5.604px] w-[164.657px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 164.657 5.604">
              <path d={svgPaths.p37155850} fill="var(--fill-0, #822C1E)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}